import type { Metadata } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Sans_Thai } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import AnimatedDocumentTitle from '@/components/AnimatedDocumentTitle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Inter and Space Grotesk have no Thai glyphs; without this Thai falls back to each device's system font
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-thai',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '[Open to Work] Ittikorn (Aof) Sopawan | Technical Product Owner, System Analyst, Solution Architect',
  description:
    'Portfolio of Ittikorn (Aof) Sopawan — Technical Product Owner, System Analyst, and Solution Architect with 10 years of experience across enterprise, e-commerce, logistics, and multi-cloud platforms.',
  // the image itself comes from app/opengraph-image.tsx
  openGraph: {
    type: 'profile',
    title: '[Open to Work] Ittikorn (Aof) Sopawan',
    description: 'Technical Product Owner, System Analyst, and Solution Architect — 10 years in tech.',
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [{ url: '/logo.png?v=2', type: 'image/png' }],
    shortcut: ['/logo.png?v=2'],
    apple: '/logo.png?v=2',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plexThai.variable} font-sans antialiased`}>
        <AnimatedDocumentTitle />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
