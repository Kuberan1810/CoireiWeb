import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What does Coirei build?",
        answer:
            "Coirei builds AI-native enterprise products, autonomous agents, and tailored digital solutions. We specialize in custom business platforms, intelligent LMS systems, workflow automation, and specialized AI workers that empower organizations to innovate and scale efficiently.",
    },
    {
        question: "Can I customize the AI agent for my business?",
        answer:
            "Yes, all Coirei AI agents and solutions are modular and fully customizable. We tailor their behavior, knowledge base, integrations, and user interfaces to match your specific domain, workflows, and business guidelines.",
    },
    {
        question: "What AI solutions does Coirei offer?",
        answer:
            "We offer end-to-end AI capabilities including autonomous AI workers (SDR, Account Manager, Collections), custom business applications, AI chatbots & virtual assistants, enterprise search & knowledge engines, and intelligent process automation.",
    },
    {
        question: "Can Coirei build custom AI solutions for our business?",
        answer:
            "Absolutely. Our engineering and AI architecture teams collaborate closely with your organization from concept to deployment to build bespoke AI systems tailored to your unique requirements and technical architecture.",
    },
    {
        question: "Which industries does Coirei work with?",
        answer:
            "We serve a wide variety of sectors including Healthcare, Finance & Banking, Manufacturing, Education, Logistics, Retail, and Technology enterprises, helping each industry solve specific operational challenges.",
    },
    {
        question: "Does Coirei offer enterprise-ready AI solutions?",
        answer:
            "Yes. All our solutions are architected with enterprise-grade security, data privacy, role-based access control, SOC 2 compliance standards, and high scalability to ensure reliable, mission-critical performance.",
    },
    {
        question: "Can Coirei integrate AI with our existing systems?",
        answer:
            "Yes, we design our AI agents and platforms for seamless interoperability. We integrate directly with your existing ERPs, CRMs, databases, APIs, and cloud infrastructures (AWS, Azure, GCP) with minimal disruption.",
    },
    {
        question: "How can we partner with Coirei?",
        answer:
            "You can connect with us through our contact form or book a direct discovery call with our solutions team. We'll discuss your goals, evaluate use cases, and design a customized implementation plan or pilot program.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full GlobalPadding bg-white text-neutral-900">
            <div className="">
                {/* Header */}
                <div data-ns-animate className="text-center mb-12 sm:mb-16">
                    <span className="text-[#D33B12] text-xs sm:text-[16px] tracking-widest uppercase block mb-2">
                        FAQ
                    </span>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal text-[#0E121B] tracking-tight">
                        Common Questions
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="border-t border-[#E5E7EB]">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                data-ns-animate
                                data-delay={`${(index * 0.05).toFixed(2)}`}
                                className="border-b border-[#E5E7EB]"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group transition-colors duration-200 cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-[16px] sm:text-[18px] md:text-[19px] font-normal text-[#111827] group-hover:text-[#D33B12] transition-colors duration-200 pr-6">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`shrink-0 flex items-center justify-center w-7 h-7 text-neutral-500 group-hover:text-[#111827] transition-transform duration-300 ease-out ${isOpen ? "rotate-45 text-[#D33B12]! group-hover:text-[#D33B12]!" : ""
                                            }`}
                                    >
                                        <Plus className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[15px] sm:text-[16px] text-neutral-600 font-light leading-relaxed max-w-[850px]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;