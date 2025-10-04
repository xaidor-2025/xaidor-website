import { Users, HandCoins, TvMinimalPlay, FolderOpenDot, MessagesSquare, Building2 } from 'lucide-react'

const features = [
    { icon: Users, text: "25 Students Per Batch" },
    { icon: HandCoins, text: "Affordable Pricing" },
    { icon: TvMinimalPlay, text: "Live Sessions" },
    { icon: FolderOpenDot, text: "15+ Practical Projets" },
    { icon: MessagesSquare, text: "Doubt Clearing Sessions" },
    { icon: Building2, text: "Premium Faculties" },
]

export default function Features() {
    return (

        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Xaidor?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Industry-leading features designed for your success</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                            <feature.icon className="w-12 h-12 mx-auto mb-3 text-[#EC5D50]" strokeWidth={1.5} />
                            <p className="text-sm font-medium text-gray-700">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}