import CreatorHeroSection from '@/components/CreatorPage/CreatorHeroSection'
import Gallery from '@/components/CreatorPage/Gallery'
import GlobalBrands from '@/components/CreatorPage/GlobalBrands'
import CreatorSteps from '@/components/CreatorPage/CreatorSteps'
import React from 'react'
import CreatorServices from '@/components/CreatorPage/CreatorServices'
import LetTalk from '@/components/LetTalk'

const page = () => {
  return (
    <div>
        <CreatorHeroSection/>
        <Gallery/>
        <GlobalBrands/>
        <CreatorSteps/>
        <CreatorServices/>
        <LetTalk/>
    </div>
  )
}

export default page