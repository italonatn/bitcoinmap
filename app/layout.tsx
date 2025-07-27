import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mapa do Bitcoin - Aprenda a Investir em Bitcoin com Segurança",
  description:
    "Curso completo para iniciantes investirem em Bitcoin. 3 módulos práticos por apenas R$47. Mais de 5.000 alunos já transformaram medo em confiança.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  data-utmify-ignore-iframe
  data-utmify-is-cartpanda
  async
  defer
></script>

<script>
  window.pixelId = "6885892192a50b07f8634c53";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>

        <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
