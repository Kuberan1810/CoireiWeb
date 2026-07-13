import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import staticbgglobal from '../../../../../assets/images/products/staticbgglobal.svg';

const attentionLeads = [
  { name: "Klen", issue: "Custom pricing asked — Follei can't ..", priority: "High" },
  { name: "Klen", issue: "Custom pricing asked — Follei can't ..", priority: "High" },
  { name: "Klen", issue: "Unsubscribed — confirm archive?", priority: "High" },
  { name: "Klen", issue: "Unsubscribed — confirm archive?", priority: "High" },
  { name: "Klen", issue: "Unsubscribed — confirm archive?", priority: "High" },
];

const AnimatedResolutionWorkflow: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    
    return (
        <div ref={ref} className="relative w-full h-full aspect-[2/1] md:aspect-[3/1] max-h-[260px] rounded-[16px] overflow-hidden flex items-center justify-center border border-gray-100">
            {/* Background */}
            <img 
                src={staticbgglobal} 
                alt="Backdrop" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content Container */}
            <div className="relative z-10 w-full px-8 flex items-center justify-between gap-6 h-[85%] max-w-[95%]">
                
                {/* Left Card: Customer Conversion */}
                <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-black text-white rounded-[12px] p-6 shadow-2xl flex flex-col justify-center flex-1 h-full min-w-[200px]"
                >
                    <div className="w-full">
                        <h3 className="font-semibold text-[20px] md:text-[24px] tracking-tight leading-tight mb-2">
                            customer conversion conversation
                        </h3>
                    </div>
                    <p className="text-[13px] md:text-[14px] font-medium text-[#DFF2FE] text-left w-full mb-4">
                        83% of total chat
                    </p>
                    <div className="h-[32px] md:h-[42px] w-full rounded-[4px] overflow-hidden flex mt-2 bg-[#004370]">
                        <motion.div 
                            initial={{ width: "0%" }}
                            animate={inView ? { width: "83%" } : { width: "0%" }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                            className="h-full bg-[#F6FBFF]" 
                            style={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}
                        />
                    </div>
                </motion.div>

                {/* Right Card: Needs Attention Table */}
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-white/95 backdrop-blur-md rounded-[12px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex-[1.2] h-full flex flex-col min-h-0"
                >
                    <div className="flex justify-between items-center w-full capitalize mb-3">
                        <h3 className="text-[14px] font-bold text-[#000000] leading-none tracking-[0.2px]">Needs Attention Now</h3>
                        <span className="text-[10px] text-gray-500 font-medium cursor-pointer hover:text-black">View All</span>
                    </div>

                    <div className="w-full bg-white rounded-[8px] overflow-hidden flex flex-col flex-1 border border-[#EDF3FD] shadow-sm min-h-0">
                        <div className="w-full flex flex-col h-full min-h-0">
                            {/* Header */}
                            <div className="grid grid-cols-12 items-center px-4 py-2 bg-[#F3F5FF] border-b border-[#EDF3FD]">
                                <div className="col-span-3 text-[10px] font-semibold text-[#191C1E] text-left">Lead</div>
                                <div className="col-span-5 text-[10px] font-semibold text-[#191C1E] text-left">Issue</div>
                                <div className="col-span-2 text-center text-[10px] font-semibold text-[#191C1E]">Priority</div>
                                <div className="col-span-2"></div>
                            </div>

                            {/* Auto Scrolling Body */}
                            <style>
                                {`
                                @keyframes marquee-vertical {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-50%); }
                                }
                                .animate-marquee {
                                    animation: marquee-vertical 15s linear infinite;
                                    /* Wait for fade-in to finish before starting scroll */
                                    animation-delay: 1.5s;
                                }
                                `}
                            </style>
                            <div className="flex-1 min-h-0 overflow-hidden relative">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="flex flex-col w-full h-full"
                                >
                                    <div className="animate-marquee flex flex-col w-full">
                                        {[...attentionLeads, ...attentionLeads].map((lead, idx) => (
                                            <div
                                                key={idx}
                                                className={`grid grid-cols-12 items-center px-4 py-2 bg-[#FAFBFF] border-b border-[#EDF3FD]`}
                                            >
                                                <div className="col-span-3 text-[9px] font-medium text-black leading-[1.2] truncate pr-1">
                                                    {lead.name}
                                                </div>
                                                <div className="col-span-5 text-[9px] font-medium text-black leading-[1.2] truncate pr-2">
                                                    {lead.issue}
                                                </div>
                                                <div className="col-span-2 flex justify-center">
                                                    <span className="bg-[#FF8A8A] text-white w-[32px] py-[2px] rounded-[60px] text-[8px] font-bold flex items-center justify-center">
                                                        {lead.priority}
                                                    </span>
                                                </div>
                                                <div className="col-span-2 flex justify-end">
                                                    <span className="text-[9px] font-medium px-2 py-0.5 text-gray-400">
                                                        view
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedResolutionWorkflow;
