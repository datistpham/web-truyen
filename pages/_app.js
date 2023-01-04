import { createContext } from 'react'
import Context from '../context/context'
import '../styles/globals.css'

export const AppContext= createContext()
export default function App({ Component, pageProps }) {
  
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}
