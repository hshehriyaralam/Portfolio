'use client'
import About from '@/component/About'
import Hero from '@/component/Hero'
import Navbar from '@/component/Navbar'
import Services from '@/component/Services'
import Work from '@/component/Work'
import React from 'react'

const page = () => {
  return (
    <div >
      <Navbar />
      <Hero  />
      <About />
      <Services />
      <Work />
    </div>
  )
}

export default page
