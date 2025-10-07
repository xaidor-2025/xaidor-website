import React from 'react'
import { useState } from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Programs from '../components/Programs'
import About from '../components/About'
import RegisterForm from '../components/RegisterForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Features from '../components/Features';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
    <div className='min-h-screen bg-white'>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {mobileMenuOpen && (
          <div className='md:hidden bg-white border-b border-ray-200 px-4 py-3 space-y-1'>
            <a href="#home" className='block px-3 py-2'>Home</a>
            <a href="#about" className='block px-3 py-2'>About</a>
            <a href="#programs" className='block px-3 py-2'>Programs</a>
            <a href="#features" className='block px-3 py-2'>Features</a>
            <a href="#register" className='block px-3 py-2'>Register</a>
          </div>
      )}
      <Hero />
      <Features />
      <Programs />
      <About />
      <RegisterForm />
      <Contact />
      <Footer />
    </div>
  )
}