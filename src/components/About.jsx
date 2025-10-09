import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left image animation */}
                    <div
                        data-aos="fade-right"
                        className="aspect-square bg-gradient-to-br from-[#FDE8E6] to-pink-100 rounded-3xl overflow-hidden shadow-xl"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-[#FAC0BD] to-[#F89894] flex items-center justify-center">
                            <div className="text-center">
                                <img
                                    src="https://ik.imagekit.io/shadick/moosa_ck.png"
                                    className="max-w-[280px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[400px] w-full mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right text animation */}
                    <div data-aos="fade-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet the Founder</h2>
                        <h3 className="text-2xl font-semibold mb-2 text-[#EC5D50]">Moosa CK</h3>
                        <p className="text-lg text-gray-600 mb-6">Founder and CEO</p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Leading Kerala's AI revolution with affordable, practical education.
                            Committed to making cutting-edge AI technology accessible to everyone
                            through hands-on learning and real-world projects.
                        </p>
                        <div className="flex gap-4">
                            <a href="tel:7012818480" className="text-[#EC5D50] hover:text-[#E04336] font-medium">
                                Contact →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About