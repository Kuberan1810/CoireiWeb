import React from 'react';
import illust from '../../../assets/images/contact/illust.svg';
import { Lock, ChevronDown } from 'lucide-react';

const ContactMain = () => {
    return (
        <section className="w-full bg-white pt-32 md:pt-40 pb-20 px-4 md:px-8 overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-16 md:mb-20">
                <span data-ns-animate className="font-bold text-[16px] md:text-[22px] leading-[20px] tracking-[0.7px] text-[#464555] uppercase text-center mb-4">
                    CONTACT US
                </span>
                <h1 data-ns-animate data-delay="0.1" className="font-extrabold text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] tracking-[-1.5px] text-center text-[#14182C] max-w-[800px]">
                    Ready to unlock <br className="hidden md:block" /> your business's <span className="text-[#F67300]">full potential?</span>
                </h1>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Left Column - Contact Details & Illustration */}
                <div data-ns-animate data-direction="left" className="flex flex-col">
                    <h2 className="font-bold text-[24px] md:text-[30px] leading-[1.2] md:leading-[36px] text-[#14182C] mb-4">
                        Contact details
                    </h2>
                    <p className="font-normal text-[16px] md:text-[18px] leading-[1.6] md:leading-[29.25px] text-[#464555] max-w-[450px] mb-12">
                        We're ready to answer your questions, explore your ideas, and create solutions that drive your business forward.
                    </p>
                    
                    <img 
                        src={illust} 
                        alt="Contact Illustration" 
                        className="w-full max-w-[450px] object-contain"
                    />
                </div>

                {/* Right Column - Form Card */}
                <div data-ns-animate data-direction="right" className="w-full bg-[#FAFAFA] border border-[#E9ECFF] rounded-[24px] p-6 md:p-10 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]">
                    <div className="mb-8">
                        <h3 className="font-bold text-[20px] md:text-[24px] leading-[32px] text-[#14182C]">
                            Your Details
                        </h3>
                        <p className="font-normal text-[14px] md:text-[16px] leading-[24px] text-[#64748B]">
                            Let's start a conversation.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-white border border-[#E9ECFF] rounded-md px-4 py-3 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-1.5">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Company</label>
                            <input 
                                type="text" 
                                placeholder="Enter your company name" 
                                className="w-full bg-white border border-[#E9ECFF] rounded-md px-4 py-3 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Work Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Work Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your work email" 
                                className="w-full bg-white border border-[#E9ECFF] rounded-md px-4 py-3 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col gap-1.5">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Mobile Number</label>
                            <div className="flex w-full bg-white border border-[#E9ECFF] rounded-md overflow-hidden focus-within:border-[#F67300] transition-colors">
                                <div className="flex items-center gap-2 px-4 py-3 border-r border-[#E9ECFF] bg-[#FAFAFA]">
                                    <span className="text-[18px]">🇮🇳</span>
                                    <ChevronDown size={14} className="text-[#9CA3AF]" />
                                    <span className="text-[15px] text-[#4B5563] ml-1">+91</span>
                                </div>
                                <input 
                                    type="tel" 
                                    className="w-full px-4 py-3 text-[16px] text-[#14182C] focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Contact Medium */}
                        <div className="flex flex-col gap-1.5">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Contact Medium</label>
                            <div className="flex w-full bg-white border border-[#E9ECFF] rounded-md overflow-hidden focus-within:border-[#F67300] transition-colors">
                                <div className="flex items-center gap-1 px-4 py-3 border-r border-[#E9ECFF] bg-[#FAFAFA]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#25D366]">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <ChevronDown size={14} className="text-[#9CA3AF] ml-1" />
                                </div>
                                <input 
                                    type="tel" 
                                    placeholder="Enter your whatsApp number" 
                                    className="w-full px-4 py-3 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:font-normal focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Let's Discuss Your Vision */}
                        <div className="flex flex-col gap-1.5 mb-2">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Let's Discuss Your Vision</label>
                            <textarea 
                                placeholder="Tell us more about your needs....." 
                                rows={4}
                                className="w-full bg-white border border-[#E9ECFF] rounded-md px-4 py-3 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:font-normal focus:outline-none focus:border-[#F67300] transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="button"
                            className="w-full bg-[#F67300] hover:bg-[#e06900] text-white font-bold text-[16px] leading-[24px] py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
                        >
                            Submit <span>→</span>
                        </button>
                        
                        {/* Privacy text */}
                        <div className="flex items-center justify-center gap-1.5 mt-1">
                            <Lock size={12} className="text-[#94A3B8]" />
                            <span className="font-normal text-[12px] leading-[16px] text-[#94A3B8]">
                                We respect your privacy. Your information is safe with us.
                            </span>
                        </div>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default ContactMain;
