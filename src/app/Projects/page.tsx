'use client'

import React, { useContext } from 'react'
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import Styles from '../../Styles/styles.module.css'
import { ContextDescription } from '../../Context/DescriptionContext'
import { ContextTheme } from '../../Context/ThemeContext'
import { ContextProject } from '@/Context/ProjectContext'


export default  function  AllProject(){
  const {getDescriptionBySection,loading} = useContext(ContextDescription)
  const {themeValue} = useContext(ContextTheme)
  const {project} = useContext(ContextProject)
  
  return (
    <div  className={`w-full min-h-screen px-[12%] py-8 scroll-mt-20 pt-20  ${themeValue ? 'bg-transparent' : `${Styles.DarkTheme}`} `}>
      <h2 className={`text-center text-4xl ${Styles.FontOvo} `}>All Projects</h2>
       <div className={`text-center max-w-2xl mx-auto mt-4 mb-8 ${Styles.FontOvo} `} >
       {  loading ? 
       <p  className={`${Styles.FontOvo} font-semibold text-1xl ${themeValue ? 'text-black' : 'text-white'} `}>Loading</p> 
      : getDescriptionBySection('workLong')   }
      </div>
     <div className="flex flex-wrap  justify-center w-full gap-10 max-w-8xl mx-auto">
  {project.map((project, index) => (
    <div
      key={index}
      className="w-[90%] sm:w-[95%] md:w-[100%] max-w-[250px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
      <div
        className="bg-white border border-gray-300 w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-2 flex items-center justify-between duration-500 group-hover:bottom-7"
      >
        <div className="pr-2">
          <h2 className="font-semibold text-black text-[15px]">{project.title}</h2>
          <p className="text-sm text-gray-900">{project.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`border rounded-full border-black w-9 aspect-square flex items-center justify-center hover:bg-gray-400 transition ${Styles.ShadowWhite}`}
          >
            <Image src={assets.github_icon} alt="GitHub" className="w-4" />
          </a>
          <a
            href={project.LiveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`border rounded-full border-black w-9 aspect-square flex items-center justify-center hover:bg-lime-300 transition ${Styles.ShadowWhite}`}
          >
            <Image src={assets.send_icon} alt="Live Demo" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}
