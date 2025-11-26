import React, { useState } from "react";
import gradientBG2 from "../assets/gradientBG2.jpg";

const contactMethods = [
  {
    id: 1,
    title: "Email Us",
    description: "Get in touch via email for detailed inquiries",
    icon: "📧",
    value: "hello@varmantech.com",
    gradient: "from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20",
  },
  {
    id: 2,
    title: "Call Us",
    description: "Speak directly with our AI experts",
    icon: "📞",
    value: "+1 (555) 123-4567",
    gradient: "from-[#43e97b]/20 via-[#38f9d7]/20 to-[#667eea]/20",
  },
  {
    id: 3,
    title: "Visit Us",
    description: "Come to our innovation hub",
    icon: "📍",
    value: "San Francisco, CA",
    gradient: "from-[#fa709a]/20 via-[#fee140]/20 to-[#fa709a]/20",
  },
];

const services = [
  "AI Chatbots",
  "Machine Learning",
  "Computer Vision",
  "AI Marketing",
  "AI Consulting",
  "Custom AI Solutions",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div
      className="min-h-screen pt-20 pb-20"
      style={{
        backgroundImage: `url(${gradientBG2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Our experts are here to
            help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 relative">
            <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Start Your AI Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-[#00F2FE] shadow-lg shadow-[#00F2FE]/20 scale-105"
                        : "border-white/20 hover:border-white/40"
                    }`}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-[#00F2FE] shadow-lg shadow-[#00F2FE]/20 scale-105"
                        : "border-white/20 hover:border-white/40"
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 transition-all duration-300 ${
                    focusedField === "company"
                      ? "border-[#00F2FE] shadow-lg shadow-[#00F2FE]/20 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  placeholder="Your company name"
                />
              </div>

              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white transition-all duration-300 ${
                    focusedField === "service"
                      ? "border-[#00F2FE] shadow-lg shadow-[#00F2FE]/20 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <option value="" className="bg-gray-800">
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-gray-800"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <label className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 transition-all duration-300 resize-none ${
                    focusedField === "message"
                      ? "border-[#00F2FE] shadow-lg shadow-[#00F2FE]/20 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  placeholder="Tell us about your project and how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00F2FE] to-[#00D4FE] text-black font-bold py-4 px-6 rounded-lg hover:from-[#00D4FE] hover:to-[#00B6FE] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.id}
                    className="group relative p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredMethod(method.id)}
                    onMouseLeave={() => setHoveredMethod(null)}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-[#00F2FE] transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-white/70 text-sm mb-1 group-hover:text-white/90 transition-colors duration-300">
                          {method.description}
                        </p>
                        <p className="text-[#00F2FE] font-medium">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-[#00F2FE] mb-2 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-[#00F2FE] mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-white/70 text-sm">Support Available</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-[#00F2FE] mb-2 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-white/70 text-sm">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-[#00F2FE] mb-2 group-hover:scale-110 transition-transform duration-300">
                    5+
                  </div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-6 text-center relative">
              <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Quick Response
              </h4>
              <p className="text-white/70 text-sm">
                We typically respond within 2 hours during business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
