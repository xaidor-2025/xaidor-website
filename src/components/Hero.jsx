import { Brain, Cpu, Bot, CircuitBoard, Atom, BotIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>

      {/* Fixed background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Brain className="absolute top-10 left-20 w-14 h-14 text-[#F4706B] animate-float-1" />
        <Cpu className="absolute top-40 left-1/3 w-10 h-10 text-pink-400 animate-float-2" />
        <Bot className="absolute bottom-32 left-24 w-16 h-16 text-red-400 animate-float-3" />
        <CircuitBoard className="absolute top-1/4 right-20 w-12 h-12 text-[#EC5D50] animate-float-2" />
        <Atom className="absolute bottom-20 right-40 w-14 h-14 text-pink-500 animate-float-1" />
        <Cpu className="absolute top-1/2 left-1/4 w-12 h-12 text-[#F89894] animate-float-3" />
        <Brain className="absolute bottom-10 left-1/2 w-10 h-10 text-red-300 animate-float-2" />
        <Bot className="absolute top-16 right-1/3 w-12 h-12 text-pink-400 animate-float-1" />
        <CircuitBoard className="absolute bottom-1/3 right-10 w-14 h-14 text-[#F4706B] animate-float-3" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-[#FDE8E6] text-[#E04336] px-4 py-2 border border-[#FAC0BD] rounded-full text-lg font-medium">
                Kerala's Most Affordable
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Agentic AI</span>
              <br />
              <span className="text-[#EC5D50]">Engineer Program</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn AI · Build Projects · Get Certified
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#register"
                className="bg-[#EC5D50] text-white px-8 py-3 rounded-lg hover:bg-[#E04336] font-medium"
              >
                Enroll Now
              </a>
              <a
                href="#programs"
                className="border-2 border-[#EC5D50] text-[#EC5D50] px-8 py-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                View Programs
              </a>
            </div>
          </div>

          {/* Right big image */}
          <div className="relative flex justify-center z-10">
            <div className="relative">
              {/* Main central icon with glow */}
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAC0BD] to-pink-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <BotIcon className="relative w-48 h-48 text-[#EC5D50]" strokeWidth={1.5} />
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute top-0 left-0 w-full h-full">
                <Brain className="absolute -top-6 -right-6 w-16 h-16 text-pink-500 bg-white rounded-2xl p-3 shadow-xl animate-float-1" />
                <Cpu className="absolute -bottom-6 -left-6 w-16 h-16 text-[#EC5D50] bg-white rounded-2xl p-3 shadow-xl animate-float-2" />
                <CircuitBoard className="absolute top-1/2 -right-12 w-14 h-14 text-red-500 bg-white rounded-2xl p-2.5 shadow-xl animate-float-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}