
import { Notebook } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "../../../assets/images/Learning/img1.jpg";
import Img2 from "../../../assets/images/Learning/img2.png";
import Img3 from "../../../assets/images/Learning/img3.png";
import Img4 from "../../../assets/images/Learning/img4.jpg";
import Img5 from "../../../assets/images/Learning/img5.jpg";
import Skillpoint from "../../../assets/images/Learning/skillpoint.png";

gsap.registerPlugin(ScrollTrigger);

const Steps = [
  {
    num: "01",
    title: "Colleges & Educational Institutions",
    desc: "Partner with us to provide students with practical, industry-relevant learning experiences",
  },
  {
    num: "02",
    title: "Companies & Enterprises",
    desc: "Collaborate on real-world projects, training programs, and skill development initiatives.",
  },
  {
    num: "03",
    title: "Industry Experts",
    desc: "Gain insights and mentorship from experienced professionals.",
  },
  {
    num: "04",
    title: " Startups & Organizations",
    desc: "Engage in innovative projects and hands-on learning opportunities ",
  },
];

const existingPartners = {
  title: "Our Existing Partners",
  desc: "We are proud to collaborate with organizations that support practical, industry-focused learning experiences.",
  logos: [Img2,Img3,Skillpoint] as string[],
};

const partnerWithUs = {
  title: "Partner With Us",
  desc: "We welcome organizations and individuals to collaborate with Coirei in multiple ways",
  cards: [
    { num: "01", title: "Course Creation & Training Delivery", desc: "Design and deliver industry-relevant courses." },
    { num: "02", title: "Corporate Training Programs", desc: "Upskill teams with customized training solutions." },
    { num: "03", title: "Job Placement & Hiring", desc: "Bridge learners with real-world job opportunities." },
    { num: "04", title: "Content & Curriculum Design", desc: "Build structured and scalable learning content." },
  ],
};

