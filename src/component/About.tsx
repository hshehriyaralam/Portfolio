import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import { ContextDescription } from '../Context/DescriptionContext'



export default function About ()  {
      const {themeValue} = useContext(ContextTheme)
       const {getDescriptionBySection,loading} = useContext(ContextDescription)
      
  return (
    <div className='w-full px-[12%] py-10  mt-15 md:mt-0 scroll-mt-20'  id='about' >
      <h4 className={`text-center mb-2 text-lg ${Styles.FontOvo} `} >Introduction</h4>
      <h2 className={`text-center text-5xl ${Styles.FontOvo}`} >About me</h2>

      <div  className='flex w-full  lg:flex-row flex-col lg:items-center gap-8 my-6' >
        <div  className='w-64 sm:w-80 rounded-3xl max-w-none ' >
          <Image src={assets.SHahmeer_user} alt='user_img'  className='w-full rounded-3xl ' />
        </div>
        <div className='flex-1' >
          <div className={`${Styles.FontOvo} `} >
       {  loading ? 
       <p  className={`${Styles.FontOvo} font-semibold text-1xl ${themeValue ? 'text-black' : 'text-white'} `}>Loading</p> 
      : getDescriptionBySection('about')   }
      </div>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-4' > 
            {infoList.map(({icon,iconDark,title,description}, index) => (
              <li key={index} className={`border-[0.5px] ${themeValue ? 'border-gray-400' : 'border-gray-200'}  rounded-xl p-6 cursor-pointer ${Styles.HoverLightHover}  hover:-translate-y-1 duration-500  ${Styles.ShadowBlack} `}
              >
                <Image src={themeValue ? icon : iconDark} alt={title}  className='w-7 mt-3 ' />
                <h3 className={`my-4 font-semibold   ${themeValue ? 'text-gray-700' : 'text-gray-400'}  `} >{title}</h3>
                <p  className={`   ${themeValue ? 'text-gray-900' : 'text-gray-400'}  text-sm`}>{description}</p>
              </li>
            ))}
          </ul>
          <h4 className={`my-4 ${themeValue ? 'text-gray-700' : 'text-gray-400'} ${Styles.FontOvo}`} >Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5 ' >
            {toolsData.map((tool, index) => (
                tool ? (
                  <li
                    key={index}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                  </li>
                ) : null
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


