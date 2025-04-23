import BrandsHeroSection from '@/components/BrandsPage/BrandsHeroSection'
import BrandsLetTalk from '@/components/BrandsPage/BrandsLetTalk'
import BrandsServices from '@/components/BrandsPage/BrandsServices'
import TestimonialGrid from '@/components/TestimonialGrid'
import React from 'react'

const page = () => {
  return (
    <div>
      <BrandsHeroSection/>
      <BrandsServices/>
      <TestimonialGrid/>
      <BrandsLetTalk/>
      {/* <BrandsGetMatched/>
      <BrandsInfoCard/> */}
    </div>
  )
}

export default page
