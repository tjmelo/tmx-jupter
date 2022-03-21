import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
    </div>
  )
}

export default Home
