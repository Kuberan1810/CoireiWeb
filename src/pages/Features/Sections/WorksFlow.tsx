import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SearchNormal1, Radar, ShieldTick, Maximize1 , Code1 } from "iconsax-react";


gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: SearchNormal1,
    title: "Detect Vulnerabilities",
    desc: "Continuously analyze source code, APIs, and execution paths to identify potential security vulnerabilities before deployment.",
    side: "right",
  },
  {
    icon: Radar,
    title: "Prove with Live Exploitation",
    desc: "Every finding is validated against a sandboxed application. Coirei promotes only vulnerabilities that produce real evidence.",
    side: "left",
  },
  {
    icon: Code1,
    title: "Generate & Verify Patch",
    desc: "AI generates a secure fix, re-tests the application, and confirms the exploit is eliminated without breaking functionality.",
    side: "right",
  },
  {
    icon: ShieldTick,
    title: "Human Approval Gate",
    desc: "Every verified patch is delivered as a review-ready change. Nothing is merged until you approve it.",
    side: "left",
  },
  {
    icon: Maximize1,
    title: "Deploy with Confidence",
    desc: "Approved changes are deployed seamlessly into your pipeline with full audit trail and rollback safety nets in place.",
    side: "right",
  },
];

const WorksFlow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      const line = lineRef.current;
      const trackLine = trackLineRef.current;
      if (!cards.length || !line) return;

      // 1. Initial setup: hide all cards
      cards.forEach((card, index) => {
        const isLeft = steps[index].side === "left";
        gsap.set(card, {
          opacity: 0,
          x: isLeft ? -70 : 70,
          y: 25,
          scale: 0.95,
        });
      });

      // Initially set line heights to 0
      gsap.set([line, trackLine].filter(Boolean), { height: 0 });

      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];

      // 2. Master GSAP ScrollTrigger timeline scrubbed to scroll
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: firstCard,
          endTrigger: lastCard,
          start: "top 75%",
          end: "bottom 70%",
          scrub: 0.4,
        },
      });

      // Reveal Card 0 first
      masterTl.to(firstCard, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        onStart: () => {
          setActive((prev) => {
            const next = [...prev];
            next[0] = true;
            return next;
          });
        },
        onReverseComplete: () => {
          setActive((prev) => {
            const next = [...prev];
            next[0] = false;
            return next;
          });
        },
      });

      // Loop remaining cards: Draw line to Card i -> THEN reveal Card i
      for (let i = 1; i < cards.length; i++) {
        const targetHeight = cards[i].offsetTop - firstCard.offsetTop;

        // Draw active & track line down to Card i
        masterTl.to(
          [line, trackLine].filter(Boolean),
          {
            height: targetHeight,
            ease: "none",
            duration: 0.8,
          },
          ">"
        );

        // Reveal Card i as line touches it
        masterTl.to(
          cards[i],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            onStart: () => {
              setActive((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            },
            onReverseComplete: () => {
              setActive((prev) => {
                const next = [...prev];
                next[i] = false;
                return next;
              });
            },
          },
          ">"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white  overflow-hidden">
      <div className="text-center mb-16">
        <p
          data-ns-animate
          data-offset="80"
          className="backdrop-blur-md border border-black/20 rounded-xl p-2 max-w-fit text-base text-gray-600 mx-auto mb-2.5 bg-gray-50"
        >
          How Tasie Works
        </p>

        <p className="max-w-[600px] mx-auto text-[#000000] text-base md:text-[22px] leading-relaxed">
          Every vulnerability follows a verified security lifecycle, from
          intelligent detection to human-approved remediation.
        </p>
      </div>

      <div className="max-w-[960px] mx-auto relative">
        {/* Background track line - dynamically grows ONLY up to revealed cards */}
        <div
          ref={trackLineRef}
          className="hidden sm:block absolute left-1/2 top-[52px] w-[2.5px] h-0 -translate-x-1/2 bg-gray-200 z-10 pointer-events-none"
        />

        {/* GSAP ScrollTrigger animated active line */}
        <div
          ref={lineRef}
          className="hidden sm:block absolute left-1/2 top-[52px] w-[2.5px] h-0 -translate-x-1/2 bg-black z-10 pointer-events-none will-change-[height]"
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = step.side === "left";
            const stepNum = String(index + 1).padStart(2, "0");
            const isActive = active[index];

            return (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="relative z-1 will-change-transform"
              >
                <div
                  className={`w-full min-h-[104px] rounded-[20px] flex flex-col sm:grid sm:grid-cols-2 items-[flex-start] sm:items-center relative z-1 p-5 sm:p-0 gap-3 sm:gap-0 transition-all duration-700 ${
                    isActive
                      ? "bg-[#f2f2f2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/10 opacity-100"
                      : "bg-[#f8f8f8] opacity-0 border border-transparent"
                  }`}
                >
                  {/* LEFT COLUMN */}
                  <div
                    className={`flex items-center sm:px-10 sm:py-6 relative z-10 ${
                      isLeft
                        ? "order-2 sm:order-1 justify-start"
                        : "order-1 sm:order-1 justify-start sm:justify-center"
                    }`}
                  >
                    {isLeft ? (
                      <div className="max-w-[340px]">
                        <h3 className="text-[18px] font-semibold text-[#000000] mb-1 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[14px] text-[#000000]/80 leading-normal">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2.5">
                        <div className="p-2.5 rounded-[10px] bg-white border border-[#eaeaea] flex items-center justify-center shadow-xs">
                          <Icon size={30} color="#111111" variant="Bold" />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-700 bg-white border border-[#EAEAEA] rounded-[4px] px-1.5 py-0.5 leading-none shadow-xs">
                          {stepNum}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div
                    className={`flex items-center sm:px-10 sm:py-6 relative z-10 ${
                      isLeft
                        ? "order-1 sm:order-2 justify-start sm:justify-center"
                        : "order-2 sm:order-2 justify-start"
                    }`}
                  >
                    {isLeft ? (
                      <div className="inline-flex items-center gap-2.5">
                        <div className="p-2.5 rounded-[10px] bg-white border border-[#eaeaea] flex items-center justify-center p-2 shrink-0 shadow-xs">
                          <Icon size={30} color="#111111" variant="Bold" />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-700 bg-white border border-[#cecece] rounded-[4px] px-1.5 py-0.5 leading-none shadow-xs">
                          {stepNum}
                        </span>
                      </div>
                    ) : (
                      <div className="max-w-[340px]">
                        <h3 className="text-[18px] font-semibold text-[#000000] mb-1 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[14px] text-[#000000]/80 leading-normal">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Node Dot */}
                <div
                  className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white z-20 transition-all duration-500 pointer-events-none ${
                    isActive
                      ? "bg-black scale-125 shadow-md ring-2 ring-black/20 opacity-100"
                      : "bg-slate-300 scale-90 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorksFlow;
