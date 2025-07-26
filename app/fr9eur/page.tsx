"use client"

import { CheckCircle, Shield, TrendingUp, Users, Star, AlertTriangle, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BitcoinCalculatorFR } from "../../components/bitcoin-calculator-fr"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Alert Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎁 Ce cadeau est limité — faites attention à ne pas le manquer !
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Attention : Des gens ordinaires changent leur vie pendant que vous restez immobile !
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            🚨 Fatigué de regarder le Bitcoin monter et de juste rêver ? 🚀
          </h1>

          <p className="text-xl lg:text-2xl text-orange-600 font-bold mb-6">
            Ne laissez pas la peur ou le manque de connaissances vous arrêter ! Avec ce{" "}
            <span className="text-3xl bg-yellow-200 px-2 py-1 rounded">LPB</span> vous apprendrez tout pour investir
            dans le Bitcoin en toute sécurité !
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Vous avez entendu dire que le Bitcoin change des vies et enrichit des gens ordinaires, mais vous vous
              sentez perdu, avez peur de tomber dans des arnaques, ou ne savez tout simplement pas par où commencer ?
            </p>
            <p className="text-base text-gray-600 mb-4">
              Ce <strong>LPB</strong> sera votre professeur (étape par étape) pour entrer dans le monde du Bitcoin en
              toute sécurité, même si vous êtes 100% débutant et n'avez jamais investi un centime de votre vie.
            </p>
            <p className="text-base text-gray-600">
              Les cryptomonnaies sont déjà le <strong>4ème investissement le plus populaire</strong> au{" "}
              <strong>MONDE</strong>, et le Bitcoin s'est apprécié de
              <strong> plus de 1000% en quelques années</strong> – mais la plupart des débutants perdent de l'argent
              parce qu'ils ne connaissent pas les bases.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              💡 Imaginez avoir la confiance d'investir dans le Bitcoin...
            </h3>
            <p className="text-green-700 text-lg mb-3">
              …regarder votre argent croître beaucoup plus vite que dans un compte bancaire ordinaire, qui suit à peine
              l'inflation.
            </p>
            <p className="text-green-700">
              <strong>Vous n'avez pas besoin de milliers d'euros !</strong> Commencez avec seulement 50€ ou moins – oui,
              vous pouvez acheter des fractions de Bitcoin et entrer dans le jeu sans être riche — l'intention est que
              vous le deveniez.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <i>"Et pourquoi est-ce une décision intelligente de m'écouter ?"</i>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-white leading-relaxed">
                  Salut ! Je suis <strong>Ashley Harper</strong>, et je suis{" "}
                  <strong>Planificatrice Financière Certifiée (CFP®)</strong>. Ma passion pour la finance est née d'un
                  moment charnière le 13 février 2019. Ce jour-là, j'avais 8 700€—toutes mes économies à l'époque—quand
                  j'ai entendu parler du Bitcoin pour la première fois. L'idée d'investir m'a traversé l'esprit, mais
                  manquant des connaissances nécessaires et du courage, j'ai hésité. Aujourd'hui, ces mêmes 8 700€,
                  s'ils avaient été investis à l'époque, vaudraient en moyenne 294 856,27€.
                </p>

                <p className="text-white leading-relaxed">
                  Voir cette incroyable opportunité manquée de première main a été une frustration profonde. Cela m'a
                  montré à quel point les bonnes connaissances et le courage peuvent transformer des vies, et cette
                  expérience m'a vraiment poussée à dédier ma carrière à aider d'autres personnes non seulement à
                  comprendre, mais à agir sur des opportunités comme celles-ci, atteignant cette même sécurité
                  financière et liberté que je défends maintenant.
                </p>

                <p className="text-white leading-relaxed">
                  À 41 ans, j'ai vu beaucoup de choses sur le marché et dans le monde. Ma formation CFP® m'a donné une
                  base solide en planification stratégique, gestion d'investissements et analyse de marché – et
                  toujours, toujours, avec un focus sur l'éthique et ce qui est le mieux pour vous. Cette expérience me
                  permet de naviguer confortablement tant dans les investissements plus traditionnels que dans cet
                  univers fascinant des cryptomonnaies, en particulier le Bitcoin.
                </p>

                <p className="text-white leading-relaxed">
                  Tout au long de mon parcours professionnel, l'importance croissante et le potentiel du Bitcoin sont
                  devenus clairs pour moi. Mon objectif est d'apporter de la clarté et des conseils de qualité pour ceux
                  qui veulent comprendre et, qui sait, faire les premiers pas dans ce nouveau scénario.
                </p>

                <p className="text-white leading-relaxed">
                  Je crois vraiment que la connaissance est la clé de la liberté. C'est pourquoi je suis ici pour vous
                  prendre par la main, depuis votre premier investissement Bitcoin, en passant par les décisions
                  importantes, jusqu'à vous expliquer la sécurité dans ce monde crypto.{" "}
                  <strong>Allons-y ensemble ?!</strong>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                  <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src="/ashley-harper.jpg"
                      alt="Ashley Harper - Planificatrice Financière Certifiée"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ashley Harper</h3>
                  <p className="text-orange-600 font-semibold mb-4">Planificatrice Financière Certifiée (CFP®)</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>4 ans d'expérience</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span>Spécialiste Bitcoin</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>+1 311 étudiants guidés</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin Calculator Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <BitcoinCalculatorFR />
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ...pour cette raison j'ai développé le <span className="text-orange-600">Le Plan Bitcoin</span>
              </h2>
              <p className="text-xl text-gray-600">
                Un accompagnement numérique créé spécifiquement pour ceux qui n'ont jamais investi dans les
                cryptomonnaies et veulent commencer à partir de zéro absolu.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Les Bases Simplifiées</h3>
                  <p className="text-gray-600 text-center">
                    La <strong>SEULE</strong> explication dont vous avez besoin sur le Bitcoin : ce que c'est vraiment,
                    le facteur <strong>surprenant</strong> qui le fait s'apprécier et la <strong>révélation</strong> de
                    comment il se compare à l'argent ordinaire – tout <strong>sans jargon technique</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Pratique Concrète</h3>
                  <p className="text-gray-600 text-center">
                    Voyez le <strong>GUIDE PRATIQUE ÉTAPE PAR ÉTAPE</strong> pour avoir votre premier compte sur une
                    plateforme d'échange top, transférer de l'argent en toute sécurité et sans tracas pour acheter du
                    Bitcoin... <strong>en commençant avec seulement 50€ ou moins</strong> !
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Protégez Votre Argent</h3>
                  <p className="text-gray-600 text-center">
                    La <strong>Formule de Sécurité Crypto</strong> : comment s'assurer que vos pièces sont en sécurité,
                    décoder les signaux du marché pour vendre ou conserver, et le raccourci pour{" "}
                    <strong>éviter les fraudes</strong> qui nuisent aux débutants.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <a
          href="#pricing"
          className="text-center bg-orange-600 text-white hover:bg-orange-700 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
        >
          👉 Ne perdez plus d'argent ! Apprenez à investir dans le Bitcoin maintenant !
        </a>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Avec le <span className="text-orange-600">Le Plan Bitcoin</span>, vous comprendrez :
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <ul className="space-y-10">
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Le chemin SIMPLIFIÉ pour acquérir votre premier Bitcoin en moins de 10 minutes, même si vous
                        n'avez jamais investi auparavant.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Découvrir le SECRET derrière la monnaie numérique qui change le monde – et pourquoi c'est plus
                        simple qu'il n'y paraît (Expliqué à la minute 1:13 de la leçon 2)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Le "déclencheur" caché qui fait exploser le prix du Bitcoin… et comment vous pouvez l'identifier
                        AVANT qu'il ne soit trop tard — enseigné étape par étape par le propriétaire d'une plateforme
                        d'échange chinoise dont vous avez certainement entendu parler.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        N'ouvrez JAMAIS votre compte sur une plateforme d'échange sans connaître CECI d'abord – un
                        détail simple qui peut vous faire économiser du temps et des maux de tête.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Éviter l'ERREUR CRITIQUE que 7 personnes sur 10 commettent lors du transfert d'argent vers les
                        plateformes d'échange crypto — avec cette checklist SIMPLE votre argent arrivera 100% en
                        sécurité sur la plateforme.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        L'Indicateur SECRET que les gros investisseurs utilisent pour savoir le moment exact de vendre
                        ou conserver leur Bitcoin.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        <strong>ET PLUS ENCORE...</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        🎁{" "}
                        <strong>
                          J'ai laissé un CADEAU SURPRISE dans l'app pour ceux qui s'inscrivent avant le {currentDate} —
                          ceux qui l'utilisent m'ont dit qu'il était injuste que je donne cela en bonus... que ce cadeau
                          seul valait le prix !
                        </strong>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="secondary">Témoignage Réel</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "J'avais beaucoup d'insécurité à propos d'investir dans le Bitcoin, je pensais que c'était juste
                      pour les nerds. Le guide m'a montré comme c'est simple et sûr. J'ai acheté mes premiers 35€ de
                      bitcoin hier !"
                    </p>
                    <p className="text-sm font-semibold">– Jean, 34 ans, freelance</p>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="secondary">Témoignage Réel</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Je ne comprenais rien, mais le guide étape par étape est si clair que j'ai réussi à acheter du
                      Bitcoin dans la première semaine. Je n'ai pas de mots pour vous remercier, Ashley. J'ai investi
                      peu mais ça a déjà monté !"
                    </p>
                    <p className="text-sm font-semibold">– Mariana, 29 ans, professeure</p>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-3">Pourquoi maintenant ?</h3>
                  <p className="text-orange-700">
                    Le Bitcoin ne s'est pas seulement apprécié de milliers de pour cent, mais les experts mondiaux sont
                    unanimes : le potentiel explosif est encore devant nous ! Pensez-y : des millions migrent déjà vers
                    les cryptos, dépassant même les marchés établis. Ce n'est pas n'importe quelle chance ; c'est
                    l'opportunité de la décennie que vous ne pouvez pas manquer simplement parce que vous ne savez pas
                    comment agir !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Sécurisez Votre Accès Maintenant et Recevez Immédiatement !
            </h2>

            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-2">De 49€ pour</div>
                <div className="text-6xl font-bold text-orange-600 mb-2">9€</div>
                <div className="text-lg text-gray-600">Paiement unique • Pas de frais mensuels</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 modules vidéo complets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Accès immédiat et à vie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Support via email, telegram et whatsapp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garantie de 90 jours</span>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    BONUS : Cadeau surprise dans l'app et garantie conditionnelle de 90 jours
                  </span>
                </div>
              </div>

              <a
                href="https://mated.mycartpanda.com/checkout/190900486:1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-4 text-xl font-bold rounded-lg shadow-xl mb-4"
              >
                👉 Je Veux Commencer à Investir dans le Bitcoin pour 9€ !
              </a>

              <div className="text-sm text-gray-500">
                🔒 Paiement 100% sécurisé • Garantie de 90 jours • Accès immédiat
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">⏳ Ne perdez plus de temps !</h3>
              <p>
                Le Bitcoin n'attend pas, et chaque jour qui passe est une chance de moins d'entrer au bon moment. Cette
                offre promotionnelle est pour une durée limitée - ne tombez pas dans les promesses d'argent facile ou
                les groupes de signaux chers. Le vrai secret c'est la connaissance !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi faire confiance au Le Plan Bitcoin ?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">+1 311 Étudiants</h3>
                  <p className="text-sm text-gray-600">Ont déjà transformé la peur en confiance</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Experts</h3>
                  <p className="text-sm text-gray-600">Années d'expérience sur le marché crypto</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">100% Sûr</h3>
                  <p className="text-sm text-gray-600">Apprenez sans souci</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Support via email, telegram et whatsapp</h3>
                  <p className="text-sm text-gray-600">Posez des questions quand vous en avez besoin</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              J'ai l'habitude de dire qu'il y a deux types de personnes dans le monde d'aujourd'hui :
            </h2>
            <p className="text-l mb-8">
              Type 1 : Ceux qui voient la révolution Bitcoin se produire, mais ne prennent pas la décision et ne créent
              pas le courage d'investir. Ce sont les personnes qui, même face à toutes les preuves d'appréciation et de
              potentiel, préfèrent l'inertie. Ils vivent piégés dans la routine, déplorant les opportunités manquées,
              regardant depuis les gradins pendant que l'avenir financier se déroule pour les autres. Jour après jour,
              l'insécurité financière persiste, les rêves restent dans le tiroir et le sentiment d'avoir "raté le coche"
              s'installe, les condamnant à une vie de frustration, dépendance et regret de ne pas avoir agi quand ils le
              pouvaient.
            </p>
            <p className="text-l mb-8">
              Et Type 2 : Ce sont des personnes ambitieuses, qui veulent plus de la vie et n'ont pas peur d'oser. Ils
              voient les opportunités que le Bitcoin offre et agissent avec intelligence et courage. Ce sont ceux qui
              construisent activement leur avenir, garantissent leur liberté financière et réalisent des rêves qui
              semblaient autrefois impossibles. Pendant que le Type 1 s'accroche au passé, le Type 2 construit un
              portefeuille robuste, voyage plus, a plus de temps pour ce qui compte et vit avec la tranquillité de ceux
              qui ont le contrôle, en avance sur leur temps et récoltant les fruits de leurs décisions audacieuses et
              informées.
            </p>

            <a
              href="https://mated.mycartpanda.com/checkout/190900486:1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
            >
              Si Vous Êtes Type 2 — Cliquez et Commencez Votre Voyage Bitcoin !
            </a>

            <p className="text-orange-100">Prenez le contrôle de votre avenir financier aujourd'hui !</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2022 Le Plan Bitcoin. Tous droits réservés.</p>
          <p className="text-sm text-gray-500 mt-2">
            Ce cours est éducatif. Les investissements comportent des risques. Les performances passées ne garantissent
            pas les résultats futurs.
          </p>
        </div>
      </footer>
    </div>
  )
}
