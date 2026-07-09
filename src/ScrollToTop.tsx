import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Native fallback scroll to top
        window.scrollTo(0, 0);

        // Reset global Lenis scroll if available
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }

        // Apply theme classes based on route path
        if (pathname.startsWith('/products/follei')) {
            document.body.classList.add('follei-theme');
        } else {
            document.body.classList.remove('follei-theme');
        }

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
