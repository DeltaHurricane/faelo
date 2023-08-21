import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from './components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site da Faelo',
  description: 'Site de portifolios da Faelo',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
