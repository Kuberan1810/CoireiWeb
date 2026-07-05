import React from "react";
import { Ticket, Users, Target, Receipt, CreditCard, TrendingUp } from "lucide-react";

export const WhatFolleiLearnsSection: React.FC = () => {
    return (
        <section className="w-full px-6 sm:px-10 md:px-15 py-24 flex justify-center bg-white ">
            <div className="w-full max-w-[1300px] flex flex-col items-center">

                {/* Heading & Subheading */}
                <h2 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center">
                    What Follei Learns
                </h2>
                <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-16 text-center">
                    Transform business information into a structured intelligence layer that powers every AI worker.
                </p>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">

                    {/* Column 1 (Left): Products & Services + Business Processes */}
                    <div className="flex flex-col gap-8 w-full">

                        {/* Card 1: Products & Services (Tall) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.1"
                            className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col justify-between min-h-[500px] group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                        >
                            {/* Visual Graphic Area */}
                            <div className="w-full h-[280px] rounded-2xl relative overflow-hidden flex items-center justify-center bg-[#121212]/50 border border-white/5">
                                {/* Background Grid Lines */}
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:24px_24px]" />

                                {/* Venn Diagram Overlay */}
                                <div className="relative w-[280px] h-[220px] flex items-center justify-center">
                                    {/* Top Circle */}
                                    <div className="absolute top-0 w-28 h-28 border border-white/10 rounded-full bg-white/10" />
                                    {/* Bottom Circle */}
                                    <div className="absolute bottom-0 w-28 h-28 border border-white/10 rounded-full bg-white/10" />
                                    {/* Left Circle */}
                                    <div className="absolute left-0 w-28 h-28 border border-white/10 rounded-full bg-white/10" />
                                    {/* Right Circle */}
                                    <div className="absolute right-0 w-28 h-28 border border-white/10 rounded-full bg-white/10" />

                                    {/* Center Logo */}
                                    <div className="absolute w-12 h-12 rounded-full bg-white  border border-white/20 flex items-center justify-center z-10 shadow-lg shadow-blue-500/10">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xs select-none">
                                            F
                                        </div>
                                    </div>

                                    {/* Label Badges */}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#24292C] border border-white/10 px-2 py-0.5 rounded text-[10px] font-medium text-white/80 select-none">
                                        Services
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#24292C] border border-white/10 px-2 py-0.5 rounded text-[10px] font-medium text-white/80 select-none">
                                        Decision
                                    </div>
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#24292C] border border-white/10 px-2 py-0.5 rounded text-[10px] font-medium text-white/80 select-none">
                                        Products
                                    </div>
                                    <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#24292C] border border-white/10 px-2 py-0.5 rounded text-[10px] font-medium text-white/80 select-none">
                                        Deal stage
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col mt-6 text-left">
                                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                                    Products & Services
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                                    Follei learns your offerings, features, benefits, pricing models, and competitive positioning to accurately represent your business in every customer interaction.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Business Processes (Short) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.3"
                            className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col justify-between min-h-[440px] group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                        >
                            {/* Visual Graphic Area */}
                            <div className="w-full h-[220px] rounded-2xl relative overflow-hidden flex items-center justify-center bg-linear-to-t from-[#854d0e]/30 via-[#1e1b4b]/80 to-[#111827] border border-white/5 p-4">
                                {/* Stylized SVG Mountain Backdrop */}
                                <svg className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none opacity-40 z-0" viewBox="0 0 400 120" preserveAspectRatio="none">
                                    <polygon points="0,120 100,50 200,90 300,30 400,120" fill="#a16207" />
                                    <polygon points="0,120 150,70 280,40 400,120" fill="#ca8a04" opacity="0.6" />
                                </svg>

                                {/* Floating Cards */}
                                <div className="flex items-center gap-3.5 relative z-10 w-full justify-center select-none scale-[0.95]">
                                    {/* Open tickets */}
                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 flex flex-col justify-between w-[105px] h-[95px] text-black shadow-2xl">
                                        <div className="w-4 h-4 rounded bg-blue-100 flex items-center justify-center">
                                            <Ticket size={9} className="text-blue-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 mt-2">
                                            <span className="text-[7.5px] uppercase font-extrabold text-gray-400 tracking-wider leading-none">Open Tickets</span>
                                            <span className="text-[17px] font-bold text-gray-800 leading-none">123</span>
                                        </div>
                                        <span className="text-[8px] font-bold text-red-500 leading-none">-12%</span>
                                    </div>
                                    {/* Onboarding */}
                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 flex flex-col justify-between w-[105px] h-[95px] text-black shadow-2xl border-t-2 border-emerald-500">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="w-4 h-4 rounded bg-emerald-100 flex items-center justify-center">
                                                <Users size={9} className="text-emerald-500" />
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-[7px] font-bold text-emerald-600 bg-emerald-100/50 px-1 py-0.5 rounded leading-none">
                                                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                                                LIVE
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 mt-2">
                                            <span className="text-[7.5px] uppercase font-extrabold text-gray-400 tracking-wider leading-none">Onboarding</span>
                                            <span className="text-[17px] font-bold text-gray-800 leading-none">523</span>
                                        </div>
                                        <span className="text-[8px] text-gray-400 font-medium leading-none">Started</span>
                                    </div>
                                    {/* Renewal revenue */}
                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 flex flex-col justify-between w-[105px] h-[95px] text-black shadow-2xl">
                                        <div className="w-4 h-4 rounded bg-indigo-100 flex items-center justify-center">
                                            <Target size={9} className="text-indigo-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 mt-2">
                                            <span className="text-[7.5px] uppercase font-extrabold text-gray-400 tracking-wider leading-none">Renewal Rev</span>
                                            <span className="text-[17px] font-bold text-gray-800 leading-none">$4.2M</span>
                                        </div>
                                        <span className="inline-flex items-center justify-center w-fit text-[7.5px] font-bold text-indigo-600 bg-indigo-100/50 px-1.5 py-0.5 rounded leading-none">Target</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col mt-6 text-left">
                                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                                    Business Processes
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                                    Maps sales, support, onboarding, renewals, and operational workflows.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Column 2 (Right): Pricing & Plans + Customers & Markets */}
                    <div className="flex flex-col gap-8 w-full">

                        {/* Card 3: Pricing & Plans (Short) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.2"
                            className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col justify-between min-h-[440px] group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                        >
                            {/* Visual Graphic Area */}
                            <div className="w-full h-[220px] rounded-2xl relative overflow-hidden flex items-center justify-center gap-6 bg-[#121212]/50 border border-white/5 p-4">
                                {/* SVG Connecting Lines in background */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                                    {/* Dotted branching lines from Pricing card center-right to Pills lefts */}
                                    <path d="M 220 110 L 290 70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4" fill="none" />
                                    <path d="M 220 110 L 290 150" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4" fill="none" />
                                </svg>

                                {/* Left Side: White Pricing Card */}
                                <div className="w-[170px] bg-white rounded-2xl p-4 flex flex-col gap-2.5 text-black shadow-2xl relative z-10 select-none">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Pricing</span>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">112,365</span>
                                        <span className="text-[9px] text-gray-500">Month-over-month growth 9%</span>
                                    </div>
                                    {/* Progress Track */}
                                    <div className="w-full h-5 bg-gray-100 rounded-full relative overflow-hidden flex items-center px-1">
                                        <div className="w-[80%] h-3.5 bg-black rounded-full flex items-center justify-end px-2">
                                            <span className="text-[8px] font-bold text-white">80%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Two floating tags */}
                                <div className="flex flex-col gap-4 relative z-10 select-none">
                                    <div className="bg-[#222]/90 border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 text-xs text-white/90 shadow-lg shadow-black/40">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <Receipt size={11} className="text-emerald-400" />
                                        </div>
                                        <span>Receipt</span>
                                    </div>
                                    <div className="bg-[#222]/90 border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 text-xs text-white/90 shadow-lg shadow-black/40">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CreditCard size={11} className="text-emerald-400" />
                                        </div>
                                        <span>Payment</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col mt-6 text-left">
                                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                                    Pricing & Plans
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                                    Understands packages, subscriptions, discounts, policies, and commercial terms.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Customers & Markets (Tall) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.4"
                            className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col justify-between min-h-[500px] group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                        >
                            {/* Visual Graphic Area */}
                            <div className="w-full h-[280px] rounded-2xl relative overflow-hidden flex items-center justify-center bg-linear-to-br from-[#121214] via-[#1a132c] to-[#0a0815] border border-white/5 p-4">
                                {/* Radial background glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                                {/* 2x2 Offset Grid of Floating Cards */}
                                <div className="relative w-[270px] h-[210px] select-none scale-[0.98]">
                                    {/* Card A: Total Customers */}
                                    <div className="absolute top-0 left-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between w-[125px] h-[95px] text-black shadow-xl">
                                        <div className="w-4.5 h-4.5 rounded-full bg-blue-50 flex items-center justify-center">
                                            <Users size={11} className="text-blue-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-gray-400 font-semibold leading-none">Total Customers</span>
                                            <span className="text-xl font-bold text-gray-900 leading-none">1,284</span>
                                        </div>
                                        <span className="text-[8.5px] text-emerald-600 font-bold leading-none">↑ 12% vs yesterday</span>
                                    </div>

                                    {/* Card B: Annual ACV */}
                                    <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between w-[125px] h-[95px] text-black shadow-xl">
                                        <div className="w-4.5 h-4.5 rounded-full bg-indigo-50 flex items-center justify-center">
                                            <TrendingUp size={11} className="text-indigo-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-gray-400 font-semibold leading-none">Annual ACV</span>
                                            <span className="text-lg font-bold text-gray-900 leading-none">$45,000</span>
                                        </div>
                                        <span className="text-[8px] text-gray-500 leading-none">/years</span>
                                    </div>

                                    {/* Card C: Total Revenue */}
                                    <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between w-[125px] h-[95px] text-black shadow-xl">
                                        <div className="w-4.5 h-4.5 rounded-full bg-purple-50 flex items-center justify-center">
                                            <CreditCard size={11} className="text-purple-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-gray-400 font-semibold leading-none">Total Revenue</span>
                                            <span className="text-xl font-bold text-gray-900 leading-none">25,000</span>
                                        </div>
                                        <span className="inline-flex w-fit text-[7.5px] text-red-600 bg-red-100 px-1.5 py-0.5 rounded font-bold leading-none">+12% last month</span>
                                    </div>

                                    {/* Card D: Followed up */}
                                    <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between w-[125px] h-[95px] text-black shadow-xl">
                                        <div className="w-4.5 h-4.5 rounded-full bg-cyan-50 flex items-center justify-center">
                                            <Target size={11} className="text-cyan-500" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[9px] text-gray-400 font-semibold leading-none">Followed up</span>
                                            <span className="text-lg font-bold text-gray-900 leading-none">847</span>
                                        </div>
                                        <span className="text-[8.5px] text-emerald-600 font-bold leading-none">↑ 66% rate</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col mt-6 text-left">
                                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                                    Customers & Markets
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                                    Identifies customer segments, buying patterns, industry needs, and growth opportunities to help AI workers engage with greater relevance and context.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
