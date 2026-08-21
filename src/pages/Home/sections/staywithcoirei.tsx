import React, { useState } from "react";
import bg1 from "../../../assets/images/homepage/Bg1.png";
import { ArrowRight, Check } from "lucide-react";

const StayWithCoirei = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    };

    return (
        <section className="w-full relative overflow-hidden">
            {/* Background Container */}
            <div className="relative w-full min-h-[480px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Background Image */}
                <img
                    src={bg1}
                    alt="Stay ahead with Coirei"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                />

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-[1440px] mx-auto GlobalPadding flex flex-col lg:flex-row lg:items-end justify-between gap-10 sm:gap-12 lg:gap-8">
                    {/* Title on Left */}
                    <div data-ns-animate className="w-full lg:max-w-[650px] lg:mb-auto lg:pt-4">
                        <h2 className="text-[34px] xs:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] xl:text-[86px] font-normal text-white leading-[1.08] tracking-tight">
                            Stay ahead with <br className="hidden xs:inline" />
                            Coirei
                        </h2>
                    </div>

                    {/* Floating Subscription Card on Bottom Right */}
                    <div
                        data-ns-animate
                        data-delay="0.15"
                        className="w-full sm:max-w-[480px] md:max-w-[540px] lg:max-w-[560px] bg-white p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/10 self-stretch sm:self-end lg:ml-auto"
                    >
                        <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] text-[#111827] font-normal leading-snug mb-6 sm:mb-8">
                            Get the latest insights on AI, technology, products, and intelligent business.
                        </p>

                        {submitted ? (
                            <div className="flex items-center gap-3 py-3 text-emerald-600 font-medium text-sm sm:text-base animate-fadeIn">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative w-full">
                                <div className="relative flex items-center border-b border-neutral-300 focus-within:border-neutral-900 transition-colors pb-2">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email address"
                                        className="w-full bg-transparent text-[#111827] placeholder:text-neutral-400 text-[14px] sm:text-[16px] outline-none pr-8 font-light"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Subscribe"
                                        className="absolute right-0 text-neutral-400 hover:text-neutral-900 transition-colors p-1 cursor-pointer"
                                    >
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayWithCoirei;
