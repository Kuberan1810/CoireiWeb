import { useLayoutEffect, useRef } from 'react';
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

        const ctx = gsap.context(() => { }, footerRef);

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
                            <div className="footer-title">Quick Links</div>
                            <div className="footer-nav">
                                <button onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Overview</div>
                                        <div className="link-text-hover white">Overview</div>
                                    </div>
                                </button>
                                <button onClick={() => document.getElementById('workforce')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">AI Workforce</div>
                                        <div className="link-text-hover white">AI Workforce</div>
                                    </div>
                                </button>
                                <button onClick={() => document.getElementById('automation')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Automation</div>
                                        <div className="link-text-hover white">Automation</div>
                                    </div>
                                </button>
                                <button onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">How We Work</div>
                                        <div className="link-text-hover white">How We Work</div>
                                    </div>
                                </button>
                                <button onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Platform</div>
                                        <div className="link-text-hover white">Platform</div>
                                    </div>
                                </button>
                                <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="footer-text-link w-inline-block text-left bg-transparent border-none p-0 cursor-pointer">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">FAQ</div>
                                        <div className="link-text-hover white">FAQ</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Workers</div>
                            <div className="footer-nav">
                                <a href="/products/follei/sdr-worker" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">SDR Worker</div>
                                        <div className="link-text-hover white">SDR Worker</div>
                                    </div>
                                </a>
                                <a href="/products/follei/sales-executive" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Sales Executive</div>
                                        <div className="link-text-hover white">Sales Executive</div>
                                    </div>
                                </a>
                                <a href="/products/follei/customer-success" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Customer Success</div>
                                        <div className="link-text-hover white">Customer Success</div>
                                    </div>
                                </a>
                                <a href="/products/follei/support-worker" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Support Worker</div>
                                        <div className="link-text-hover white">Support Worker</div>
                                    </div>
                                </a>
                                <a href="/products/follei/collections-worker" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Collections Worker</div>
                                        <div className="link-text-hover white">Collections Worker</div>
                                    </div>
                                </a>


                                <a href="/products/follei/account-manager" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Account Manager</div>
                                        <div className="link-text-hover white">Account Manager</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-widgets-nav">
                            <div className="footer-title">Coirei Pages</div>
                            <div className="footer-nav">
                                <a href="/" aria-current="page" className="footer-text-link w-inline-block w--current">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Home </div>
                                        <div className="link-text-hover white">Home</div>
                                    </div>
                                </a>

                                <a href="/careers" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Careers</div>
                                        <div className="link-text-hover white">Careers</div>
                                    </div>
                                </a>
                                <a href="/resources/company" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Company</div>
                                        <div className="link-text-hover white">Company</div>
                                    </div>
                                </a>
                                <a href="/resources/privacy" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Privacy</div>
                                        <div className="link-text-hover white">Privacy</div>
                                    </div>
                                </a>
                                <a href="/contact" className="footer-text-link w-inline-block">
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
                                <a href="/products/follei" className="footer-text-link w-inline-block">
                                    <div className="text-link-wrapper">
                                        <div className="link-text">Follei</div>
                                        <div className="link-text-hover white">Follei</div>
                                    </div>
                                </a>
                                <a href="/products/coireilms" className="footer-text-link w-inline-block">

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