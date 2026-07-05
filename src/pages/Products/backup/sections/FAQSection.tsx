import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "How do you deliver your AI services?",
        answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration."
    },
    {
        question: "Which communication channels does Follei support?",
        answer: "Follei integrates seamlessly with major channels including voice calls, WhatsApp, email, SMS, and web chatbots, allowing you to orchestrate unified omnichannel customer journeys."
    },
    {
        question: "How does the AI follow-up system work?",
        answer: "Our AI engine analyzes customer interactions in real time to detect user intent, identify bottlenecks, and trigger automated follow-up actions or alerts to keep customers engaged without manual effort."
    },
    {
        question: "Is Follei secure and compliant with data regulations?",
        answer: "Yes. Data security is built into our core infrastructure. Follei utilizes end-to-end encryption, secure cloud storage, and complies with industry-standard compliance frameworks to protect user information."
    }
];

const ToggleIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
            {/* Top line */}
            <motion.div
                className={`absolute h-[2px] rounded-full transition-colors duration-200 ${isOpen ? 'bg-white' : 'bg-zinc-400 group-hover:bg-white'
                    }`}
                animate={{
                    width: isOpen ? "16px" : "12px",
                    rotate: isOpen ? 45 : 0,
                    x: isOpen ? 0 : -2,
                    y: isOpen ? 0 : -3,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            {/* Bottom line */}
            <motion.div
                className={`absolute h-[2px] rounded-full transition-colors duration-200 ${isOpen ? 'bg-white' : 'bg-zinc-400 group-hover:bg-white'
                    }`}
                animate={{
                    width: isOpen ? "16px" : "12px",
                    rotate: isOpen ? -45 : 0,
                    x: isOpen ? 0 : 2,
                    y: isOpen ? 0 : 3,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </div>
    );
};

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full py-20 lg:py-28 px-6 sm:px-10 md:px-15 overflow-hidden bg-white ">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Heading & Badge */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        {/* Pill Badge with exact capsule styling and default blue text */}
                        <div className="mb-8 flex justify-start">
                            <div
                                className="inline-flex items-center justify-center gap-2 px-[13px] py-[7px] bg-[#24292C]/20 border border-white/10 text-white select-none relative"
                                style={{
                                    boxShadow: `
                                        inset 0 3px 4px rgba(255, 255, 255, 0.2), 
                                        inset 0 -3px 4px rgba(255, 255, 255, 0.2)
                                    `,
                                    borderRadius: '2px',
                                    overflow: 'visible'
                                }}
                            >
                                {/* Top-Right Corner Line */}
                                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-white/40 pointer-events-none" />
                                {/* Bottom-Left Corner Line */}
                                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-white/40 pointer-events-none" />

                                <span className="text-sm tracking-wide text-white">
                                    FAQs
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-tight max-w-sm  ">
                            Frequently <br />
                            Asked <br />
                            Questions
                        </h2>
                    </div>

                    {/* Right Column: Accordion list */}
                    <div className="lg:col-span-7 w-full border-t border-dashed border-white/20">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="border-b border-dashed border-white/20"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-start justify-between py-6 text-left cursor-pointer group gap-6 bg-transparent border-none outline-none font-inherit text-inherit"
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Gradient Number (Poppins font, top-to-bottom blue-to-white gradient) */}
                                            <span
                                                className="w-[50px] sm:w-[60px] font-poppins text-[24px] sm:text-[30px] font-normal leading-[1.2] text-transparent bg-clip-text bg-linear-to-b from-[#014370] to-[#FFFFFF] shrink-0 pt-0.5 select-none"
                                                style={{
                                                    fontFamily: "'Poppins', sans-serif"
                                                }}
                                            >
                                                Q {index + 1}
                                            </span>

                                            {/* Question Text */}
                                            <span className="text-white text-[18px] sm:text-[22px] font-medium leading-snug group-hover:text-white/90 transition-colors duration-200">
                                                {faq.question}
                                            </span>
                                        </div>

                                        {/* Custom animating hook/X toggle */}
                                        <div className="shrink-0 mt-1">
                                            <ToggleIcon isOpen={isOpen} />
                                        </div>
                                    </button>

                                    {/* Collapsible content area */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                {/* Indent match: Number width (approx 50px/60px) + Gap (24px) = 74px/84px left padding */}
                                                <div className="pl-[74px] sm:pl-[84px] pb-6 pr-6">
                                                    <p className="text-zinc-400 text-[16px] sm:text-[18px] leading-relaxed font-light">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
