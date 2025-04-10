import BrandHeroSection from '@/components/BrandsPage/BrandHeroSection'
import DashboardSection from '@/components/BrandsPage/DashboardSection'
import GetStarted from '@/components/BrandsPage/GetStarted'
import InfoCard from '@/components/BrandsPage/InfoCard'
import ServicesCard from '@/components/BrandsPage/ServicesCard'
import SimpleStep from '@/components/BrandsPage/SimpleStep'
import React from 'react'

const page = () => {
  return (
    <div>
      <BrandHeroSection/>
      <DashboardSection/>
      <InfoCard/>
      <SimpleStep/>
      <ServicesCard/>
      <GetStarted/>
    </div>
  )
}

export default page