import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Follei and how does it work?",
    answer: "Follei is an autonomous AI workforce platform that seamlessly integrates into your existing systems. Instead of simple chatbots, Follei deploys specialized AI workers, like SDRs, Sales Executives, and Support Staff, that understand context, make decisions, and execute complex workflows on their own.",
  },
  {
    question: "Will Follei replace my existing human team?",
    answer: "Not at all. Follei is designed to collaborate with your workforce. Our AI workers handle repetitive, data-heavy, and time-consuming tasks autonomously, freeing up your human team to focus on high-value strategy, relationship building, and creative problem-solving.",
  },
  {
    question: "How difficult is it to integrate Follei into our current tools?",
    answer: "Follei is built for seamless integration. It connects natively with the platforms you already rely on, like your CRM, HRIS, helpdesk, and communication tools. This ensures your AI workforce has instant access to the right context without requiring a massive IT overhaul.",
  },
  {
    question: "Is our company data secure with Follei's AI workers?",
    answer: "Security and privacy are our top priorities. Follei employs enterprise-grade encryption and strict access controls. Our AI workers operate entirely within your securely siloed environment, ensuring that your proprietary data and customer information remain strictly confidential and compliant.",
  },
  {
    question: "How quickly can we see ROI after deploying Follei?",
    answer: "Because Follei's AI workers are pre-trained for specific roles (like Sales or Support), deployment is incredibly fast. Most clients begin seeing measurable improvements in response times, lead conversion, and operational efficiency within the first few weeks of implementation.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#FFFFFF] flex flex-col items-center justify-center border-t border-slate-200/50">
      <div className=" px-6 sm:px-10 md:px-15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading */}
          <div data-ns-animate className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>FAQs</span>
            </div>

            {/* Title */}
            <h2 className="text-[#04032E] text-4xl sm:text-[52px] lg:text-[60px] font-medium tracking-tight leading-[1.15]">
              Frequently <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>
            
            <p className="mt-6 text-[#5A5A5C] text-sm sm:text-[18px] font-normal leading-relaxed max-w-sm">
              Everything you need to know about Follei and how our AI workforce can transform your business.
            </p>
          </div>

          {/* Right Column: FAQ Items */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              const delay = (index * 0.1).toFixed(1);
              return (
                <div
                  key={index}
                  data-ns-animate
                  data-delay={delay}
                  className={`group bg-white rounded-[24px] transition-all duration-300 border-[1px] ${
                    isOpen
                      ? "border-[#1079B7]/40 shadow-[0_12px_40px_rgba(16,121,183,0.08)]"
                      : "border-slate-200/80 hover:border-[#1079B7]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-hidden"
                  >
                    <span
                      className={`text-lg sm:text-[22px] font-medium leading-snug transition-colors duration-300 pr-6 ${
                        isOpen ? "text-[#1079B7]" : "text-[#04032E] group-hover:text-[#1079B7]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-500 ${
                        isOpen
                          ? "bg-[#1079B7] text-white rotate-180 shadow-md"
                          : "bg-[#F4F4F4] text-[#04032E] group-hover:bg-[#1079B7]/10 group-hover:text-[#1079B7]"
                      }`}
                    >
                      <ChevronDown size={22} strokeWidth={2.5} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-[#5A5A5C] text-sm sm:text-[17px] leading-relaxed font-normal">
                        {item.answer}
                      </div>
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