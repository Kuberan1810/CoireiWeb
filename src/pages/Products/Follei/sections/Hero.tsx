import React from "react";
import Lottie from "lottie-react";
import heartAnimation from "../../../../assets/js/heart_animation.json";
import stepsAnimation from "../../../../assets/js/steps_animation.json";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
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
      <section className="section-hero">
        <div className="hero-space">
          <div className="hero-area text-center">
            <div
              data-w-id="4dd23dca-4618-a5f0-d798-0a1ac785ca0a"
              className="hero-tag"
            >
              <img
                src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2fb8354eee153a987756d_mingcute_bulb-ai-fill.svg"
                loading="lazy"
                alt="bulb-ai"
              />
              <div>One platform. Complete customer Intelligence</div>
            </div>

            <div className="hero-home-one-title-wrapper">
              <h1
                data-w-id="1f3fa2a0-810f-3cec-5d91-4b86e4ce9e11"
                className="hero-title lg:text-[60px] md:text-[50px] text-[40px] text-[#04032E] font-semibold max-w-[900px] lg:leading-[66.6px] md:leading-[55px] leading-[45px] lg:tracking-[-2px] tracking-[-1px] text-center mx-auto"
              >
                Track every Customer interaction with AI Precision
              </h1>
            </div>

            <div className="hero-home-one-text-wrapper">
              <p
                data-w-id="4193467d-a043-aa83-1a71-f72c5d28f53a"
                className="text-[16px] text-[#5A5A5C] max-w-[740px] mx-auto mt-5 lg:mt-0"
              >
                Our AI-powered healthcare SaaS platform transforms complex medical data into actionable insights in real time. From predictive analytics
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
                  src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b2ff4aa4ddd75b551c8ff2_Frame%202085666452.avif"
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
                <Lottie animationData={heartAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
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
                    <video
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
                    </video>

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

                  <div className="hero-gallery-info-wrap flex">
                    <div className="hero-gallery-info-details-wrap mg-bottom-0px">
                      <h2 className="hero-gallery-info-details-name text-[#04032E]! text-2xl! font-semibold!">
                        Julian
                      </h2>

                      <div className="hero-gallery-info-details-designation text-[#5A5A5C]! text-base! -mt-2!">
                        AI Phone Agent
                      </div>
                    </div>

                    <div
                      className="hero-gallery-sound-wrap"
                      dangerouslySetInnerHTML={{
                        __html: `<dotlottie-player src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69d4f9b42c1076c70d862198_Jencare%20Home%201%20voice.lottie" autoplay loop style="width: 100%; height: 100%;"></dotlottie-player>`
                      }}
                    />
                  </div>
                </div>
              </div>


            </div>

            <div className="hero-gallery-right">
              <div
                data-w-id="28a5ca84-bbee-f054-d99c-f25d72c42ea3"
                className="hero-gallery-image one-five"
                dangerouslySetInnerHTML={{
                  __html: `<dotlottie-player src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69ca8a180edee35748d22709_Efficiency%20Boosted.lottie" autoplay loop style="width: 100%; height: 100%;"></dotlottie-player>`
                }}
              />

              <div
                data-w-id="9a4b6b79-d734-d184-5390-e4e99e61013c"
                className="hero-gallery-image"
              >
                <Lottie animationData={stepsAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
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
                className="image-cover"
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