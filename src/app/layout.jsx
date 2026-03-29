import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://rrcatering.com'),
  title: {
    default: 'RR Catering - Premium Catering Services in Chennai | Wedding & Corporate Events',
    template: '%s | RR Catering'
  },
  description: 'RR Catering offers premium catering services in Chennai for weddings, corporate events, birthdays, and outdoor functions. Expert chefs, quality ingredients, and exceptional service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
