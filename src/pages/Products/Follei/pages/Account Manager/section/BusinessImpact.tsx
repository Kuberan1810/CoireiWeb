
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Diamond, TrendingUp, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BusinessImpact = () => {
  const clipRectRef = useRef<SVGRectElement>(null);
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot3Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clipRectRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business-impact-statics-section",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1
        }
      });

      // Initial states
      gsap.set(clipRectRef.current, {
        attr: { x: 1370, width: 0 }
      });

      gsap.set([dot1Ref.current, dot2Ref.current, dot3Ref.current, card1Ref.current, card2Ref.current, card3Ref.current], {
        opacity: 0,
        scale: 0.8
      });

      // Reveal from right to left
      tl.to(clipRectRef.current, {
        attr: {
          x: 0,
          width: 1370
        },
        duration: 2.2,
        ease: "none"
      }, 0);

      // Staggered dot + card fade-ins timed to match the line progression
      tl.to([dot3Ref.current, card3Ref.current], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.25); // Fades in quickly as the curve starts on the right

      tl.to([dot2Ref.current, card2Ref.current], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.9); // Fades in as the curve reaches the middle

      tl.to([dot1Ref.current, card1Ref.current], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 1.65); // Fades in as the curve finishes on the left

      // Mobile timeline items staggered animation
      gsap.utils.toArray<HTMLElement>(".mobile-timeline-item-bi").forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  }, []);

  return (
    <section className="w-full flex flex-col items-center mt-24 mb-16 relative business-impact-statics-section bg-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center w-full py-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#004370]/30 rounded-[10px] text-[#04032E] font-medium text-[12px] sm:text-[14px] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#004370]"></span>
          Business Impact
        </div>

        {/* Title */}
        <h2 className="text-[#04032E] text-3xl sm:text-[50px] md:text-5xl font-medium text-center mb-6 max-w-4xl leading-tight">
          Every Relationship Drives <br />
          <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Long-Term Growth</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#6E6E6E] text-sm sm:text-[16px] text-center max-w-4xl mb-16 leading-relaxed">
          The Account Manager Worker transforms customer relationships into measurable business growth by continuously strengthening engagement, identifying expansion opportunities, and improving lifetime value.
        </p>

        {/* DESKTOP CURVED TIMELINE */}
        <div className="hidden md:block w-full h-[550px] relative mt-10 px-12 lg:px-24">
          {/* SVG Bezier Curve */}
          <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 1370 766" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <clipPath id="reveal-clip-bi">
                <rect ref={clipRectRef} x="1370" y="0" width="0" height="766" />
              </clipPath>
            </defs>
            <path
              clipPath="url(#reveal-clip-bi)"
              d="M1368.95 4.23385C1368.98 3.06769 1369.02 1.90153 1369.05 0.735367C1341.3 -0.0541353 1313.36 -0.207732 1285.56 0.273834C791.913 6.31778 256.955 226.882 33.9696 689.375C21.6255 714.506 10.4529 739.622 0 765.695C0 765.695 0 765.695 0 765.695C10.507 739.644 21.7321 714.553 34.1266 689.453C258.078 227.551 792.825 8.62964 1285.61 3.5984C1313.37 3.17597 1341.26 3.38761 1368.95 4.23385Z"
              fill="#52a8ff"
            />
          </svg>

          {/* MILESTONE 1 (Bottom Left) */}
          <div ref={dot1Ref} style={{ left: "11.5%", top: "65%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-6 h-6 bg-[#1F436E] rounded-full border-4 border-white transition-transform duration-300 hover:scale-125" />
          </div>
          <div ref={card1Ref} style={{ left: "11.5%", top: "70%" }} className="absolute z-10 w-[300px]">
            <div className="bg-[#F4F6FB] rounded-[16px] p-5 hover:bg-[#EBEEF7] transition-all duration-300 flex items-center gap-4 cursor-default border border-transparent hover:border-blue-100 shadow-sm">
              <div className="bg-[#1F436E] min-w-[48px] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]">
                <Diamond color="#fff" size={24} />
              </div>
              <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                Increase retention, improve renewals, and maximize long-term account growth through continuous relationship intelligence.
              </p>
            </div>
          </div>

          {/* MILESTONE 2 (Middle) */}
          <div ref={dot2Ref} style={{ left: "48%", top: "17%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-6 h-6 bg-[#1F436E] rounded-full border-4 border-white transition-transform duration-300 hover:scale-125" />
          </div>
          <div ref={card2Ref} style={{ left: "38%", top: "22%" }} className="absolute z-10 w-[290px]">
            <div className="bg-[#F4F6FB] rounded-[16px] p-5 hover:bg-[#EBEEF7] transition-all duration-300 flex items-center gap-4 cursor-default border border-transparent hover:border-blue-100 shadow-sm">
              <div className="bg-[#1F436E] min-w-[48px] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]">
                <TrendingUp color="#fff" size={24} />
              </div>
              <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                Identify upsell and cross-sell opportunities using AI-powered customer intelligence and business signals.
              </p>
            </div>
          </div>

          {/* MILESTONE 3 (Top Right) */}
          <div ref={dot3Ref} style={{ left: "84.5%", top: "1%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-6 h-6 bg-[#1F436E] rounded-full border-4 border-white transition-transform duration-300 hover:scale-125" />
          </div>
          <div ref={card3Ref} style={{ left: "71%", top: "5%" }} className="absolute z-10 w-[300px]">
            <div className="bg-[#F4F6FB] rounded-[16px] p-5 hover:bg-[#EBEEF7] transition-all duration-300 flex items-center gap-4 cursor-default border border-transparent hover:border-blue-100 shadow-sm">
              <div className="bg-[#1F436E] min-w-[48px] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]">
                <Handshake color="#fff" size={24} />
              </div>
              <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                Build lasting partnerships through proactive engagement, executive communication, and personalized account management.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="md:hidden w-full max-w-md px-6 mt-10">
          <div className="relative pl-8 border-l-2 border-dashed border-[#52a8ff] ml-2 flex flex-col gap-12 py-2">
            {/* Mobile Item 1 */}
            <div className="relative flex flex-col items-start mobile-timeline-item-bi">
              <div className="absolute left-[-40px] top-4 w-5 h-5 bg-[#1F436E] rounded-full border-4 border-white" />
              <div className="bg-[#F4F6FB] rounded-[16px] p-5 w-full flex items-center gap-4 shadow-sm border border-transparent hover:border-blue-100">
                <div className="bg-[#1F436E] min-w-[44px] w-[44px] h-[44px] flex items-center justify-center rounded-[12px]">
                  <Diamond color="#fff" size={20} />
                </div>
                <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                  Increase retention, improve renewals, and maximize long-term account growth through continuous relationship intelligence.
                </p>
              </div>
            </div>

            {/* Mobile Item 2 */}
            <div className="relative flex flex-col items-start mobile-timeline-item-bi">
              <div className="absolute left-[-40px] top-4 w-5 h-5 bg-[#1F436E] rounded-full border-4 border-white" />
              <div className="bg-[#F4F6FB] rounded-[16px] p-5 w-full flex items-center gap-4 shadow-sm border border-transparent hover:border-blue-100">
                <div className="bg-[#1F436E] min-w-[44px] w-[44px] h-[44px] flex items-center justify-center rounded-[12px]">
                  <TrendingUp color="#fff" size={20} />
                </div>
                <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                  Identify upsell and cross-sell opportunities using AI-powered customer intelligence and business signals.
                </p>
              </div>
            </div>

            {/* Mobile Item 3 */}
            <div className="relative flex flex-col items-start mobile-timeline-item-bi">
              <div className="absolute left-[-40px] top-4 w-5 h-5 bg-[#1F436E] rounded-full border-4 border-white" />
              <div className="bg-[#F4F6FB] rounded-[16px] p-5 w-full flex items-center gap-4 shadow-sm border border-transparent hover:border-blue-100">
                <div className="bg-[#1F436E] min-w-[44px] w-[44px] h-[44px] flex items-center justify-center rounded-[12px]">
                  <Handshake color="#fff" size={20} />
                </div>
                <p className="text-[#04032E] text-[13px] leading-snug font-medium">
                  Build lasting partnerships through proactive engagement, executive communication, and personalized account management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

