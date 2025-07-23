'use client'

import React, { useContext } from 'react'
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import Styles from '../../Styles/styles.module.css'
import { ContextDescription } from '../../Context/DescriptionContext'
import { ContextTheme } from '../../Context/ThemeContext'
import { ContextProject } from '@/Context/ProjectContext'
import Link from 'next/link'


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
<div className="flex flex-wrap justify-center w-full gap-10 max-w-8xl mx-auto ">
  {project.length === 0 ? (
    <p className="text-center text-xl font-semibold text-gray-500">No projects found.</p>
  ) : (
    project.map((project, index) => (
   <div
   key={index}
   className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="px-6 py-4">
        {/* Project Title */}
        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vitae aspernatur optio expedita consequatur ad amet earum odit, nemo error laborum veniam laudantium blanditiis explicabo unde iste perferendis odio asperiores.
        </p>
      </div>

      {/* Buttons */}
      <div className="px-6 pt-2 pb-4 flex flex-wrap gap-3">
        <Link
          href={project.LiveDemo}
          target="_blank"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
        >
          Live Demo
        </Link>
        <Link
          href={project.githubLink}
          target="_blank"
          className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 text-white text-sm font-medium rounded-md transition-colors duration-300"
        >
          View Code
        </Link>
      </div>
    </div>
    ))
  )}
</div>
    </div>
  )
}
