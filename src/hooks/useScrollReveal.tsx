// import { useEffect, useRef, useState } from "react";

// const useScrollReveal = (
//     threshold = 0.3,
//     y = 48,
//     duration = 0.7
// ) => {

//     const ref = useRef<any>(null);

//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {

//         const element = ref.current;

//         if (!element) return;

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsVisible(entry.isIntersecting);
//             },
//             {
//                 threshold,
//             }
//         );

//         observer.observe(element);

//         return () => observer.disconnect();

//     }, [threshold]);

//     const revealStyle = {
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible
//             ? "translateY(0px)"
//             : `translateY(${y}px)`,

//         transition: `
//             opacity ${duration}s cubic-bezier(0.4,0,0.2,1),
//             transform ${duration}s cubic-bezier(0.4,0,0.2,1)
//         `,
//     };

//     return {
//         ref,
//         isVisible,
//         revealStyle,
//     };
// };

// export default useScrollReveal;

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