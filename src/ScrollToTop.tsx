// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

// Register plugin if we are in local fallback
if (!(window as any).gsap) {
    localGsap.registerPlugin(ScrollTrigger);
}

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });

        // Trigger GSAP ScrollTrigger refreshes as layout shifts settle
        const timer1 = setTimeout(() => ScrollTrigger.refresh(), 50);
        const timer2 = setTimeout(() => ScrollTrigger.refresh(), 300);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [pathname]);

    return null;
};

export default ScrollToTop;
