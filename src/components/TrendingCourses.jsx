import { useRef } from "react";
import { ChevronLeft, ChevronRight, Timer } from "lucide-react";

const courses = [
  {
    title: "Agentic AI Engineer Program",
    duration: "4 Months",
    type: "Online",
    image: "/assets/course-1.png",
  },
  {
    title: "Applied Python + Agentic AI Engineer Program",
    duration: "7 Months",
    type: "Online",
    image: "/assets/course-2.png",
  },
  {
    title: "XAIDOR AI Career Accelerator Program",
    duration: "50 Hours",
    type: "Online | Offline",
    image: "/assets/course-3.png",
  },
  {
    title: "Vacation Special AI Course",
    duration: "",
    type: "Online",
    image: "/assets/course-4.png",
  },
  {
    title: "Agentic AI Engineer Program",
    duration: "4 Months",
    type: "Offline",
    image: "/assets/course-1.png",
  },
  {
    title: "XAIDOR Power Learn (Intensive AI Add-on course)",
    duration: "60 Hours",
    type: "Online | Offline",
    image: "/assets/course-5.png",
  },
];

export default function TrendingCourses() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Program
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible learning paths tailored to your goals
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:shadow-lg"
          >
            <ChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:shadow-lg"
          >
            <ChevronRight />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-6 scroll-smooth no-scrollbar"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="relative min-w-[350px] max-w-[350px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EC5D50] text-white px-5 py-1 rounded-full text-xs font-medium shadow">
                  {course.type}
                </div>

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-60 object-contain mx-auto mb-5"
                />

                <p className="text-sm text-gray-500 mb-1">
                  Advanced Training Course in
                </p>

                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">
                  {course.title}
                </h3>

                {/* <p className="font-semibold text-[#EC5D50] text-lg">
                  {course.duration}
                </p> */}

                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1"><Timer className="size-4" />{course.duration}</p>

                <button className="mt-4 w-full py-2 rounded-lg font-medium text-white bg-[#EC5D50] hover:bg-[#E04336] transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
