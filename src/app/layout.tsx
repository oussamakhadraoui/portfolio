
import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import AnimatePresencePro from '@/components/providers/AnimatePresencec'


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar  />
        <AnimatePresencePro>
          {children}
          </AnimatePresencePro>
        <Footer />
      </body>
    </html>
  )
}
