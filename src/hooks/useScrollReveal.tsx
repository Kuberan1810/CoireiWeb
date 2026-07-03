import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(threshold = 0.2) {
    const ref = useRef<any>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // reveal only once
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return {
        ref,
        isVisible,

        revealStyle: {
            opacity: isVisible ? 1 : 0,

            transform: isVisible
                ? "translateY(0)"
                : "translateY(48px)",

            transition:
                "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
        },
    };
}