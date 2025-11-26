// src/pages/AivoraHomepage.jsx
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.png";
import bg from "../assets/hero_bg.jpg";
import slider from "../assets/sliderImg.png";
import rotate1 from "../assets/rotate01.svg";
import rotate2 from "../assets/rotate02.svg";
import rotate3 from "../assets/rotate3.svg";
import PurchaseButton from "../components/PurchaseButton";
import CheckoutPage from "../components/CheckoutPage";
import CoreFeatures from "../components/CoreFeatures";
import FreePremium from "../components/FreePremium";
import BigBanner from "../components/BigBanner";
import ResponsiveLayout from "../components/ResponsiveLayout";

/* RotatingBadge (unchanged) */
function RotatingBadge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { icon: rotate1, text: "AI Agencies" },
    { icon: rotate2, text: "AI Chatbot" },
    { icon: rotate3, text: "AI Marketing" }
  ];
  useEffect(() => {
    const id = setInterval(() => setCurrentIndex((p) => (p + 1) % items.length), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="pill large">
      <img src={items[currentIndex].icon} alt="icon" className="badge-icon" />
      <span className="gradient-text">{items[currentIndex].text}</span>
    </div>
  );
}

export default function AivoraHomepage() {

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="aivora-root object-left " style={{ backgroundImage: `url(${bg})` }} >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#00F2FE] opacity-15 pointer-events-none"></div>
      <header className="aivora-header relative z-10">
        <div className="aivora-header-inner">
          <img src={Logo} alt="Varman Tech" className="aivora-logo" />
          <nav className="aivora-nav">
            <button className="pill">Services</button>
            <button className="pill">About Us</button>
            <button className="pill">Contact Us</button>
            <button className="pill">Support</button>
          </nav>
          <div>
            <button className="purchase">⚡ PURCHASE NOW</button>
          </div>
        </div>
      </header>

      <main className="aivora-hero">
        <section className="hero-left" >
          <div className="kicker">
            <span className="arrow">◀</span>ONE THEME, ENDLESS POSSIBILITIES
          </div>

          <h1 className="hero-title">
            Unique HTML<br />
            <span>Template For</span>
          </h1>

          <div className="badge-row">
            <RotatingBadge />
          </div>

          <p className="hero-sub">
            This unique HTML template is built for AI agencies, chatbots, and marketing.
            Modern & easy to customize, it helps showcase your services professionally.
          </p>

          <div className="purchase-section mt-6" >
            <div style={{ transform: 'scale(1.15)', transformOrigin: 'left' }}>
              <PurchaseButton
                bgColor="#00F2FE"
                textColor="#090e21"
                iconColor="#090e21"
                circleColor="#090e21"
                text="BROWSE DEMO"
              />
            </div>
          </div>
        </section>

        <aside className="hero-right" aria-hidden>
          <img src={slider} alt="" className="hero-tiles tile1" />
        </aside>
      </main>
      </div>
      
      {/* Other Sections without Background Image */}
      <CheckoutPage />
      <CoreFeatures />
      <FreePremium />
      <BigBanner />
      <ResponsiveLayout />
    </>
  );
}
