import '@/app/globals.css'
import 'tailwindcss/tailwind.css'
import { Urbanist } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { AppProps, useRouter } from 'next/app'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// If loading a variable font, you don't need to specify the font weight
const urbanist = Urbanist({
  // weight: ['400', '700'],
  // style: ['normal', 'italic'],
  subsets: ['latin'],
  // display: 'swap',
  // preload: false,
})

export default function App({ Component, pageProps }) {


  return (

    <RecoilRoot>
      <AnimatePresence initial={false} mode="popLayout">
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>

    // <main className={urbanist.className}>
    //       <Component {...pageProps} />
    //     </main>
  )
}