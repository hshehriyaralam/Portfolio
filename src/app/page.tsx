'use client'
import About from '@/component/About'
import Hero from '@/component/Hero'
import Navbar from '@/component/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero  />
      <About />
    </div>
  )
}

export default page
