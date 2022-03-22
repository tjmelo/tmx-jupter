import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'

import { data } from '../controller'

interface Data {
  data: object
}

const Home: NextPage<Data> = ({data}) => {
  console.log(data)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
    </div>
  )
}

export const getStaticProps = async () => data('31610220')

export default Home
