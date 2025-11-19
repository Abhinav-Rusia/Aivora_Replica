import React from "react";
import gradientBG2 from "../assets/gradientBG2.jpg";

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
    </section>
  );
}
