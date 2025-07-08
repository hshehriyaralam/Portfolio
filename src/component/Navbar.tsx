import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets.js'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '@/Context/ThemeContext'


export default function Navbar ()  {

  const MenuRef = useRef<HTMLUListElement>(null)
  const [isScroll, setIsScroll] = useState(false)
  const {themeValue,changeTheme} = useContext(ContextTheme)

  const openMenu = () => {
    if(MenuRef.current){
        MenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

   const closeMenu = () => {
        if(MenuRef.current){
        MenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(scrollY >  50 ){
          setIsScroll(true)
        }else{
          setIsScroll(false)
        }
    })
  },[])
  return (
    <>
    <div className={`fixed top-0 right-0 w-10/12 -z-10 translate-y-[-80%]`}>
    <Image  src={assets.header_bg_color } alt='Header_Bg'   className='w-full'/>
    </div>
    <nav  className={`w-full fixed px-5  lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 
    ${isScroll ?  `${themeValue ?  `bg-white bg-opacity-50 backdrop-blur-lg shadow-sm` : `${Styles.DarkTheme} border-b border-gray-500  `}` : `` }
    
    
    `}
    
    >
        <a href="#top">
            <Image alt='Logo'  src={ themeValue ? assets.logo : assets.logo_dark}
            className='w-24 cursor-pointer mr-14 '
            />
        </a>

        <ul className={`hidden   md:flex items-center gap-6 lg:gap-8   ${!themeValue ? `${Styles.DarkTheme} border border-gray-500` : ''}}
        rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`} >
            <li><a className={`${Styles.FontOvo}`} href="#top">Home</a></li>
            <li><a className={`${Styles.FontOvo}`} href="#about">About me</a></li>
            <li><a className={`${Styles.FontOvo}`} href="#services">Services</a></li>
            <li><a className={`${Styles.FontOvo}`} href="#work">My Work</a></li>
            <li><a className={`${Styles.FontOvo}`} href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4 ' >
          <button onClick={changeTheme}  className='cursor-pointer'>
            <Image src={ themeValue ?  assets.moon_icon : assets.sun_icon} alt='Toggle' className='w-5' />
          </button>
            <a href="#contact"  className={`hidden  lg:flex items-center gap-3 px-8 py-2 border border-gray-400 rounded-full ml-4 ${Styles.FontOvo}`} >Contact <Image alt='arrow_icons'  src={themeValue ?  assets.arrow_icon  : assets.arrow_icon_dark }  
            className='w-3' /> </a>

            <button   className='block md:hidden ml-3  cursor-pointer' onClick={openMenu}>
            <Image src={assets.menu_black} alt='Menu_Button' className='w-5' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul  ref={MenuRef}
         className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 botom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div  className='absolute right-6 top-6'  onClick={closeMenu} >
            <Image src={assets.close_black} alt='close_icon' className='w-5 cursor-pointer' />
          </div>
            <li><a className={`${Styles.FontOvo}`} onClick={closeMenu} href="#top">Home</a></li>
            <li><a className={`${Styles.FontOvo}`} onClick={closeMenu} href="#about">About me</a></li>
            <li><a className={`${Styles.FontOvo}`} onClick={closeMenu} href="#services">Services</a></li>
            <li><a className={`${Styles.FontOvo}`} onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className={`${Styles.FontOvo}`} onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}


 