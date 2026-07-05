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
                <h1 data-ns-animate data-delay="0.1" className="font-extrabold text-[40px] md:text-[51px] leading-[1.1] md:leading-[60px] tracking-[-1.5px] text-center text-[#14182C] max-w-[800px]">
                    Ready to unlock <br /> your business's <span className="text-[#F67300]">full potential?</span>
                </h1>
            </div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
                
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
                        className="w-full max-w-[320px] object-contain"
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

                    <form className="flex flex-col gap-6">
                        
                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-transparent border-b border-[#E9ECFF] py-2 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Company</label>
                            <input 
                                type="text" 
                                placeholder="Enter your company name" 
                                className="w-full bg-transparent border-b border-[#E9ECFF] py-2 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Work Email */}
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Work Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your work email" 
                                className="w-full bg-transparent border-b border-[#E9ECFF] py-2 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F67300] transition-colors"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Mobile Number</label>
                            <div className="flex items-center w-full bg-transparent border-b border-[#E9ECFF] focus-within:border-[#F67300] transition-colors pb-1 pt-1">
                                <div className="flex items-center gap-1.5 cursor-pointer pr-3 transition-opacity hover:opacity-80">
                                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-[18px] h-auto object-contain rounded-[2px]" />
                                    <ChevronDown size={14} className="text-[#64748B]" />
                                    <span className="text-[15px] text-[#4B5563] ml-0.5 font-medium">+91</span>
                                </div>
                                <input 
                                    type="tel" 
                                    className="w-full py-1 text-[16px] text-[#14182C] focus:outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Contact Medium */}
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Contact Medium</label>
                            <div className="flex items-center w-full bg-transparent border-b border-[#E9ECFF] focus-within:border-[#F67300] transition-colors pb-1 pt-1">
                                <div className="flex items-center gap-1.5 cursor-pointer pr-3 transition-opacity hover:opacity-80">
                                    <svg viewBox="0 0 24 24" fill="#64748B" stroke="none" className="w-[18px] h-[18px] text-[#64748B]">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                    </svg>
                                    <ChevronDown size={14} className="text-[#64748B]" />
                                </div>
                                <input 
                                    type="tel" 
                                    placeholder="Enter your whatsApp number" 
                                    className="w-full py-1 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] focus:outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Let's Discuss Your Vision */}
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="font-semibold text-[14px] leading-[20px] text-[#4B5563]">Let's Discuss Your Vision</label>
                            <textarea 
                                placeholder="Tell us more about your needs....." 
                                rows={4}
                                className="w-full bg-transparent border border-[#E9ECFF] rounded-md px-4 py-3 mt-1 text-[16px] text-[#14182C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#F67300] transition-colors resize-none"
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
