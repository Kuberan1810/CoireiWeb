import React, { useState, useEffect, useRef } from 'react';
import TypewriterHeading from '../../../component/TypewriterHeading';

const TypewriterText = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
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
                setDisplayedText(text.slice(0, displayedText.length + 2));
            }, 30);
            return () => clearTimeout(timeout);
        } else if (displayedText.length === text.length) {
            if (isTyping) {
                setIsTyping(false);
                if (onComplete) onComplete();
            }
        }
    }, [displayedText, isTyping, text, onComplete]);

    return (
        <p
            ref={containerRef}
            style={{
                fontFamily: "'Cascadia Code', monospace",
                fontWeight: 350,
                fontSize: '16px',
                lineHeight: '35px',
                color: '#000000',
                minHeight: '105px'
            }}
            className="mb-8"
        >
            {displayedText}
            <span className={`inline-block w-2 h-4 ml-1 bg-black ${!isTyping && displayedText.length === text.length ? 'animate-pulse' : ''}`}></span>
        </p>
    );
};

const IndustrialAITraining = () => {
    const [isTypingDone, setIsTypingDone] = useState(false);
    const courses = [
        { title: "Generative AI & Prompt Engineering", tag: "Applied" },
        { title: "AI Agents & Automation", tag: "Applied" },
        { title: "Machine Learning Foundations", tag: "Core" },
        { title: "Hands-on Projects & Workshops", tag: "Practical" }
    ];

    const partners = [
        "ProDAC Solutions",
        "Network Rhinos",
        "SkillPoint",
        "+ 2 more partners"
    ];

    return (
        <section className="GlobalPadding">
            <h2 data-ns-animate className="text-5xl md:text-[52px] font-semibold text-black mb-15 min-h-[78px]">
                <TypewriterHeading text="Industrial AI Training" />
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-center">
                {/* Left List */}
                <div data-ns-animate data-delay="0.1" className="w-full lg:w-[40%] flex flex-col pt-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`py-5 flex justify-between items-center border-b border-[#EEF1F6]`}
                        >
                            <span className="text-[#14182C] text-sm md:text-base font-medium">
                                {course.title}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Cascadia Code', monospace",
                                }}
                                className="text-[#878FAA] text-xs md:text-sm font-normal">
                                {course.tag}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Card */}
                <div data-ns-animate data-delay="0.2" className="w-full lg:w-[60%] bg-[#F7F7F3] p-8 md:p-12 rounded-[20px]">
                    <div
                        className="mb-10 font-semibold"
                        style={{
                            fontFamily: "'Cascadia Code', monospace",
                            fontSize: '24px',
                            lineHeight: '58px',
                            color: '#585858'
                        }}
                    >
                        AI adoption starts with <br />
                        <span className="bg-[#F48120] text-gray-800 px-2 py-1">
                            knowledge.
                        </span>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <TypewriterText 
                            text="Industrial AI training programs for students, professionals, educational institutions, and organizations building real-world AI capability" 
                            onComplete={() => setIsTypingDone(true)}
                        />

                        <div className={`flex flex-wrap gap-4 mt-8 pt-4 border-t border-transparent transition-all duration-700 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {partners.map((partner, index) => (
                                <span
                                    key={index}
                                    className="text-[#878FAA] font-semibold text-xs md:text-sm"
                                >
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrialAITraining;