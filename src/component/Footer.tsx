import { assets } from '../assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ContextTheme } from '../Context/ThemeContext'

export default function Footer ()  {
        const {themeValue} = useContext(ContextTheme)
  
  return (
    <div  className='mt-10'>
      <div  className='text-center '>
        <Image src={ themeValue ? assets.Shehriyar_logo : assets.Shehriyar_logo_white} alt=''  className='w-30 mx-auto mb-2 ' />
        <div  className='w-max flex items-center gap-2 mx-auto '>
            <Image src={assets.mail_icon} alt='' className='w-4' />
            hshehriyaralam@gmail.com
        </div>
      </div>
      <div  className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-6 py-4'>
        <p>@ 2025 Shehriyar Alam. All rights reserved</p>
        <ul  className='flex items-center gap-8 justify-center mt-4 sm:mt-0 ' >
            <li><a  target='_blank' href="https://github.com/hshehriyaralam">Github</a></li>
            <li><a  target='_blank' href="https://www.linkedin.com/in/hafiz-shehriyar-alam-4178642bb/">LinkedIn</a></li>
            <li><a  target='_blank' href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-notifcenter">Indeed</a></li>
        </ul>
      </div>
    </div>
  )
}
