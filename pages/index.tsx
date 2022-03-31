import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'
import Script from 'next/script'
import { URLMAP } from '../modules/constants'

import { data } from '../controller'
import { Input } from '../components/input'

import { useState } from 'react'
import { Info } from '../components/Info'
import { NoCEP, NotFound } from '../components/fallback'

interface Data {
  data: object
}

const Home: NextPage<Data> = () => {
  const [num, setNum] = useState<any>()

  const getCEP = async (e:string) => {
    const cep = await data(e)
      setNum(cep);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find any address through a CEP</h1>
        <Input gettingCEP={getCEP} />
        { 
          !num
          ? <NoCEP />
          : !num?.error ? <Info data={num} /> : <NotFound />
        }
        <Script src={URLMAP} />
    </div>
  )
   
}

export default Home
