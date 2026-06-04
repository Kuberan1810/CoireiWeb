
const AboutUs = () => {
  return (
    <section className="section about-us">
      <div className="container">
        <div className="about-us-title-wrapper">
          <div className="about-us-title-flex">
            <div className="about-us-stat-wrappper">
              <div className="about-us-subtitle-wrap">
                <div
                  data-wf--subtitle--variant="borders"
                  className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
                >
                  <div className="subtitle-flex-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                      loading="lazy"
                      alt="Subtitle Icon"
                      className="subtitle-icon"
                    />
                    <div className="subtitle-text">About Us</div>
                  </div>
                </div>
              </div>
              <div className="about-award-count-wrap">
                <div className="about-award-count-number">40+</div>
                <div className="award-count-arrow-wrap one">
                  <div className="award-count-arrow-text">Worldwide</div>
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f33702cc97b2f28589225_Award-Arrow-One.png"
                    loading="lazy"
                    alt="Award Arrow"
                    className="award-count-arrow-icon one"
                  />
                </div>
                <div className="award-count-arrow-wrap two">
                  <div className="award-count-arrow-text two">Awards Won</div>
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f33700369e38aee50c1d5_Award-Arrow-Two.png"
                    loading="lazy"
                    alt="Award Arrow"
                    className="award-count-arrow-icon two"
                  />
                </div>
              </div>
            </div>
            <div className="about-us-title-flex-right">
              <div className="about-us-title-border"></div>
              <div className="about-us-title-wrap">
                <h3 className="about-us-title">
                  Our team of designers, developers, and thinkers driven by{" "}
                  <span className="about-us-title-mark">
                    one purpose — to craft digital experiences.
                  </span>
                </h3>
                <p className="about-section-details">
                  We combine strategy, creativity, and technology to help brands
                  grow in the modern digital landscape. Every project we take on
                  is fueled by curiosity, guided by precision.
                </p>
                <a
                  data-wf--primary-button--variant="alice-blue"
                  href="/about-us"
                  className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
                >
                  <div className="primary-button-flex">
                    <div className="primary-button-text-wrap">
                      <div className="primary-button-text">More About Us</div>
                      <div className="primary-button-text-hover">More About Us</div>
                    </div>
                    <div className="primary-button-arrow-wrapper">
                      <div className="primary-button-arrow-wrap">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                          loading="lazy"
                          alt="Arrow"
                          className="primary-button-arrow"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                          loading="lazy"
                          alt="Arrow"
                          className="primary-button-arrow-hover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="primary-button-hover-bg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-section-title-divider"></div>
      <div className="container">
        <div className="about-vh-wrap">
          <div className="about-stat-wrapper">
            <div className="about-stat-flex">
              <div className="about-stat-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f399a64049d0423783289_About-Stat-Image.jpg"
                  loading="lazy"
                  alt="Stat Image"
                  className="about-stat-image"
                />
              </div>
              <div className="about-stats-counters-flex">
                <div className="single-testimonial-stat-wrap about-us">
                  <div className="testimonial-counter-wrap about-us">
                    {/* Simplified static value for robust rendering but structured similarly */}
                    <h2 className="single-number about-us">95%</h2>
                  </div>
                  <div className="testimonial-stat-text">
                    Clients Satisfied and Repeating
                  </div>
                </div>
                <div className="single-testimonial-stat-wrap about-us">
                  <div className="testimonial-counter-wrap about-us">
                    <h2 className="single-number about-us">150+</h2>
                  </div>
                  <div className="testimonial-stat-text">
                    Projects Completed In 24 Countries
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stat-blur"></div>
          </div>
          <div className="about-video-wrap">
            <div className="about-video w-background-video w-background-video-atom">
              <video
                id="about-video-element"
                autoPlay
                loop
                muted
                playsInline
                style={{ backgroundImage: "url('https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c%2F691ce85f982bdec6d59a627e_About-Video_poster.0000000.jpg')", objectFit: "cover" }}
              >
                <source src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c%2F691ce85f982bdec6d59a627e_About-Video_mp4.mp4" />
                <source src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c%2F691ce85f982bdec6d59a627e_About-Video_webm.webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
