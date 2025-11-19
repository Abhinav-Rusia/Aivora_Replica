import React from "react";
import heroGif from "../assets/flowState.gif";
import colorImg from "../assets/colorChange.png";
import customize from "../assets/customImg.png";
import heading from "../assets/HeadingImg.png";
import circle from "../assets/coreCircle.gif";
import coreFeatures from "../assets/coreFeatures.jpg";
import gradientBG from "../assets/gradientBG.jpg";
import ElementShowcase from "./ElementShowcase";

export default function CoreFeatures() {
  return (
    <section 
      className="relative min-h-screen pt-20 pb-20"
      style={{
        backgroundImage: `url(${gradientBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* ===================== TOP SECTION ===================== */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 px-6 lg:px-10">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">
            <h1
              className="text-white font-[600] tracking-[-0.01em]"
              style={{
                lineHeight: 0.98,
                fontSize: "clamp(32px, 5vw, 60px)",
                fontFamily: "inherit",
              }}
            >
              Core features all your
              <br />
              website needs.
            </h1>
          </div>

          {/* RIGHT GIF PILL */}
          <div className="w-full lg:w-1/2 flex items-center justify-end">
            <div
              className="relative rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              style={{ width: "50%" }}
            >
              <div className="w-full h-[56px] md:h-[72px] lg:h-[88px] xl:h-[96px]">
                <img
                  src={heroGif}
                  alt="decorative gif"
                  draggable={false}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== GRID SECTION ===================== */}
      <div className="w-full mt-20 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Left Top small card */}
            <div className="border border-[#2f3b59] rounded-xl p-4 bg-[#0a1122] h-fit">
              <img src={colorImg} alt="" className="w-full" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                Colors changeable
              </h3>
              <p className="text-white text-md">
                Easily change colors to match your brand, <br /> giving your site
                a unique, professional look.
              </p>
            </div>
            
            {/* Left Middle small card */}
            <div className="border border-[#2f3b59] rounded-xl p-4 bg-[#0a1122] h-fit">
              <img src={heading} alt="" className="w-full" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                Fonts changeable
              </h3>
              <p className="text-white text-md">
                Fonts changeable Easily change fonts to match your style, giving
                your site a professional, unique look.
              </p>
            </div>
          </div>

          {/* Center Column with Big Image and Bottom Text */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Center Big Image */}
            <div className="border border-[#2f3b59] rounded-xl bg-[#0a1122] flex flex-col h-fit">
              {/* Image section */}
              <div className="overflow-hidden rounded-t-xl">
                <img src={coreFeatures} className="w-full h-full object-cover" />
              </div>
              
              {/* Text section - centered */}
              <div className="flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold text-white mb-4">
                  Take your business further with AI – free of cost
                </h2>
                <p className="text-white text-md">
                  Take your business further with AI—completely free.
                </p>
              </div>
            </div>
            
            <ElementShowcase />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Right Top small card */}
            <div className="border border-[#2f3b59] rounded-xl p-4 bg-[#0a1122] h-fit">
              <img src={customize} alt="" className="w-full" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                Customize everything
              </h3>
              <p className="text-white text-md">
                Customize every part of your website—colors, fonts, and layouts—to
                match your brand.
              </p>
            </div>
            
            {/* Right Middle small card */}
            <div className="border border-[#2f3b59] rounded-xl p-4 bg-[#0a1122] h-fit">
              <img src={circle} alt="" className="w-full" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                Unique animation
              </h3>
              <p className="text-white text-md">
                Add unique animations to make your website more engaging and
                visually appealing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
