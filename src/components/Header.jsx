import React from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({mobileMenuOpen, setMobileMenuOpen}) => {
  return (
    <nav className='border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-[#EC5D50]/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='text-2xl font-bold text-[#171F3D]'>
            <img draggable='false' src='./assets/logo-full-png.png' onClick={() => window.location.reload()} className='w-45 cursor-pointer select-none'/>
          </div>
          <div className='hidden md:flex space-x-8 text-sm font-medium'>
            <a href="#" className='hover:text-[#EC5D50]'>Home</a>
            <a href="#about" className='hover:text-[#EC5D50]'>About</a>
            <a href="#programs" className='hover:text-[#EC5D50]'>Programs</a>
            <a href="#features" className='hover:text-[#EC5D50]'>Features</a>
            <a href="#register" className='hover:text-[#EC5D50]'>Register</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden'>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
