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

// Usar a mesma chave da API original
const CRYPTOCOMPARE_API_KEY = process.env.CRYPTOCOMPARE_API_KEY
const CRYPTOCOMPARE_BASE_URL = "https://min-api.cryptocompare.com/data"

const fetchFromAPI = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.Message || `Erro ${response.status}: Falha ao contatar a API da CryptoCompare.`)
  }
  return response.json()
}

// Função para converter USD para EUR usando taxa de câmbio atual
const convertUSDToEUR = async (usdAmount: number): Promise<number> => {
  try {
    // Buscar taxa de câmbio USD/EUR atual
    const exchangeRateData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/price?fsym=USD&tsyms=EUR&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )
    const usdToEurRate = exchangeRateData.EUR
    return usdAmount * usdToEurRate
  } catch (error) {
    // Se falhar, usar uma taxa aproximada (0.85 é uma estimativa conservadora)
    console.warn("Erro ao buscar taxa de câmbio, usando taxa aproximada:", error)
    return usdAmount * 0.85
  }
}

// Função para buscar taxa de câmbio histórica USD/EUR
const getHistoricalExchangeRate = async (timestamp: number): Promise<number> => {
  try {
    const historicalExchangeData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/pricehistorical?fsym=USD&tsyms=EUR&ts=${timestamp}&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )
    const historicalRate = historicalExchangeData.USD?.EUR
    return historicalRate || 0.85 // fallback para taxa aproximada
  } catch (error) {
    console.warn("Erro ao buscar taxa de câmbio histórica, usando taxa aproximada:", error)
    return 0.85 // fallback
  }
}

export async function calculateBitcoinInvestmentEUR(
  investmentAmount: number,
  investmentDateString: string,
): Promise<{ result: BitcoinCalculationResult | null; error: string }> {
  if (!CRYPTOCOMPARE_API_KEY) {
    return { result: null, error: "A chave de API da CryptoCompare não está configurada no arquivo .env.local." }
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
    const currentBTCPriceData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/price?fsym=BTC&tsyms=USD&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )
    const currentBTCPriceUSD = currentBTCPriceData.USD

    if (!currentBTCPriceUSD || currentBTCPriceUSD <= 0) {
      throw new Error("Não foi possível obter o preço atual do Bitcoin.")
    }

    // 2. Buscar o preço histórico do Bitcoin em USD
    const historicalTimestamp = Math.floor(initialDate.getTime() / 1000)
    const historicalBTCPriceData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/pricehistorical?fsym=BTC&tsyms=USD&ts=${historicalTimestamp}&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )

    const historicalBTCPriceUSD = historicalBTCPriceData.BTC?.USD

    if (!historicalBTCPriceUSD || historicalBTCPriceUSD <= 0) {
      throw new Error("Preço histórico do Bitcoin não disponível para esta data.")
    }

    // 3. Converter preços de USD para EUR
    const currentBTCPriceEUR = await convertUSDToEUR(currentBTCPriceUSD)
    const historicalExchangeRate = await getHistoricalExchangeRate(historicalTimestamp)
    const historicalBTCPriceEUR = historicalBTCPriceUSD * historicalExchangeRate

    // 4. Cálculos em EUR
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
