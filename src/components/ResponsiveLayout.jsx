import React from "react";
import gradientBG2 from "../assets/gradientBG2.jpg";
import GlassCard from "./GlassCard";
import hourGlass from "../assets/hourGlass.gif";
import laptopImg from "../assets/laptopImg.png";
import tabletImg from "../assets/tabletImg.png";
import mobileImg from "../assets/mobileImg.png";

export default function ResponsiveLayout() {
  return (
    <section
      className="relative min-h-screen pt-20 pb-20"
      style={{
        backgroundImage: `url(${gradientBG2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ===================== TOP SECTION ===================== */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 px-6 lg:px-10">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">
            <h1
              className="text-white font-[400] tracking-[-0.01em]"
              style={{
                lineHeight: 0.98,
                fontSize: "clamp(32px, 5vw, 60px)",
                fontFamily: "inherit",
              }}
            >
              Responsive layout for
              <br />
              any devices.
            </h1>
          </div>

          {/* RIGHT PARAGRAPH */}
          <div className="w-full lg:w-1/2 flex items-center justify-end">
            <div className="max-w-md">
              <p className="text-white/80 text-lg leading-relaxed">
                A fully responsive layout that adapts to all screen sizes, providing a smooth and optimal viewing experience on any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Big Glass Card Section */}
      <div className="w-full mt-20 px-6 lg:px-10 flex justify-center">
        <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 relative w-full">
          {/* Top-left and bottom-right light borders */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-left">
              <img src={hourGlass} alt="Live Editing" className="w-16 h-16 mb-4 rounded-full" />
              <h3 className="text-white text-2xl font-semibold mb-4 tracking-wide">Live Editing</h3>
              <p className="text-white/70 text-lg tracking-wide">See your designs on any device and adjust instantly.</p>
            </div>
            <div className="text-left">
              <img src={hourGlass} alt="Responsive Controls" className="w-16 h-16 mb-4 rounded-full" />
              <h3 className="text-white text-2xl font-semibold mb-4 tracking-wide">Responsive Controls</h3>
              <p className="text-white/70 text-lg tracking-wide">Tailor designs for mobile and tablet to look stunning on any screen.</p>
            </div>
            <div className="text-left">
              <img src={hourGlass} alt="Hide/Show on Mobile" className="w-16 h-16 mb-4 rounded-full" />
              <h3 className="text-white text-2xl font-semibold mb-4 tracking-wide">Hide/Show on Mobile</h3>
              <p className="text-white/70 text-lg tracking-wide">Control what blocks your audience sees on each device.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Big Glass Card Section */}
      <div className="w-full mt-10 px-6 lg:px-10 flex justify-center">
        <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-12 relative w-full min-h-[700px]">
          {/* Top-left and bottom-right light borders */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="text-left flex flex-col justify-center">
              <h2 className="text-white text-5xl font-bold mb-12 tracking-wide leading-tight">Landing-pages and<br />websites laptop view</h2>
              <p className="text-white text-lg tracking-wide mb-14 leading-loose">Build a clean website to establish your online presence and create landing pages that attract and convert more customers.</p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-black border border-white/20 rounded-full">
                  <span className="text-white text-sm font-medium">Landing-pages</span>
                </div>
                <div className="px-4 py-2 bg-black border border-white/20 rounded-full">
                  <span className="text-white text-sm font-medium">Websites</span>
                </div>
                <div className="px-4 py-2 bg-black border border-white/20 rounded-full">
                  <span className="text-white text-sm font-medium">Internal pages</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={laptopImg} alt="Laptop View" className="w-full h-auto ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet and Mobile Cards Section */}
      <div className="w-full mt-10 px-6 lg:px-10 flex justify-center gap-6">
        {/* Tablet Card - 65% width */}
        <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 pb-0 relative w-[65%] flex flex-col">
          <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
          
          <div className="text-left mb-8">
            <h3 className="text-white text-3xl font-bold mb-6 tracking-wide">Tablet view</h3>
            <p className="text-white text-lg tracking-wide leading-relaxed max-w-md">Optimized for tablet view, ensuring a<br />smooth and engaging experience.</p>
          </div>
          <div className="flex-1 flex items-end">
            <img src={tabletImg} alt="Tablet View" className="w-full h-auto" />
          </div>
        </div>

        {/* Mobile Card - 35% width */}
        <div className="rounded-2xl backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl p-8 pb-0 relative w-[35%] flex flex-col">
          <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
          
          <div className="text-left mb-8">
            <h3 className="text-white text-2xl font-bold mb-6 tracking-wide">Mobile view</h3>
            <p className="text-white text-base tracking-wide leading-relaxed max-w-xs">Optimized for mobile, offering a<br />seamless, user-friendly experience.</p>
          </div>
          <div className="flex-1 flex items-end">
            <img src={mobileImg} alt="Mobile View" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Screen Layouts Card Section */}
      <div className="w-full mt-10 px-6 lg:px-10 flex justify-center">
        <div className="rounded-2xl backdrop-blur-[12px] bg-gradient-to-br from-[#00F2FE]/10 via-white/5 to-white/5 border border-white/10 shadow-2xl p-12 relative w-full">
          <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
          
          <div className="flex items-center justify-between">
            <div className="text-center">
              <img src={laptopImg} alt="Desktop" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <span className="text-white text-xl font-bold block mb-2">1920 x 1080px</span>
              <span className="text-white/70 text-lg">Full Screen Layout</span>
            </div>
            <div className="w-px bg-white/20 h-24"></div>
            
            <div className="text-center">
              <img src={laptopImg} alt="Notebook" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <span className="text-white text-xl font-bold block mb-2">1364 x 768px</span>
              <span className="text-white/70 text-lg">Notebook Screen Layout</span>
            </div>
            <div className="w-px bg-white/20 h-24"></div>
            
            <div className="text-center">
              <img src={tabletImg} alt="Tablet" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <span className="text-white text-xl font-bold block mb-2">1024 x 768px</span>
              <span className="text-white/70 text-lg">Tablet Screen Layout</span>
            </div>
            <div className="w-px bg-white/20 h-24"></div>
            
            <div className="text-center">
              <img src={mobileImg} alt="Mobile" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <span className="text-white text-xl font-bold block mb-2">375 x 667px</span>
              <span className="text-white/70 text-lg">Mobile Screen Layout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
