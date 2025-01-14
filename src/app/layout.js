import { Catamaran } from 'next/font/google'
import './globals.css'
import './layout.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer'
import { Web3Modal } from '/context/web3modal'
import HeaderNew from '@/components/HeaderNew'
const catamaran = Catamaran({ weight: ['100','200','300','400','500','600','700','800','900'],subsets: ['latin'] })

export const metadata = {
  title: 'Bobby On Base',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href={catamaran.url} />
      </head>
      <body className={catamaran.className}>
      <div className='container'>
        <Web3Modal>
          {/* <Header/> */}
          <HeaderNew/>
            {children}
          <Footer/>
        </Web3Modal>
      </div>
      
      </body>
    </html>
  )
}
