import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div  id='services' className='w-full px-[12%] py-10 scroll-mt-20' >
      <h4 className='text-center mb-2 text-lg font-Ovo '>What I offer </h4>
      <h2 className='text-center text-4xl font-Ovo '>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ' >I am  a MERN Stack Developer from SMIT , Pakistan with 10 years experience in multiple campanies Like Kolachi, Atlas and Devsinc </p>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]  gap-6 my-10 ' >
        {serviceData.map(({icon,title,description,link}, index) => (
          <div key={index}
          className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer  hover:bg-[#fcf4ff] hover:-translate-y-1  duration-500 '
          >
            <Image  src={icon} alt={title} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 ' >{title}</h3>
            <p className='text-sm text-gray-600 leading-5 ' >
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 ' >
              Read more  <Image src={assets.right_arrow} alt='right_arrow' className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
