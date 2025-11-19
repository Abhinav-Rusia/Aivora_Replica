import React from "react";
import bigBanner from "../assets/bigBanner.jpg";
import PurchaseButton from "./PurchaseButton";

export default function BigBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={bigBanner} 
        alt="Big Banner" 
        className="w-full h-full object-cover object-right" 
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
      
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="pl-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
              Create and customize your <span className="text-[#00FF97]">legendary</span> website with easy and flexibility
            </h1>
            <div className="mt-10">
              <div className="transform scale-125 origin-left">
                <PurchaseButton
                  bgColor="#00FF97"
                  textColor="#090e21"
                  iconColor="#090e21"
                  circleColor="#090e21"
                  text="GET STARTED"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}