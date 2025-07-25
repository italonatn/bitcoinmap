"use client"

import { CheckCircle, Shield, TrendingUp, Users, Star, AlertTriangle, Gift } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BitcoinCalculator } from "../components/bitcoin-calculator"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    })
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Alert Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎁 Este presente é limitado — preste atenção para não deixar de receber!
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Atenção: Pessoas Comuns Estão Mudando de Vida Enquanto Você Fica Parado!
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            🚨 Está Cansado de Ver o Bitcoin Subir e Ficar Só na Vontade? 🚀
          </h1>

          <p className="text-xl lg:text-2xl text-orange-600 font-bold mb-6">
            Não deixe o medo ou a falta de conhecimento te pararem! Com esse{" "}
            <span className="text-3xl bg-yellow-200 px-2 py-1 rounded">MDB</span> você aprende tudo para investir em
            Bitcoin com segurança!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Você já ouviu falar que o Bitcoin está mudando vidas e enriquecendo pessoas comuns, mas se sente perdido,
              com medo de cair em golpes ou simplesmente não sabe por onde começar?
            </p>
            <p className="text-base text-gray-600 mb-4">
              Esse <strong>MDB</strong> será sua professora (passo a passo) para entrar no mundo do Bitcoin com
              segurança, mesmo que você seja 100% leigo e nunca tenha investido um centavo na vida.
            </p>
            <p className="text-base text-gray-600">
              Criptomoedas já são o <strong>4º investimento mais popular</strong> do <strong>MUNDO</strong>, e o Bitcoin
              valorizou
              <strong> mais de 1000% em poucos anos</strong> – mas a maioria dos iniciantes perde dinheiro por não saber
              o básico.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              💡 Imagine como seria ter a confiança para investir em Bitcoin...
            </h3>
            <p className="text-green-700 text-lg mb-3">
              …watch your money grow much faster than in a regular bank account, which barely keeps up with inflation.
            </p>
            <p className="text-green-700">
              <strong>Você não precisa de milhares de dólares!</strong> Comece com apenas $50 ou menos – sim, você pode
              comprar frações de Bitcoin e entrar no jogo sem ser rico — a intenção é que você se torne.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <i>"E por que é uma decisão inteligente te escutar?"</i>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Oi! Eu sou a <strong>Ashley Harper</strong>, e sou <strong>Certified Financial Planner (CFP®)</strong>
                  . Minha paixão por finanças surgiu de algo bem pessoal: ver de perto o impacto que um bom planejamento
                  financeiro teve na minha própria família. Foi aí que percebi o quanto essa segurança e liberdade podem
                  transformar vidas, e isso me impulsionou a dedicar minha carreira a ajudar outras pessoas a sentirem o
                  mesmo.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Com 41 anos, já vi muita coisa no mercado e no mundo. Minha formação como CFP® me deu uma base sólida
                  em planejamento estratégico, gestão de investimentos e análise de mercado – e sempre, sempre, com foco
                  na ética e no que é melhor para você. Essa experiência me permite transitar com tranquilidade tanto
                  nos investimentos mais tradicionais quanto nesse universo fascinante das criptomoedas, em especial o
                  Bitcoin.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Ao longo da minha jornada profissional, ficou claro pra mim a importância crescente e o potencial do
                  Bitcoin. Meu objetivo é trazer clareza e uma orientação de qualidade para quem quer entender e, quem
                  sabe, dar os primeiros passos nesse novo cenário.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Eu realmente acredito que o conhecimento é a chave para a liberdade. Por isso, estou aqui para te
                  pegar pela mão, desde seu primeiro investimento em Bitcoin, passando pelas decisões importantes, até
                  te explicar sobre segurança nesse mundo das criptos. <strong>Vamos juntos?!</strong>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                  <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-4xl font-bold text-orange-600">AH</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ashley Harper</h3>
                  <p className="text-orange-600 font-semibold mb-4">Certified Financial Planner (CFP®)</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>11 anos de experiência</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span>Especialista em Bitcoin</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>+1.311 alunos orientados</span>
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
            <BitcoinCalculator />
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ...por este motivo desenvolvi o <span className="text-orange-600">Mapa do Bitcoin</span>
              </h2>
              <p className="text-xl text-gray-600">
                Um acompanhamento digital criado personalizadamente para quem nunca investiu em criptomoedas e quer
                começar do absoluto zero.
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
                    A <strong>ÚNICA</strong> explicação que você precisa sobre Bitcoin: o que é de verdade, o fator <strong>surpreendente</strong> que o faz valorizar e a <strong>revelação</strong> de como ele se compara ao dinheiro comum – tudo <strong>sem blablablá técnico</strong>.
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
                    Veja o <strong>PASSO A PASSO PRÁTICO</strong> para ter sua primeira conta em uma corretora top, transferir dinheiro com segurança e sem dor de cabeça pra comprar Bitcoin... <strong>começando com apenas $50 ou menos</strong>!
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
                    A <strong>Fórmula da Segurança Cripto</strong>: como garantir que suas moedas estejam a salvo, decifrar os sinais do mercado para vender ou segurar, e o atalho para <strong>evitar fraudes</strong> que lesam iniciantes.
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
          👉 Não perca mais dinheiro! Aprenda a investir em Bitcoin agora!
        </a>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
            Com o <span className="text-orange-600">Mapa do Bitcoin</span>, você vai entender:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">

                  <ul className="space-y-10">
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>O caminho DESCOMPLICADO para adquirir seu primeiro Bitcoin em menos de 10 minutos, mesmo que você nunca tenha investido antes.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Descubrir o SEGREDO por trás da moeda digital que está mudando o mundo – e por que ela é mais simples do que parece (Explicado no minuto 1:13 da aula 2)</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        O "gatilho" oculto que faz o preço do Bitcoin disparar… e como você pode identificá-lo ANTES que seja tarde — ensinado passo a passo pelo dono de uma corretora chinesa que você com certeza já ouviu falar.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>NUNCA abra sua conta na corretora sem antes saber ISSO – um detalhe simples que pode economizar seu tempo e dor de cabeça.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Evitar o ERRO CRÍTICO que 7 em cada 10 pessoas cometem ao transferir dinheiro para corretoras de cripto — com esse checklist SIMPLES sua grana vai chegar com 100% de segurança na corretora.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>O Indicador SECRETO que os grandes investidores usam para saber a hora exata de vender ou segurar seu Bitcoin.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">                   
                      <span><strong>E MAIS...</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">                   
                      <span>🎁 <strong>Deixei um PRESENTE SURPRESA dentro do aplicativo para quem garantir até o dia {currentDate} — quem está usando me disse que é injusto eu dar isso de bônus... que este presente sozinho já valia o preço!</strong></span>
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
                      "Eu tinha muita insegurança pra investir em Bitcoin, achava que era coisa de nerd. O acompanhamento me mostrou como é
                      simples e seguro. Comprei meus primeiros $35 de bitcoin ontem!"
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
                      "Eu não entendia nada, mas o passo-a-passo do acompanhamento é tão claro que consegui comprar Bitcoin na
                      primeira semana. Não tenho palavras pra te agradecer, Ashley. Investi pouco mas já valorizou!"
                    </p>
                    <p className="text-sm font-semibold">– Mariana, 29 anos, professora</p>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-3">Por que agora?</h3>
                  <p className="text-orange-700">
                    O Bitcoin não apenas valorizou milhares de por cento, mas os especialistas globais são unânimes: o potencial explosivo ainda está à frente! Pense bem: milhões já estão migrando para as criptos, superando até mesmo mercados consolidados. Esta não é uma chance qualquer; é a oportunidade da década que você não pode perder simplesmente por não saber como agir!
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Garanta Seu Acesso Agora e Receba Imediatamente!</h2>

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
                  <span>Suporte via e-mail, telegram e whatsapp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Garantia de 90 dias</span>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    BÔNUS: Presente surpresa no app e 90 dias de garantia condicional
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
                🔒 Pagamento 100% seguro • Garantia de 90 dias • Acesso imediato
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
                  <h3 className="font-bold mb-2">+1.311 Alunos</h3>
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
                  <h3 className="font-bold mb-2">Suporte no e-mail, telegram e whatsapp</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Costumo dizer que existem dois tipos de pessoas no mundo de hoje:</h2>
            <p className="text-l mb-8">
              O Tipo 1: Aquelas que veem a revolução do Bitcoin acontecer, mas não tomam a decisão e não criam a coragem de investir. São as pessoas que, mesmo diante de todas as evidências de valorização e potencial, preferem a inércia. Elas vivem presas à rotina, lamentando as oportunidades perdidas, assistindo de camarote enquanto o futuro financeiro se desenha para os outros. Dia após dia, a insegurança financeira persiste, os sonhos ficam na gaveta e a sensação de "ter perdido o bonde" se instala, condenando-as a uma vida de frustração, dependência e arrependimento por não terem agido quando podiam.
            </p>
            <p className="text-l mb-8">
            E o Tipo 2: São as pessoas ambiciosas, que querem mais da vida e não têm medo de ousar. Elas enxergam as oportunidades que o Bitcoin oferece e agem com inteligência e coragem. Essas são as que constroem ativamente seu futuro, garantem sua liberdade financeira e realizam sonhos que antes pareciam impossíveis. Enquanto o Tipo 1 se prende ao passado, o Tipo 2 está construindo um patrimônio robusto, viajando mais, tendo mais tempo para o que importa e vivendo com a tranquilidade de quem está no controle, à frente do seu tempo e colhendo os frutos de suas decisões ousadas e informadas.
            </p>

            <a
              href="https://pay.kiwify.com.br/tx5lvzp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
            >
              Se Você é o Tipo 2 — Clique e Comece Sua Jornada no Bitcoin!
            </a>

            <p className="text-orange-100">Tome o controle do seu futuro financeiro hoje!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2022 Mapa do Bitcoin. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">
            Este curso é educacional. Investimentos envolvem riscos. Rentabilidade passada não garante resultados
            futuros.
          </p>
        </div>
      </footer>
    </div>
  )
}
