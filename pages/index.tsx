import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'

import { data } from '../controller'
import { Input } from '../components/input'

import { RootStateOrAny, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Info } from '../components/Info'

interface Data {
  data: object
}

const Home: NextPage<Data> = () => {
  const CEP = useSelector((state: RootStateOrAny) => state.CEP.value)
  const [num, setNum] = useState()

  useEffect(() => {
    const init = async () => setNum(await data(CEP));
    init()
  }, [CEP])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
        <Input />
        { 
          num
          ?  <Info data={num} />
          : 'Loading...'
          
        }
    </div>
  )
   
}

export default Home
