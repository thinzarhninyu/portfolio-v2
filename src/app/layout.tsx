import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Head from 'next/head'
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggle from '@/components/theme-toggle'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className='top-0 sticky z-50'>
            <Header />
          </header>
          <main className='h-full py-10'>
            {children}
            <div className='bottom-5 left-0 p-4 fixed'>
              <ThemeToggle />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
