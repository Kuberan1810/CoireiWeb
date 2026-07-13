import React, { useEffect, useRef, useState } from "react";

// Line duration in seconds
const LINE_DURATION = 4;

const stepRevealDelays = [1, 2, 3, 3.8];

export const CustomerJourneySection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Accelerate Onboarding",
      desc: "Help customers complete setup, understand key features, and achieve their first success quickly."
    },
    {
      step: "02",
      title: "Drive Product Adoption",
      desc: "Encourage feature usage through personalized guidance, recommendations, and best practices."
    },
    {
      step: "03",
      title: "Monitor Customer Health",
      desc: "Track engagement, satisfaction, product usage, and account health to identify risks early."
    },
    {
      step: "04",
      title: "Grow The Relationship",
      desc: "Identify renewal, upsell, and expansion opportunities while strengthening long-term customer relationships."
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  // Dot positions
  const dots = [
    { left: "25%", delay: LINE_DURATION * 0.25 },
    { left: "50%", delay: LINE_DURATION * 0.50 },
    { left: "75%", delay: LINE_DURATION * 0.75 },
  ];

  return (
    <section className="w-full GlobalPadding flex justify-center bg-white">
      <style>{`
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes dotPop {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          65%  { transform: translate(-50%, -50%) scale(1.25); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1);    opacity: 1; }
        }
        @keyframes stepReveal {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .timeline-line {
          transform-origin: left center;
          transform: scaleX(0);
        }
        .timeline-line.line-animate {
          animation: lineGrow ${LINE_DURATION}s cubic-bezier(0.37, 0, 0.63, 1) forwards;
        }
        .timeline-dot {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        .timeline-dot.dot-animate {
          animation: dotPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .step-card {
          opacity: 0;
          transform: translateY(18px);
        }
        .step-card.step-reveal {
          animation: stepReveal 0.6s ease forwards;
        }
      `}</style>

      <div className="w-full flex flex-col items-center">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">
          {/* Badge Capsule */}
          <div
            data-ns-animate="true" data-delay="0.1"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Customer Journey</span>
          </div>

          <h2
            data-ns-animate="true" data-delay="0.2"
            className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6">
            Building Success At Every Stage Of{" "}
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              The Customer Journey
            </span>
          </h2>

          {/* Subheading */}
          <p
            data-ns-animate="true" data-delay="0.3"
            className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed max-w-3xl">
            The Customer Success Worker continuously guides every customer from onboarding to long-term success by driving adoption, monitoring account health, and creating opportunities for sustainable growth.
          </p>
        </div>

        <div className="w-full flex flex-col relative mt-4" ref={timelineRef}>

          {/* Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0 w-full pb-16">
            {steps.map((node, index) => (
              <div
                key={index}
                className={`step-card flex flex-col items-start text-left px-0 lg:px-8 first:pl-0 last:pr-0${animate ? " step-reveal" : ""}`}
                style={{
                  animationDelay: animate ? `${stepRevealDelays[index]}s` : undefined,
                }}
              >
                <span className="text-[22px] text-[#5A5A5C] mb-12">{node.step}</span>

                {/* Step Title */}
                <h4 className="text-[#000000] font-medium text-[22px] mb-4 tracking-tight">
                  {node.title}
                </h4>

                {/* Step Description */}
                <p className="text-[#5A5A5C] text-[15px] leading-relaxed max-w-[280px]">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Absolute Vertical Separator Lines */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[25%] w-[1.5px] bg-[#4282CA] pointer-events-none" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-[#4282CA] pointer-events-none" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-[1.5px] bg-[#4282CA] pointer-events-none" />

          {/* Animated horizontal timeline line + dots */}
          <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-[3px] bg-[#e2eaf5]">
            <div
              className={`absolute inset-0 bg-[#4282CA] timeline-line${animate ? " line-animate" : ""}`}
            />

            {dots.map((dot, i) => (
              <div
                key={i}
                className={`absolute top-1/2 w-6 h-6 rounded-full border-[3px] border-[#4282CA] bg-[#4282CA] flex items-center justify-center shadow-sm timeline-dot${animate ? " dot-animate" : ""}`}
                style={{
                  left: dot.left,
                  animationDelay: animate ? `${dot.delay}s` : undefined,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerJourneySection;


