'use client'

import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import Styles from '../../Styles/styles.module.css'
import { ContextDescription } from '../../Context/DescriptionContext'
import { ContextTheme } from '../../Context/ThemeContext'
import { ContextProject } from '@/Context/ProjectContext'
import Link from 'next/link'

export default function AllProject() {
  const { getDescriptionBySection, loading } = useContext(ContextDescription)
  const { themeValue } = useContext(ContextTheme)
  const { project } = useContext(ContextProject)

  return (
    <div
      className={`w-full min-h-screen px-[6%] md:px-[10%] py-8 scroll-mt-20 pt-20 ${
        themeValue ? 'bg-white' : Styles.DarkTheme
      }`}
    >
      {/* Heading */}
      <h2
        className={`text-center text-4xl font-bold ${Styles.FontOvo} ${
          themeValue ? 'text-black' : 'text-white'
        }`}
      >
        All Projects
      </h2>

      {/* Description */}
      <div className={`text-center max-w-2xl mx-auto mt-4 mb-8 ${Styles.FontOvo}`}>
        {loading ? (
          <p
            className={`font-semibold text-lg ${
              themeValue ? 'text-black' : 'text-white'
            }`}
          >
            Please wait....
          </p>
        ) : (
          <p className={`${themeValue ? 'text-black' : 'text-gray-300'}`}>
            {getDescriptionBySection('workLong')}
          </p>
        )}
      </div>

      {/* Project Cards Grid */}
      <div className="w-full">
        <div
          className={`flex flex-wrap justify-center w-full gap-10 max-w-8xl mx-auto ${
            project.length < 4 ? 'justify-center' : ''
          }`}
        >
          {project.map((project, index) => (
            <div
              key={index}
              className={`w-full sm:w-[48%] lg:w-[23%] transform transition-all duration-800 hover:-translate-y-2 rounded-2xl overflow-hidden border border-gray-200 ${
                themeValue ? 'bg-gray-50' : 'bg-[#111827] border border-gray-400'
              }`}
            >
              {/* Project Image */}
              <div  >
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-40 object-cover "
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h2
                  className={`text-lg font-semibold mb-2 ${
                    themeValue ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {project.title}
                </h2>

                <p
                  className={`text-sm mb-2 ${
                    themeValue ? 'text-black font-normal' : 'text-gray-300'
                  }`}
                >
                  {project.description}
      
                </p>
            <div  className='flex  items-center justify-between mt-4 '>
            <div >
            <Link href={project.readmeLink}>
              <button
                className={`px-2 py-1.5 rounded-xl text-sm font-normal border cursor-pointer ${
                  themeValue
                    ? 'text-black border-black hover:bg-black hover:text-white'
                    : 'text-white border-white hover:bg-white hover:text-black'
                } transition duration-300`}
              >
                Read More
              </button>
            </Link>
          </div>
            <div className="flex items-center justify-end  gap-2 ">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-[0.2px] rounded-full ${themeValue ? 'border-black' : 'border-white'} w-8 aspect-square flex items-center justify-center hover:bg-gray-400 transition ${Styles.ShadowWhite}`}
            >
              <Image src={themeValue ? assets.github_icon : assets.github_icon_white }   alt="GitHub" className="w-4" />
            </a>
            <a
              href={project.LiveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-[0.2] rounded-full ${themeValue ? 'border-black' : 'border-white'} w-8 aspect-square flex items-center justify-center hover:bg-lime-300 transition ${Styles.ShadowWhite}`}
            >
              <Image src={ themeValue ? assets.send_icon : assets.send_icon_white} alt="Live Demo" className="w-4" />
            </a>
          </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
