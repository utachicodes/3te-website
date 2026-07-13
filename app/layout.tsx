import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans, Oswald } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '3TE | Votre partenaire en infrastructures énergétiques et électriques',
  description:
    "3TE conçoit, réalise et maintient des infrastructures énergétiques, des réseaux électriques et des installations industrielles. De l'étude à l'exploitation, un partenaire de confiance pour vos projets.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a3a2a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable} ${oswald.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
