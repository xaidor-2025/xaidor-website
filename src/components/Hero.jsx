import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Brain, Cpu, Bot, CircuitBoard, Atom, BotIcon } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen flex items-start pt-20 md:items-center md:pt-0"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50"></div>

      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Brain className="absolute top-10 left-4 sm:left-20 w-8 h-8 sm:w-14 sm:h-14 text-[#F4706B] animate-float-1" />
        <Cpu className="absolute top-40 left-1/3 w-6 h-6 sm:w-10 sm:h-10 text-pink-400 animate-float-2" />
        <Bot className="absolute bottom-32 left-6 sm:left-24 w-10 h-10 sm:w-16 sm:h-16 text-red-400 animate-float-3" />
        <CircuitBoard className="absolute top-1/4 right-4 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 text-[#EC5D50] animate-float-2" />
        <Atom className="absolute bottom-20 right-8 sm:right-40 w-8 h-8 sm:w-14 sm:h-14 text-pink-500 animate-float-1" />
        <Cpu className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 text-[#F89894] animate-float-3" />
        <Brain className="absolute bottom-10 left-1/2 w-6 h-6 sm:w-10 sm:h-10 text-red-300 animate-float-2" />
        <Bot className="absolute top-16 right-1/3 w-8 h-8 sm:w-12 sm:h-12 text-pink-400 animate-float-1" />
        <CircuitBoard className="absolute bottom-1/3 right-2 sm:right-10 w-8 h-8 sm:w-14 sm:h-14 text-[#F4706B] animate-float-3" />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div
            data-aos="fade-right"
            className="relative z-10 order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-block mb-4">
              <span className="bg-[#FDE8E6] text-[#E04336] font-['montserrat'] px-4 py-1 border border-[#FAC0BD] rounded-full text-md md:text-lg font-medium">
                Your Intelligent Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6">
              <span className="text-gray-900 text-[30px] md:text-[40px] lg:text-[45px]">Empowering Students with</span>
              <br />
              <span className="text-[#EC5D50]">AI Skills for Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn AI · Build Projects · Get Certified
            </p>
          </div>

          {/* Right big image */}
          <div
            data-aos="zoom-in"
            className="relative flex justify-center z-10 order-1 md:order-2 scale-80 md:scale-100 lg:scale-130"
          >
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAC0BD] to-pink-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img src="/hero.png" alt="Hero Image" className="relative w-54" />
                {/* <BotIcon
                  className="relative w-48 h-48 text-[#EC5D50]"
                  strokeWidth={1.5}
                /> */}
              </div>
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
