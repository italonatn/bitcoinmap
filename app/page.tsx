"use client"

import { CheckCircle, Shield, TrendingUp, Users, Star, AlertTriangle, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BitcoinCalculator } from "../components/bitcoin-calculator"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    })
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Alert Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎁 This gift is limited — pay attention so you don't miss out!
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Warning: Ordinary People Are Changing Their Lives While You Stand Still!
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            🚨 Tired of Watching Bitcoin Rise and Just Wishing? 🚀
          </h1>

          <p className="text-xl lg:text-2xl text-orange-600 font-bold mb-6">
            Don't let fear or lack of knowledge stop you! With this{" "}
            <span className="text-3xl bg-yellow-200 px-2 py-1 rounded">BB</span> you'll learn everything to invest in
            Bitcoin safely!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              You've heard that Bitcoin is changing lives and making ordinary people rich, but you feel lost,
              afraid of falling for scams, or simply don't know where to start?
            </p>
            <p className="text-base text-gray-600 mb-4">
              This <strong>BB</strong> will be your teacher (step by step) to enter the Bitcoin world safely,
              even if you're 100% beginner and have never invested a penny in your life.
            </p>
            <p className="text-base text-gray-600">
              Cryptocurrencies are already the <strong>4th most popular investment</strong> in the <strong>WORLD</strong>, and Bitcoin has appreciated
              <strong> more than 1000% in just a few years</strong> – but most beginners lose money because they don't know
              the basics.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              💡 Imagine having the confidence to invest in Bitcoin...
            </h3>
            <p className="text-green-700 text-lg mb-3">
              …watch your money grow much faster than in a regular bank account, which barely keeps up with inflation.
            </p>
            <p className="text-green-700">
              <strong>You don't need thousands of dollars!</strong> Start with just $50 or less – yes, you can
              buy fractions of Bitcoin and enter the game without being rich — the intention is for you to become one.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              <i>"And why is it a smart decision to listen to me?"</i>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-white leading-relaxed">
                  Hi! I'm <strong>Ashley Harper</strong>, and I'm a <strong>Certified Financial Planner (CFP®)</strong>
                  . My passion for finance arose from something very personal: seeing firsthand the impact that good financial
                  planning had on my own family. That's when I realized how much this security and freedom can
                  transform lives, and that drove me to dedicate my career to helping other people feel the
                  same.
                </p>

                <p className="text-white leading-relaxed">
                  At 41 years old, I've seen a lot in the market and in the world. My CFP® training gave me a solid foundation
                  in strategic planning, investment management and market analysis – and always, always, with focus
                  on ethics and what's best for you. This experience allows me to navigate comfortably both
                  in more traditional investments and in this fascinating universe of cryptocurrencies, especially
                  Bitcoin.
                </p>

                <p className="text-white leading-relaxed">
                  Throughout my professional journey, the growing importance and potential of
                  Bitcoin became clear to me. My goal is to bring clarity and quality guidance for those who want to understand and, who
                  knows, take the first steps in this new scenario.
                </p>

                <p className="text-white leading-relaxed">
                  I truly believe that knowledge is the key to freedom. That's why I'm here to
                  take you by the hand, from your first Bitcoin investment, through important decisions, to
                  explaining security in this crypto world. <strong>Let's go together?!</strong>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                  <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src="/ashley-harper.jpg"
                      alt="Ashley Harper - Certified Financial Planner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ashley Harper</h3>
                  <p className="text-orange-600 font-semibold mb-4">Certified Financial Planner (CFP®)</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>11 years of experience</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span>Bitcoin specialist</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>+1,311 students guided</span>
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
                ...for this reason I developed the <span className="text-orange-600">Bitcoin Blueprint</span>
              </h2>
              <p className="text-xl text-gray-600">
                A digital guidance created specifically for those who have never invested in cryptocurrencies and want to
                start from absolute zero.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">The Basics Simplified</h3>
                  <p className="text-gray-600 text-center">
                    The <strong>ONLY</strong> explanation you need about Bitcoin: what it really is, the{" "}
                    <strong>surprising</strong> factor that makes it appreciate and the <strong>revelation</strong> of how it
                    compares to regular money – all <strong>without technical jargon</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Hands-On Practice</h3>
                  <p className="text-gray-600 text-center">
                    See the <strong>PRACTICAL STEP-BY-STEP</strong> to have your first account on a top exchange,
                    transfer money safely and hassle-free to buy Bitcoin...{" "}
                    <strong>starting with just $50 or less</strong>!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Protect Your Money</h3>
                  <p className="text-gray-600 text-center">
                    The <strong>Crypto Security Formula</strong>: how to ensure your coins are safe,
                    decode market signals to sell or hold, and the shortcut to{" "}
                    <strong>avoid fraud</strong> that harms beginners.
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
          👉 Don't lose more money! Learn to invest in Bitcoin now!
        </a>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              With the <span className="text-orange-600">Bitcoin Blueprint</span>, you'll understand:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <ul className="space-y-10">
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        The SIMPLIFIED path to acquire your first Bitcoin in less than 10 minutes, even if
                        you've never invested before.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Discover the SECRET behind the digital currency that's changing the world – and why it's simpler
                        than it seems (Explained at minute 1:13 of lesson 2)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        The hidden "trigger" that makes Bitcoin's price skyrocket… and how you can identify it BEFORE it's
                        too late — taught step by step by the owner of a Chinese exchange you've certainly heard of.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        NEVER open your exchange account without knowing THIS first – a simple detail that can save
                        your time and headaches.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        Avoid the CRITICAL ERROR that 7 out of 10 people make when transferring money to crypto exchanges
                        — with this SIMPLE checklist your money will arrive 100% safely at the exchange.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        The SECRET Indicator that big investors use to know the exact time to sell or
                        hold their Bitcoin.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        <strong>AND MORE...</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-green-700">
                      <span>
                        🎁{" "}
                        <strong>
                          I left a SURPRISE GIFT inside the app for those who secure it by {currentDate} —
                          those who are using it told me it's unfair for me to give this as a bonus... that this gift alone was worth
                          the price!
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
                      <Badge variant="secondary">Real Testimonial</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "I had a lot of insecurity about investing in Bitcoin, I thought it was just for nerds. The
                      guide showed me how simple and safe it is. I bought my first $35 of bitcoin yesterday!"
                    </p>
                    <p className="text-sm font-semibold">– John, 34 years old, freelancer</p>
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
                      <Badge variant="secondary">Real Testimonial</Badge>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "I didn't understand anything, but the step-by-step guidance is so clear that I managed to buy
                      Bitcoin in the first week. I have no words to thank you, Ashley. I invested little but it already
                      gone up!"
                    </p>
                    <p className="text-sm font-semibold">– Mariana, 29 years old, teacher</p>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-3">Why now?</h3>
                  <p className="text-orange-700">
                    Bitcoin hasn't just appreciated thousands of percent, but global experts are unanimous: the
                    explosive potential is still ahead! Think about it: millions are already migrating to cryptos,
                    even surpassing established markets. This isn't just any chance; it's the opportunity of
                    the decade that you can't miss simply because you don't know how to act!
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Secure Your Access Now and Receive Immediately!</h2>

            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-2">From $49 for</div>
                <div className="text-6xl font-bold text-orange-600 mb-2">$14</div>
                <div className="text-lg text-gray-600">One-time payment • No monthly fees</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 complete video modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Immediate and lifetime access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Support via email, telegram and whatsapp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>90-day guarantee</span>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    BONUS: Surprise gift in the app and 90-day conditional guarantee
                  </span>
                </div>
              </div>

              <a
                href="https://pay.kiwify.com.br/tx5lvzp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-4 text-xl font-bold rounded-lg shadow-xl mb-4"
              >
                👉 I Want to Start Investing in Bitcoin for $14!
              </a>

              <div className="text-sm text-gray-500">
                🔒 100% secure payment • 90-day guarantee • Immediate access
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">⏳ Don't waste more time!</h3>
              <p>
                Bitcoin doesn't wait, and each passing day is one less chance to enter at the right moment. This promotional offer
                is for a limited time - don't fall for promises of easy money or expensive signal groups. The
                real secret is knowledge!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why trust the Bitcoin Blueprint?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">+1,311 Students</h3>
                  <p className="text-sm text-gray-600">Already transformed fear into confidence</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Experts</h3>
                  <p className="text-sm text-gray-600">Years of experience in the crypto market</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">100% Safe</h3>
                  <p className="text-sm text-gray-600">Learn without worry</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Support via email, telegram and whatsapp</h3>
                  <p className="text-sm text-gray-600">Ask questions when you need</p>
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
              I usually say there are two types of people in today's world:
            </h2>
            <p className="text-l mb-8">
              Type 1: Those who see the Bitcoin revolution happening, but don't make the decision and don't create the courage
              to invest. They're the people who, even faced with all the evidence of appreciation and potential, prefer
              inertia. They live trapped in routine, lamenting missed opportunities, watching from the sidelines
              while the financial future unfolds for others. Day after day, financial insecurity persists,
              dreams stay in the drawer and the feeling of "having missed the boat" sets in, condemning them to a life of
              frustration, dependence and regret for not having acted when they could.
            </p>
            <p className="text-l mb-8">
              And Type 2: These are ambitious people, who want more from life and aren't afraid to dare. They see the
              opportunities that Bitcoin offers and act with intelligence and courage. These are the ones who actively build
              their future, guarantee their financial freedom and realize dreams that once seemed impossible.
              While Type 1 clings to the past, Type 2 is building a robust portfolio, traveling more,
              having more time for what matters and living with the tranquility of those who are in control, ahead of
              their time and reaping the fruits of their bold and informed decisions.
            </p>

            <a
              href="https://pay.kiwify.com.br/tx5lvzp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-xl mb-6"
            >
              If You're Type 2 — Click and Start Your Bitcoin Journey!
            </a>

            <p className="text-orange-100">Take control of your financial future today!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2022 Bitcoin Blueprint. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">
            This course is educational. Investments involve risks. Past performance does not guarantee
            future results.
          </p>
        </div>
      </footer>
    </div>
  )
}
