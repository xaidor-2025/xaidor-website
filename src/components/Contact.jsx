import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
              <a href="tel:7012818480" className="flex items-center gap-2 text-[#EC5D50] hover:text-[#E04336] font-medium transition-colors">
                <Phone size={24} />
                7012818480
              </a>
              <a href="mailto:xaidor2025@gmail.com" className="flex items-center gap-2 text-[#EC5D50] hover:text-[#E04336] font-medium transition-colors">
                <Mail size={24} />
                xaidor2025@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
