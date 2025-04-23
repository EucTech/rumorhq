import { Images } from '@/assets'
import Image from 'next/image'
import React from 'react'

const DashboardSection = () => {
  return (
    <div className='w-full h-full bg-[#000] flex items-center justify-center'>
    
      <Image src={Images.dashbaord} alt='dashboard image' width={2000} height={2000} className=' size-[90%] sm:size-[80%]' />
    </div>
  )
}

export default DashboardSection
