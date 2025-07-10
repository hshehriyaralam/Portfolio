'use client';
import React, { useContext, useEffect, useState } from 'react';
import About from '@/component/About';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import Hero from '@/component/Hero';
import Navbar from '@/component/Navbar';
import Services from '@/component/Services';
import Work from '@/component/Work';
import {ContextTheme}  from "@/Context/ThemeContext"
import Styles from '../Styles/styles.module.css'



export default function Page() {
    const {themeValue,changeTheme} = useContext(ContextTheme)  
  return (
    <div  className={`w-full h-min-screen ${themeValue ? 'bg-transparent' : Styles.DarkTheme    }`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
