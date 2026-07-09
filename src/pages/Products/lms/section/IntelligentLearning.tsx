import React, { useState, useEffect, useRef } from 'react';
import LMSdashboard from '../../../../assets/images/products/dashboardlighttheme.svg';
import cloudsBg from '../../../../assets/images/products/cloudsbg.svg';

import { useNavigate } from 'react-router-dom';

const IntelligentLearning: React.FC = () => {
  const navigate = useNavigate();
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <section className="relative GlobalPadding    overflow-hidden bg-transparent">
      {/* Background Cloud SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src={cloudsBg} 
          alt="clouds background" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Glow Animation Style Block */}
      <style>{`
        @keyframes glow-flow {
          0%, 100% {
            opacity: var(--base-opacity);
            filter: drop-shadow(0 0 1px rgba(246, 115, 0, 0.2));
            background-color: #F67300;
          }
          15% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(246, 115, 0, 0.9)) brightness(1.2);
            background-color: #FFA133;
          }
          30%, 95% {
            opacity: var(--base-opacity);
            filter: drop-shadow(0 0 1px rgba(246, 115, 0, 0.2));
            background-color: #F67300;
          }
        }
        .animate-glow-dash {
          animation: glow-flow 5.5s infinite ease-in-out;
        }
      `}</style>

      {/* Background Glowing Ellipses */}
      <div 
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#F67300',
          filter: 'blur(200px)',
          top: '367px',
          left: '68px'
        }}
      />

      <div className="w-full flex flex-col items-center justify-center relative z-10 max-w-7xl mx-auto">

        {/* Top Text Content with Corner Brackets */}
        <div className="relative text-center max-w-4xl mt-[80px] mb-20 flex flex-col items-center z-10 pt-10">
          {/* Top Left Corner Bracket */}
          <div
            className="absolute top-2 -left-12 w-10 h-10 border-t-2 border-l-2 border-[#F66F00] hidden md:block"
            style={{
              filter: "drop-shadow(0 0 8px rgba(246, 111, 0, 0.65))",
              opacity: 0.9
            }}
          ></div>

          <h2
            data-ns-animate
            className="text-[36px] md:text-[50px] lg:text-[56px] font-medium text-[#04032E] tracking-tight leading-[1.2] mb-6  "
          >
            Intelligent Learning <br className="hidden md:block" /> Infrastructure
          </h2>

          <p
            data-ns-animate
            data-delay="0.1"
            className="text-[16px] sm:text-[17px] text-[#5A5A5C] leading-relaxed max-w-[700px] mb-10"
          >
            Coirei LMS is an AI-powered learning system that adapts, tracks, and evolves with every learner — delivering personalized experiences at scale.
          </p>

          <div
            data-ns-animate
            data-delay="0.2"
            className="flex flex-wrap items-center justify-center gap-4 relative w-full"
          >
            <button
              onClick={() => navigate('/contactsales')}
              className="bg-[#F66F00] text-white px-6 py-3!  hover:bg-[#d55e00] transition-colors font-medium text-[15px]"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/contact-sales')}
              className="flex items-center justify-center gap-2 bg-[#B7BFD910] hover:bg-gray-50 text-[#14182C] border! border-[#E5E5E5]! px-6 py-3  font-medium transition-colors w-full sm:w-auto cursor-pointer duration-300 hover:bg-gray-100"
            >
              Contact us
            </button>

            {/* Bottom Right Corner Bracket (Positioned relative to buttons/text block) */}
            <div
              className="absolute -bottom-6 -right-16 w-10 h-10 border-b-2 border-r-2 border-[#F66F00] hidden md:block"
              style={{
                filter: "drop-shadow(0 0 8px rgba(246, 111, 0, 0.65))",
                opacity: 0.9
              }}
            ></div>
          </div>
        </div>
        {/* Dashboard Image & Dashed Lines container */}
        <div ref={containerRef} className="relative w-full  flex justify-center">
          {/* Top Left Corner Dashed Lines */}
          <div className="absolute left-[-20px] lg:left-[-40px] top-0 flex flex-col gap-[14px] hidden md:flex z-20">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`w-[5px] h-[51px] rounded-[5px] bg-[#F67300] ${inView ? 'animate-glow-dash' : ''}`}
                style={{
                  '--base-opacity': 1 - idx * 0.25,
                  opacity: inView ? undefined : 0.2,
                  animationDelay: inView ? `${1.6 + (3 - idx) * 0.4}s` : undefined
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Bottom Left Corner Dashed Lines */}
          <div className="absolute left-[-20px] lg:left-[-40px] bottom-0 flex flex-col gap-[14px] hidden md:flex z-20">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`w-[5px] h-[51px] rounded-[5px] bg-[#F67300] ${inView ? 'animate-glow-dash' : ''}`}
                style={{
                  '--base-opacity': 0.25 + idx * 0.25,
                  opacity: inView ? undefined : 0.2,
                  animationDelay: inView ? `${(3 - idx) * 0.4}s` : undefined
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Top Right Corner Dashed Lines */}
          <div className="absolute right-[-20px] lg:right-[-40px] top-0 flex flex-col gap-[14px] hidden md:flex z-20">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`w-[5px] h-[51px] rounded-[5px] bg-[#F67300] ${inView ? 'animate-glow-dash' : ''}`}
                style={{
                  '--base-opacity': 1 - idx * 0.25,
                  opacity: inView ? undefined : 0.2,
                  animationDelay: inView ? `${1.6 + (3 - idx) * 0.4}s` : undefined
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Bottom Right Corner Dashed Lines */}
          <div className="absolute right-[-20px] lg:right-[-40px] bottom-0 flex flex-col gap-[14px] hidden md:flex z-20">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`w-[5px] h-[51px] rounded-[5px] bg-[#F67300] ${inView ? 'animate-glow-dash' : ''}`}
                style={{
                  '--base-opacity': 0.25 + idx * 0.25,
                  opacity: inView ? undefined : 0.2,
                  animationDelay: inView ? `${(3 - idx) * 0.4}s` : undefined
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Dashboard Image */}
          <div 
            data-ns-animate 
            data-delay="0.3"
            className="rounded-2xl border border-[#E9ECFF] p-1.5 bg-[#FAFAFA] relative z-10 w-full overflow-hidden shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="rounded-xl overflow-hidden border border-[#E9ECFF] bg-white">
              <img src={LMSdashboard} alt="Intelligent Learning Infrastructure Dashboard" className="w-full h-auto object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentLearning;
