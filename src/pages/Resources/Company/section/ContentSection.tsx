import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ETHOS_ITEMS = [
  {
    index: 0,
    heading: "Innovation First",
    description:
      "We embrace curiosity, experiment with emerging AI technologies, and build intelligent solutions that create real business impact.",
  },
  {
    index: 1,
    heading: "Ownership & Accountability",
    description:
      "Every team member is empowered to take initiative, solve meaningful challenges, and deliver work with responsibility and excellence.",
  },
  {
    index: 2,
    heading: "Collaboration & Growth",
    description:
      "We grow together by sharing knowledge, supporting one another, and fostering an environment where ideas become impactful products.",
  },
  {
    index: 3,
    heading: "Customer-Centric Innovation",
    description:
      "Everything we build starts with understanding customer needs, ensuring every AI solution delivers measurable value and long-term success.",
  },
];

const BOX_H = 400;
const ITEM_H = BOX_H / 2;

const ContentSection = () => {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLElement | null)[]>([]);
  const paraRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let rafId: number;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        // eslint-disable-next-line prefer-rest-params
        return arguments.length ? lenis.scrollTo(value as number, { immediate: true }) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });
    ScrollTrigger.defaults({ scroller: document.documentElement });

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const pinned = pinnedRef.current;
      const scrollTrack = scrollTrackRef.current;
      if (!pinned || !scrollTrack) return;

      const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
      const line = lineProgressRef.current;
      const headings = headingRefs.current.filter(Boolean) as HTMLElement[];
      const paras = paraRefs.current.filter(Boolean) as HTMLElement[];

      gsap.set(scrollTrack, { y: 0 });
      gsap.set([headings[2], headings[3], paras[2], paras[3]], { opacity: 0, y: 18 });
      gsap.set([headings[0], headings[1], paras[0], paras[1]], { opacity: 1, y: 0 });

      gsap.set(dots, { backgroundColor: "rgba(0,0,0,0.12)", scale: 1, boxShadow: "none" });
      gsap.set([dots[0], dots[1]], {
        backgroundColor: "#F67300",
        scale: 1.35,
        boxShadow: "0 0 0 3px rgba(246,115,0,0.3), 0 0 10px 3px rgba(246,115,0,0.5)",
      });

      if (line) gsap.set(line, { scaleY: 0.5, transformOrigin: "top center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinned,
          start: "top 120px",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(headings[0], { opacity: 0, y: -16, duration: 0.12, ease: "power2.inOut" }, 0)
        .to(paras[0], { opacity: 0, y: -16, duration: 0.12, ease: "power2.inOut" }, 0.03)
        .to(scrollTrack, { y: -ITEM_H, duration: 0.33, ease: "none" }, 0)
        .to(headings[2], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.15)
        .to(paras[2], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.21)
        .to(dots[0], { backgroundColor: "rgba(0,0,0,0.12)", scale: 1, boxShadow: "none", duration: 0.12, ease: "power2.inOut" }, 0)
        .to(dots[2], { backgroundColor: "#F67300", scale: 1.35, boxShadow: "0 0 0 3px rgba(246,115,0,0.3), 0 0 10px 3px rgba(246,115,0,0.5)", duration: 0.15, ease: "power2.out" }, 0.12)
        .to(line, { scaleY: 0.75, duration: 0.33, ease: "none" }, 0);

      tl.to(headings[1], { opacity: 0, y: -16, duration: 0.12, ease: "power2.inOut" }, 0.33)
        .to(paras[1], { opacity: 0, y: -16, duration: 0.12, ease: "power2.inOut" }, 0.36)
        .to(scrollTrack, { y: -ITEM_H * 2, duration: 0.33, ease: "none" }, 0.33)
        .to(headings[3], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.48)
        .to(paras[3], { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.54)
        .to(dots[1], { backgroundColor: "rgba(0,0,0,0.12)", scale: 1, boxShadow: "none", duration: 0.12, ease: "power2.inOut" }, 0.33)
        .to(dots[3], { backgroundColor: "#F67300", scale: 1.35, boxShadow: "0 0 0 3px rgba(246,115,0,0.3), 0 0 10px 3px rgba(246,115,0,0.5)", duration: 0.15, ease: "power2.out" }, 0.45)
        .to(line, { scaleY: 1, duration: 0.33, ease: "none" }, 0.33);

      tl.to({}, { duration: 0.33 }, 0.67);

      return () => { tl.kill(); };
    });

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      lenis.destroy();
      mm.revert();
    };
  }, []);

  return (
    <>
      <section className="relative z-10 bg-white px-6 pt-8 pb-0 sm:px-10 md:px-15">
        <div className="flex w-full flex-col items-center">
          <div
            data-ns-animate="true"
            data-offset="40"
            className="mb-8 flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5"
            style={{ boxShadow: "0px 3px 2.3px 0px rgba(0,0,0,0.25)" }}
          >
            <span className="text-sm font-medium leading-none text-[#04032E]">Our Mission</span>
          </div>

          <h2
            data-ns-animate="true"
            data-delay="0.1"
            data-offset="60"
            className="mb-16 max-w-[900px] text-center text-4xl font-medium leading-[1.2] tracking-tight text-[#04032E] sm:text-5xl md:text-[52px]"
          >
            We're building the{" "}
            <span className="text-[#F67300]">platform for agentic</span> software execution
          </h2>
        </div>
      </section>

        <div
          ref={pinnedRef}
          className="flex w-full justify-center bg-white px-6 pt-12 pb-16 sm:px-10 md:px-15 md:pb-24"
        >
          <div
            className="relative mx-auto flex w-full flex-col md:overflow-hidden bg-white text-left md:flex-row h-auto md:h-[400px]"
          >
            <div className="relative flex w-full flex-shrink-0 flex-col md:w-1/2">
              <div className="flex h-full flex-col p-8 md:p-12 lg:p-16">
                <h3 className="mb-6 text-3xl font-medium text-black md:text-[36px]">
                  Our Ethos
                </h3>
                <p className="max-w-[440px] text-lg leading-relaxed text-gray-600 md:text-[18px]">
                  The principles and vision that drive how we build agentic
                  execution platforms for the future of enterprise software.
                </p>
              </div>
            </div>

            <div className="relative flex w-full flex-row md:w-1/2">
              <div
                className="relative hidden flex-shrink-0 flex-col items-center md:flex"
                style={{ width: 1, backgroundColor: "#e5e7eb" }}
              >
                <div
                  ref={lineProgressRef}
                  className="absolute left-0 top-0 h-full w-full origin-top rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #F67300, rgba(246,115,0,0.35))",
                    transform: "scaleY(0)",
                  }}
                />

                {ETHOS_ITEMS.map((item, i) => (
                  <div
                    key={item.index}
                    className="absolute flex items-center justify-center"
                    style={{
                      top: i * ITEM_H + ITEM_H / 2 - 4.5,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      ref={(el) => { dotRefs.current[i] = el; }}
                      className="rounded-full"
                      style={{ width: 9, height: 9 }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex-1 overflow-visible md:overflow-hidden">
                <div
                  ref={scrollTrackRef}
                  className="flex w-full flex-col"
                  style={{ willChange: "transform" }}
                >
                  {ETHOS_ITEMS.map((item, i) => (
                    <div
                      key={item.index}
                      className="group relative w-full flex-shrink-0 h-auto md:h-[200px]"
                    >
                      <div className="flex h-full flex-col justify-center gap-5 p-[15px]">
                        <div>
                          <h4
                            ref={(el) => { headingRefs.current[i] = el; }}
                            className="mb-3 text-2xl font-medium text-black md:text-[24px]"
                            style={{ willChange: "transform, opacity" }}
                          >
                            {item.heading}
                          </h4>
                          <div className="h-px w-full bg-gray-200" />
                        </div>
                        <p
                          ref={(el) => { paraRefs.current[i] = el; }}
                          className="text-lg leading-relaxed text-gray-600 md:text-[18px]"
                          style={{ willChange: "transform, opacity" }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(246,115,0,0.025), transparent)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute right-0 top-0 h-48 w-48"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(246,115,0,0.05), transparent 65%)",
              }}
            />
          </div>
        </div>
    </>
  );
};

export default ContentSection;