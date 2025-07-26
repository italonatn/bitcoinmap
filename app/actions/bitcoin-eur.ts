"use server"

import { format, parseISO } from "date-fns"

interface CalculatorResult {
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

interface PriceData {
  price: number
  date: string
  timestamp: number
}

// Função para buscar taxa de câmbio USD para EUR
async function getExchangeRate(date?: string): Promise<number> {
  try {
    const apiKey = process.env.CRYPTOCOMPARE_API_KEY
    if (!apiKey) {
      console.warn("CryptoCompare API key not found, using fallback rate")
      return 0.85 // Taxa aproximada USD para EUR
    }

    let url: string
    if (date) {
      // Taxa histórica
      const timestamp = Math.floor(new Date(date).getTime() / 1000)
      url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=USD&tsyms=EUR&ts=${timestamp}&api_key=${apiKey}`
    } else {
      // Taxa atual
      url = `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=EUR&api_key=${apiKey}`
    }

    const response = await fetch(url)
    const data = await response.json()

    if (date) {
      return data.USD?.EUR || 0.85
    } else {
      return data.EUR || 0.85
    }
  } catch (error) {
    console.warn("Error fetching exchange rate:", error)
    return 0.85 // Taxa de fallback
  }
}

export async function calculateBitcoinInvestmentEUR(
  investmentAmount: number,
  investmentDate: string,
): Promise<{ result: CalculatorResult | null; error: string | null }> {
  try {
    const apiKey = process.env.CRYPTOCOMPARE_API_KEY
    if (!apiKey) {
      return {
        result: null,
        error: "API key não configurada. Entre em contato com o suporte.",
      }
    }

    // Parse da data de investimento (assumindo primeiro dia do mês)
    const investmentDateObj = parseISO(`${investmentDate}-01`)
    const investmentTimestamp = Math.floor(investmentDateObj.getTime() / 1000)
    const currentDate = new Date()

    // Buscar preço histórico do Bitcoin em USD
    const historicalUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${investmentTimestamp}&api_key=${apiKey}`
    const historicalResponse = await fetch(historicalUrl)
    const historicalData = await historicalResponse.json()

    if (!historicalData.BTC?.USD) {
      return {
        result: null,
        error: "Não foi possível obter dados históricos do Bitcoin para esta data.",
      }
    }

    // Buscar preço atual do Bitcoin em USD
    const currentUrl = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=${apiKey}`
    const currentResponse = await fetch(currentUrl)
    const currentData = await currentResponse.json()

    if (!currentData.USD) {
      return {
        result: null,
        error: "Não foi possível obter o preço atual do Bitcoin.",
      }
    }

    const initialPriceUSD = historicalData.BTC.USD
    const currentPriceUSD = currentData.USD

    // Buscar taxas de câmbio
    const historicalExchangeRate = await getExchangeRate(format(investmentDateObj, "yyyy-MM-dd"))
    const currentExchangeRate = await getExchangeRate()

    // Converter preços para EUR
    const initialPriceEUR = initialPriceUSD * historicalExchangeRate
    const currentPriceEUR = currentPriceUSD * currentExchangeRate

    // Calcular quantidade de Bitcoin que seria comprada
    const btcAmount = investmentAmount / initialPriceEUR

    // Calcular valor final em EUR
    const finalValue = btcAmount * currentPriceEUR

    // Calcular lucro/prejuízo
    const profit = finalValue - investmentAmount
    const profitPercentage = (profit / investmentAmount) * 100

    // Calcular período em dias
    const periodInDays = Math.floor((currentDate.getTime() - investmentDateObj.getTime()) / (1000 * 60 * 60 * 24))

    // Dados para o gráfico (valores em EUR)
    const chartData: PriceData[] = [
      {
        price: investmentAmount,
        date: format(investmentDateObj, "dd/MM/yyyy"),
        timestamp: investmentTimestamp,
      },
      {
        price: finalValue,
        date: format(currentDate, "dd/MM/yyyy"),
        timestamp: Math.floor(currentDate.getTime() / 1000),
      },
    ]

    const result: CalculatorResult = {
      initialValue: investmentAmount,
      btcAmount,
      finalValue,
      profit,
      profitPercentage,
      initialPrice: initialPriceEUR,
      currentPrice: currentPriceEUR,
      periodInDays,
      chartData,
    }

    return { result, error: null }
  } catch (error) {
    console.error("Error calculating Bitcoin investment:", error)
    return {
      result: null,
      error: "Erro interno do servidor. Tente novamente mais tarde.",
    }
  }
}
