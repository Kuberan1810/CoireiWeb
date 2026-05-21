import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, Grid2X2Check, ArrowBigRight, FileTerminal } from "lucide-react";

const cards = [
  {
    title: "Track Every Interaction",
    desc: "Monitor opens, clicks, page visits, and user actions as they happen. Build a complete picture of every lead's intent without missing a signal.",
    tags: ["User Tracking", "Real time Data"],
    Icon: Grid2X2Check,
    initialRotate: -4,
    finalRotate: -10,
    zIndex: 10,
    yOffset: -420,
  },
  {
    title: "Decide the Next Move",
    desc: "Based on behavior and context, AI determines the perfect message, tone, and timing to engage each user effectively.",
    tags: ["Smart Decisions", "Personalization"],
    Icon: ArrowBigRight,
    initialRotate: 2,
    finalRotate: -0,
    zIndex: 20,
    yOffset: 0,
  },
  {
    title: "Execute & Convert",
    desc: "AI sends follow-ups across channels, nurtures leads, and drives conversions completely hands-free.",
    tags: ["Automation", "Conversion Boost"],
    Icon: FileTerminal,
    initialRotate: 5,
    finalRotate: 5,
    zIndex: 30,
    yOffset: 400,
  },
];

export default function StickyCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative h-[300vh]  pb-[40vh] z-10 overflow-visible ">

      {/* Header Section */}
      <div className="relative z-50 text-center w-full pt-20 mb-8 ">
        <div
          data-ns-animate
          data-offset="80"
          className="mb-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mx-auto"
        >
          <RefreshCw size={16} className="text-[#B5B4B2]" />
          <span className="text-[14px] font-medium text-white/80 ">Work Process</span>
        </div>

        <h2
          data-ns-animate
          data-offset="80"
          data-delay="0.1"
          className="text-[#E3E3E0] text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-tight mb-4    "
        >
          How Our AI Follow-ups Work
        </h2>

        <p
          data-ns-animate
          data-offset="80"
          data-delay="0.2"
          className="text-[#B5B4B2] text-[15px] sm:text-base  leading-relaxed font-light s"
        >
          From tracking behavior to closing conversions your AI agent handles the entire follow up journey automatically.
        </p>
      </div>

      

      <div className="sticky top-20 pt-44 w-full flex items-center justify-center overflow-visible px-[60px]">
        <div className="absolute top-[30%] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-[560px] h-[352px]">
          {cards.map((card, i) => {
            const expandProgress = useTransform(smoothProgress, [0.05, 0.80], [0, 2]);

            const y = useTransform(expandProgress, [0, 1], ["0%", `${(card as any).yOffset / 352 * 100}%`]);
            const rotate = useTransform(expandProgress, [0, 1], [card.initialRotate, (card as any).finalRotate]);
            const scale = useTransform(expandProgress, [0, 1], [0.98, 1]);

            return (
              <motion.div
                key={i}
                style={{
                  y,
                  rotateZ: rotate,
                  scale,
                  zIndex: card.zIndex,
                  transformStyle: "preserve-3d"
                }}
                className="absolute top-0 left-0 w-full h-full rounded-[24px] border border-[#414141] bg-[#292929]! overflow-hidden flex flex-col p-[37px] glass "
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Header - Icon only */}
                  <div className="mb-6">
                    <card.Icon size={60} absoluteStrokeWidth color="white" strokeWidth={1.5} />
                  </div>

                  {/* Body Content */}
                  <div className="mb-6 flex-1">
                    <h3 className="    text-white text-[24px] font-medium leading-[140%] mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="sticky-card-inter text-[#B5B4B2] text-[16px] font-normal leading-[148%] max-w-[95%]">
                      {card.desc}
                    </p>
                  </div>

                  {/* Solid Divider Line */}
                  <div className="w-full h-px bg-[#ffffff1a] mb-6" />

                  {/* Footer Tags - one on each corner */}
                  <div className="flex items-center justify-between flex-col md:flex-row w-full  gap-5  ">
                    <div className="px-6 py-2 rounded-full border border-[#ffffff1a] bg-[#ffffff0d] w-full text-center">
                      <div className="sticky-card-inter text-white text-[13px] font-normal md:text-lg">
                        {card.tags[0]}
                      </div>
                    </div>
                    <div className="px-6 py-2 rounded-full border border-[#ffffff1a] bg-[#ffffff0d] w-full text-center">
                      <div className="sticky-card-inter text-white text-[13px] md:text-lg font-normal">
                        {card.tags[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}