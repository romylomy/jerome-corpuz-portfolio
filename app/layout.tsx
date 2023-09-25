
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
        <div className="bg-bodyGreen absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-bodyOrange absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
    
        {children}</body>
    </html>
  )
}
