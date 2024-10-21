import type { NextPage } from 'next'
import Script from 'next/script'
import { URLMAP } from '../modules/constants'

import { data } from '../controller'
import { Input } from '../components/input'

import { useState } from 'react'
import { Info } from '../components/Info'
import { NoZipCode, NotFound } from '../components/fallback'
import { IData, IInfoData } from '../types'
import { ContainerSection, TitleSection } from '../styles'

const Home: NextPage<IData> = () => {
  const [zipCodeNum, setZipCodeNum] = useState<IInfoData>()

  const getZipCode = async (event:string) => {
    const isZipCode = await data(event)
    setZipCodeNum(isZipCode);
  }

  const toRenderInfo = () => !zipCodeNum?.error ? <Info data={zipCodeNum} /> : <NotFound />

  return (
    <ContainerSection>
      <TitleSection>Find any address through a Zip Code</TitleSection>
        <Input gettingCEP={getZipCode} />
        { !zipCodeNum ? <NoZipCode /> : toRenderInfo() }
        <Script src={URLMAP} />
    </ContainerSection>
  )
   
}

export default Home
