import React from 'react'
import { Check } from 'lucide-react'

const programs = [
    {
        title: 'Agentic AI Engineer Program',
        duration: '4 Months',
        price: '₹14,999/-',
        value: 'agentic',
        features: [
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Live Sessions' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Doubt Clearing Sessions' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Premium Faculties' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: '15+ Real-World Projects' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Resume Building' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: '100% Placement Assistance' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Premium Faculties' },
        ]
    },
    {
        title: 'Applied Python + Agentic AI Engineer Program',
        duration: '7 Months',
        price: '₹19,999/-',
        value: 'python',
        features: [
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Live Sessions' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Doubt Clearing Sessions' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Premium Faculties' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: '20+ Real-World Projects' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Resume Building' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: '100% Placement Assistance' },
            { icon: <Check size={16} className='text-[#EC5D50]' />, text: 'Premium Faculties' },
        ],
        popular: true
    }
]
const Programs = () => {
    return (
        <section id="programs" className="py-20 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Flexible learning paths tailored to your goals</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programs.map((program, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${program.popular ? 'ring-2 ring-[#EC5D50]' : ''}`}>
                            {program.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC5D50] text-white px-6 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
                            <div className="space-y-2 mb-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Check size={18} className="text-[#EC5D50]" />
                                    <span>Duration: {program.duration}</span>
                                </div>
                                <div className="space-y-2 mb-6 text-gray-600">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        {feature.icon}
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                            </div>
                            <div className="text-4xl font-bold mb-6 text-[#EC5D50]">{program.price}</div>
                            <a href="#register" className={`block w-full py-3 rounded-lg font-medium text-center transition-colors ${program.popular ? 'bg-[#EC5D50] text-white hover:bg-[#E04336]' : 'border-2 border-[#EC5D50] text-[#EC5D50] hover:bg-[#FEF3F2]'}`}>
                                Enroll Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programs
