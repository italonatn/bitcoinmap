"use server"

import { format, differenceInDays, parseISO } from "date-fns"

// As interfaces não mudam, pois a estrutura do resultado final é a mesma
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

// Chave da API e URL base para a CryptoCompare
const CRYPTOCOMPARE_API_KEY = "e6847cc853e36059c1959b3853183fef37cabe63aa58063d656a33f06f4fd78a"
const CRYPTOCOMPARE_BASE_URL = "https://min-api.cryptocompare.com/data"

const fetchFromAPI = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    // A API da CryptoCompare retorna uma mensagem de erro útil no campo "Message"
    throw new Error(errorData.Message || `Erro ${response.status}: Falha ao contatar a API da CryptoCompare.`)
  }
  return response.json()
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

    // 1. Buscar o preço atual em EUR
    const currentPriceData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/price?fsym=BTC&tsyms=EUR&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )
    const currentPrice = currentPriceData.EUR

    if (!currentPrice || currentPrice <= 0) {
      throw new Error("Não foi possível obter o preço atual do Bitcoin.")
    }

    // 2. Buscar o preço histórico em EUR
    const historicalTimestamp = Math.floor(initialDate.getTime() / 1000)
    const historicalPriceData = await fetchFromAPI(
      `${CRYPTOCOMPARE_BASE_URL}/pricehistorical?fsym=BTC&tsyms=EUR&ts=${historicalTimestamp}&api_key=${CRYPTOCOMPARE_API_KEY}`,
    )

    const historicalPrice = historicalPriceData.BTC?.EUR

    if (!historicalPrice || historicalPrice <= 0) {
      throw new Error("Preço histórico do Bitcoin não disponível para esta data.")
    }

    // Cálculos
    const periodInDays = differenceInDays(currentDate, initialDate)
    const btcAmount = investmentAmount / historicalPrice
    const finalValue = btcAmount * currentPrice
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
      initialPrice: historicalPrice,
      currentPrice,
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
