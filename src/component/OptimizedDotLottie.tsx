import React, { useRef, useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useInView } from 'framer-motion';

interface OptimizedDotLottieProps {
    src: string;
    loop?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

export const OptimizedDotLottie: React.FC<OptimizedDotLottieProps> = ({ src, loop = true, style, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "200px" });
    const [dotLottie, setDotLottie] = useState<any>(null);

    const dotLottieRefCallback = (dotLottieInstance: any) => {
        setDotLottie(dotLottieInstance);
    };

    useEffect(() => {
        if (!dotLottie) return;
        if (isInView) {
            dotLottie.play();
        } else {
            dotLottie.pause();
        }
    }, [isInView, dotLottie]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', ...style }} className={className}>
            <DotLottieReact
                src={src}
                loop={loop}
                autoplay={false}
                dotLottieRefCallback={dotLottieRefCallback}
            />
        </div>
    );
};
    