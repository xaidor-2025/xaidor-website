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

    const handleMenuClick = () => {
      setMobileMenuOpen(false);
    };

    return (
    <div className='min-h-screen bg-white'>
      {/* Sticky Header and Menu Container */}
      <div className='sticky top-0 z-50 shadow-sm'>
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-gradient-to-br from-[#FEF3F2] to-pink-50 border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
        <div className='px-4 py-3 space-y-1'>
          <a 
            href="#" 
            onClick={handleMenuClick}
            className='block px-4 py-3 text-gray-700 hover:bg-white hover:text-[#EC5D50] rounded-lg transition-colors duration-200 font-medium'
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={handleMenuClick}
            className='block px-4 py-3 text-gray-700 hover:bg-white hover:text-[#EC5D50] rounded-lg transition-colors duration-200 font-medium'
          >
            About
          </a>
          <a 
            href="#programs" 
            onClick={handleMenuClick}
            className='block px-4 py-3 text-gray-700 hover:bg-white hover:text-[#EC5D50] rounded-lg transition-colors duration-200 font-medium'
          >
            Programs
          </a>
          <a 
            href="#features" 
            onClick={handleMenuClick}
            className='block px-4 py-3 text-gray-700 hover:bg-white hover:text-[#EC5D50] rounded-lg transition-colors duration-200 font-medium'
          >
            Features
          </a>
          <a 
            href="#register" 
            onClick={handleMenuClick}
            className='block px-4 py-3 text-gray-700 hover:bg-white hover:text-[#EC5D50] rounded-lg transition-colors duration-200 font-medium'
          >
            Register
          </a>
        </div>
      </div>
      </div>

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