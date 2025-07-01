'use client'
import About from '@/component/About'
import Hero from '@/component/Hero'
import Navbar from '@/component/Navbar'
import Services from '@/component/Services'
import React from 'react'

const page = () => {
  return (
    <div >
      <Navbar />
      <Hero  />
      <About />
      <Services />
    </div>
  )
}

export default page
