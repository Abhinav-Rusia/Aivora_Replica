// src/components/PurchaseButton.jsx
import React from "react";

export default function PurchaseButton({ 
  bgColor = "white", 
  textColor = "#090e21", 
  iconColor = "#6CC24A", 
  circleColor = "#090e21", 
  text = "PURCHASE NOW" 
}) {
  return (
    <button
      className="group flex items-center justify-between gap-4 rounded-full pl-4 pr-2 py-2 shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-0"
      style={{
        height: "58px",
        minWidth: "280px",
        backgroundColor: bgColor,
        borderRadius: "999px",
      }}
    >
      {/* Left: lightning icon + label */}
      <div className="flex items-center gap-3">
        {/* Lightning icon */}
        <span className="flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z"
              fill={iconColor}
            />
          </svg>
        </span>

        {/* Label */}
        <span className="text-[15px] font-extrabold tracking-wide" style={{ color: textColor }}>
          {text}
        </span>
      </div>

      {/* Right: circle with arrow icon */}
      <span className="flex items-center justify-center h-12 w-12 rounded-full" style={{ backgroundColor: circleColor, borderRadius: "50%" }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 128 128"
          fill="#ffffff"
        >
          <path d="M109.2 18.7c-24.9-25-65.4-25-90.3 0-24.9 25-24.9 65.5 0 90.5s65.4 25 90.3 0c25-24.9 25-65.5 0-90.5zm-3.7 86.8c-22.9 22.9-59.9 22.9-82.8 0s-22.9-60.1 0-83 59.9-22.9 82.8 0c22.8 22.9 22.8 60.1 0 83zm-60.4-66v5.4h34.2L34 90.4l3.8 3.8 45.4-45.5V83h5.4V39.5H45.1z" />
        </svg>
      </span>
    </button>
  );
}
