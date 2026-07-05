import React, { useState, useEffect, useRef } from 'react';

interface TypewriterHeadingProps {
    text: string;
    className?: string;
    delay?: number;
    cursorClassName?: string;
    onComplete?: () => void;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ 
    text, 
    className = "", 
    delay = 30,
    onComplete
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isTyping && displayedText.length === 0) {
                    setIsTyping(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isTyping, displayedText.length]);

    useEffect(() => {
        if (isTyping && displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, delay);
            return () => clearTimeout(timeout);
        } else if (displayedText.length === text.length) {
            if (isTyping) {
                setIsTyping(false);
                if (onComplete) onComplete();
            }
        }
    }, [displayedText, isTyping, text, delay, onComplete]);

    return (
        <span ref={containerRef} className={className}>
            {displayedText.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                    {line}
                    {i !== arr.length - 1 && <br />}
                </React.Fragment>
            ))}
        </span>
    );
};

export default TypewriterHeading;
