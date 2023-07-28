import './globals.css'
import { Sora } from 'next/font/google'
import Navbar from "../../components/sections/Navbar"
import Footer from '../../components/sections/footer'

const sora = Sora({ subsets: ['latin'], style: "normal"})

export const metadata = {
  title: 'Market Dine App',
  description: 'Ecommerse Shoping Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
