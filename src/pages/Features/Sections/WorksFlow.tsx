import { useEffect, useRef, useState } from "react";
import { SearchNormal1, Clock, ShieldSecurity, Maximize1 } from "iconsax-react";
import { FileCode } from "lucide-react";

const steps = [
  {
    icon: SearchNormal1,
    title: "Detect Vulnerabilities",
    desc: "Continuously analyze source code, APIs, and execution paths to identify potential security vulnerabilities before deployment.",
    side: "right",
  },
  {
    icon: Clock,
    title: "Prove with Live Exploitation",
    desc: "Every finding is validated against a sandboxed application. Coirei promotes only vulnerabilities that produce real evidence.",
    side: "left",
  },
  {
    icon: FileCode,
    title: "Generate & Verify Patch",
    desc: "AI generates a secure fix, re-tests the application, and confirms the exploit is eliminated without breaking functionality.",
    side: "right",
  },
  {
    icon: ShieldSecurity,
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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    let targetPct = 0;
    let currentPct = 0;
    let maxLineHeight = 0;
    let rafId: number;
    const LERP = 0.07;

    const getTarget = () => {
      const firstCard = stepRefs.current[0];
      const lastCard = stepRefs.current[steps.length - 1];
      if (!firstCard || !lastCard) return 0;

      const firstRect = firstCard.getBoundingClientRect();
      const lastRect = lastCard.getBoundingClientRect();
      const wh = window.innerHeight;

      const dot1Y = firstRect.top + firstRect.height / 2;
      const dot5Y = lastRect.top + lastRect.height / 2;

      maxLineHeight = dot5Y - dot1Y;

      if (maxLineHeight <= 0) return 0;

      const focusY = wh * 0.6;
      const progress = (focusY - dot1Y) / maxLineHeight;
      return Math.min(Math.max(progress, 0), 1);
    };

    const tick = () => {
      targetPct = getTarget();
      currentPct += (targetPct - currentPct) * LERP;
      if (Math.abs(targetPct - currentPct) < 0.0005) currentPct = targetPct;

      if (maxLineHeight > 0) {
        line.style.height = `${currentPct * maxLineHeight}px`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-slate-900 tracking-tight mb-3">
          How Tasie Works
        </h2>
        <p className="max-w-[600px] mx-auto text-[#000000] text-base md:text-[22px] leading-relaxed">
          Every vulnerability follows a verified security lifecycle—from
          intelligent detection to human-approved remediation.
        </p>
      </div>

      <div className="max-w-[960px] mx-auto relative">
        <div className="hidden sm:block absolute left-1/2 top-[52px] bottom-[52px] w-[2.5px] -translate-x-1/2 bg-gray-300 z-10 pointer-events-none" />

        <div
          ref={lineRef}
          className="hidden sm:block absolute left-1/2 top-[52px] w-[2.5px] h-0 -translate-x-1/2 bg-black z-10 pointer-events-none will-change-[height]"
        />

        <div className="flex flex-col gap-5">
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
                className={`relative z-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-9"
                }`}
              >
                <div className="w-full min-h-[104px] bg-[#f2f2f2] rounded-[20px] flex flex-col sm:grid sm:grid-cols-2 items-[flex-start] sm:items-center relative z-1 p-5 sm:p-0 gap-3 sm:gap-0">
                  <div
                    className={`flex items-center sm:px-10 sm:py-6 relative z-10 ${
                      isLeft
                        ? "order-2 sm:order-1 justify-start"
                        : "order-1 sm:order-1 justify-start sm:justify-center"
                    }`}
                  >
                    {isLeft ? (
                      <div className="max-w-[340px]">
                        <h3 className="text-[16px] font-semibold text-[#000000] mb-1 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[12px] text-[#000000] leading-normal">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-[10px] bg-white border border-[#eaeaea] flex items-center justify-center p-2 shrink-0">
                          <Icon size={18} color="#111111" variant="Bold" />
                        </div>
                        <span className="text-[6px] font-medium text-slate-600 bg-white border border-[#EAEAEA] rounded-[3px] p-[2px] leading-none">
                          {stepNum}
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex items-center sm:px-10 sm:py-6 relative z-10 ${
                      isLeft
                        ? "order-1 sm:order-2 justify-start sm:justify-center"
                        : "order-2 sm:order-2 justify-start"
                    }`}
                  >
                    {isLeft ? (
                      <div className="inline-flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-[10px] bg-white border border-[#eaeaea] flex items-center justify-center p-2 shrink-0">
                          <Icon size={18} color="#111111" variant="Bold" />
                        </div>
                        <span className="text-[6px] font-medium text-slate-600 bg-white border border-[#cecece] rounded-[3px] p-[2px] leading-none">
                          {stepNum}
                        </span>
                      </div>
                    ) : (
                      <div className="max-w-[340px]">
                        <h3 className="text-[16px] font-semibold text-[#000000] mb-1 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[12px] text-[#000000] leading-normal">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#f2f2f2] z-20 transition-all duration-700 pointer-events-none ${
                    isActive ? "bg-black scale-110" : "bg-slate-400"
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
