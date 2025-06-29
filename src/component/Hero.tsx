import { assets } from '@/assets/assets.js'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center  gap-4 '>
      <div>
        <Image src={assets.profile_img} alt='Proile_Photo'  className='rounded-full w-32 ' />
      </div>
      <h3  className='flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>
        Hi! I'm Shehriyar Alam <Image src={assets.hand_icon} alt='hand_icon' className='w-6' />
      </h3>
      <h1  className='text-3xl sm"text-6xl lg:text-[66px]  font-Ovo '>
        MERN Stack Developer  
      </h1>
      <p  className='max-w-2xl mx-auto font-Ovo ' >
        I'm a passionate MERN Stack Developer with a strong specialty in Frontend Development. I have extensive experience working with modern JavaScript frameworks and libraries, focused on building responsive, scalable, and high-performance web applications.
      </p>
      <div  className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '
        >
        contact me <Image src={assets.right_arrow_white} alt=''  className='w-4' /> </a>
        <a href="/ShehriyarAlamResume.pdf" download
        className='px-10 py-3 border rounded-full border-gary-500 flex items-center gap-2 '
        >my resume <Image src={assets.download_icon} alt='Cv'  className='w-4' /> </a>
      </div>
    </div>
  )
}

export default Hero
