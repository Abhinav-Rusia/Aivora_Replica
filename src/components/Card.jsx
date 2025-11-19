import React from "react";

export default function Card({ children }) {
  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden transition-all duration-300 
        bg-[#111526] border border-[#2b3045]
        shadow-[0_0_20px_rgba(0,0,0,0.4)]
        hover:border-[#00ffcb] hover:shadow-[0_0_35px_#00ffcb] 
        hover:scale-[1.03]
      "
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* Neon glow ring found in middle card */}
      <div
        className="
          absolute inset-0 pointer-events-none opacity-0 
          group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(circle,rgba(0,255,203,0.12),transparent_60%)]
        "
      ></div>

      {/* Hover-only "View" circle (centered) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="
            transform opacity-0 scale-75 transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:scale-100
            w-28 h-28 rounded-full flex items-center justify-center select-none
          "
          style={{
            boxShadow:
              "0 6px 24px rgba(0,255,203,0.08), 0 0 40px rgba(0,255,203,0.06) inset",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            className="
              w-20 h-20 rounded-full flex items-center justify-center text-[14px] font-semibold
              bg-gradient-to-br from-cyan-400 to-indigo-500
              shadow-[0_8px_30px_rgba(0,0,0,0.45)]
              text-white
            "
          >
            View
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
