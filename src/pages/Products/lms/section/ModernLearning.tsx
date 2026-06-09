import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  number: string;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    number: "1",
    title: "Course Management",
    description: "Create and organize courses, modules and learning materials.",
  },
  {
    number: "2",
    title: "Student Management",
    description: "Manage enrollments, batches and learner profiles.",
  },
  {
    number: "3",
    title: "Assignment Management",
    description: "Create assignments and track student submissions.",
  },
  {
    number: "4",
    title: "Learning Analytics",
    description: "Monitor progress, attendance and performance insights.",
  }
];

const ModernLearning: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);

  // Mobile/Fallback scroll tracker
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "center center"]
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let pin: any;
    let unsubscribe: (() => void) | undefined;

    // Use GSAP pinning on desktop (lg screens) for a premium sticky animation effect
    if (window.innerWidth >= 1024) {
      pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.set(self.progress);
        }
      });
    } else {
      // Fallback on mobile/tablet: link directly to scrollYProgress
      unsubscribe = scrollYProgress.on("change", (v) => {
        scrollProgress.set(v);
      });
    }

    return () => {
      if (pin) pin.kill();
      if (unsubscribe) unsubscribe();
    };
  }, [scrollYProgress, scrollProgress]);

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Opacity & Scale transforms for each card/node based on path progression
  const opCard1 = useTransform(smoothProgress, [0, 0.1], [0.3, 1]);
  const scCard1 = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);
  const isCircle1Active = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  const opCard2 = useTransform(smoothProgress, [0.15, 0.32], [0, 1]);
  const scCard2 = useTransform(smoothProgress, [0.15, 0.32], [0.9, 1]);
  const yCard2 = useTransform(smoothProgress, [0.15, 0.32], [20, 0]);
  const isCircle2Active = useTransform(smoothProgress, [0.22, 0.32], [0, 1]);

  const opCard3 = useTransform(smoothProgress, [0.45, 0.68], [0, 1]);
  const scCard3 = useTransform(smoothProgress, [0.45, 0.68], [0.9, 1]);
  const yCard3 = useTransform(smoothProgress, [0.45, 0.68], [20, 0]);
  const isCircle3Active = useTransform(smoothProgress, [0.58, 0.68], [0, 1]);

  const opCard4 = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
  const scCard4 = useTransform(smoothProgress, [0.75, 0.9], [0.9, 1]);
  const isCircle4Active = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative text-white bg-[#161616] lg:h-screen flex items-center justify-center py-20 lg:py-0 px-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] font-instrument-sans"
          >
            Built For Modern Learning <br /> Management
          </h2>
        </div>

        {/* Desktop Curve Layout (Visible on lg and above) */}
        <div className="hidden lg:block relative w-[952px] h-[580px] mx-auto select-none">

          {/* Curved Connector Line SVG using Vector 24 specifications */}
          <div className="absolute top-[80px] left-0 w-[952px] h-[419px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 952 419"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base curve: goes all the way to ends where circles 1 and 4 sit */}
              <path
                d="M0.740234 418.196C93.2402 -123.805 837.74 -152.804 950.74 418.196"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Active progression path: linked to smoothProgress scroll trigger */}
              <motion.path
                d="M0.740234 418.196C93.2402 -123.805 837.74 -152.804 950.74 418.196"
                stroke="#F67300"
                strokeWidth="2.0"
                fill="none"
                style={{
                  pathLength: smoothProgress
                }}
              />
            </svg>
          </div>

          {/* --- CARDS & CIRCLES --- */}

          {/* Step 1: Course Management */}
          <motion.div
            style={{ opacity: opCard1, scale: scCard1 }}
            className="absolute left-[50px] top-[320px] w-[260px] z-10"
          >
            <div className="bg-[#1E1E1E]/80 border border-[#747474]/50 border-[1.5px] rounded-[15px] p-[20px] transition-all duration-300 hover:bg-[#252525]/90 hover:border-white/10 shadow-xl min-h-[120px] flex flex-col justify-center gap-[10px]">
              <h3 className="text-[17px] font-semibold text-white font-instrument-sans">
                {cards[0].title}
              </h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
                {cards[0].description}
              </p>
            </div>
          </motion.div>

          {/* Circle 1 - Aligned exactly at start of curve (x=20) */}
          <div className="absolute left-[0px] top-[478px] w-[40px] h-[40px] rounded-full bg-[#161616] border border-white/20 flex items-center justify-center text-[16px] font-medium text-white shadow-lg overflow-hidden z-20">
            <motion.div
              className="absolute inset-0 border border-[#F67300] bg-[#161616] rounded-full"
              style={{ opacity: isCircle1Active }}
            />
            <span className="relative z-10">{cards[0].number}</span>
          </div>


          {/* Step 2: Student Management */}
          <motion.div
            style={{ opacity: opCard2, scale: scCard2, y: yCard2 }}
            className="absolute left-[138px] top-[0px] w-[260px] z-10"
          >
            <div className="bg-[#1E1E1E]/80 border border-[#747474]/50 border-[1.5px] rounded-[15px] p-[20px] transition-all duration-300 hover:bg-[#252525]/90 hover:border-white/10 shadow-xl min-h-[120px] flex flex-col justify-center gap-[10px]">
              <h3 className="text-[17px] font-semibold text-white font-instrument-sans">
                {cards[1].title}
              </h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
                {cards[1].description}
              </p>
            </div>
          </motion.div>

          {/* Circle 2 - Aligned exactly on the curve at x=268, y=129 */}
          <div className="absolute left-[248px] top-[109px] w-[40px] h-[40px] rounded-full bg-[#161616] border border-white/20 flex items-center justify-center text-[16px] font-medium text-white shadow-lg overflow-hidden z-20">
            <motion.div
              className="absolute inset-0 border border-[#F67300] bg-[#161616] rounded-full"
              style={{ opacity: isCircle2Active }}
            />
            <span className="relative z-10">{cards[1].number}</span>
          </div>


          {/* Step 3: Assignment Management */}
          <motion.div
            style={{ opacity: opCard3, scale: scCard3, y: yCard3 }}
            className="absolute left-[554px] top-[0px] w-[260px] z-10"
          >
            <div className="bg-[#1E1E1E]/80 border border-[#747474]/50 border-[1.5px] rounded-[15px] p-[20px] transition-all duration-300 hover:bg-[#252525]/90 hover:border-white/10 shadow-xl min-h-[120px] flex flex-col justify-center gap-[10px]">
              <h3 className="text-[17px] font-semibold text-white font-instrument-sans">
                {cards[2].title}
              </h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
                {cards[2].description}
              </p>
            </div>
          </motion.div>

          {/* Circle 3 - Aligned exactly on the curve at x=684, y=130 */}
          <div className="absolute left-[664px] top-[110px] w-[40px] h-[40px] rounded-full bg-[#161616] border border-white/20 flex items-center justify-center text-[16px] font-medium text-white shadow-lg overflow-hidden z-20">
            <motion.div
              className="absolute inset-0 border border-[#F67300] bg-[#161616] rounded-full"
              style={{ opacity: isCircle3Active }}
            />
            <span className="relative z-10">{cards[2].number}</span>
          </div>


          {/* Step 4: Learning Analytics */}
          <motion.div
            style={{ opacity: opCard4, scale: scCard4 }}
            className="absolute left-[642px] top-[320px] w-[260px] z-10"
          >
            <div className="bg-[#1E1E1E]/80 border border-[#747474]/50 border-[1.5px] rounded-[15px] p-[20px] transition-all duration-300 hover:bg-[#252525]/90 hover:border-white/10 shadow-xl min-h-[120px] flex flex-col justify-center gap-[10px]">
              <h3 className="text-[17px] font-semibold text-white font-instrument-sans">
                {cards[3].title}
              </h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
                {cards[3].description}
              </p>
            </div>
          </motion.div>

          {/* Circle 4 - Aligned exactly at end of curve (x=932) */}
          <div className="absolute left-[912px] top-[478px] w-[40px] h-[40px] rounded-full bg-[#161616] border border-white/20 flex items-center justify-center text-[16px] font-medium text-white shadow-lg overflow-hidden z-20">
            <motion.div
              className="absolute inset-0 border border-[#F67300] bg-[#161616] rounded-full"
              style={{ opacity: isCircle4Active }}
            />
            <span className="relative z-10">{cards[3].number}</span>
          </div>

        </div>

        {/* Mobile/Tablet Layout (Visible below lg) */}
        <div className="lg:hidden relative max-w-md mx-auto flex flex-col gap-12 pl-10 select-none">

          {/* Vertical base connecting line */}
          <div className="absolute left-[20px] top-[15px] bottom-[25px] w-[2px] bg-white/10" />

          {/* Animated active vertical line */}
          <motion.div
            className="absolute left-[20px] top-[15px] w-[2px] bg-[#F67300] origin-top"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
            }}
          />

          {cards.map((card, idx) => {
            const startRange = idx * 0.25;
            const endRange = startRange + 0.2;
            const opMob = useTransform(scrollYProgress, [startRange, endRange], [0.2, 1]);
            const borderMob = useTransform(scrollYProgress, [startRange, endRange], ["rgba(255,255,255,0.2)", "#F67300"]);

            return (
              <motion.div
                key={idx}
                style={{ opacity: opMob }}
                className="relative group"
              >
                {/* Number Circle */}
                <motion.div
                  style={{ borderColor: borderMob }}
                  className="absolute -left-[30px] top-[10px] w-[20px] h-[20px] rounded-full bg-[#161616] border flex items-center justify-center text-[11px] font-semibold text-white z-10"
                >
                  {card.number}
                </motion.div>

                {/* Content Card */}
                <div className="bg-[#1E1E1E]/80 border border-[#747474]/50 border-[1.5px] rounded-[15px] p-[20px] transition-all duration-300 hover:bg-[#252525]/90 hover:border-white/10 shadow-xl flex flex-col gap-[10px]">
                  <h3 className="text-[17px] font-semibold text-white font-instrument-sans">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ModernLearning;
