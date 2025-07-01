import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work'  className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo '>My Portfolio</h4>
      <h2 className='text-center text-4xl font-Ovo '>My latest work</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ' >I am  a MERN Stack Developer from SMIT , Pakistan with 10 years experience in multiple campanies Like Kolachi, Atlas and Devsinc </p>

       <div  className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
        {workData.map((project,index) => (
            <div
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '
             key={index}
             style={{backgroundImage : `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700 ' >{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]  group-hover:bg-lime-300 transaction' >
                    <Image src={assets.send_icon} alt='sned_icon'  className='w-5 ' />
                </div>
                </div>
            </div>
        ))}
       </div>
       <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.7px] border-gray-700 rounded-full py-3 px-10 mx-auto  my-20 hover:bg-[#fcf4ff]  duration-500  ' >
        Show More <Image  src={assets.right_arrow_bold}  alt='Right Arrow'
        className='w-4'
        />
       </a>
    </div>
  )
}

export default Work
