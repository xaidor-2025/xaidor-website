import { useEffect, useRef } from "react";

const softwares = [
  { name: "UK ACKREDITERING CERTIFICATION LIMITED", logo: "/assets/ukac.jpeg" },
  { name: "INTERNATIONAL QUALITY CERTIFICATION SERVICES", logo: "/assets/iqcs.jpeg" },
  { name: "MICRO, SMALL & MEDIUM ENTERPRISES", logo: "/assets/msme.jpeg" },
  { name: "ISO 9001:2015", logo: "/assets/iso.jpeg" },
];

export default function Certifications() {
  const scrollRef = useRef();

  // Auto scroll effect
  useEffect(() => {
    const container = scrollRef.current;

    let scrollAmount = 0;

    const slide = () => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft += 1;

      // reset for infinite loop feel
      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50">
      <div className="mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certified by Industry Standards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality, reliability and excellence
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap"
        >
          {[...softwares, ...softwares].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-fit px-6 py-4 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-24 w-auto object-contain"
              />
              <span className="text-gray-700 font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}