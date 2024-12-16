import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getIdToken } from '@/helpers/oauth'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Providers from './providers'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const idToken = getIdToken()

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          defer
          data-domain="wouldyoubot.gg"
          src="https://stats.wouldyoubot.gg/js/script.js"
        ></script>
        <Providers>
          <Alert
            href="/premium"
            className="bg-brand-customPrimary text-white"
            active
          >
            <b>Would You Bot</b> • Upgrade your server with Premium
          </Alert>
          <div className="w-full relative min-h-dvh flex flex-col">
            <Navbar idToken={idToken} />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
