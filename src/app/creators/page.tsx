import CreatorHeroSection from '@/components/CreatorPage/CreatorHeroSection'
import GlobalBrands from '@/components/CreatorPage/GlobalBrands'
import CreatorSteps from '@/components/CreatorPage/CreatorSteps'
import React from 'react'
import CreatorServices from '@/components/CreatorPage/CreatorServices'
import FAQS from '@/components/FAQS'
import CreatorsVideos from '@/components/CreatorPage/CreatorsVideos'

const page = () => {
  return (
    <div>
        <CreatorHeroSection/>
        <CreatorsVideos/>
        <GlobalBrands/>
        <CreatorSteps/>
        <CreatorServices/>
        <FAQS/>
    </div>
  )
}

export default page