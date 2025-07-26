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
        


        <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
