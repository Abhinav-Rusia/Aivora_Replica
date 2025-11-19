import React from "react";
import hourGlass from "../assets/hourGlass.gif";
import gradientBG2 from "../assets/gradientBG2.jpg";
import seo from "../assets/seo.svg";
import fast from "../assets/speed.svg";
import text from "../assets/font.svg";
import document from "../assets/document.svg";
import update from "../assets/update.svg";
import perfection from "../assets/perfection.svg";
import bootstrap from "../assets/bootstrap.svg";
import unique from "../assets/unique.svg";
import animation from "../assets/animation.svg";
import clean from "../assets/clean.svg";
import GlassCard from "./GlassCard";

export default function FreePremium() {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${gradientBG2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-white text-5xl font-bold text-center flex items-center justify-center gap-4">
          Free Premium
          <img src={hourGlass} alt="" className="w-22 h-20" />
          Features
        </h2>
        <p className="text-white font-sans text-center mt-4">
          Get free premium features with innmax to enhance your site.
        </p>

        {/* Glass Cards Grid */}
        <div className="relative mt-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            <GlassCard
              imageSrc={seo}
              title="Seo and SMM friendly"
              size="md"
            />
            <GlassCard
              imageSrc={fast}
              title="Blazing-fast loading speed"
              size="md"
            />
            <GlassCard
              imageSrc={text}
              title="Access to google fonts"
              size="md"
            />
            <GlassCard
              imageSrc={document}
              title="Well-documented resources"
              size="md"
            />
            <GlassCard
              imageSrc={update}
              title="Smart automatic updates"
              size="md"
            />
            <GlassCard
              imageSrc={perfection}
              title="Made perfection with Sass"
              size="md"
            />
            <GlassCard
              imageSrc={bootstrap}
              title="Bootstrap 5 framework"
              size="md"
            />
            <GlassCard
              imageSrc={unique}
              title="Unique header and mega menu"
              size="md"
            />
            <GlassCard
              imageSrc={animation}
              title="Unique animations"
              size="md"
            />
            <GlassCard
              imageSrc={clean}
              title="Crafted with clean code"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
