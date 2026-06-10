import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration."
  },
  {
    question: "Is my data secure with Coirei?",
    answer: "Yes, we prioritize data privacy and security. Our systems are built with industry-standard encryption and we comply with major security protocols."
  },
  {
    question: "Can I integrate Coirei with my existing tools?",
    answer: "Absolutely. Our AI solutions are designed to be flexible and can integrate with most modern software stacks and APIs without complex coding."
  },
  {
    question: "What kind of ongoing support do you offer after deployment?",
    answer: "We provide continuous support, regular updates, and analytics reviews to ensure Coirei AI stays effective and aligned with your business goals."
  }
];

const LmsFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative text-white bg-[#161616] py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] font-instrument-sans"
          >
            Frequently Asked <span className="text-[#F67300]">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                data-ns-animate
                data-delay={idx * 0.1}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-[#F67300]/30 bg-[#1C1C1C]/80 shadow-[0_0_30px_rgba(246,115,0,0.05)]" 
                    : "border-white/10 bg-[#1C1C1C]/40 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-[18px] sm:text-[22px] font-light pr-8 text-white font-instrument-sans">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-white/70 p-1">
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#F67300]" : ""
                      }`} 
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col gap-4 border-t border-white/5 pt-4">
                        <p className="text-[#B5B4B2] text-[15px] sm:text-[17px] font-light leading-relaxed">
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
    </section>
  );
};

export default LmsFaq;
