import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'

import { data } from '../controller'
import { Input } from '../components/input'

import { store } from '../model'
import { Provider } from 'react-redux'

interface Data {
  data: object
}

const Home: NextPage<Data> = ({data}) => {
  console.log(data)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
      <Provider store={store}>
        <Input />
      </Provider>
    </div>
  )
}

export const getStaticProps = async () => data('31610220')

export default Home
