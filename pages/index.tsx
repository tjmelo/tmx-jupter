import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'

import { data } from '../controller'
import { Input } from '../components/input'

import { useSelector } from 'react-redux'

interface Data {
  data: object
}

const Home: NextPage<Data> = ({data}) => {
  const CEP = useSelector((state) => state.CEP.value)
  
  console.log(data)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
        <Input />
    </div>
  )
   
}

export const getStaticProps = async () => data('0')

export default Home
