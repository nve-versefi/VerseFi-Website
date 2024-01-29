  import './css/style.css'

  import { Inter, Architects_Daughter } from 'next/font/google'

  import Header from '@/components/ui/header'
  import Banner from '@/components/banner'
  import CookieBanner from '@/components/cookieconsent'

  const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
  })

  const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap'
  })

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-ghostwhite text-gray-200 tracking-tight`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
            <CookieBanner />
            <Banner />
          </div>
        </body>
      </html>
    )
  }
  