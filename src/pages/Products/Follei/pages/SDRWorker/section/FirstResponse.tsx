import React, { useLayoutEffect, useRef } from 'react';
import overlay1Img from '../../../../../../assets/images/products/overlay1.svg';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FirstResponse: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.set(".sdr-fr-tag", { opacity: 0, y: 20 });
      gsap.set(".sdr-fr-title", { opacity: 0, y: 40 });
      gsap.set(".sdr-fr-desc", { opacity: 0, y: 20 });
      gsap.set(".sdr-fr-img", { scale: 0.8, opacity: 0, y: 40 });

      tl.to(".sdr-fr-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".sdr-fr-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".sdr-fr-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".sdr-fr-img", { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full GlobalPadding flex justify-center bg-white relative overflow-hidden">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Premium Capsule Badge */}
          <div className="sdr-fr-tag opacity-0 mb-6 flex justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider relative shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>First Response</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="sdr-fr-title opacity-0 text-[#04032E] text-4xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6">
            Every Conversation Starts{" "}
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              With The Right Response
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '20px',
              letterSpacing: '0px',
              lineHeight: '28px',
              color: '#5A5A5C'
            }}
            className="sdr-fr-desc opacity-0 font-normal max-w-3xl"
          >
            Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context—ensuring no lead is ever left waiting.
          </p>
        </div>

        {/* Right Column: Graphic Display */}
        <div className="sdr-fr-img opacity-0 lg:col-span-6 flex items-center justify-center lg:justify-end relative">
          <div className="w-full max-w-[720px] relative group bg-transparent">
            <img
              src={overlay1Img}
              alt="First Response Interaction Overlay"
              className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500 relative z-10"
            />
            {/* Animated Data Flow Lines Overlay */}
            <svg viewBox="0 0 600 393" className="absolute top-0 left-0 w-full h-full pointer-events-none transform group-hover:scale-[1.02] transition-transform duration-500 z-20">
              <style>
                {`
                @keyframes dataFlow {
                  0% { stroke-dashoffset: 40; opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 0; }
                }
                .animate-flow {
                  stroke-dasharray: 10 30;
                  animation: dataFlow 1.5s linear infinite;
                  stroke: #1079B7;
                  stroke-width: 3.5;
                  stroke-linecap: round;
                }
                .flow-delay-1 { animation-delay: 0.5s; }
                .flow-delay-2 { animation-delay: 1.0s; }
                `}
              </style>
              {/* Curved paths from outer icons to the center logo */}
              <path d="M 246,118 Q 257,125 268,151" fill="none" className="animate-flow" />
              <path d="M 202,197 L 244,197" fill="none" className="animate-flow flow-delay-1" />
              <path d="M 246,275 Q 257,268 268,243" fill="none" className="animate-flow flow-delay-2" />
              <path d="M 355,117 Q 344,125 331,151" fill="none" className="animate-flow flow-delay-1" />
              <path d="M 400,197 L 356,197" fill="none" className="animate-flow flow-delay-2" />
              <path d="M 355,276 Q 344,268 332,242" fill="none" className="animate-flow" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstResponse;
