import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import {motion} from 'motion/react'




export default function Services ()  {
      const {themeValue} = useContext(ContextTheme)

  return (
    <motion.div 
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1}}
    id='services' className='w-full px-[12%] py-8 scroll-mt-20' 
    >
      <motion.h4 
    initial={{opacity : 0, y:-20}}
    whileInView={{opacity : 1, y:0}}
    transition={{duration : 0.5, delay : 0.3}}
      className={`text-center mb-2 text-lg ${Styles.FontOvo} `}>What I offer </motion.h4>
      <motion.h2
      initial={{opacity : 0, y:-20}}
    whileInView={{opacity : 1, y:0}}
    transition={{duration : 0.5, delay : 0.5}}
      className={`text-center text-4xl ${Styles.FontOvo} `}>My Services</motion.h2>
      <motion.p
      initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 0.3, delay : 0.7}}
      className={`text-center max-w-2xl mx-auto mt-4 mb-8 ${Styles.FontOvo} `}>I offer professional Frontend, Backend, and Full Stack Development services to build modern, scalable, and high-quality web applications tailored to your needs.</motion.p>
      <motion.div
      initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 0.6, delay : 0.9}}
      className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]  gap-6 my-8 ' >
        {serviceData.map(({icon,title,description,link}, index) => (
          <motion.div
          whileHover={{scale : 1.05}}
           key={index}
          className={`border border-gray-400 rounded-lg px-8 py-10 ${Styles.ShadowBlack}  cursor-pointer  ${Styles.HoverLightHover} hover:-translate-y-1  duration-500 `}
          >
            <Image  src={icon} alt={title} className='w-10' />
            <h3 className={`text-lg my-4 ${themeValue ? 'text-gray-900' : 'text-gray-400'} `} >{title}</h3>
            <p className={`text-sm  leading-5  ${themeValue ? 'text-gray-900' : 'text-gray-400'} `} >
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 ' >
              Read more  <Image src={themeValue ? assets.right_arrow : assets.right_arrow_white} alt='right_arrow' className='w-4' />
            </a>
          </motion.div>
        ))}

      </motion.div>
    </motion.div >
  )
}

