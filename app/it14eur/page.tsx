"use client"

import { CheckCircle, Shield, TrendingUp, Users, Star, AlertTriangle, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BitcoinCalculatorIT } from "../../components/bitcoin-calculator-it"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString("it-IT", {
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
        🎁 Questo regalo è limitato — fai attenzione a non perderlo!
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Attenzione: Persone comuni stanno cambiando la loro vita mentre tu rimani fermo!
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            🚨 Stanco di guardare Bitcoin salire e solo sognare? 🚀
          </h1>

          <p className="text-xl lg:text-2xl text-orange-600 font-bold mb-6">
            Non lasciare che la paura o la mancanza di conoscenza ti fermino! Con questa{" "}
            <span className="text-3xl bg-yellow-200 px-2 py-1 rounded">MDB</span> imparerai tutto per investire in
            Bitcoin in sicurezza!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Hai sentito che Bitcoin sta cambiando vite e arricchendo persone comuni, ma ti senti perso, hai paura di
              cadere in truffe, o semplicemente non sai da dove iniziare?
            </p>
            <p className="text-base text-gray-600 mb-4">
              Questa <strong>MDB</strong> sarà il tuo insegnante (passo dopo passo) per entrare nel mondo Bitcoin in
              sicurezza, anche se sei 100% principiante e non hai mai investito un centesimo nella tua vita.
            </p>
            <p className="text-base text-gray-600">
              Le criptovalute sono già il <strong>4° investimento più popolare</strong> al <strong>MONDO</strong>, e
              Bitcoin si è apprezzato di
              <strong> oltre il 1000% in pochi anni</strong> – ma la maggior parte dei principianti perde denaro perché
              non conosce le basi.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              💡 Immagina di avere la fiducia di investire in Bitcoin...
            </h3>
            <p className="text-green-700 text-lg mb-3">
              …guardare i tuoi soldi crescere molto più velocemente che in un conto bancario normale, che a malapena
              tiene il passo con l'inflazione.
            </p>
            <p className="text-green-700">
              <strong>Non hai bisogno di migliaia di euro!</strong> Inizia con solo 50€ o meno – sì, puoi comprare
              frazioni di Bitcoin ed entrare nel gioco senza essere ricco — l'intenzione è che tu lo diventi.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <i>"E perché è una decisione intelligente ascoltarmi?"</i>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-white leading-relaxed">
                  Ciao! Sono <strong>Ashley Harper</strong>, e sono una{" "}
                  <strong>Pianificatrice Finanziaria Certificata (CFP®)</strong>. La mia passione per la finanza è nata
                  da un momento cruciale il 13 febbraio 2019. Quel giorno, avevo 8.700€—tutti i miei risparmi
                  all'epoca—quando ho sentito parlare di Bitcoin per la prima volta. Il pensiero di investire mi ha
                  attraversato la mente, ma mancando delle conoscenze necessarie e del coraggio, ho esitato. Oggi,
                  quegli stessi 8.700€, se fossero stati investiti allora, varrebbero in media 294.856,27€.
                </p>

                <p className="text-white leading-relaxed">
                  Vedere quell'incredibile opportunità persa di prima mano è stata una frustrazione profonda. Mi ha
                  mostrato quanto le giuste conoscenze e il coraggio possano trasformare le vite, e quell'esperienza mi
                  ha davvero spinto a dedicare la mia carriera ad aiutare altre persone non solo a capire, ma ad agire
                  su opportunità come queste, raggiungendo quella stessa sicurezza finanziaria e libertà che ora
                  sostengo.
                </p>

                <p className="text-white leading-relaxed">
                  A 41 anni, ho visto molto nel mercato e nel mondo. La mia formazione CFP® mi ha dato una base solida
                  in pianificazione strategica, gestione degli investimenti e analisi di mercato – e sempre, sempre, con
                  un focus sull'etica e su ciò che è meglio per te. Questa esperienza mi permette di navigare
                  comodamente sia negli investimenti più tradizionali che in questo affascinante universo delle
                  criptovalute, in particolare Bitcoin.
                </p>

                <p className="text-white leading-relaxed">
                  Durante il mio percorso professionale, l'importanza crescente e il potenziale di Bitcoin sono
                  diventati chiari per me. Il mio obiettivo è portare chiarezza e consigli di qualità per coloro che
                  vogliono capire e, chissà, fare i primi passi in questo nuovo scenario.
                </p>

                <p className="text-white leading-relaxed">
                  Credo davvero che la conoscenza sia la chiave della libertà. Ecco perché sono qui per prenderti per
                  mano, dal tuo primo investimento Bitcoin, attraverso decisioni importanti, fino a spiegarti la
                  sicurezza in questo mondo crypto. <strong>Andiamo insieme?!</strong>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                  <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src="/ashley-harper.jpg"
                      alt="Ashley Harper - Pianificatrice Finanziaria Certificata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ashley Harper</h3>
                  <p className="text-orange-600 font-semibold mb-4">Pianificatrice Finanziaria Certificata (CFP®)</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>4 anni di esperienza</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span>Specialista Bitcoin</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>+1.311 studenti guidati</span>
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
            <BitcoinCalculatorIT />
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ...per questo motivo ho sviluppato la <span className="text-orange-600">Mappa Del Bitcoin</span>
              </h2>
              <p className="text-xl text-gray-600">
                Una guida digitale creata specificamente per coloro che non hanno mai investito in criptovalute e
                vogliono iniziare da zero assoluto.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Le Basi Semplificate</h3>
                  <p className="text-gray-600 text-center">
                    L'<strong>UNICA</strong> spiegazione di cui hai bisogno su Bitcoin: cos'è veramente, il fattore{" "}
                    <strong>sorprendente</strong> che lo fa apprezzare e la <strong>rivelazione</strong> di come si
                    confronta con il denaro normale – tutto <strong>senza gergo tecnico</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Pratica Concreta</h3>
                  <p className="text-gray-600 text-center">
                    Vedi la <strong>GUIDA PRATICA PASSO DOPO PASSO</strong> per avere il tuo primo account su un
                    exchange top, trasferire denaro in sicurezza e senza problemi per comprare Bitcoin...{" "}
                    <strong>iniziando con solo 50€ o meno</strong>!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Proteggi i Tuoi Soldi</h3>
                  <p className="text-gray-600 text-center">
                    La <strong>Formula di Sicurezza Crypto</strong>: come assicurarti che le tue monete siano al sicuro,
                    decodificare i segnali del mercato per vendere o tenere, e la scorciatoia per{" "}
                    <strong>evitare le frodi</strong> che danneggiano i principianti.
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
          👉 Non perdere più soldi! Impara a investire in Bitcoin ora!
        </a>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Con la <span className="text-orange-600">Mappa Del Bitcoin</span>, capirai:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <ul className="space-y-10">
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Il percorso SEMPLIFICATO per acquisire il tuo primo Bitcoin in meno di 10 minuti, anche se non
                        hai mai investito prima.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Scoprire il SEGRETO dietro la valuta digitale che sta cambiando il mondo – e perché è più
                        semplice di quanto sembri (Spiegato al minuto 1:13 della lezione 2)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Il "trigger" nascosto che fa esplodere il prezzo di Bitcoin… e come puoi identificarlo PRIMA che
                        sia troppo tardi — insegnato passo dopo passo dal proprietario di un exchange cinese di cui hai
                        sicuramente sentito parlare.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Non aprire MAI il tuo account exchange senza sapere QUESTO prima – un dettaglio semplice che può
                        farti risparmiare tempo e mal di testa.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Evita l'ERRORE CRITICO che 7 persone su 10 commettono quando trasferiscono denaro agli exchange
                        crypto — con questa checklist SEMPLICE i tuoi soldi arriveranno 100% sicuri all'exchange.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        L'Indicatore SEGRETO che i grandi investitori usano per sapere il momento esatto per vendere o
                        tenere il loro Bitcoin.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        <strong>E ALTRO ANCORA...</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        🎁{" "}
                        <strong>
                          Ho lasciato un REGALO SORPRESA nell'app per coloro che si iscrivono entro il {currentDate} —
                          quelli che lo stanno usando mi hanno detto che è ingiusto che io dia questo come bonus... che
                          questo regalo da solo valeva il prezzo!
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
                      <Badge variant="secondary">Testimonianza Reale</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Avevo molta insicurezza riguardo all'investire in Bitcoin, pensavo fosse solo per i nerd. La
                      guida mi ha mostrato quanto sia semplice e sicuro. Ho comprato i miei primi 35€ di bitcoin ieri!"
                    </p>
                    <p className="text-sm font-semibold">– Giovanni, 34 anni, freelancer</p>
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
                      <Badge variant="secondary">Testimonianza Reale</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Non capivo niente, ma la guida passo dopo passo è così chiara che sono riuscita a comprare
                      Bitcoin nella prima settimana. Non ho parole per ringraziarti, Ashley. Ho investito poco ma è già
                      salito!"
                    </p>
                    <p className="text-sm font-semibold">– Mariana, 29 anni, insegnante</p>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-3">Perché ora?</h3>
                  <p className="text-orange-700">
                    Bitcoin non si è solo apprezzato di migliaia di percentuali, ma gli esperti globali sono unanimi: il
                    potenziale esplosivo è ancora davanti a noi! Pensaci: milioni stanno già migrando verso le crypto,
                    superando anche i mercati consolidati. Questa non è una qualsiasi opportunità; è l'opportunità del
                    decennio che non puoi perdere semplicemente perché non sai come agire!
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
              Assicura il Tuo Accesso Ora e Ricevi Immediatamente!
            </h2>

            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-2">Da 49€ per</div>
                <div className="text-6xl font-bold text-orange-600 mb-2">14€</div>
                <div className="text-lg text-gray-600">Pagamento unico • Nessun costo mensile</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 moduli video completi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Accesso immediato e a vita</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Supporto via email, telegram e whatsapp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garanzia di 90 giorni</span>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    BONUS: Regalo sorpresa nell'app e garanzia condizionale di 90 giorni
                  </span>
                </div>
              </div>

              <a
                href="https://mated.mycartpanda.com/checkout/190900768:1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-4 text-xl font-bold rounded-lg shadow-xl mb-4"
              >
                👉 Voglio Iniziare a Investire in Bitcoin per 14€!
              </a>

              <div className="text-sm text-gray-500">
                🔒 Pagamento 100% sicuro • Garanzia di 90 giorni • Accesso immediato
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">⏳ Non perdere più tempo!</h3>
              <p>
                Bitcoin non aspetta, e ogni giorno che passa è una possibilità in meno di entrare al momento giusto.
                Questa offerta promozionale è per un tempo limitato - non cadere nelle promesse di soldi facili o gruppi
                di segnali costosi. Il vero segreto è la conoscenza!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perché fidarsi della Mappa Del Bitcoin?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">+1.311 Studenti</h3>
                  <p className="text-sm text-gray-600">Hanno già trasformato la paura in fiducia</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Esperti</h3>
                  <p className="text-sm text-gray-600">Anni di esperienza nel mercato crypto</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">100% Sicuro</h3>
                  <p className="text-sm text-gray-600">Impara senza preoccupazioni</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Supporto via email, telegram e whatsapp</h3>
                  <p className="text-sm text-gray-600">Fai domande quando ne hai bisogno</p>
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
              Di solito dico che ci sono due tipi di persone nel mondo di oggi:
            </h2>
            <p className="text-l mb-8">
              Tipo 1: Quelli che vedono la rivoluzione Bitcoin accadere, ma non prendono la decisione e non creano il
              coraggio di investire. Sono le persone che, anche di fronte a tutte le prove di apprezzamento e
              potenziale, preferiscono l'inerzia. Vivono intrappolati nella routine, lamentandosi delle opportunità
              perse, guardando dalle tribune mentre il futuro finanziario si svolge per altri. Giorno dopo giorno,
              l'insicurezza finanziaria persiste, i sogni rimangono nel cassetto e la sensazione di aver "perso il
              treno" si instaura, condannandoli a una vita di frustrazione, dipendenza e rimpianto per non aver agito
              quando potevano.
            </p>
            <p className="text-l mb-8">
              E Tipo 2: Queste sono persone ambiziose, che vogliono di più dalla vita e non hanno paura di osare. Vedono
              le opportunità che Bitcoin offre e agiscono con intelligenza e coraggio. Questi sono quelli che
              costruiscono attivamente il loro futuro, garantiscono la loro libertà finanziaria e realizzano sogni che
              una volta sembravano impossibili. Mentre il Tipo 1 si aggrappa al passato, il Tipo 2 sta costruendo un
              portafoglio robusto, viaggia di più, ha più tempo per ciò che conta e vive con la tranquillità di chi ha
              il controllo, in anticipo sui tempi e raccogliendo i frutti delle loro decisioni audaci e informate.
            </p>

            <a
              href="https://mated.mycartpanda.com/checkout/190900768:1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
            >
              Se Sei Tipo 2 — Clicca e Inizia il Tuo Viaggio Bitcoin!
            </a>

            <p className="text-orange-100">Prendi il controllo del tuo futuro finanziario oggi!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2022 Mappa Del Bitcoin. Tutti i diritti riservati.</p>
          <p className="text-sm text-gray-500 mt-2">
            Questo corso è educativo. Gli investimenti comportano rischi. Le performance passate non garantiscono
            risultati futuri.
          </p>
        </div>
      </footer>
    </div>
  )
}
