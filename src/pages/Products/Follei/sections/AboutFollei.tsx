import React, { useEffect, useRef } from "react";
import { Network } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgImage from "../../../../assets/images/products/bg.png";
import bg7 from "../../../../assets/images/products/bg7.jpg";
import gmailIcon from "../../../../assets/images/products/socialMediaIcons/Gmail.svg";
import whatsappIcon from "../../../../assets/images/products/socialMediaIcons/WhatsApp.svg";
import callsIcon from "../../../../assets/images/products/socialMediaIcons/Calls.svg";
import messengerIcon from "../../../../assets/images/products/socialMediaIcons/Messenger.svg";

gsap.registerPlugin(ScrollTrigger);

const AnimatedNumber: React.FC<{ value: number; suffix?: string; prefix?: string; className?: string }> = ({ value, suffix = "", prefix = "", className }) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;
    
    const obj = { val: 0 };
    
    const tween = gsap.to(obj, {
      val: value,
      duration: 1.0,
      delay: 0.2, // Slight delay so the user sees it start after scrolling
      ease: "power3.out", // Premium, cinematic deceleration
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = prefix + Math.round(obj.val) + suffix;
        }
      }
    });

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [value, suffix, prefix]);

  return <span ref={numberRef} className={className}>{prefix}0{suffix}</span>;
};

const AboutFollei: React.FC = () => {
  return (
    <section className="relative w-full GlobalPadding overflow-hidden bg-white flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full mx-auto relative z-10">

        {/* Section Header */}
        <div data-ns-animate data-delay="0" className="text-center max-w-4xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>About Follei</span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none"
          >
            The Unified Intelligence Platform For{" "}
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Business Operations
            </span>
          </h2>

          {/* Subheading */}
          <p
            className="text-[#5A5A5C] text-sm sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-2xl mt-2"
          >
            The business landscape is evolving. Follei brings it all together-combining intelligent insights, AI automation, and adaptive learning into one platform designed to help organizations work smarter, move faster, and grow at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Card 1*/}
          <div
            data-ns-animate data-delay="0.1"
            className="relative bg-gradient-to-br from-[#1E293B] to-[#0A111F] text-white rounded-[10px] p-5 flex flex-col justify-between h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
              style={{ backgroundImage: `url(${bg7})` }}
            />

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between">
              <h3 className="text-[18px] font-bold tracking-tight text-white leading-tight whitespace-nowrap">
                Integrated Intelligence Systems
              </h3>
              <div className="w-8 h-8 rounded-[8px] bg-white flex items-center justify-center text-slate-300 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Network size={20} className="text-[#004370]" />
              </div>
            </div>

            <div className="relative z-10 bg-white text-[#0B0F19] rounded-[14px] p-[15px] flex flex-col justify-between h-[193px] mt-auto shadow-sm">
              <AnimatedNumber value={6} className="text-[100px] tracking-tight text-[#222222] leading-none select-none" />
              <p className="text-[#0B0F19] text-[13px] leading-relaxed font-normal">
                Business Intelligence, Knowledge, Revenue, Customer, AI Workforce, and Learning Systems working together as one intelligent platform.
              </p>
            </div>
          </div>

          {/* Card 2: Built For Modern Enterprises */}
          <div
            data-ns-animate data-delay="0.2"
            className="relative bg-[#F2F2F2] rounded-[16px] p-5 flex flex-col justify-between h-full hover:bg-[#F3F4F6]/90 transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-[18px] tracking-tight text-[#000000] leading-tight">
                Built For Modern Enterprises
              </h3>
            </div>

            <div className="my-2 flex flex-col justify-center">
              <AnimatedNumber value={24} suffix="/7" className="text-[70px] tracking-tight text-[#222222]" />

              <div className="flex items-center gap-2.5 mt-5">
                <img src={gmailIcon} className="w-7 h-7 object-contain hover:scale-110 transition-transform duration-300" alt="Gmail" />
                <img src={whatsappIcon} className="w-7 h-7  object-contain hover:scale-110 transition-transform duration-300" alt="WhatsApp" />
                <img src={callsIcon} className="w-7 h-7  object-contain hover:scale-110 transition-transform duration-300" alt="Calls" />
                <img src={messengerIcon} className="w-7 h-7 object-contain hover:scale-110 transition-transform duration-300" alt="Messenger" />
              </div>
            </div>

            <p className="text-[#222222] text-[18px] leading-relaxed font-light ">
              Every AI worker operates continuously with business context, real-time intelligence, and autonomous decision-making.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-full justify-between">

            {/* Card 3: Connected Ecosystem */}
            <div
              data-ns-animate data-delay="0.3"
              className="relative bg-[#D7FD76] text-[#0B0F19] rounded-[16px] p-5 flex flex-col justify-between flex-1 hover:brightness-105 transition-all duration-500"
            >
              <div>
                <h3 className="text-[18px] tracking-tight leading-tight">
                  Connected Ecosystem
                </h3>
                <AnimatedNumber value={50} suffix="+" className="text-[60px] tracking-tight" />
              </div>
              <p className="text-[#000000] text-[18px] leading-snug">
                Integrate business systems, communication channels, and knowledge sources into a single AI-ready ecosystem.
              </p>
            </div>

            {/* Card 4: Availability */}
            <div
              data-ns-animate data-delay="0.4"
              className="bg-[#131313] text-white rounded-[16px] p-6 h-[78px] flex items-center justify-between hover:border-slate-800 transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-[#FFFFFF] text-[22px] tracking-wider">Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FFFFFF] text-[34px] tracking-tight">Always On</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFollei;