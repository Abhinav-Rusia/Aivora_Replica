import React, { useRef, useState, useEffect } from "react";

/**
 * HoverImage
 * - src: image path
 * - className: optional classes for the <img> element (width / height / object-cover, etc)
 * - size: diameter of the outer circle wrapper (w-28 => 112px). default 112
 */
export default function HoverImage({ src, className = "", size = 80 }) {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);

  // visible controls opacity/scale; pos is used to position the circle
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // we update pos via rAF for smoother animation and fewer state updates
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleMove(e) {
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // local x
    const y = e.clientY - rect.top; // local y

    posRef.current.x = x;
    posRef.current.y = y;

    // batch updates with rAF
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: posRef.current.x, y: posRef.current.y });
        rafRef.current = null;
      });
    }
  }

  function handleEnter(e) {
    handleMove(e);
    setVisible(true);
  }

  function handleLeave() {
    setVisible(false);
  }

  // circle center offset: subtract half of circle size so (x,y) is center
  const circleSize = size; // px
  const innerSize = Math.round(circleSize * 0.8); // inner gradient disc size

  const circleStyle = {
    transform: `translate(${pos.x - circleSize / 2}px, ${pos.y - circleSize / 2}px) scale(${visible ? 1 : 0.75})`,
    transition: "transform 150ms ease-out, opacity 180ms ease-out",
    opacity: visible ? 1 : 0,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    pointerEvents: "none",
  };

  const innerStyle = {
    width: `${innerSize}px`,
    height: `${innerSize}px`,
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden"
    >
      <img src={src} alt="" className={className} draggable={false} />

      {/* Hover-only "View" circle that follows cursor */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 pointer-events-none"
        style={circleStyle}
      >
        {/* outer blurred ring */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            boxShadow:
              "0 10px 30px rgba(0,255,203,0.08), inset 0 10px 30px rgba(0,255,203,0.04)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* inner gradient disc */}
          <div
            className="rounded-full flex items-center justify-center text-white font-semibold select-none"
            style={{
              ...innerStyle,
              background:
                "linear-gradient(135deg, rgba(56,189,248,1) 0%, rgba(139,92,246,1) 100%)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
            }}
          >
            <span style={{ fontSize: 12 }}>View</span>
          </div>
        </div>
      </div>
    </div>
  );
}
