import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import { ContextDescription } from '../Context/DescriptionContext'
import {motion} from 'motion/react'




export default function About ()  {
      const {themeValue} = useContext(ContextTheme)
       const {getDescriptionBySection,loading} = useContext(ContextDescription)
      
  return (
    <motion.div 
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1}}
    className='w-full px-[12%] py-10   md:mt-0 scroll-mt-20'  id='about' >
      <motion.h4
    initial={{opacity : 0, y:-20}}
    whileInView={{opacity : 1, y:0}}
    transition={{duration : 0.5, delay : 0.5}}
      className={`text-center mb-2 text-lg ${Styles.FontOvo} `} >Introduction</motion.h4>
      <motion.h2
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1}}
      className={`text-center text-5xl ${Styles.FontOvo}`} >About me</motion.h2>

      <motion.div 
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 0.8}}
      className='flex w-full  lg:flex-row flex-col lg:items-center gap-8 my-6' >
        <motion.div
            initial={{opacity : 0, scale : 0.9}}
            whileInView={{opacity : 1, scale : 1}}
            transition={{duration : 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none ' >
          <Image src={assets.SHahmeer_user} alt='user_img'  className='w-full rounded-3xl ' />
        </motion.div>
        <motion.div
            initial={{opacity : 0}}
            whileInView={{opacity : 1}}
            transition={{duration : 0.6, delay :0.8}}
        
        className='flex-1' >
          <div className={`${Styles.FontOvo} `} >
       {  loading ? 
       <p  className={`${Styles.FontOvo} font-semibold text-2xl ${themeValue ? 'text-black' : 'text-white'} `}>Loading</p> 
      : getDescriptionBySection('about')   }
      </div>
          <motion.ul
              initial={{opacity : 0}}
              whileInView={{opacity : 1}}
              transition={{duration : 0.8, delay : 1}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-4' > 
            {infoList.map(({icon,iconDark,title,description}, index) => (
              <motion.li
               whileHover={{scale : 1.05}}
              
              key={index} className={`border-[0.5px] ${themeValue ? 'border-gray-400' : 'border-gray-200'}  rounded-xl p-6 cursor-pointer ${Styles.HoverLightHover}  hover:-translate-y-1 duration-500  ${Styles.ShadowBlack} `}
              >
                <Image src={themeValue ? icon : iconDark} alt={title}  className='w-7 mt-3 ' />
                <h3 className={`my-4 font-semibold   ${themeValue ? 'text-gray-700' : 'text-gray-400'}  `} >{title}</h3>
                <p  className={`   ${themeValue ? 'text-gray-900' : 'text-gray-400'}  text-sm`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
          initial={{y: 20,  opacity : 0}}
          whileInView={{y:0,opacity : 1}}
          transition={{delay : 1.3 ,duration : 0.5}}
          className={`my-4 ${themeValue ? 'text-gray-700' : 'text-gray-400'} ${Styles.FontOvo}`} >Tools I use</motion.h4>
          <motion.ul
          initial={{opacity : 0}}
          whileInView={{opacity : 1}}
          transition={{delay : 1.5,duration : 1}}
          className='flex items-center gap-3 sm:gap-5 ' >
            {toolsData.map((tool, index) => (
                tool ? (
                  <motion.li
                  whileHover={{scale : 1.1}}
                    key={index}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                  </motion.li>
                ) : null
              ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}


