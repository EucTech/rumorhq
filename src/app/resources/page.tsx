import CustomersReviews from '@/components/CustomersReviews'
import HackathonGetMatched from '@/components/HackathonPage/HackathonGetMatched'
import HackathonHeroSection from '@/components/HackathonPage/HackathonHeroSection'
import HackathonInfoCard from '@/components/HackathonPage/HackathonInfoCard'
import HackathonServices from '@/components/HackathonPage/HackathonServices'
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
