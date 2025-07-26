import { assets, workData } from '../assets/assets'
import React, { useContext } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import { ContextDescription } from '../Context/DescriptionContext'
import { ContextProject } from '../Context/ProjectContext'
import {motion} from 'motion/react'
import { Image } from 'antd';
import Link from 'next/link'



export default function Work ()  {
  const {themeValue} = useContext(ContextTheme)
  const {getDescriptionBySection,loading} = useContext(ContextDescription)
  const {project} = useContext(ContextProject)
  
  
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1}}
    id='work'  className='w-full px-[10%] py-8 scroll-mt-20 '>
      <motion.h4
          initial={{opacity : 0, y:-20}}
          whileInView={{opacity : 1, y:0}}
          transition={{duration : 0.5, delay : 0.3}}
       className={`text-center mb-2 text-lg ${Styles.FontOvo} `}>My Portfolio</motion.h4>
      <motion.h2
    initial={{opacity : 0, y:-20}}
    whileInView={{opacity : 1, y:0}}
    transition={{duration : 0.5, delay : 0.5}}
      className={`text-center text-4xl ${Styles.FontOvo} `}>My latest work</motion.h2>
       <div className={`text-center max-w-2xl mx-auto mt-4 mb-8 ${Styles.FontOvo} `} >
       {  loading ? 
       <motion.p
          initial={{opacity : 0, y:-20}}
          whileInView={{opacity : 1, y:0}}
          transition={{duration : 0.5, delay : 0.7}}
       className={`${Styles.FontOvo} font-semibold text-1xl ${themeValue ? 'text-black' : 'text-white'} `}>Please wait...</motion.p> 
      : getDescriptionBySection('workShot')   }
      </div>
<motion.div 
         initial={{opacity : 0}}
          whileInView={{opacity : 1}}
          transition={{duration : 0.6, delay : 0.9}}

className="flex flex-wrap justify-center w-full gap-10 max-w-8xl mx-auto">
  {project.map((project, index) => (
        <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className={`w-full sm:w-[48%] lg:w-[23%] rounded-2xl overflow-hidden border border-gray-200 ${
                themeValue ? 'bg-gray-50' : 'bg-[#111827] border border-gray-400'
              } flex flex-col justify-between min-h-[350px]`}
            >
              {/* Project Image */}
              <div  >
                <Image
                  width={250}
                  height={170}
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-40 object-cover "
                />
              </div>

              {/* Card Content */}
              <div className=" p-4 flex flex-col justify-between h-full">
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
                  {project.description.length > 162
                    ? `${project.description.slice(0, 159)}...`
                    : project.description}
      
                </p>
            <div  className='mt-auto flex items-center justify-between pt-3'>
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
              <img src={(themeValue ? assets.github_icon : assets.github_icon_white).src }   alt="GitHub" className="w-4" />
            </a>
            <a
              href={project.LiveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-[0.2] rounded-full ${themeValue ? 'border-black' : 'border-white'} w-8 aspect-square flex items-center justify-center hover:bg-lime-300 transition ${Styles.ShadowWhite}`}
            >
              <img src={ (themeValue ? assets.send_icon : assets.send_icon_white).src} alt="Live Demo" className="w-4" />
            </a>
          </div>
                </div>
              </div>
            </motion.div>

    ))
  }
</motion.div>
       <motion.a
          initial={{opacity : 0}}
          whileInView={{opacity : 1}}
          transition={{duration : 0.5, delay : 1.1}}
       href={'./Projects'} className={`w-max flex items-center justify-center gap-2  border-[0.7px]  ${themeValue ?    'border-gray-700 text-gray-700 '   : 'border-gray-400 text-gray-400  '} rounded-full py-2 px-8 mx-auto  my-14 ${Styles.HoverLightHover}  duration-500`} >
        Show More <img  src={ (themeValue ?  assets.right_arrow_bold  : assets.right_arrow_white).src}  alt='Right Arrow'
        className='w-4'  
        />
       </motion.a>
    </motion.div>
  )
}
