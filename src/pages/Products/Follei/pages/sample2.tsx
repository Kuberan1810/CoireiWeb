import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

import HoverParticles from '../../../../component/HoverParticles';
import Sample2Logo from './Sample2Logo';

const Sample2 = () => {
  const fullText = "Experience liftoff with the next-gen agent platform";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden py-20">
      
      {/* Three.js Background Container */}
      <HoverParticles className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Welcome Section */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 max-w-5xl mx-auto">
        
        {/* Logo Container */}
        <div className="mb-12">
          <Sample2Logo />
        </div>

        {/* Typed Header */}
        <div className="mb-12 min-h-[6rem] flex items-center justify-center pointer-events-none">
            <h1 className="text-[32px] md:text-[56px] font-normal tracking-tight text-center leading-tight">
                {displayedText}
                <span className="inline-block w-[2px] h-[1em] bg-black ml-1 animate-pulse align-middle"></span>
            </h1>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button 
              type="button" 
              className="flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto cursor-pointer"
            >
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" height="22" width="22">
                    <path d="M17.5009 11.3008H9.19727V17.2941L17.5009 18.4995V11.3008Z" fill="currentColor"></path>
                    <path d="M8.66077 11.3008H2.5V16.3231L8.66077 17.2171V11.3008Z" fill="currentColor"></path>
                    <path d="M17.5009 3.5L9.19727 4.68528V10.7657H17.5009V3.5Z" fill="currentColor"></path>
                    <path d="M8.66077 4.76367L2.5 5.64426V10.7671H8.66077V4.76367Z" fill="currentColor"></path>
                </svg>
                Download for Windows
            </button>
            <button 
              type="button" 
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-gray-50 text-[#1A73E8] border border-[#1A73E8] px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto cursor-pointer"
            >
                Explore use cases
            </button>
        </div>
      </div>
    </section>
  );
};

export default Sample2;