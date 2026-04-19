import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Aayusha Maharjan — Portfolio',
  description: 'Computing Graduate | R&D Associate | Kathmandu, Nepal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}