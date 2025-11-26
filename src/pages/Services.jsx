import React, { useState } from 'react';
import gradientBG from '../assets/gradientBG.jpg';

const services = [
  {
    id: 1,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI to enhance customer experience',
    icon: '🤖',
    features: ['24/7 Customer Support', 'Natural Language Processing', 'Multi-platform Integration'],
    color: 'from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20'
  },
  {
    id: 2,
    title: 'AI Marketing',
    description: 'Data-driven marketing strategies powered by artificial intelligence',
    icon: '📊',
    features: ['Predictive Analytics', 'Automated Campaigns', 'Customer Segmentation'],
    color: 'from-[#f093fb]/20 via-[#f5576c]/20 to-[#4facfe]/20'
  },
  {
    id: 3,
    title: 'AI Agencies',
    description: 'Complete AI transformation solutions for your organization',
    icon: '🚀',
    features: ['Custom AI Solutions', 'Team Training', 'Implementation Support'],
    color: 'from-[#43e97b]/20 via-[#38f9d7]/20 to-[#667eea]/20'
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'Advanced ML models to automate and optimize your processes',
    icon: '🧠',
    features: ['Predictive Models', 'Data Analysis', 'Process Automation'],
    color: 'from-[#fa709a]/20 via-[#fee140]/20 to-[#fa709a]/20'
  },
  {
    id: 5,
    title: 'AI Consulting',
    description: 'Strategic guidance to implement AI solutions effectively',
    icon: '💡',
    features: ['Strategy Planning', 'ROI Analysis', 'Technology Assessment'],
    color: 'from-[#a8edea]/20 via-[#fed6e3]/20 to-[#d299c2]/20'
  },
  {
    id: 6,
    title: 'Computer Vision',
    description: 'Visual recognition and analysis powered by deep learning',
    icon: '👁️',
    features: ['Image Recognition', 'Object Detection', 'Quality Control'],
    color: 'from-[#ff9a9e]/20 via-[#fecfef]/20 to-[#fecfef]/20'
  }
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div 
      className="min-h-screen pt-20"
      style={{
        backgroundImage: `url(${gradientBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We provide cutting-edge AI solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl ${
                hoveredCard === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00F2FE] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                  selectedService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-sm font-semibold text-white/80 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#00F2FE] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-[#00F2FE] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/80 mb-6">Let's discuss how our AI solutions can help you achieve your goals.</p>
            <button className="bg-[#00F2FE] text-black font-bold py-3 px-8 rounded-full hover:bg-[#00D4FE] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}