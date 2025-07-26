"use server"

import { format, differenceInDays, parseISO } from "date-fns"

interface PriceData {
  price: number
  date: string
  timestamp: number
}

interface BitcoinCalculationResult {
  initialValue: number
  btcAmount: number
  finalValue: number
  profit: number
  profitPercentage: number
  initialPrice: number
  currentPrice: number
  periodInDays: number
  chartData: PriceData[]
}

export async function calculateBitcoinInvestmentEUR(
  investmentAmount: number,
  investmentDateString: string,
): Promise<{ result: BitcoinCalculationResult | null; error: string }> {
  const apiKey = process.env.CRYPTOCOMPARE_API_KEY

  if (!apiKey) {
    return { result: null, error: "Chave da API não configurada. Entre em contato com o suporte." }
  }

  try {
    // Converter YYYY-MM para uma data completa (primeiro dia do mês)
    const dateWithDay =
      investmentDateString.includes("-") && investmentDateString.split("-").length === 2
        ? `${investmentDateString}-01`
        : investmentDateString

    const initialDate = parseISO(dateWithDay)
    const currentDate = new Date()

    const bitcoinStartDate = new Date("2010-07-17")
    if (initialDate > currentDate) {
      return { result: null, error: "A data de investimento não pode ser no futuro." }
    }
    if (initialDate < bitcoinStartDate) {
      return {
        result: null,
        error: `Dados históricos de Bitcoin disponíveis apenas a partir de ${format(bitcoinStartDate, "MM/yyyy")}.`,
      }
    }

    // 1. Buscar o preço atual do Bitcoin em USD
    const currentBTCResponse = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=${apiKey}`,
    )

    if (!currentBTCResponse.ok) {
      throw new Error("Falha ao buscar preço atual do Bitcoin")
    }

    const currentBTCData = await currentBTCResponse.json()
    const currentBTCPriceUSD = currentBTCData.USD

    if (!currentBTCPriceUSD || currentBTCPriceUSD <= 0) {
      throw new Error("Não foi possível obter o preço atual do Bitcoin.")
    }

    // 2. Buscar o preço histórico do Bitcoin em USD
    const historicalTimestamp = Math.floor(initialDate.getTime() / 1000)
    const historicalBTCResponse = await fetch(
      `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${historicalTimestamp}&api_key=${apiKey}`,
    )

    if (!historicalBTCResponse.ok) {
      throw new Error("Falha ao buscar preço histórico do Bitcoin")
    }

    const historicalBTCData = await historicalBTCResponse.json()
    const historicalBTCPriceUSD = historicalBTCData.BTC?.USD

    if (!historicalBTCPriceUSD || historicalBTCPriceUSD <= 0) {
      throw new Error("Preço histórico do Bitcoin não disponível para esta data.")
    }

    // 3. Buscar taxa de câmbio atual USD para EUR
    const currentExchangeResponse = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=EUR&api_key=${apiKey}`,
    )

    let currentExchangeRate = 0.85 // fallback
    if (currentExchangeResponse.ok) {
      const currentExchangeData = await currentExchangeResponse.json()
      currentExchangeRate = currentExchangeData.EUR || 0.85
    }

    // 4. Buscar taxa de câmbio histórica USD para EUR
    const historicalExchangeResponse = await fetch(
      `https://min-api.cryptocompare.com/data/pricehistorical?fsym=USD&tsyms=EUR&ts=${historicalTimestamp}&api_key=${apiKey}`,
    )

    let historicalExchangeRate = 0.85 // fallback
    if (historicalExchangeResponse.ok) {
      const historicalExchangeData = await historicalExchangeResponse.json()
      historicalExchangeRate = historicalExchangeData.USD?.EUR || 0.85
    }

    // 5. Converter preços de USD para EUR
    const currentBTCPriceEUR = currentBTCPriceUSD * currentExchangeRate
    const historicalBTCPriceEUR = historicalBTCPriceUSD * historicalExchangeRate

    // 6. Cálculos em EUR
    const periodInDays = differenceInDays(currentDate, initialDate)
    const btcAmount = investmentAmount / historicalBTCPriceEUR
    const finalValue = btcAmount * currentBTCPriceEUR
    const profit = finalValue - investmentAmount
    const profitPercentage = ((finalValue - investmentAmount) / investmentAmount) * 100

    const chartData: PriceData[] = [
      { price: investmentAmount, date: format(initialDate, "MM/yyyy"), timestamp: initialDate.getTime() },
      { price: finalValue, date: format(currentDate, "MM/yyyy"), timestamp: currentDate.getTime() },
    ]

    const result: BitcoinCalculationResult = {
      initialValue: investmentAmount,
      btcAmount,
      finalValue,
      profit,
      profitPercentage,
      initialPrice: historicalBTCPriceEUR,
      currentPrice: currentBTCPriceEUR,
      periodInDays,
      chartData,
    }

    return { result, error: "" }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Erro desconhecido ao calcular investimento."
    console.error("Calculation Error:", errorMessage)
    return { result: null, error: errorMessage }
  }
}
