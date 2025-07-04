'use client'
import About from '@/component/About'
import Contact from '@/component/Contact'
import Footer from '@/component/Footer'
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
      <Contact />
      <Footer />
    </div>
  )
}

export default page
