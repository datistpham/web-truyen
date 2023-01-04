import { createContext } from 'react'
import '../styles/globals.css'

export const AppContext= createContext()
export default function App({ Component, pageProps }) {
  
  return (
    <Component {...pageProps} />
  )
}
