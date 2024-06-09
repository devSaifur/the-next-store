import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from 'sonner'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Next Store',
  description: 'Your everyday store.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <Toaster position="top-center" richColors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