const LearningSection = () => {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const pin = pinnedRef.current;
    if (!pin) return;

    // Direct DOM manipulation for maximum speed
    const updateStates = (p: number) => {
      // Thresholds where the line "hits" each circle (edge-arrival)
      // Optimized for aggressive "snap" feedback
      const thresholds = [0, 0.28, 0.61, 0.92];

      Steps.forEach((_, i) => {
        const isPast = p >= thresholds[i];
        const circle = circleRefs.current[i];
        const badge = badgeRefs.current[i];

        if (circle && badge) {
          if (isPast) {
            circle.style.backgroundColor = "#F18D37";
            circle.style.transform = "scale(1.15)";
            circle.style.boxShadow = "0 0 40px rgba(241, 141, 55, 0.6)";
            badge.style.backgroundColor = "#F18D37";
          } else {
            circle.style.backgroundColor = "#E3E3E0";
            circle.style.transform = "scale(1)";
            circle.style.boxShadow = "none";
            badge.style.backgroundColor = "#E3E3E0";
          }
        }
      });
    };

    // Master timeline for the line fill (smooth/continuous)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: "+=900",
        pin: true,
        scrub: true, // 0 delay tracking
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          updateStates(p);

          if (p < 0.28) setActiveIndex(0);
          else if (p < 0.61) setActiveIndex(1);
          else if (p < 0.92) setActiveIndex(2);
          else setActiveIndex(3);
        },
      },
    });

    // Line fill: 0% → 100% across the whole scroll
    tl.to(lineFillRef.current, { scaleX: 1, ease: "none" }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="instrument-sans text-white pt-24 sm:pt-28 md:pt-42 ">

      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24 px-4 py-20">
        <h1
          data-ns-animate
          data-direction="up"
          data-offset="80"
          className="text-[28px] sm:text-4xl md:text-[50px] font-normal text-transparent bg-clip-text bg-linear-to-r from-white to-[#999999] leading-tight mb-4"
        >
          Learning & Collaboration Ecosystem <br className="hidden md:block" />for Modern Development
        </h1>
        <p
          data-ns-animate
          data-delay="0.15"
          data-offset="80"
          className="text-base sm:text-xl md:text-[24px] text-white/80 leading-relaxed font-medium">
          Coirei delivers practical learning to master  workflows and build career-ready skills.
        </p>
      </div>

      {/* ── Collaborate Section ── */}
      <div className="px-6 md:px-10 lg:px-15 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            data-ns-animate
            data-direction="left"
            data-offset="80"
          >
            <h2 className="text-[30px] sm:text-[40px] md:text-[55px] font-normal text-[#E3E3E0] leading-tight mb-5">
              Collaborate with <span className="text-[#F18D37]">Coirei</span>
            </h2>
            <p className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] leading-relaxed mb-10 ">
               We collaborate with industry leaders, training organizations, and enterprises to deliver high-quality, outcome-driven learning experiences. Partner with Coirei to empower learners with practical knowledge and career-ready skills aligned with real-world demands.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-20 lg:mb-0">
              <div className="border border-white/20 rounded-lg p-5">
                <p className="text-white/50 text-sm sm:text-base md:text-[20px] mb-1">Powered by</p>
                <p className="text-sm sm:text-base md:text-[20px] font-medium text-[#E3E3E0]">Real-world use cases</p>
              </div>
              <div className="border border-white/20 rounded-lg p-5">
                <p className="text-white/50 text-sm sm:text-base md:text-[20px] mb-1">Driven by</p>
                <p className="text-sm sm:text-base md:text-[20px] font-medium text-[#E3E3E0]">Industry standards</p>
              </div>
            </div>
          </div>

          <div
            data-ns-animate
            data-direction="right"
            data-offset="80"
          >
            <div className="rounded-2xl bg-[#1c1c1c]">
              <img
                src={Img}
                alt="Team collaboration"
                className="w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[540px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── GSAP Pinned: Our Collaboration Network ── */}
      {/* The outer div is the scroll trigger / pin wrapper */}
      <div ref={pinnedRef} className="relative mt-8 ">
        {/* This inner div is what gets pinned (it IS the sticky content) */}
        <div className="p-4 sm:p-8 md:p-14 ">
          <h3
            data-ns-animate
            data-direction="up"
            data-offset="80"
            className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-2"
          >
            Our Collaboration Network
          </h3>
          <p
            data-ns-animate
            data-direction="up"
            data-offset="80"
            data-delay="0.1"
            className="text-[#B5B4B2] font-instrumental-Sans text-base sm:text-[20px] md:text-[25px] leading-relaxed max-w-3xl mb-12 sm:mb-16 md:mb-20"
          >
            We actively partner with a diverse ecosystem to bridge the gap between academic learning and industry requirements.
          </p>

          <div 
            data-ns-animate
            data-direction="up"
            data-offset="80"
            data-delay="0.2"
            className="relative"
          >
            {/* Background track */}
            <div className="absolute top-[30px] sm:top-[40px] md:top-[50px] left-[30px] sm:left-[38px] md:left-[64px] right-[30px] sm:right-[38px] md:right-[64px] h-[2px] bg-white/20 -translate-y-1/2 z-0">
              {/* Orange fill — GSAP controls scaleX from 0 → 1, origin-left */}
              <div
                ref={lineFillRef}
                className="h-full bg-[#F18D37] origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex flex-row justify-between gap-1 sm:gap-0">
              {Steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10 w-[60px] sm:w-[76px] md:w-60">
                  <div className="relative mb-3 sm:mb-4">
                    {/* Badge number */}
                    <div
                      ref={(el) => { badgeRefs.current[idx] = el; }}
                      className="absolute -top-1 sm:-top-3 -right-2 sm:-right-3 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-[8px] sm:text-[9px] md:text-[11px] font-bold border-2 border-black z-20 text-black bg-[#E3E3E0]"
                      style={{ transition: "background-color 0.4s ease" }}
                    >
                      {step.num}
                    </div>

                    {/* Circle icon */}
                    <div
                      ref={(el) => { circleRefs.current[idx] = el; }}
                      className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center shadow-lg relative z-10 bg-[#E3E3E0]"
                      style={{ transition: "background-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease" }}
                    >
                      <Notebook className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1c1c1c]" />
                    </div>
                  </div>
                  <p className="text-center text-[11px] sm:text-sm md:text-xl leading-tight font-medium text-[#E3E3E0] mt-5">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active step description */}
          <div 
            data-ns-animate
            data-direction="up"
            data-offset="80"
            data-delay="0.3"
            className="mt-8 sm:mt-12 md:mt-16 min-h-[160px] relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 " 
              >
                <h4 className="text-[22px] sm:text-[30px] md:text-[40px] font-semibold text-[#E3E3E0] mb-3">
                  {Steps[activeIndex].title}:
                </h4>
                <p className="text-[#B5B4B2] text-base sm:text-[22px] md:text-[30px] max-w-4xl leading-snug">
                  {Steps[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6 md:px-10 lg:px-15 mb-24 py-10 md:py-50 text-center">
          <h3
            data-ns-animate
            data-direction="up"
            data-offset="80"
            className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-4"
          >
            {existingPartners.title}
          </h3>
          <p
            data-ns-animate
            data-delay="0.1"
            data-offset="80"
            className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] mx-auto mb-12"
          >
            {existingPartners.desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {existingPartners.logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner logo"
                className="h-[35px] sm:h-[45px] md:h-[60px] w-[200px] sm:w-[250px] md:w-[300px] object-contain"
                data-ns-animate
                data-delay={0.2 * i}
                data-offset="80"
              />
            ))}
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-15 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="rounded-2xl overflow-hidden"
              data-ns-animate
              data-direction="left"
              data-offset="80"
            >
              <img
                src={Img4}
                alt="Partner with us"
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[660px] object-cover rounded-[15px]"
              />
            </div>

            <div
              data-ns-animate
              data-direction="right"
              data-offset="80"
            >
              <h4 className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-4">
                {partnerWithUs.title}
              </h4>
              <p className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] mb-8 ">
                {partnerWithUs.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partnerWithUs.cards.map((card, i) => (
                  <div
                    key={i}
                    className="group w-full h-auto min-h-[140px] md:min-h-[210px]
                            rounded-[10px] p-[15px] bg-white/4 border border-white/8 
                            transition-all duration-500 ease-out cursor-default hover:-translate-y-2"
                    data-ns-animate
                    data-delay={0.2 * i}
                    data-offset="80"
                    data-duration="0.5"
                  >
                    <p className="text-white text-base md:text-[20px] font-medium mb-3 md:mb-[60px] transition-colors duration-500 ">{card.num}</p>
                    <h5 className="text-[#E3E3E0] text-base md:text-[20px] font-semibold mb-2 transition-colors duration-500">
                      {card.title}
                    </h5>
                    <p className="text-white/50 text-sm md:text-[16px] font-medium leading-relaxed transition-colors duration-500">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-15 mb-4">
          <div className="rounded-2xl border border-[#444444] bg-[#2A2A2A] px-5 sm:pl-8 md:pl-[87px] sm:pr-5 py-5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
            <div
              data-ns-animate
              data-direction="left"
              data-offset="80"
              className="w-full md:w-1/2 py-8 md:py-0"
            >
              <h3 className="text-[28px] sm:text-[38px] md:text-[50px] font-normal text-[#E3E3E0] mb-4 sm:mb-6 md:mb-8">
                Apply for Collaboration
              </h3>
              <p className="text-xl sm:text-[24px] md:text-[30px] font-medium text-white mb-2">
                Interested in partnering with <span className="text-[#F18D37]">Coirei?</span>
              </p>
              <p className="text-[#B5B4B2] text-sm sm:text-base md:text-[20px] leading-relaxed mb-6 sm:mb-8 max-w-[340px]">
                Share your details and proposal to explore collaboration opportunities.
              </p>

              <button className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium hover:bg-[#3E3E3E] hover:text-white transition-all duration-300 cursor-pointer ">
                contact our team to get started
              </button>
            </div>

            <div
              data-ns-animate
              data-direction="right"
              data-offset="80"
              className="w-full md:w-1/2 flex justify-end h-full p-4"
            >
              <img
                src={Img5}
                alt="Contract signing handshake"
                className="w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

      </motion.div>
    </section >
  );
};

export default LearningSection;
