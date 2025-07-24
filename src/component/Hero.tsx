import { assets } from '@/assets/assets.js'
import Image from 'next/image'
import React, { useContext } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import { ContextDescription } from "../Context/DescriptionContext"
import {motion} from 'motion/react'



export default function Hero ()  {
    const {themeValue} = useContext(ContextTheme)
    const {getDescriptionBySection,loading} = useContext(ContextDescription)

   
    
  
  return (
    <div className='w-11/12 max-w-3xl     text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
      <motion.div
      initial={{scale : 0}}
      whileInView={{scale : 1}}
      transition={{duration : 1.5 , type : 'spring', stiffness : 80}}
      >
        <Image src={assets.Shahmeer_logo} alt='Proile_Photo'  className='rounded-full w-28 ' />
      </motion.div>
      <motion.h3 
      initial={{y : -20, opacity:0}}
      whileInView={{y : 0, opacity:1}}
      transition={{duration : 0.6 , delay : 0.3}}
      className={`flex item-end gap-2 text-xl md:text-2xl mb-3 ${Styles.FontOvo} `}>
        Hi! I'm Shehriyar Alam <Image src={assets.hand_icon} alt='hand_icon' className='w-6' />
      </motion.h3>
      <motion.h1
      initial={{y : -30, opacity:0}}
      whileInView={{y : 0, opacity:1}}
      transition={{duration : 0.8 , delay : 0.5}}
      className={`text-3xl md:text-4xl lg:text-[66px]${Styles.FontOvo} `}>
        MERN Stack Developer  
      </motion.h1>
      <div className={`max-w-2xl mx-auto ${Styles.FontOvo} `} >
       {  loading ? 
       <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration : 0.6 , delay : 0.7}}
       className={`${Styles.FontOvo} font-semibold text-2xl ${themeValue ? 'text-black' : 'text-white'} `}>Loading</motion.p> 
      : getDescriptionBySection('hero')   }
      </div>
      <div  className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
      initial={{y : 30, opacity:0}}
      whileInView={{y : 0, opacity:1}}
      transition={{duration : 0.8 , delay : 1}}
        href="#contact"
        className={`px-8 py-2 border border-white rounded-full ${themeValue ? 'bg-black' : 'bg-transparent'}  bg-black  text-white flex items-center gap-2 `}
        >
        contact me <Image src={assets.right_arrow_white} alt=''  className='w-4' /> </motion.a>
        <motion.a 
        initial={{y : -30, opacity:0}}
      whileInView={{y : 0, opacity:1}}
      transition={{duration : 0.8 , delay : 1.2}}
        href="/ShehriyarAlamResume.pdf" download
        className='px-8 py-2 border rounded-full border-gary-500 flex items-center gap-2 '
        >my resume <Image src={   assets.download_icon } alt='Cv'  className='w-4' /> </motion.a>
      </div>
    </div>
  )
}

