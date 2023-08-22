import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter, Work_Sans } from 'next/font/google'

import Header from '../components/header/header'
import Footer from '../components/footer/footer';

const inter = Inter({ subsets: ['latin'] })
const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakesh 🖤',
  description: 'Rakesh portfolio 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
