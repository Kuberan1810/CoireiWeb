import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const recoveryStages = [
  {
    id: "01",
    title: "Payment Intelligence",
    description: "Continuously monitors invoices, payment schedules, outstanding balances, and customer payment history to identify collection opportunities before they impact cash flow.",
    tags: ["Invoice Tracking", "Payment History", "Due Date"]
  },
  {
    id: "02",
    title: "Smart Payment Reminders",
    description: "Automatically delivers personalized reminders through email, WhatsApp, SMS, and voice based on customer behavior and payment timelines.",
    tags: ["Email", "Whatsapp", "Voice"]
  },
  {
    id: "03",
    title: "Collection Workflows",
    description: "Manages intelligent follow-ups, payment confirmations, overdue accounts, and recovery workflows without manual intervention.",
    tags: ["Follow Ups", "Collection", "Recovery"]
  },
  {
    id: "04",
    title: "Renewal Collections",
    description: "Tracks subscription renewals, contract expirations, and recurring payments to reduce missed renewals and recurring revenue loss.",
    tags: ["Renewal", "Contracts", "Subscription"]
  },
  {
    id: "05",
    title: "Payment Insights",
    description: "Analyzes payment trends, collection performance, aging invoices, and customer payment behavior to improve recovery strategies.",
    tags: ["Analytics", "Aging", "Performance"]
  },
  {
    id: "06",
    title: "Revenue Intelligence",
    description: "Provides finance teams with real-time dashboards, payment forecasts, recovery metrics, and AI recommendations to optimize cash flow.",
    tags: ["Forecasting", "Cash Flow", "AI Insights"]
  }
];

const CollectionCapabilities: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="w-full bg-[#FFFFFF] GlobalPadding flex flex-col items-center">
            
            {/* Header Area */}
            <div className="flex flex-col items-center mb-12 md:mb-16 max-w-4xl w-full">
                {/* Badge */}
                <div data-ns-animate className="mb-6 flex justify-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#004370] rounded-[10px] text-[#04032E] font-medium text-[12px] sm:text-[14px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]"></span>
                        Collection Capabilities
                    </div>
                </div>

                {/* Heading */}
                <h2 
                    data-ns-animate 
                    data-delay="0.1" 
                    className="text-[#04032E] text-3xl sm:text-[60px] md:text-5xl font-medium text-center mb-6 max-w-4xl leading-tight"
                >
                    Intelligent Revenue Recovery <br />
                    <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">At Every Stage</span>
                </h2>

                {/* Subheading */}
                <p 
                    data-ns-animate 
                    data-delay="0.3" 
                    className="text-[#6E6E6E] text-sm sm:text-[16px] text-center max-w-3xl leading-relaxed"
                >
                    From invoice creation to successful payment recovery, the Collections Worker automates every step of the collections lifecycle with intelligent communication, payment intelligence, and AI-driven decision making.
                </p>
            </div>

            {/* Accordion List */}
            <div className="w-full max-w-[1100px] flex flex-col gap-4">
                {recoveryStages.map((stage, index) => {
                    const isActive = activeId === stage.id;

                    return (
                        <div 
                            key={stage.id}
                            data-ns-animate
                            data-delay={0.2 + (index * 0.1)}
                            className="bg-[#F0F4FF] rounded-xl overflow-hidden cursor-pointer"
                            onMouseEnter={() => setActiveId(stage.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => setActiveId(isActive ? null : stage.id)}
                        >
                            <div className="px-6 md:px-8 py-5 md:py-6 flex flex-col w-full">
                                
                                {/* Top Row: Number, Title, Icon */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <span 
                                            className="text-[#004370] font-semibold text-[24px] md:text-[30px] leading-[1.2] md:leading-[52.8px] text-center"
                                        >
                                            {stage.id}
                                        </span>
                                        <h3 
                                            className="text-[#000000] font-normal text-[20px] md:text-[30px] leading-[1.2] md:leading-[52.8px]"
                                        >
                                            {stage.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Plus/Minus Icon */}
                                    <div className="flex-shrink-0 bg-[#004370] border-[1.33px] border-[#004370] w-[28.33px] h-[28.33px] rounded-full flex items-center justify-center transition-transform duration-300">
                                        {isActive ? (
                                            <Minus strokeWidth={2.5} className="text-white w-4 h-4" />
                                        ) : (
                                            <Plus strokeWidth={2.5} className="text-white w-4 h-4" />
                                        )}
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-2 md:pt-4 pb-2">
                                                <p 
                                                    className="text-[#5A5A5C] font-normal text-[15px] md:text-[16px] leading-[1.5] md:leading-[22px] mb-5"
                                                >
                                                    {stage.description}
                                                </p>
                                                
                                                <div className="flex flex-row items-center flex-wrap gap-2 md:gap-3">
                                                    {stage.tags.map((tag) => (
                                                        <span 
                                                            key={tag} 
                                                            className="bg-[#FFFFFF] px-3 py-1.5 md:px-4 md:py-2 rounded-md font-normal text-[#5A5A5C] text-center text-[12px] md:text-[14px] leading-none whitespace-nowrap"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default CollectionCapabilities;