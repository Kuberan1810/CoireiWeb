import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'framer-motion';

export const OptimizedLottie: React.FC<React.ComponentProps<typeof Lottie>> = (props) => {
    const lottieRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "200px" });

    useEffect(() => {
        if (isInView) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.pause();
        }
    }, [isInView]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
            <Lottie lottieRef={lottieRef} {...props} autoplay={false} />
        </div>
    );
};
