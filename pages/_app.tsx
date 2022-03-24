import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { store } from '../model'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
