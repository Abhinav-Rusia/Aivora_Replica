
import React from 'react';

export default function GlassCard({ imageSrc, title, subtitle, size = 'md', className = '' }) {
  const sizes = {
    sm: {
      pad: 'p-6',
      img: 'w-14 h-14',
      title: 'text-base',
      subtitle: 'text-sm'
    },
    md: {
      pad: 'px-2 py-8 sm:px-3 sm:py-10 md:px-4 md:py-12',
      img: 'w-16 h-16 sm:w-18 md:w-20 md:h-20',
      title: 'text-sm sm:text-base md:text-lg',
      subtitle: 'text-xs sm:text-sm'
    },
    lg: {
      pad: 'p-10',
      img: 'w-24 h-24',
      title: 'text-xl',
      subtitle: 'text-base'
    }
  };

  const s = sizes[size] || sizes.md;

  return (
    <div
      className={`rounded-2xl ${s.pad} flex flex-col items-center justify-center text-center backdrop-blur-[12px] bg-white/5 border border-white/10 shadow-2xl ${className} group relative w-full h-auto min-h-[200px]`}
      role="group"
    >
      {/* Top-left and bottom-right light borders */}
      <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl border-t-2 border-l-2 border-white/8 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl border-b-2 border-r-2 border-white/8 pointer-events-none"></div>
      {/* circular image with subtle ring */}
      <div className={`rounded-full ${s.img} flex items-center justify-center mb-4 relative`}>
        {/* ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-300/20 to-indigo-500/10 p-[2px]">
          <div className={`w-full h-full rounded-full bg-[#071428] flex items-center justify-center overflow-hidden`}> 
            {/* image */}
            <img src={imageSrc} alt={title} className={`object-contain w-3/4 h-3/4 rounded-full transition-transform duration-200 group-hover:scale-x-[-1]`} />
          </div>
        </div>
      </div>

      {/* text */}
      <div className="mt-2 w-full px-2">
        <div className={`font-semibold text-white ${s.title} tracking-wide leading-relaxed break-words`}>{title}</div>
      </div>


    </div>
  );
}
