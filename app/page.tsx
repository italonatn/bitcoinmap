import { CheckCircle, Shield, TrendingUp, Users, Clock, Star, AlertTriangle, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BitcoinCalculator } from "../components/bitcoin-calculator"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Alert Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🚨 OFERTA POR TEMPO LIMITADO - Vagas Acabando!
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Atenção: Você Está Perdendo Dinheiro Enquanto Fica Parado!
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            🚨 Está Cansado de Ver o Bitcoin Subir e Ficar Só na Vontade? 🚀
          </h1>

          <p className="text-xl lg:text-2xl text-orange-600 font-bold mb-6">
            Não deixe o medo ou a falta de conhecimento te pararem!{" "}
            <span className="text-3xl bg-yellow-200 px-2 py-1 rounded">Por apenas R$47</span> você aprende tudo para
            investir em Bitcoin com segurança!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Você já ouviu falar que o Bitcoin está mudando vidas e enriquecendo pessoas comuns, mas se sente perdido,
              com medo de cair em golpes ou simplesmente não sabe por onde começar?
            </p>
            <p className="text-base text-gray-600 mb-4">
              <strong>O Mapa do Bitcoin</strong> é o seu guia definitivo para entrar no mundo do Bitcoin com segurança,
              mesmo que você seja 100% leigo e nunca tenha investido um centavo na vida.
            </p>
            <p className="text-base text-gray-600">
              No Brasil, criptomoedas já são o <strong>5º investimento mais popular</strong>, e o Bitcoin valorizou
              <strong> mais de 1000% em poucos anos</strong> – mas a maioria dos iniciantes perde dinheiro por não saber
              o básico.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              💡 Imagine como seria ter a confiança para investir em Bitcoin!
            </h3>
            <p className="text-green-700 text-lg mb-3">
              Ver seu dinheiro render muito mais do que na poupança, que mal acompanha a inflação.
            </p>
            <p className="text-green-700">
              <strong>Você não precisa de milhares de reais!</strong> Comece com apenas R$100 ou menos – sim, você pode
              comprar frações de Bitcoin e entrar no jogo sem ser rico.
            </p>
          </div>

          <a
            href="https://pay.kiwify.com.br/tx5lvzp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
          >
            👉 Quero Começar a Investir por R$47!
          </a>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>+5.000 alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garantia 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                O <span className="text-orange-600">Mapa do Bitcoin</span>
              </h2>
              <p className="text-xl text-gray-600">
                Um mini curso 100% digital criado especialmente para quem nunca investiu em criptomoedas e quer começar
                do absoluto zero.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">O Básico Descomplicado</h3>
                  <p className="text-gray-600 text-center">
                    Entenda o que é Bitcoin, por que ele valoriza e como é diferente do dinheiro tradicional – tudo
                    explicado em linguagem simples, sem jargões técnicos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Mãos na Massa</h3>
                  <p className="text-gray-600 text-center">
                    Veja o passo a passo para criar uma conta em uma corretora confiável, transferir dinheiro via Pix
                    com segurança e comprar suas primeiras frações de Bitcoin (mesmo com apenas R$100!).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Proteja Seu Dinheiro</h3>
                  <p className="text-gray-600 text-center">
                    Aprenda como guardar suas criptomoedas com segurança, identificar o momento certo de vender ou
                    manter, e evitar golpes que lesam iniciantes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <BitcoinCalculator />
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <a
          href="https://pay.kiwify.com.br/tx5lvzp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-4 px-8 text-xl font-bold rounded-lg shadow-xl"
        >
          👉 Não perca mais tempo! Invista em Bitcoin agora!
        </a>
      </div>
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Imagine Você no Controle das Suas Finanças</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Com o Mapa do Bitcoin, você vai:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Aprender a comprar seu primeiro Bitcoin em poucos minutos</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Proteger seu dinheiro da inflação que está corroendo suas economias</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Aproveitar o potencial do Bitcoin, que já transformou pequenos investimentos em fortunas
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Saber quando segurar ou vender, com dicas práticas para não perder dinheiro</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Sentir orgulho de estar à frente, enquanto outros ficam apenas sonhando</span>
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
                      <Badge variant="secondary">Depoimento Real</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Eu tinha pavor de investir em Bitcoin, achava que era coisa de nerd. O curso me mostrou como é
                      simples e seguro. Comprei meus primeiros R$200 e já me sinto no controle!"
                    </p>
                    <p className="text-sm font-semibold">– João, 34 anos, autônomo</p>
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
                      <Badge variant="secondary">Depoimento Real</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Eu não entendia nada, mas o passo-a-passo do curso é tão claro que consegui comprar Bitcoin na
                      primeira semana. Hoje me sinto mais segura!"
                    </p>
                    <p className="text-sm font-semibold">– Mariana, 29 anos, professora</p>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-3">Por que agora?</h3>
                  <p className="text-orange-700">
                    Porque o Bitcoin já valorizou milhares de por cento nos últimos anos, e especialistas apontam que
                    ainda há muito espaço para crescer. <strong>4% dos brasileiros já investem em cripto</strong>,
                    superando até ações. Não fique de fora dessa oportunidade por falta de conhecimento!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Garanta Sua Vaga Agora e Comece Hoje!</h2>

            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-2">De R$197 por</div>
                <div className="text-6xl font-bold text-orange-600 mb-2">R$47</div>
                <div className="text-lg text-gray-600">Pagamento único • Sem mensalidades</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 módulos em vídeo completos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Acesso imediato e vitalício</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    BÔNUS: Guia PDF "Onde Guardar Seus Bitcoins com Segurança"
                  </span>
                </div>
              </div>

              <a
                href="https://pay.kiwify.com.br/tx5lvzp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-4 text-xl font-bold rounded-lg shadow-xl mb-4"
              >
                👉 Quero Começar a Investir em Bitcoin por R$47!
              </a>

              <div className="text-sm text-gray-500">
                🔒 Pagamento 100% seguro • Garantia de 7 dias • Acesso imediato
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">⏳ Não perca mais tempo!</h3>
              <p>
                O Bitcoin não espera, e cada dia que passa é uma chance a menos de entrar no momento certo. Esta oferta
                promocional é por tempo limitado - não caia em promessas de dinheiro fácil ou grupos de sinais caros. O
                verdadeiro segredo é o conhecimento!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Por que confiar no Mapa do Bitcoin?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">+5.000 Alunos</h3>
                  <p className="text-sm text-gray-600">Já transformaram medo em confiança</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Especialistas</h3>
                  <p className="text-sm text-gray-600">Anos de experiência no mercado cripto</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">100% Seguro</h3>
                  <p className="text-sm text-gray-600">Aprenda sem preocupação</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Suporte WhatsApp</h3>
                  <p className="text-sm text-gray-600">Tire suas dúvidas quando precisar</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">O que você está esperando?</h2>
            <p className="text-xl mb-8">
              Por menos que o preço de um lanche, você pode mudar sua relação com o dinheiro e entrar no mercado que
              está revolucionando o mundo.
            </p>

            <a
              href="https://pay.kiwify.com.br/tx5lvzp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
            >
              Clique Agora e Comece Sua Jornada no Bitcoin!
            </a>

            <p className="text-orange-100">Tome o controle do seu futuro financeiro hoje!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Mapa do Bitcoin. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">
            Este curso é educacional. Investimentos envolvem riscos. Rentabilidade passada não garante resultados
            futuros.
          </p>
        </div>
      </footer>
    </div>
  )
}
