import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "1. How do you deliver your AI services?",
        answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration."
    },
    {
        question: "2. Is my data secure with Coirei?",
        answer: "Yes, we prioritize data privacy and security. Our systems are built with industry-standard encryption and we comply with major security protocols."
    },
    {
        question: "3. Can I integrate Coirei with my existing tools?",
        answer: "Absolutely. Our AI solutions are designed to be flexible and can integrate with most modern software stacks and APIs without complex coding."
    },
    {
        question: "4. What kind of ongoing support do you offer after deployment?",
        answer: " We provide continuous support, regular updates, and analytics reviews to ensure yCoirei AI stays effective and aligned with your business goals."
    }
];

const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section className="mx-6 sm:mx-10 md:mx-20 pt-2 md:pt-4  md:pb-6 ">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full">

                {/* LEFT SIDE */}
                <div className="lg:col-span-5 w-full text-left lg:self-center">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight tracking-tight text-gray-900">
                        Frequently Asked
                        <br />
                        Questions.
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="lg:col-span-7 w-full flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            data-ns-animate

                            data-delay="0"

                            className={`group border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-gray-300 bg-gray-50 shadow-sm' : 'border-gray-200 bg-transparent hover:border-gray-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer"
                            >
                                <span className="text-[18px] sm:text-[22px] font-medium pr-8 transition-colors duration-300 text-gray-900">
                                    {faq.question}
                                </span>

                                <ChevronDown className="text-gray-900/70 shrink-0" />

                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="p-8 pt-0 flex gap-4 ">

                                    <div className="text-gray-600 text-[16px] sm:text-[18px] font-light leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
