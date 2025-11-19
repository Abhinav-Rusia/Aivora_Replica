// ElementsShowcase.jsx
// React + Tailwind component that replicates the UI shown in the screenshot.
// Usage: place this file in your React + Tailwind project (Vite, CRA, Next.js).
// Import and render <ElementsShowcase /> where you want the component to appear.

import React from "react";

const chips = [
  { icon: "grid", text: "Custom content" },
  { icon: "user", text: "Contact form" },
  { icon: "share", text: "Social element" },
  { icon: "table", text: "Pricing table" },
  { icon: "H", text: "Heading" },
  { icon: "grid", text: "Custom content" },
  { icon: "table", text: "Pricing table" },
  { icon: "user", text: "Contact form" },
];

function Icon({ name }) {
  // small set of inline SVGs used for the chips
  switch (name) {
    case "grid":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "user":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 21c0-3.866 3.582-7 9-7s9 3.134 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "share":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.6 10.8l6.8-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8.6 13.2l6.8 3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "table":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 4v16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "H":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M4 6h6v6h6V6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ElementsShowcase() {
  const doubledChips = [...chips, ...chips];

  return (
    <div className="border border-[#2f3b59] rounded-xl bg-[#0a1122] p-6">
      {/* Heading */}
      <div className="w-full text-center mb-6">
        <div className="inline-flex items-center gap-3 bg-transparent px-4 py-2 rounded-md">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <div className="text-sm text-slate-200">Essential <span className="text-emerald-400 font-semibold">80+ Web Elements</span> Included</div>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Scrolling chips container */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {doubledChips.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap flex-shrink-0"
            >
              <span className="text-white">
                <Icon name={c.icon} />
              </span>
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - reverse animation */}
      <div className="overflow-hidden mt-4">
        <div className="flex gap-4 animate-scroll-reverse">
          {doubledChips.map((c, i) => (
            <div
              key={`reverse-${i}`}
              className="flex items-center gap-3 px-5 py-3 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap flex-shrink-0"
            >
              <span className="text-white">
                <Icon name={c.icon} />
              </span>
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
