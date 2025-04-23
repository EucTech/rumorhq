import TalentGetStarted from '@/components/TalentPage/TalentPool/TalentGetStarted'
import TalentPoolHeroSection from '@/components/TalentPage/TalentPool/TalentPoolHeroSection'
import TalentVideo from '@/components/TalentPage/TalentPool/TalentVideo'
import React from 'react'

const page = () => {
  return (
    <div>
        <TalentPoolHeroSection/>
        <TalentVideo/>
        <TalentGetStarted/>
    </div>
  )
}

export default page