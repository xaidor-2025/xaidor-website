import { Play, PlayCircle } from "lucide-react";
import { useState } from "react";

const stories = [
  { video: "https://ik.imagekit.io/xaidor/video-11.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-10.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-6.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-2.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-3.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-4.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-5.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-9.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-8.mp4" },
  { video: "https://ik.imagekit.io/xaidor/video-7.mp4" },
];

export default function Highlights() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential{" "}
            <span className="text-[#EC5D50] font-medium">insights</span> into
            why AI is the most critical skill of this decade.{" "}
          </p>
        </div>

        {/* GRID */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start"
        >
          {stories.map((story, i) => (
            <div
              key={i}
              className={`group
            
          `}
              // ${i < 5 && i % 2 !== 0 ? "mt-12" : "mt-0"}
              //   ${i >= 5 && i < 10 && (i === 6 || i === 8 || i === 10) ? "mt-12" : "mt-0"}
            >
              {/* VIDEO */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <video
                  src={story.video}
                  loop
                  playsInline
                  controls
                  className="w-full aspect-[9/16] object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {!isPlaying && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/80 cursor-pointer rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
                        <PlayCircle size={24} className="text-[#EC5D50]" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
