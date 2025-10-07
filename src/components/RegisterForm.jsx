import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS credentials
    const serviceId = "service_s9adr4m";
    const adminTemplateId = "template_cdwpqzt"; // For you (admin)
    const userTemplateId = "template_rjqo3bk";   // For auto-reply
    const publicKey = "8ahPY87__bsvVBBU8";

    // First: Send email to Admin
    emailjs
      .send(serviceId, adminTemplateId, formData, publicKey)
      .then(() => {
        console.log("✅ Admin email sent");

        // Second: Auto-reply to user
        return emailjs.send(serviceId, userTemplateId, formData, publicKey);
      })
      .then(() => {
        alert("🎉 Thank you for registering! A confirmation email has been sent to you.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Register Now
          </h2>
          <p className="text-gray-600">
            Start your AI journey today. Fill out the form below and we'll get in touch.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC5D50] focus:border-transparent outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC5D50] focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC5D50] focus:border-transparent outline-none transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Program *
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC5D50] focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="Agentic AI Engineer Program (₹14,999)">
                Agentic AI Engineer Program (₹14,999)
              </option>
              <option value="Applied Python + Agentic AI Engineer Program (₹19,999)">
                Applied Python + Agentic AI Engineer Program (₹19,999)
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC5D50] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your background and goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#EC5D50] text-white py-4 rounded-lg font-semibold hover:bg-[#E04336] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Submit Registration
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;