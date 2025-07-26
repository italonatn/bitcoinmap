import { BitcoinCalculatorFR } from "@/components/bitcoin-calculator-fr"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Shield, Clock, BookOpen, Target, Zap, Award } from "lucide-react"
import Image from "next/image"

export default function LandingPageFR14EUR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black font-bold px-4 py-2 text-lg">
              🚀 LPB - Le Plan Bitcoin
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Maîtrisez le Bitcoin et les Cryptomonnaies en 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Le guide complet pour investir intelligemment dans Bitcoin et construire votre patrimoine numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                Commencer Maintenant - 14€
              </Button>
              <div className="flex items-center gap-2 text-yellow-200">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Plus de 10 000 étudiants satisfaits</span>
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
                Découvrez Votre Potentiel Bitcoin Manqué
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Utilisez notre calculateur pour voir combien vous auriez pu gagner si vous aviez investi dans Bitcoin
                plus tôt
              </p>
            </div>
            <BitcoinCalculatorFR />
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
                  Pourquoi Le Plan Bitcoin est Différent
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Le Plan Bitcoin (LPB) n'est pas juste un autre cours sur les cryptomonnaies. C'est un système
                    complet conçu pour vous guider étape par étape dans le monde du Bitcoin et des investissements
                    numériques.
                  </p>
                  <p>
                    Créé par des experts ayant plus de 8 ans d'expérience dans le domaine, LPB combine théorie pratique,
                    stratégies éprouvées et outils concrets pour vous aider à prendre des décisions d'investissement
                    éclairées.
                  </p>
                  <p>
                    Que vous soyez débutant complet ou que vous ayez déjà quelques connaissances, LPB s'adapte à votre
                    niveau et vous accompagne vers la maîtrise du Bitcoin.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/ashley-harper.jpg"
                  alt="Expert Bitcoin"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-lg">+8 ans</div>
                  <div className="text-sm">d'expérience Bitcoin</div>
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
                Ce Que Vous Apprendrez avec Le Plan Bitcoin
              </h2>
              <p className="text-xl text-gray-600">Un programme complet pour maîtriser Bitcoin de A à Z</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-orange-500" />
                    <h3 className="text-xl font-bold">Fondamentaux Bitcoin</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Qu'est-ce que Bitcoin et comment ça fonctionne
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Blockchain et technologie décentralisée
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Histoire et évolution du Bitcoin
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Avantages et risques des cryptomonnaies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-bold">Stratégies d'Investissement</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      DCA (Dollar Cost Averaging) expliqué
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Analyse technique et fondamentale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Gestion des risques et diversification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Timing du marché vs investissement long terme
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-bold">Sécurité et Stockage</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Portefeuilles chauds vs portefeuilles froids
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Configuration de portefeuilles sécurisés
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Phrases de récupération et clés privées
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Éviter les arnaques et les piratages
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                    <h3 className="text-xl font-bold">Outils Pratiques</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Plateformes d'échange recommandées
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Applications de suivi de portefeuille
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Calculateurs d'investissement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Ressources et communautés
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Pourquoi Choisir Le Plan Bitcoin Maintenant</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Accès Immédiat</h3>
                <p className="opacity-90">Commencez votre apprentissage dès aujourd'hui avec un accès instantané</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Communauté Active</h3>
                <p className="opacity-90">Rejoignez plus de 10 000 investisseurs qui apprennent ensemble</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Expertise Prouvée</h3>
                <p className="opacity-90">Apprenez des experts avec plus de 8 ans d'expérience Bitcoin</p>
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
              Rejoignez des Milliers d'Investisseurs Satisfaits
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
                <div className="text-gray-600">Étudiants Actifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">4.9/5</div>
                <div className="text-gray-600">Note Moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
                <div className="text-gray-600">Taux de Satisfaction</div>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Le Plan Bitcoin a aidé des milliers de personnes à comprendre et investir intelligemment dans Bitcoin
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à Maîtriser Bitcoin en 2025 ?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Rejoignez Le Plan Bitcoin aujourd'hui et commencez votre voyage vers la liberté financière
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                Accéder au Cours - 14€
              </Button>
              <div className="text-yellow-200">
                <div className="font-semibold">✅ Accès à vie</div>
                <div className="font-semibold">✅ Mises à jour gratuites</div>
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
              © 2025 Le Plan Bitcoin (LPB). Tous droits réservés. | Investir comporte des risques.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
