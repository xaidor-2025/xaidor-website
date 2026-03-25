import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* LOGO + ABOUT */}
          <div>
            <a href="/"><h2 className="text-xl font-bold text-gray-900 mb-3">XAIDOR</h2></a>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Building future-ready AI professionals with practical,
              industry-focused learning experiences.
            </p>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Xaidor. All rights reserved.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-[#EC5D50] mt-1" />
                <span>Vengara, Kerala, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="size-4 text-[#EC5D50]" />
                <span>info@xaidor.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[#EC5D50]" />
                <span>+91 9744036814</span>
              </div>
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Courses</h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#EC5D50] cursor-pointer">
                Agentic AI Engineer Program
              </li>
              <li className="hover:text-[#EC5D50] cursor-pointer">
                XAIDOR AI Career Accelerator Program
              </li>
              <li className="hover:text-[#EC5D50] cursor-pointer">
                Vacation Special AI Course
              </li>
              <li className="hover:text-[#EC5D50] cursor-pointer">
                XAIDOR Power Learn (Intensive AI Add-on course)
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/xai_dor/"
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <Instagram className="text-[#EC5D50]" />
              </a>

              <a
                href="https://www.facebook.com/share/1GjFudWK2E/?mibextid=wwXIfr"
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <Facebook className="text-[#EC5D50]" />
              </a>

              <a
                href="https://www.linkedin.com/company/xaidor/"
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <Linkedin className="text-[#EC5D50]" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbC8EOV5K3zNiRtJvL0d"
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <FaWhatsapp className="text-[#EC5D50] size-6" />
              </a>
              <a
                href="https://youtube.com/@xaidor2025?si=b6vg9k5WzsJL9vqb"
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <Youtube className="text-[#EC5D50]" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex gap-4 mb-3 md:mb-0">
            <span className="hover:text-[#EC5D50] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#EC5D50] cursor-pointer">
              Terms & Conditions
            </span>
          </div>

          <p>Designed for modern AI learners 🚀</p>
        </div>
      </div>
    </footer>
  );
}
