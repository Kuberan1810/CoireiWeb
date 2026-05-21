

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const LmsData: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* SHIELD ICON - Figma Specs: 64x64, 12px Radius, 10% White Bg, 20% White Border */}
        <div 
          data-ns-animate
          data-offset="80"
          className="relative mb-8"
        >
          <div className="w-[64px] h-[64px] rounded-[12px] bg-white/10 border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
            <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* MAIN HEADING - Figma Specs: Instrument Sans, 48px, 400 Weight, -1.2px Spacing */}
        <h2 
          data-ns-animate
          data-offset="80"
          data-delay="0.1"
          className=" text-[48px] leading-[48px] font-normal text-white mb-6 tracking-[-1.2px]"
        >
          Your data stays yours. Always.
        </h2>

        {/* DESCRIPTION TEXT - Figma Specs: Inter, 18px, 29.25px Line Height */}
        <div
          data-ns-animate
          data-offset="80"
          data-delay="0.2"
          className="max-w-[881px]"
        >
          <p className=" text-[18px] leading-[29.25px] text-white/80 font-normal">
            We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your 
            organization. Your training data is never used to train models for other clients, and all 
            learning telemetry is encrypted at rest and in transit.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LmsData;