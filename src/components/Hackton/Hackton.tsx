import React from 'react'
import HacktonBanner from './HacktonBanner'
import HacktonCard from './HacktonCard'
import { HacktonsData } from '@/utils/dummyData'

const Hackton = () => {
  return (
    <div className='w-full px-5 sm:px-10 bg-[#fff] pb-10'>
      <HacktonBanner />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 mt-10'>
        {HacktonsData.map((hackton: HacktonProps, index: number) => (
        <HacktonCard key={index} hackton={hackton} />
      ))}
      </div>
    </div>
  )
}

export default Hackton
