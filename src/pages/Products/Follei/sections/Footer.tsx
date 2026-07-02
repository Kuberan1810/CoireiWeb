import React, { useLayoutEffect, useRef } from 'react';
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";
import '../footer.css';

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
  localGsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        let ctx = gsap.context(() => {}, footerRef);

        const timeout = setTimeout(() => {
            ctx.add(() => {
                const widgets = gsap.utils.toArray<HTMLElement>('.footer-widgets-nav');
                
                // Staggered slide-up for widgets
                if (widgets.length > 0) {
                    gsap.fromTo(widgets, 
                        { y: 50, opacity: 0 },
                        {
                            scrollTrigger: {
                                trigger: footerRef.current,
                                start: "top 85%",
                            },
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out"
                        }
                    );
                }

                // Fade in and stagger letters from left to right for the footer logo
                gsap.fromTo('.follei-char',
                    { opacity: 0, x: -30 },
                    {
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 70%",
                        },
                        opacity: 1, // Will animate to 1, but parent has opacity 0.1
                        x: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out"
                    }
                );

                // Fade in for footer bottom
                gsap.fromTo('.foote-bottom',
                    { opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 50%",
                        },
                        opacity: 1,
                        duration: 1,
                        delay: 0.3
                    }
                );
            });
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(timeout);
            ctx.revert();
        };
    }, []);

    return (
        <div className="footer" ref={footerRef}>
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="footer-widgets-area">
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Quciks links</div>
                            <div className="footer-nav">
                                <a href="/home-pages/home-v1" aria-current="page" className="footer-text-link w-inline-block w--current">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Home </div>
                                        <div className="link-text-hover white">Home</div>
                                    </div>
                                </a>

                                <a href="/template-pages/about" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">About</div>
                                        <div className="link-text-hover white">About</div>
                                    </div>
                                </a>
                                <a href="/template-pages/contact-us" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Contact</div>
                                        <div className="link-text-hover white">Contact</div>
                                    </div>
                                </a>
                                <a href="/template-pages/features" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Features</div>
                                        <div className="link-text-hover white">Features</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Workers</div>
                            <div className="footer-nav">
                                <a href="/template-pages/pricing" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">SDR Worker</div>
                                        <div className="link-text-hover white">SDR Worker</div>
                                    </div>
                                </a>
                                <a href="https://Follei.webflow.io/product/stater" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Sales Executive</div>
                                        <div className="link-text-hover white">Sales Executive</div>
                                    </div>
                                </a>
                                <a href="/template-pages/blog" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Customer Success</div>
                                        <div className="link-text-hover white">Customer Success</div>
                                    </div>
                                </a>
                                <a href="https://Follei.webflow.io/post/the-rise-of-digital-health-what-you-need-to-know" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Support Worker</div>
                                        <div className="link-text-hover white">Support Worker</div>
                                    </div>
                                </a>
                                <a href="https://Follei.webflow.io/post/the-rise-of-digital-health-what-you-need-to-know" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Collections Worker</div>
                                        <div className="link-text-hover white">Collections Worker</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Coirei Pages</div>
                            <div className="footer-nav">
                                <a href="/home-pages/home-v1" aria-current="page" className="footer-text-link w-inline-block w--current">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Home</div>
                                        <div className="link-text-hover white">Home</div>
                                    </div>
                                </a>

                                <a href="/template-pages/about" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Services</div>
                                        <div className="link-text-hover white">Services</div>
                                    </div>
                                </a>
                                <a href="/template-pages/contact-us" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Product</div>
                                        <div className="link-text-hover white">Product</div>
                                    </div>
                                </a>
                                <a href="/template-pages/features" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Blog</div>
                                        <div className="link-text-hover white">Blog</div>
                                    </div>
                                </a>
                                  <a href="/template-pages/contact-us" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Company</div>
                                        <div className="link-text-hover white">Company</div>
                                    </div>
                                </a>
                                <a href="/template-pages/features" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Contact</div>
                                        <div className="link-text-hover white">Contact</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Coirei Products</div>
                            <div className="footer-nav">
                                <a href="https://Follei.webflow.io/product/stater" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Follei</div>
                                        <div className="link-text-hover white">Follei</div>
                                    </div>
                                </a>
                                <a href="/template-pages/pricing" className="footer-text-link w-inline-block">

                                    <div className="text-link-wrapper">
                                        <div className="link-text">Coirei LMS</div>
                                        <div className="link-text-hover white">Coirei LMS</div>
                                    </div>
                                </a>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-center">
                <div className="footer-logo flex justify-center">
                    {"Follei".split("").map((char, index) => (
                        <span key={index} className="follei-char inline-block">{char}</span>
                    ))}
                </div>
                <div className="footer-center-backgorund">
                    <img width="1888" height="628" alt=""
                        src="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b25bf76bd17253c5d203c0_Ellipse%202653.avif"
                        loading="lazy"
                        srcSet="https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b25bf76bd17253c5d203c0_Ellipse%202653-p-500.avif 500w, https://cdn.prod.website-files.com/69b04e74db26548f38cdf097/69b25bf76bd17253c5d203c0_Ellipse%202653.avif 1888w"
                        sizes="(max-width: 1888px) 100vw, 1888px" />
                </div>
            </div>
            <div className="foote-bottom">
                <div>
                    © Copyright - <a href="" className="footer-source-link">Follei</a>
                    | Designed by <a href="https://coirei.com/" target="_blank" rel="noreferrer" className="footer-source-link">Coirei</a>
                    | <a href="" className="footer-source-link">Licensing</a>
                    - Powered by <a href="https://coirei.com/" target="_blank" rel="noreferrer" className="footer-source-link">Coirei</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;