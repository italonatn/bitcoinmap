import { BitcoinCalculatorIT } from "@/components/bitcoin-calculator-it"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Shield, Clock, BookOpen, Target, Zap, Award } from "lucide-react"
import Image from "next/image"

export default function LandingPageIT9EUR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black font-bold px-4 py-2 text-lg">
              🚀 MDB - Mappa Del Bitcoin
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Padroneggia Bitcoin e le Criptovalute nel 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              La guida completa per investire intelligentemente in Bitcoin e costruire il tuo patrimonio digitale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                Inizia Ora - 9€
              </Button>
              <div className="flex items-center gap-2 text-yellow-200">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Oltre 10.000 studenti soddisfatti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Scopri il Tuo Potenziale Bitcoin Perduto
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Usa il nostro calcolatore per vedere quanto avresti potuto guadagnare se avessi investito in Bitcoin
                prima
              </p>
            </div>
            <BitcoinCalculatorIT />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Perché Mappa Del Bitcoin è Diversa
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Mappa Del Bitcoin (MDB) non è solo un altro corso sulle criptovalute. È un sistema completo
                    progettato per guidarti passo dopo passo nel mondo di Bitcoin e degli investimenti digitali.
                  </p>
                  <p>
                    Creato da esperti con oltre 8 anni di esperienza nel settore, MDB combina teoria pratica, strategie
                    comprovate e strumenti concreti per aiutarti a prendere decisioni di investimento informate.
                  </p>
                  <p>
                    Che tu sia un principiante assoluto o abbia già qualche conoscenza, MDB si adatta al tuo livello e
                    ti accompagna verso la padronanza di Bitcoin.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/ashley-harper.jpg"
                  alt="Esperto Bitcoin"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-lg">+8 anni</div>
                  <div className="text-sm">di esperienza Bitcoin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cosa Imparerai con Mappa Del Bitcoin
              </h2>
              <p className="text-xl text-gray-600">Un programma completo per padroneggiare Bitcoin dalla A alla Z</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-orange-500" />
                    <h3 className="text-xl font-bold">Fondamenti Bitcoin</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Cos'è Bitcoin e come funziona
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Blockchain e tecnologia decentralizzata
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Storia ed evoluzione di Bitcoin
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Vantaggi e rischi delle criptovalute
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-bold">Strategie di Investimento</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      DCA (Dollar Cost Averaging) spiegato
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Analisi tecnica e fondamentale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Gestione del rischio e diversificazione
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Market timing vs investimento a lungo termine
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-bold">Sicurezza e Archiviazione</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Portafogli caldi vs portafogli freddi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Configurazione di portafogli sicuri
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Frasi di recupero e chiavi private
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Evitare truffe e hack
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                    <h3 className="text-xl font-bold">Strumenti Pratici</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Piattaforme di scambio raccomandate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      App di monitoraggio portafoglio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Calcolatori di investimento
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Risorse e comunità
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Perché Scegliere Mappa Del Bitcoin Ora</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Accesso Immediato</h3>
                <p className="opacity-90">Inizia il tuo apprendimento oggi stesso con accesso istantaneo</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Comunità Attiva</h3>
                <p className="opacity-90">Unisciti a oltre 10.000 investitori che imparano insieme</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Competenza Comprovata</h3>
                <p className="opacity-90">Impara dagli esperti con oltre 8 anni di esperienza Bitcoin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Unisciti a Migliaia di Investitori Soddisfatti
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
                <div className="text-gray-600">Studenti Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">4.9/5</div>
                <div className="text-gray-600">Valutazione Media</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
                <div className="text-gray-600">Tasso di Soddisfazione</div>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Mappa Del Bitcoin ha aiutato migliaia di persone a comprendere e investire intelligentemente in Bitcoin
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto a Padroneggiare Bitcoin nel 2025?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Unisciti a Mappa Del Bitcoin oggi e inizia il tuo viaggio verso la libertà finanziaria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                Accedi al Corso - 9€
              </Button>
              <div className="text-yellow-200">
                <div className="font-semibold">✅ Accesso a vita</div>
                <div className="font-semibold">✅ Aggiornamenti gratuiti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Mappa Del Bitcoin (MDB). Tutti i diritti riservati. | Investire comporta dei rischi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
