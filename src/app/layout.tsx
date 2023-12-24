import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Head from 'next/head'

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Thinzar Hnin Yu Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Thinzar Hnin Yu Portfolio" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <body className={outfit.className}>
        <header className='top-0 sticky z-50'>
          <Header />
        </header>
        <main className='h-full py-10'>{children}</main>
      </body>
    </html>
  )
}
