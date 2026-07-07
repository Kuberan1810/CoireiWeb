import React, { useLayoutEffect, useRef } from "react";
import { Users, Send, Repeat1, User } from 'lucide-react';
import bg from "../../../../../../assets/images/products/sdr.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LeadIntelligence: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 95, suffix: "%", label: "Recognizes customer purchase readiness." },
    { value: 88, suffix: "%", label: "Measures interaction across every channel." },
    { value: 91, suffix: "%", label: "Evaluates sales and business fit." },
    { value: 97, suffix: "%", label: "Detects behaviors  conversion intent." },
    { value: 84, suffix: "%", label: "Measures customer trust and strength." }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.set(".sdr-li-tag", { opacity: 0, y: 20 });
      gsap.set(".sdr-li-title", { opacity: 0, y: 40 });
      gsap.set(".sdr-li-desc", { opacity: 0, y: 20 });
      gsap.set(".sdr-li-right-card", { scale: 0.8, opacity: 0, y: 40 });
      gsap.set(".sdr-li-stat-card", { opacity: 0, y: 40, scale: 0.95 });

      tl.to(".sdr-li-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".sdr-li-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".sdr-li-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".sdr-li-right-card", { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3")
        .to(".sdr-li-stat-card", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }, "-=1");

      tl.addLabel("counterStart", "-=0.8");
      
      const counters = gsap.utils.toArray<HTMLElement>(".sdr-li-counter");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        tl.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            counter.innerHTML = Math.floor(obj.val).toLocaleString("en-US");
          }
        }, "counterStart");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full GlobalPadding flex justify-center bg-white">
      <div className="w-full flex flex-col group">

        {/* Top Part */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between mb-12">

          {/* Left Column: Content */}
          <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
            {/* Badge Capsule */}
            <div
              className="sdr-li-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>Lead Intelligence</span>
            </div>

            {/* Title */}
            <h2 className="sdr-li-title opacity-0 text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Every Conversation Creates<br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Revenue Intelligence
              </span>
            </h2>

            {/* Description */}
            <p className="sdr-li-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context ensuring no lead is ever left waiting.             </p>
          </div>

          {/* Right Column */}
          <div className="sdr-li-right-card opacity-0 w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-sky-500/20">
            {/* Background Image */}
            <img
              src={bg}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700"
            />

            <div className="relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6">
              <div className="w-full max-w-[440px] flex flex-col gap-y-8 pt-6 scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center">

                <div className="flex w-full gap-x-5">
                  {/* Card 1: Total Customers  */}
                  <div
                    className="bg-white rounded-[20px] pt-7 pb-3 px-3 border border-[#EDF3FD] relative flex flex-col justify-between items-center w-[160px] flex-shrink-0 min-h-[120px]"
                    style={{ boxShadow: '0px 4px 4px 0px rgba(237, 243, 253, 0.3)' }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-white border border-[#EDF3FD] flex items-center justify-center z-10"
                      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    >
                      <Users size={20} className="stroke-[2.5]" style={{ color: '#014370', fill: '#014370' }} />
                    </div>
                    <div className="text-center flex flex-col items-center justify-center mt-1.5 flex-1">
                      <p className="text-[14px] font-semibold text-[#6E6E6E]">Total Customers</p>
                      <h3 className="text-[32px] font-bold text-[#6693B1] leading-none mt-1">
                        <span className="sdr-li-counter" data-target="1284">0</span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] font-light mt-2 text-[#008900]">
                      <span>↑</span>
                      <span>12% vs yesterday</span>
                    </div>
                  </div>

                  {/* Card 2: Annual Contract Value */}
                  <div className="bg-white rounded-[20px] p-4 flex flex-col gap-1.5 border border-[#EDF3FD] relative justify-center flex-1"
                    style={{ minHeight: '120px', boxShadow: '0px 4px 4px 0px rgba(237, 243, 253, 0.3)' }}>
                    <div className="w-8 h-8 rounded-[8px] bg-[#004AC6]/10 border border-[#EDF3FD] flex items-center justify-center">
                      <Repeat1 size={16} style={{ color: '#014370' }} />
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-[24px] font-bold text-[#0B1C30] leading-none">
                        ₹<span className="sdr-li-counter" data-target="45000">0</span>/year
                      </span>
                    </div>
                    <span className="text-[10px] text-[#464555] font-medium">Annual Contract Value (ACV)</span>
                  </div>
                </div>

                <div className="flex w-full gap-x-5">
                  {/* Card 3: Total Revenue */}
                  <div className="bg-white rounded-[20px] p-4 flex flex-col gap-1.5 border border-[#EDF3FD] relative justify-center flex-1"
                    style={{ minHeight: '120px', boxShadow: '0px 4px 4px 0px rgba(237, 243, 253, 0.3)' }}>
                    <div className="w-8 h-8 rounded-full bg-[#E6EDF1] border border-[#EDF3FD] flex items-center justify-center">
                      <User size={20} className="stroke-[2.5]" style={{ color: '#014370', fill: '#014370' }} />

                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="text-[9px] text-[#64748B] font-medium uppercase tracking-wider">Total Revenue</span>
                      <span className="text-[24px] font-bold text-[#191C1E] leading-none">
                        <span className="sdr-li-counter" data-target="25000">0</span>
                      </span>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-[#F73F55]/5 rounded-full w-fit text-[8px] text-[#F73F55] font-medium absolute top-4 right-3">+12% from last month</span>
                  </div>

                  {/* Card 4: Followed up */}
                  <div
                    className="bg-white rounded-[20px] pt-7 pb-3 px-3 border border-[#EDF3FD] relative flex flex-col justify-between items-center w-[160px] flex-shrink-0 min-h-[120px]"
                    style={{ boxShadow: '0px 4px 4px 0px rgba(237, 243, 253, 0.3)' }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-white border border-[#EDF3FD] flex items-center justify-center z-10"
                      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    >
                      <Send size={20} className="stroke-[2.5]" style={{ color: '#014370', fill: '#014370' }} />
                    </div>
                    <div className="text-center flex flex-col items-center justify-center mt-1.5 flex-1">
                      <p className="text-[14px] font-semibold text-[#6E6E6E]">Followed up</p>
                      <h3 className="text-[32px] font-bold text-[#6693B1] leading-none mt-1">
                        <span className="sdr-li-counter" data-target="847">0</span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] font-light mt-2 text-[#008900]">
                      <span>↑</span>
                      <span>66% rate</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 md:divide-x divide-[#D0D0D0] w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="sdr-li-stat-card opacity-0 flex flex-col text-left px-4 md:px-6 lg:px-8 py-4">
              <span className="text-3xl sm:text-[60px] text-[#000000] tracking-tight leading-none">
                <span className="sdr-li-counter" data-target={stat.value}>0</span>
                {stat.suffix}
              </span>
              <span className="text-xs sm:text-[18px] text-[#5A5A5C] mt-3 font-normal leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] bg-[#D0D0D0] mt-8" />

      </div>
    </section>
  );
};

export default LeadIntelligence;
