import { useEffect, useRef, useState } from "react";
import {
  Check,
  Users,
  Sparkles,
  Zap,
  Award,
  Monitor,
  BookOpen,
  BrainCircuit,
  Rocket,
  GraduationCap,
  PhoneCall,
  Star,
  Clock,
  Shield,
  Globe,
  Image,
  Presentation,
} from "lucide-react";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

/* ── intersection observer fade-in ─────────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── animated counter ───────────────────────────────────────────── */
function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useFadeIn(0.3);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = Math.ceil(end / 40);
    const t = setInterval(() => {
      cur += step;
      if (cur >= end) {
        setVal(end);
        clearInterval(t);
      } else setVal(cur);
    }, 30);
    return () => clearInterval(t);
  }, [visible, end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── cert infinite scroller ─────────────────────────────────────── */
const softwares = [
  { name: "UK ACCREDITATION CERTIFICATION LIMITED", logo: "/assets/ukac.jpeg" },
  {
    name: "INTERNATIONAL QUALITY CERTIFICATION SERVICES",
    logo: "/assets/iqcs.jpeg",
  },
  { name: "MICRO, SMALL & MEDIUM ENTERPRISES", logo: "/assets/msme.jpeg" },
  { name: "ISO 9001:2015", logo: "/assets/iso.jpeg" },
];

function CertScroller() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    let id;
    const step = () => {
      c.scrollLeft += 1;
      if (c.scrollLeft >= c.scrollWidth / 2) c.scrollLeft = 0;
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div ref={ref} className="flex gap-5 overflow-x-hidden whitespace-nowrap">
      {[...softwares, ...softwares].map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-3 min-w-fit px-8 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="h-20 w-auto object-contain"
          />
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── data ───────────────────────────────────────────────────────── */
const curriculum = [
  { icon: <Zap size={18} />, label: "ChatGPT & Advanced AI Tools" },
  {
    icon: <BrainCircuit size={18} />,
    label: "Fundamentals of Prompt Engineering",
  },
  { icon: <BookOpen size={18} />, label: "AI Smart Study Techniques" },
  { icon: <Presentation size={18} />, label: "AI Presentation Tools" },
  { icon: <Monitor size={18} />, label: "AI for Productivity & Daily Tasks" },
  { icon: <Rocket size={18} />, label: "Future AI Career Awareness" },
];

const highlights = [
  {
    icon: <Globe size={22} />,
    title: "Live Online Classes",
    desc: "Join from anywhere in real time.",
  },
  {
    icon: <Zap size={22} />,
    title: "Practical Demonstrations",
    desc: "Hands-on with the latest AI tools.",
  },
  {
    icon: <Star size={22} />,
    title: "Real-world Examples",
    desc: "Learn through actual use-cases.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Easy Explanation",
    desc: "Simplified for all knowledge levels.",
  },
  {
    icon: <Award size={22} />,
    title: "ISO Certified Certificate",
    desc: "Industry-recognised on completion.",
  },
  {
    icon: <Users size={22} />,
    title: "Mentorship & Guidance",
    desc: "Get continuous support from experienced instructors.",
  },
];

const audience = [
  { icon: <GraduationCap size={26} />, label: "High School Students" },
  { icon: <BookOpen size={26} />, label: "Higher Secondary Students" },
  { icon: <Users size={26} />, label: "College Students" },
  { icon: <Sparkles size={26} />, label: "Anyone Interested in AI" },
];

const details = [
  {
    icon: <Monitor size={20} />,
    title: "Mode",
    value: "100% Online Live Classes",
  },
  {
    icon: <Clock size={20} />,
    title: "Batch",
    value: "Vacation Special – Limited Seats",
  },
  { icon: <Shield size={20} />, title: "Certificate", value: "ISO Certified" },
  {
    icon: <BrainCircuit size={20} />,
    title: "Support",
    value: "Guided Learning + Mentorship",
  },
];

/* ══════════════════════════════════════════════════════════════════ */
export default function VacationCourse() {
  const learnFade = useFadeIn();
  const highlightFade = useFadeIn();
  const audienceFade = useFadeIn();
  const detailsFade = useFadeIn();

  const fade = (v) =>
    `transition-all duration-700 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="bg-white text-gray-900 antialiased">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50 overflow-hidden py-24 px-6">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-[#EC5D50]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#EC5D50]/15 border border-[#EC5D50]/30 text-[#EC5D50] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Sparkles size={12} /> Vacation Special 2026
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Learn AI with XAIDOR.{" "}
            <span className="text-[#EC5D50]">Get Ahead with Technology of the Future.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Utilize your vacation to master Artificial Intelligence — the
            technology reshaping every career and classroom.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <button className="bg-[#EC5D50] hover:bg-[#d44a3d] text-white px-7 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EC5D50]/30">
              Register Now
            </button>
            <a
              href="#what-you-will-learn"
              className="border border-[#EC5D50]/20 hover:border-[#EC5D50]/50 text-[#EC5D50] px-7 py-3 rounded-xl font-medium transition-all hover:bg-[#EC5D50]/5"
            >
              View Curriculum
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { end: 50, suffix: "+", label: "Hours" },
              { end: 5, suffix: " +", label: "Modules" },
              { end: 100, suffix: "%", label: "Online & Live" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-7 py-4 text-center min-w-[130px]"
              >
                <div className="text-2xl font-bold text-[#EC5D50]">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      {/* ── WHAT YOU'LL LEARN ────────────────────────────────────── */}
      <section id="what-you-will-learn" className="py-24 px-6 bg-gray-50">
        <div
          ref={learnFade.ref}
          className={`${fade(learnFade.visible)} max-w-4xl mx-auto`}
        >
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-[#EC5D50] rounded-full mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              7 practical modules designed for the real world{" "}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {curriculum.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-100 hover:border-[#EC5D50]/40 px-5 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-sm group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#EC5D50]/8 rounded-lg text-[#EC5D50] group-hover:bg-[#EC5D50]/15 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-gray-700">
                  {item.label}
                </span>
                <Check
                  size={17}
                  className="text-[#EC5D50] ml-auto flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50">
        <div
          ref={highlightFade.ref}
          className={`${fade(highlightFade.visible)} max-w-5xl mx-auto`}
        >
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-[#EC5D50] rounded-full mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything designed to maximise your learning
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#EC5D50]/30 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#EC5D50] rounded-xl text-white mb-4 group-hover:scale-105 transition-transform">
                  {h.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div
          ref={audienceFade.ref}
          className={`${fade(audienceFade.visible)} max-w-4xl mx-auto`}
        >
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-[#EC5D50] rounded-full mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Join?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Open to everyone curious about AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audience.map((a, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 bg-white border border-gray-100 hover:border-[#EC5D50]/40 rounded-2xl py-8 px-4 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#EC5D50]/8 rounded-full text-[#EC5D50] group-hover:bg-[#EC5D50]/15 transition-colors">
                  {a.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE DETAILS ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#FEF3F2] via-red-50 to-pink-50">
        <div
          ref={detailsFade.ref}
          className={`${fade(detailsFade.visible)} max-w-4xl mx-auto`}
        >
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-[#EC5D50] rounded-full mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Course Details
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {details.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#EC5D50]/30 rounded-2xl p-6 transition-all hover:shadow-sm"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#EC5D50] rounded-xl text-white flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    {d.title}
                  </p>
                  <p className="font-semibold text-gray-800">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b1120] py-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#EC5D50]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#EC5D50]/15 border border-[#EC5D50]/30 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Rocket size={12} /> Admission Open Now
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Your AI Journey Starts{" "}
            <span className="text-[#EC5D50]">This Vacation</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Limited seats available. Join students across India who are
            future-proofing their skills.
          </p>

          <button className="bg-[#EC5D50] hover:bg-[#d44a3d] text-white px-10 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#EC5D50]/30 mb-8 block mx-auto">
            Register Now
          </button>

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <PhoneCall size={15} className="text-[#EC5D50]" />
            <span className="text-gray-400 text-sm">Contact:</span>
            <span className="text-white font-semibold text-sm">9744036814</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
