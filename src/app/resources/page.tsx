import CustomersReviews from '@/components/CustomersReviews'
import HackathonGetMatched from '@/components/BrandsPage/BrandsGetMatched'
import HackathonHeroSection from '@/components/BrandsPage/BrandsHeroSection'
import HackathonInfoCard from '@/components/BrandsPage/BrandsInfoCard'
import HackathonServices from '@/components/BrandsPage/BrandsServices'
import LetTalk from '@/components/LetTalk'
import React from 'react'

const page = () => {
  return (
    <div>
      <HackathonHeroSection/>
      <HackathonServices/>
      <HackathonInfoCard/>
      <HackathonGetMatched/>
      <CustomersReviews/>
      <LetTalk/>
    </div>
  )
}

export default page
