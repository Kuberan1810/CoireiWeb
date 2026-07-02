import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration.",
  },
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration.",
  },
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration.",
  },
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration.",
  },
  {
    question: "How do you deliver your AI services?",
    answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F8F8F8] flex flex-col items-center justify-center border-t border-slate-200/50">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div

              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#004370] rounded-md text-slate-800 font-semibold text-xs tracking-wider mb-6 shadow-xs relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              FAQs
            </div>

            {/* Title */}
            <h2
              className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15]"
            >
              Frequently <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Asked Question
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-[10px] w-full">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}

                  className="bg-white border-[0.5px] border-[#004370] rounded-[15px] overflow-hidden transition-all duration-300 hover:border-slate-300/80"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-2.5 px-4 text-left focus:outline-hidden"
                  >
                    <span className="text-[#0B0F19] text-base md:text-[24px] leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`ml-4 text-slate-400 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[180px]" : "max-h-0"
                      } overflow-hidden`}
                  >
                    <div className="px-4 text-[#5A5A5C] text-sm md:text-[18px] leading-relaxed font-light">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;