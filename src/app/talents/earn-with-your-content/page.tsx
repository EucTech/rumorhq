import DashboardSection from '@/components/TalentPage/EarnWithYourContent/DashboardSection'
import ServicesCard from '@/components/TalentPage/EarnWithYourContent/ServicesCard'
import SimpleStep from '@/components/TalentPage/EarnWithYourContent/SimpleStep'
import React from 'react'
import TalentHeroSection from '@/components/TalentPage/EarnWithYourContent/TalentHeroSection'
import GetStarted from '@/components/TalentPage/EarnWithYourContent/GetStarted'

const page = () => {
  return (
    <div>
      <TalentHeroSection/>
      <DashboardSection/>
      <SimpleStep/>
      <ServicesCard/>
      <GetStarted/>
    </div>
  )
}

export default page