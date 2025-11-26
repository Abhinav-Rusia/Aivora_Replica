import React, { useState } from 'react';
import gradientBG from '../assets/gradientBG.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'AI Research Director',
    bio: 'Leading breakthrough research in neural networks and deep learning architectures',
    avatar: '👨‍💻',
    gradient: 'from-[#667eea]/20 via-[#764ba2]/20 to-[#f093fb]/20'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'Machine Learning Engineer',
    bio: 'Specializing in computer vision and natural language processing solutions',
    avatar: '👩‍🔬',
    gradient: 'from-[#43e97b]/20 via-[#38f9d7]/20 to-[#667eea]/20'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'AI Strategy Consultant',
    bio: 'Helping enterprises integrate AI solutions for maximum business impact',
    avatar: '👨‍💼',
    gradient: 'from-[#fa709a]/20 via-[#fee140]/20 to-[#fa709a]/20'
  }
];

const values = [
  {
    id: 1,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge AI research and development',
    icon: '⚡',
    gradient: 'from-[#f093fb]/20 via-[#f5576c]/20 to-[#4facfe]/20'
  },
  {
    id: 2,
    title: 'Ethical AI',
    description: 'Building responsible AI systems that benefit humanity',
    icon: '🛡️',
    gradient: 'from-[#a8edea]/20 via-[#fed6e3]/20 to-[#d299c2]/20'
  },
  {
    id: 3,
    title: 'Client Success',
    description: 'Your success is our mission - we deliver results that matter',
    icon: '🎯',
    gradient: 'from-[#ff9a9e]/20 via-[#fecfef]/20 to-[#fecfef]/20'
  }
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredMember, setHoveredMember] = useState(null);

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
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            About Varman Tech
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of artificial intelligence with innovative solutions that transform industries
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-2">
              {['mission', 'vision', 'story'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#00F2FE] text-black shadow-lg' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-12 min-h-[300px] transition-all duration-500">
              {activeTab === 'mission' && (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">Our Mission</h2>
                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    At Varman Tech, we're on a mission to democratize artificial intelligence and make it accessible to businesses of all sizes. 
                    We believe AI should augment human capabilities, not replace them.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Our cutting-edge solutions help organizations unlock the power of their data, automate complex processes, 
                    and make intelligent decisions that drive growth and innovation.
                  </p>
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#f093fb] to-[#f5576c] bg-clip-text text-transparent">Our Vision</h2>
                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    We envision a world where AI seamlessly integrates into every aspect of business operations, 
                    creating unprecedented opportunities for innovation and growth.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    By 2030, we aim to be the leading AI solutions provider, known for our ethical approach, 
                    innovative technology, and transformative impact on global industries.
                  </p>
                </div>
              )}
              
              {activeTab === 'story' && (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip-text text-transparent">Our Story</h2>
                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    Founded in 2020 by a team of AI researchers and industry veterans, Varman Tech emerged from a simple belief: 
                    AI technology should be powerful yet accessible, innovative yet responsible.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Starting with just three people in a garage, we've grown to serve Fortune 500 companies while maintaining 
                    our commitment to ethical AI development and client success.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#00F2FE] font-semibold mb-4">{member.role}</p>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F2FE] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-12 max-w-3xl mx-auto hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">Join Our AI Revolution</h3>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge AI solutions? Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00F2FE] text-black font-bold py-4 px-8 rounded-full hover:bg-[#00D4FE] hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your AI Journey
              </button>
              <button className="border-2 border-[#00F2FE] text-[#00F2FE] font-bold py-4 px-8 rounded-full hover:bg-[#00F2FE] hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}