"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, TrendingUp, TrendingDown, Calculator, AlertCircle, Info } from "lucide-react"
import { calculateBitcoinInvestmentEUR } from "@/app/actions/bitcoin-eur" // Nova action para EUR
import { format, parseISO } from "date-fns"
import { it } from "date-fns/locale"

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

export function BitcoinCalculatorIT() {
  const [amount, setAmount] = useState<string>("")
  const [investmentDate, setInvestmentDate] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [error, setError] = useState<string>("")
  const [chartData, setChartData] = useState<PriceData[]>([])

  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<any>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  const formatBTC = (value: number) => {
    return value.toFixed(8) + " BTC"
  }

  const formatDate = (date: Date) => {
    return format(date, "dd/MM/yyyy", { locale: it })
  }

  const validateInputs = (investmentAmount: number, dateString: string): string | null => {
    if (!investmentAmount || investmentAmount <= 0) {
      return "Inserisci un importo valido da investire (maggiore di 0€)."
    }

    if (!dateString) {
      return "Seleziona una data di investimento."
    }

    const date = parseISO(dateString)
    const currentDate = new Date()
    const minDate = new Date("2010-07-17")

    if (isNaN(date.getTime())) {
      return "Data di investimento non valida."
    }
    if (date > currentDate) {
      return "La data di investimento non può essere nel futuro."
    }
    if (date < minDate) {
      return `Dati storici disponibili solo dal ${formatDate(minDate)}.`
    }

    return null
  }

  const calculateInvestment = async () => {
    setError("")
    setResult(null)
    setLoading(true)
    setChartData([])

    try {
      const investmentAmount = Number.parseFloat(amount.replace(/[^\d.,]/g, "").replace(",", "."))

      const validationError = validateInputs(investmentAmount, investmentDate)
      if (validationError) {
        throw new Error(validationError)
      }

      // Chama a nova Server Action para EUR
      const { result: calculationResult, error: serverError } = await calculateBitcoinInvestmentEUR(
        investmentAmount,
        investmentDate,
      )

      if (serverError) {
        throw new Error(serverError)
      }

      if (calculationResult) {
        setResult(calculationResult)
        setChartData(calculationResult.chartData)
      } else {
        throw new Error("Impossibile ottenere il risultato del calcolo.")
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Errore sconosciuto durante il calcolo dell'investimento"
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Render chart when data is available
  useEffect(() => {
    if (chartData.length === 2 && chartRef.current && result) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (!ctx) return

      const loadChart = async () => {
        try {
          const Chart = (await import("chart.js/auto")).default

          const initialChartValue = chartData[0].price
          const finalChartValue = chartData[1].price

          const minPrice = Math.min(initialChartValue, finalChartValue)
          const maxPrice = Math.max(initialChartValue, finalChartValue)
          const priceRange = maxPrice - minPrice

          chartInstanceRef.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: chartData.map((d) => d.date),
              datasets: [
                {
                  label: "Valore dell'investimento (EUR)",
                  data: chartData.map((d) => d.price),
                  borderColor: "#f97316",
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  borderWidth: 2,
                  fill: true,
                  tension: 0,
                  pointBackgroundColor: "#f97316",
                  pointBorderColor: "#ffffff",
                  pointBorderWidth: 2,
                  pointRadius: 5,
                  pointHoverRadius: 8,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  titleColor: "#ffffff",
                  bodyColor: "#ffffff",
                  borderColor: "#f97316",
                  borderWidth: 1,
                  callbacks: {
                    label: (context) => `Valore: ${formatCurrency(context.parsed.y)}`,
                  },
                },
              },
              scales: {
                x: {
                  display: true,
                  title: { display: true, text: "Data", color: "#6b7280" },
                  ticks: { color: "#6b7280" },
                  grid: { color: "rgba(107, 114, 128, 0.1)" },
                },
                y: {
                  display: true,
                  title: { display: true, text: "Valore (EUR)", color: "#6b7280" },
                  ticks: { color: "#6b7280", callback: (value) => formatCurrency(Number(value)) },
                  grid: { color: "rgba(107, 114, 128, 0.1)" },
                  min: minPrice - priceRange * 0.1,
                  max: maxPrice + priceRange * 0.1,
                },
              },
              interaction: { intersect: false, mode: "index" },
            },
          })
        } catch (chartError) {
          console.warn("Errore nel caricamento di Chart.js:", chartError)
        }
      }
      loadChart()
    }
    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy()
    }
  }, [chartData, result])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value.replace(/[^0-9,.]/g, "").replace(",", "."))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentDate(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading && amount && investmentDate) {
      calculateInvestment()
    }
  }

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
        <Calculator className="w-6 h-6" /> Se avessi investito in Bitcoin la prima volta che ne hai sentito parlare —
        quando è stato? Esegui la simulazione per vedere quanto hai lasciato scappare...
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="investmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Inserisci il mese/anno — in media — quando ne hai sentito parlare per la prima volta*
                </label>
                <input
                  id="investmentDate"
                  type="month"
                  value={investmentDate}
                  onChange={handleDateChange}
                  onKeyPress={handleKeyPress}
                  min="2010-07"
                  max={format(new Date(), "yyyy-MM")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={loading}
                  required
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Importo ipotetico che avresti investito (EUR)*
                </label>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={handleAmountChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Es: 1.000,00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={loading}
                  required
                />
              </div>

              <Button
                onClick={calculateInvestment}
                disabled={loading || !amount.trim() || !investmentDate.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Calcolo in corso...
                  </>
                ) : (
                  "Simula investimento"
                )}
              </Button>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-700">
                    <p className="font-medium mb-1">Come funziona:</p>
                    <p>• Calcoliamo quanto Bitcoin avresti comprato alla data indicata.</p>
                    <p>• Lo confrontiamo con il valore attuale di Bitcoin.</p>
                    <p>• Mostriamo il tuo profitto o perdita ipotetica.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Errore</span>
                </div>
                <p className="text-red-700 mt-1 text-sm">{error}</p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-800 mb-4">Risultati della simulazione</h4>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs">Importo investito</div>
                    <div className="font-bold text-lg">{formatCurrency(result.initialValue)}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs">BTC acquistato</div>
                    <div className="font-bold text-lg">{formatBTC(result.btcAmount)}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs">Prezzo BTC iniziale</div>
                    <div className="font-bold">{formatCurrency(result.initialPrice)}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs">Prezzo BTC attuale</div>
                    <div className="font-bold">{formatCurrency(result.currentPrice)}</div>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg border-2 ${result.profit >= 0 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Valore finale</div>
                      <div className="font-bold text-xl">{formatCurrency(result.finalValue)}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`flex items-center justify-end gap-1 ${result.profit >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {result.profit >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                        <span className="font-bold">
                          {result.profit >= 0 ? "+" : ""}
                          {formatCurrency(result.profit)}
                        </span>
                      </div>
                      <div className={`text-sm ${result.profit >= 0 ? "text-green-600" : "text-red-600"}`}>
                        ({result.profitPercentage >= 0 ? "+" : ""}
                        {result.profitPercentage.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mt-4 bg-gray-50 p-3 rounded">
                  <p>
                    <strong>Periodo:</strong> {result.periodInDays} giorni
                  </p>
                  <p>
                    <strong>Data iniziale:</strong> {formatDate(parseISO(investmentDate))}
                  </p>
                  <p>
                    <strong>Data attuale:</strong> {formatDate(new Date())}
                  </p>
                  <p>
                    <strong>Fonte dati:</strong> API CryptoCompare
                  </p>
                </div>
              </div>
            )}

            {!result && !error && !loading && (
              <div className="text-center text-gray-500 py-8">
                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">Compila i campi e clicca su "Simula investimento"</p>
                <p className="text-xs text-gray-400 mt-2">Simula il rendimento di un investimento Bitcoin.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      {chartData.length === 2 && result && (
        <Card className="mt-8 bg-white shadow-lg">
          <CardContent className="p-6">
            <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Proiezione investimento lineare
            </h4>
            <div className="h-64 relative">
              <canvas ref={chartRef} className="w-full h-full"></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center bg-gray-50 p-3 rounded">
              <p>
                Questo grafico mostra una proiezione lineare semplice tra il valore alla data di investimento e il
                valore attuale.
              </p>
              <p>
                <strong>Periodo:</strong> {result.periodInDays} giorni • <strong>Fonte dati:</strong> CryptoCompare
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legal Notice */}
      <div className="mt-8 text-xs text-gray-500 text-center bg-white p-4 rounded-lg border">
        <p>
          <strong>⚠️ Avviso legale:</strong> Questa è una simulazione a scopo educativo, basata su dati storici di
          CryptoCompare.
        </p>
      </div>
    </div>
  )
}
