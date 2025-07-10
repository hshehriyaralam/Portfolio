import React from 'react'
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import Styles from '../../Styles/styles.module.css'


export default  function  AllProject(){
  return (
    <div  className='w-full px-[12%] py-8 scroll-mt-20'>
      <h2 className={`text-center text-4xl ${Styles.FontOvo} `}>All Projects</h2>
       <p className={`text-center max-w-2xl mx-auto mt-4 mb-8 ${Styles.FontOvo} `} >Explore my projects showcasing skills in Frontend, Backend, and Full Stack Development. Each reflects my focus on building scalable, responsive, and user-friendly applications with modern technologies.</p>

       <div  className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-8 gap-5'>
        {workData.map((project, index) => (
  <div
    key={index}
    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
    style={{ backgroundImage: `url(${project.bgImage})` }}
  >
    <div
      className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-2 flex items-center justify-between duration-500 group-hover:bottom-7"
    >
      <div className="pr-2">
        <h2 className="font-semibold text-black text-[15px]  ">{project.title}</h2>
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
          href={project.liveDemoLink}
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
