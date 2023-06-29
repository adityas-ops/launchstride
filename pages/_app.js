import '@/styles/globals.css'
import Header from '@/components/Header'
import '../public/font/Whyte Inktrap/stylesheet.css'
export default function App({ Component, pageProps }) {
  return (
    <>
        <Header/>
   
     <Component {...pageProps} />
    </>
   
  )
}
