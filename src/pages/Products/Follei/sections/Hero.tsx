import React, { useEffect, useState } from "react";
import { OptimizedLottie } from "../../../../component/OptimizedLottie";
import { OptimizedDotLottie } from "../../../../component/OptimizedDotLottie";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import heartAnimation from "../../../../assets/js/heart_animation.json";
import stepsAnimation from "../../../../assets/js/steps_animation.json";
import { Link } from "react-router-dom";
import FolleiMitra from "../../../../assets/images/products/FolleiMitra.svg"
import HeroPart from "../../../../assets/images/products/hero-part.svg"
import { Users, TrendingUp } from "lucide-react";

// Helper component to animate numbers
const AnimatedNumber = ({ end, duration = 2000, decimals = 0, prefix = "", suffix = "" }: { end: number, duration?: number, decimals?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    // Add a slight delay for better effect when page loads
    const timeoutId = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <span>{prefix}{formattedCount}{suffix}</span>;
};


gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set(".hero-tag", { opacity: 0, y: 20 });
      gsap.set(".hero-home-one-title-wrapper", { opacity: 0, y: 40 });
      gsap.set(".hero-home-one-text-wrapper", { opacity: 0, y: 20 });
      gsap.set(".hero-button-group", { opacity: 0, scale: 0.95 });

      gsap.set(".hero-gallery-card", { scale: 0.8, opacity: 0, y: 40 });
      gsap.set(".hero-floating-pill", { scale: 0.8, opacity: 0, y: 30 });
      gsap.set(".hero-gallery-left .hero-gallery-image", { opacity: 0, scale: 0.9, x: -20 });
      gsap.set(".hero-gallery-right .hero-gallery-image", { opacity: 0, scale: 0.9, x: 20 });

      // Load Animation Sequence
      tl.to(".hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".hero-home-one-title-wrapper", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".hero-home-one-text-wrapper", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".hero-button-group", { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.5")
        .to(".hero-gallery-card", { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3")
        .to(".hero-floating-pill", { scale: 1, opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }, "<")
        .to(".hero-gallery-left .hero-gallery-image", { opacity: 1, scale: 1, x: 0, duration: 1, stagger: 0.15, ease: "power2.out" }, "-=1")
        .to(".hero-gallery-right .hero-gallery-image", { opacity: 1, scale: 1, x: 0, duration: 1, stagger: 0.15, ease: "power2.out" }, "-=1");

      let mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        gsap.set(".hero-gallery-left", { y: -80 });
        gsap.set(".hero-gallery-right", { y: 80 });

        gsap.to(".hero-gallery-left", {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-gallery-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        gsap.to(".hero-gallery-right", {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-gallery-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      mm.add("(max-width: 991px)", () => {
        gsap.set(".hero-gallery-left", { y: 0 });
        gsap.set(".hero-gallery-right", { y: 0 });
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{ "--index": index } as React.CSSProperties}
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] delay-[calc(var(--index)*25ms)]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="main-wrapper">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 5s ease-in-out 2.5s infinite;
          }
        `
      }} />
      <section className="section-hero">
        <div className="hero-space relative">
          <div className="hero-area text-center relative w-full">
            {/* Floating Left Pill - Glassmorphism UI */}
            <div className="hero-floating-pill absolute left-0 lg:left-[5%] bottom-[10%] xl:bottom-[10%] hidden md:block z-10">
              <div className="animate-float">
                <div className="flex items-center gap-4 bg-white/40 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 ring-1 ring-white/40 rounded-[24px] py-3 px-5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#E5F0FF]/90 backdrop-blur-sm rounded-[14px]">
                    <Users className="w-6 h-6 text-[#143265]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-[12px] font-bold tracking-wider text-[#1F1F1F] uppercase mb-0.5">Active Users</div>
                    <div className="text-[28px] font-bold text-[#1D1B44] leading-none  ">
                      <AnimatedNumber end={1284} duration={2500} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Right Pill - Glassmorphism UI */}
            <div className="hero-floating-pill absolute right-0 lg:right-[5%] bottom-[10%] xl:bottom-[20%] hidden md:block z-10">
              <div className="animate-float-delayed">
                <div className="flex items-center gap-4 bg-white/40 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 ring-1 ring-white/40 rounded-[24px] py-3 px-5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#E2F7E6]/90 backdrop-blur-sm rounded-[14px]">
                    <TrendingUp className="w-6 h-6 text-[#22A559]" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-[12px] font-bold tracking-wider text-[#1F1F1F] uppercase mb-0.5">Conversion</div>
                    <div className="text-[28px] font-bold text-[#1D1B44] leading-none  ">
                      <AnimatedNumber end={64.8} decimals={1} duration={2500} prefix="+" suffix="%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-w-id="4dd23dca-4618-a5f0-d798-0a1ac785ca0a"
              className="hero-tag mx-auto mt-4 md:mt-0 w-auto max-w-[90%] sm:max-w-fit shadow-sm flex items-center justify-center gap-2 !px-4 !py-2 sm:!px-4 sm:!py-2"
            >
              <img
                src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2fb8354eee153a987756d_mingcute_bulb-ai-fill.svg"
                loading="lazy"
                alt="bulb-ai"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <div className="text-xs sm:text-[15px] font-medium leading-tight whitespace-nowrap sm:whitespace-normal truncate sm:overflow-visible">One platform. Complete customer Intelligence</div>
            </div>

            <div className="hero-home-one-title-wrapper">
              <h1
                data-w-id="1f3fa2a0-810f-3cec-5d91-4b86e4ce9e11"
                className="hero-title lg:text-[60px] md:text-[50px] text-[40px] text-[#04032E] font-semibold max-w-[900px] lg:leading-[66.6px] md:leading-[55px] leading-[45px] lg:tracking-[-2px] tracking-[-1px] text-center mx-auto"
              >
                Where Business Intelligence Becomes Action
              </h1>
            </div>

            <div className="hero-home-one-text-wrapper">
              <p
                data-w-id="4193467d-a043-aa83-1a71-f72c5d28f53a"
                className="text-[16px] text-[#5A5A5C] max-w-[740px] mx-auto mt-5 lg:mt-0"
              >
                Our AI-powered Lead Manager SaaS platform transforms complex Leads data into actionable insights in real time, enabling predictive analytics that nurture leads at every stage of the sales cycle
              </p>
            </div>

            <div
              data-w-id="1ab34657-c254-0354-00df-022e0a84874f"
              className="hero-button-group cursor-pointer"
            >
              <Link
                to={"/products/follei"}
                className="button primary hover:opacity-80! transition-all duration-300 w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="link-text">{splitText("Get Started")}</div>
                  <div className="link-text-hover">{splitText("Get Started")}</div>
                </div>

                <div className="button-icon-wrapper">
                  <img
                    width={8}
                    height={13}
                    alt="button-white-right-arrow"
                    src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d09dd89119c3d5d20fe5ef_button-white-right-arrow.svg"
                    loading="lazy"
                    className="button-icon"
                  />

                  <img
                    width={8}
                    height={13}
                    alt="button-white-right-arrow"
                    src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d09dd89119c3d5d20fe5ef_button-white-right-arrow.svg"
                    loading="lazy"
                    className="button-icon-hover"
                  />
                </div>
              </Link>


            </div>
          </div>

          <div className="hero-gallery-wrapper">
            <div className="hero-gallery-left">
              <div
                data-w-id="ada0cd64-f277-22e0-a3e9-c99a1a0172d6"
                className="hero-gallery-image"
              >
                <img
                  src={HeroPart}
                  loading="eager"
                  width={469}
                  height={116}
                  alt="4,580+ star reviews with 4.9 rating shown by four orange stars and profile icons of three reviewers."
                  className="hero-gallery-images"
                />
              </div>

              <div
                data-w-id="f8e191a9-dcfd-89d2-1e25-4010046d1033"
                className="hero-gallery-image"
              >
                <OptimizedLottie animationData={heartAnimation} loop style={{ width: "100%", height: "100%" }} />
              </div>


            </div>

            <div
              id="w-node-_17fa6d8a-f512-5f62-ba69-c0f780a61c43-38cdf07c"
              className="hero-gallery-gallery"
            >
              <div
                data-w-id="c1869490-a103-f5e0-2533-f76d179df40d"
                className="hero-gallery-card"
              >
                <div className="hero-gallery-video-wrap">
                  <div
                    data-poster-url="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_poster.0000000.jpg"
                    data-video-urls="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_mp4.mp4,https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_webm.webm"
                    data-autoplay="true"
                    data-loop="true"
                    data-wf-ignore="true"
                    className="hero-gallery-video w-background-video w-background-video-atom"
                  >
                    {/* <video
                      id="ae81bb96-d2ba-a387-d4db-09df5498e49b-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      data-wf-ignore="true"
                      data-object-fit="cover"
                      style={{
                        backgroundImage:
                          'url("https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_poster.0000000.jpg")',
                      }}
                    >
                      <source
                        src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_mp4.mp4"
                        data-wf-ignore="true"
                      />
                      <source
                        src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_webm.webm"
                        data-wf-ignore="true"
                      />
                    </video> */}
                    <img src={FolleiMitra} alt="FolleiMitra" className="w-full h-full object-cover" />
                    <noscript>
                      <style>{`
                      [data-wf-bgvideo-fallback-img] {
                        display: none;
                      }

                      @media (prefers-reduced-motion: reduce) {
                        [data-wf-bgvideo-fallback-img] {
                          position: absolute;
                          z-index: -100;
                          display: inline-block;
                          height: 100%;
                          width: 100%;
                          object-fit: cover;
                        }
                      }
                    `}</style>

                      <img
                        data-wf-bgvideo-fallback-img="true"
                        src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097%2F69d4f511ac6d668c965420e3_freepik_let-me-make-a-video-of-th_2732932913_poster.0000000.jpg"
                        alt=""
                      />
                    </noscript>

                    <div aria-live="polite">
                      <button
                        type="button"
                        data-w-bg-video-control="true"
                        aria-controls="ae81bb96-d2ba-a387-d4db-09df5498e49b-video"
                        className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                      >
                        <span>
                          <img
                            src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d4fbfe65e746972979a6ac_play-button.svg"
                            loading="lazy"
                            alt="Pause video"
                          />
                        </span>

                        <span hidden>
                          <img
                            loading="lazy"
                            alt="Play video"
                            src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d4fc0bba4f7721c166df5a_pause-button.svg"
                          />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="hero-gallery-info-wrap flex flex-col md:flex-row !items-start md:!items-center justify-between text-left w-full">
                    <div className="hero-gallery-info-details-wrap mg-bottom-0px text-left w-full">
                      <h2 className="hero-gallery-info-details-name text-[#04032E] text-2xl font-semibold !text-left">
                        Follei Mitra
                      </h2>

                      <div className="hero-gallery-info-details-designation text-[#5A5A5C] text-base -mt-2 !text-left">
                        AI Phone Agent
                      </div>
                    </div>

                    <div className="hero-gallery-sound-wrap self-start md:self-auto">
                      <OptimizedDotLottie src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d4f9b42c1076c70d862198_Jencare%20Home%201%20voice.lottie" />
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="hero-gallery-right">
              <div
                data-w-id="28a5ca84-bbee-f054-d99c-f25d72c42ea3"
                className="hero-gallery-image one-five"
              >
                <OptimizedDotLottie src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69ca8a180edee35748d22709_Efficiency%20Boosted.lottie" />
              </div>

              <div
                data-w-id="9a4b6b79-d734-d184-5390-e4e99e61013c"
                className="hero-gallery-image"
              >
                <OptimizedLottie animationData={stepsAnimation} loop style={{ width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className="hero-background">
              <img
                src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2f490e1d92f420d1a6112_image%2067.avif"
                loading="eager"
                width={1920}
                height={1307}
                alt=""
                srcSet="
              https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2f490e1d92f420d1a6112_image%2067-p-500.avif 500w,
              https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2f490e1d92f420d1a6112_image%2067-p-800.avif 800w,
              https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2f490e1d92f420d1a6112_image%2067.avif 1920w
            "
                sizes="(max-width: 1919px) 100vw, 1920px"
                className="image-cover absolute inset-0 w-full h-full object-cover"
              />

              <img
                src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2fbc89fa39babb99323fb_Ellipse%202653%20(1).avif"
                loading="eager"
                width={1920}
                height={742}
                alt=""
                srcSet="
              https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2fbc89fa39babb99323fb_Ellipse%202653%20(1)-p-500.avif 500w,
              https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2fbc89fa39babb99323fb_Ellipse%202653%20(1).avif 1920w
            "
                sizes="(max-width: 1919px) 100vw, 1920px"
                className="shape-top"
              />

              <img
                src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2bdbadcf5b10b5d1a5a96_Ellipse%202655.avif"
                loading="eager"
                width={1920}
                height={1307}
                alt=""
                className="shape-bottom hero-1"
              />
            </div>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Hero;