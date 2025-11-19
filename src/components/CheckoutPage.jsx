import React from "react";
import centerImg from "../assets/diamond-icon02.gif"; // replace with your image path
import gradientBG from "../assets/gradientBG.jpg";
import Card from "./Card";
import PurchaseButton from "./PurchaseButton";
import HoverImage from "./HoverImage";
import img1 from "../assets/img_01.jpg";
import img2 from "../assets/img_02.jpg";
import img3 from "../assets/img_03.jpg";

export default function CheckoutPage() {
  return (
    <div 
      className="pt-20 px-4 pb-20"
      style={{
        backgroundImage: `url(${gradientBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header Section */}
      <div className="text-center font-semibold text-white mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-[50px]">Check out our amazing</h1>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-3xl md:text-5xl lg:text-[50px]">home</span>

          {/* The small center image */}
          <img
            src={centerImg}
            alt="divider"
            className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          />

          <span className="text-3xl md:text-5xl lg:text-[50px]">page's</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16">
        <Card>
          <HoverImage src={img1} className="w-full" />
          <div className="p-6 text-center text-white">
            <h3 className="text-xl font-semibold">AI Agency</h3>
            <p className="text-sm opacity-70 mt-2">
              AI Solutions, Machine Learning.
            </p>
          </div>
        </Card>
        
        <Card>
          <HoverImage src={img2} className="w-full" />
          <div className="p-6 text-center text-white">
            <h3 className="text-xl font-semibold">AI Chatbot</h3>
            <p className="text-sm opacity-70 mt-2">
              Intelligent Conversational AI.
            </p>
          </div>
        </Card>
        
        <Card>
          <HoverImage src={img3} className="w-full" />
          <div className="p-6 text-center text-white">
            <h3 className="text-xl font-semibold">AI Marketing</h3>
            <p className="text-sm opacity-70 mt-2">
              Smart Marketing Automation.
            </p>
          </div>
        </Card>
      </div>

      {/* Purchase Button */}
      <div className="flex justify-center">
        <PurchaseButton
          bgColor="white"
          textColor="#090e21"
          iconColor="#090e21"
          circleColor="#090e21"
          text="PURCHASE NOW"
        />
      </div>
    </div>
  );
}