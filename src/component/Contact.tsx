import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import Styles from '../Styles/styles.module.css'


export default function Contact ()  {
    const [result, setResult] = useState('');

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
    <div  id='contact'  className='w-full px-[10%] py-8 scroll-mt-20  bg-[url("/footer-bg-color.png")]  bg-no-repeat bg-center bg-[length : 90%_auto]'>
      <h4 className={`text-center mb-2 text-lg ${Styles.FontOvo} `}>Contact with me</h4>
      <h2 className={`text-center text-4xl ${Styles.FontOvo} `}>Get in touch</h2>
       <p className={`text-center max-w-2xl mx-auto mt-4 mb-6 ${Styles.FontOvo} `} >I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below  </p>

       <form   onSubmit={onSubmit}  className='max-w-2xl mx-auto' >
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-10 mb-8 ' >
            <input type="text"
            placeholder='Enter your name'
            name='name'
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            />
            <input type="email" 
            placeholder='Enter your email'
            name='email'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'            
            />
        </div>
        <textarea rows={6} placeholder='Enter your message' required
        name='message'
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4'
        ></textarea>
        <button 
        className='py-2 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 '
        type='submit' >Submit now <Image  src={assets.right_arrow_white} alt='right_arrow' className='w-4' /> </button>
        <p  className='mt-4' >{result}</p>
       </form>
    </div>
  )
}


