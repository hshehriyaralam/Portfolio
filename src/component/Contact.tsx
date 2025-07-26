import { assets } from '../assets/assets'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Styles from '../Styles/styles.module.css'
import { ContextTheme } from '../Context/ThemeContext'
import {motion} from 'motion/react'




export default function Contact ()  {
    const [result, setResult] = useState('')
    const {themeValue} = useContext(ContextTheme)
    

  const onSubmit = async (event : any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e2236475-6dc8-451f-bf80-4278990d1195");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{ y : -20, opacity : 0}}
    whileInView={{y:0,opacity : 1}}
    transition={{duration : 0.5, delay :  0.3}}
    id='contact'  className={`w-full px-[12%] py-8 scroll-mt-20  ${themeValue ? `bg-[url("/footer-bg-color.png")]`   : 'bg-transparent' }   bg-no-repeat bg-center bg-[length : 90%_auto]`}>
      <motion.h4
     initial={{ y : -20, opacity : 0}}
    whileInView={{y:0,opacity : 1}}
    transition={{duration : 0.5, delay :  0.3}}
      className={`text-center mb-2 text-lg ${Styles.FontOvo} `}>Contact with me</motion.h4>
      <motion.h2 
    initial={{ y : -20, opacity : 0}}
    whileInView={{y:0,opacity : 1}}
    transition={{duration : 0.5, delay :  0.5}}
      className={`text-center text-4xl ${Styles.FontOvo} `}>Get in touch</motion.h2>
       <motion.p   
     initial={{  opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 0.5, delay :  0.7}}
    className={`text-center max-w-3xl mx-auto mt-4 mb-6 ${Styles.FontOvo} `} >I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below  </motion.p>

       <motion.form 
     initial={{  opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 0.5, delay :  0.9}}
       onSubmit={onSubmit}  className='max-w-2xl mx-auto' >
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-10 mb-8 ' >
            <motion.input
                initial={{ x : -50, opacity : 0}}
                whileInView={{x:0,  opacity : 1}}
                transition={{duration : 0.6, delay :  1.1}}
            type="text"
            placeholder='Enter your name'
            name='name'
            required 
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  ${themeValue ? 'bg-white'  : 'bg-transparent '} `}
            />
            <motion.input
                initial={{ x : 50, opacity : 0}}
                whileInView={{x:0,  opacity : 1}}
                transition={{duration : 0.6, delay :  1.2}}
            type="email" 
            placeholder='Enter your email'
            name='email'
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${themeValue ? 'bg-white'  : 'bg-transparent '}`}            
            />
        </div>
        
        <textarea
    
                rows={6} placeholder='Enter your message' required
                name='message'
                className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-4  ${themeValue ? 'bg-white'  : 'bg-transparent '} `}
                ></textarea>
              
        <motion.button 
        whileHover={{scale : 1.05}}
        transition={{duration : 0.3}}
        className={`py-2 px-6  flex items-center justify-between gap-2  ${themeValue ?  'bg-black/80 ' : 'bg-transparent border border-gray-700'}  text-white rounded-full mx-auto hover:bg-black duration-500 `}
        type='submit' >Submit now <Image  src={assets.right_arrow_white} alt='right_arrow' className='w-4' /> </motion.button>
        <p className={`mt-4  ${themeValue ? 'text-gray-900' : 'text-gray-400'}  `} >{result}</p>
       </motion.form>
    </motion.div>
  )
}


