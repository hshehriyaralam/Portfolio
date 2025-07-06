'use client';
import React, { useEffect, useState } from 'react';
import About from '@/component/About';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import Hero from '@/component/Hero';
import Navbar from '@/component/Navbar';
import Services from '@/component/Services';
import Work from '@/component/Work';

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  return (
    <div>
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
