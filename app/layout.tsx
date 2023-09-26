
import './globals.css'
import { Holtwood_One_SC, Inter } from 'next/font/google'
import Header from '@/components/header'
import Home from './page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jerome | Portfolio',
  description: 'Jerome Corpuz is a full-stack developer with 1 year of object orientnt programming experince',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
       
    
        {children}</body>
    </html>
  )
}
