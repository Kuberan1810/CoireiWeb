import React from 'react';

const Cta = () => {
    return (
        <section className="w-full py-20 md:py-32 flex flex-col items-center justify-center bg-white px-4">
            
            <div data-ns-animate className="flex items-center gap-2 mb-6">
                <span className="text-[#0D9488] font-normal text-[12.5px] leading-[20px] tracking-[1.75px] uppercase">
                    — READY TO BUILD THE FUTURE WITH AI?
                </span>
            </div>

            <h2 data-ns-animate data-delay="0.1" className="font-bold text-[32px] md:text-[41.58px] leading-[1.2] md:leading-[64px] tracking-[-0.5px] text-center text-[#14182C] max-w-[800px] mb-12">
                Deploy enterprise AI, build a custom <br className="hidden md:block" /> platform, or train your workforce <br className="hidden md:block" /> COIRE AI is ready to partner with you.
            </h2>

            <div data-ns-animate data-delay="0.2" className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4">
                <button className="flex items-center w-full sm:w-auto justify-center px-8 py-3.5 bg-[#F67300] text-white font-bold text-[13px] leading-[22px] tracking-[0.52px] rounded-[4px] hover:bg-[#e06900] transition-colors">
                    Explore Our Products <span className="ml-2 font-normal">→</span>
                </button>
                <button 
                    className="flex items-center w-full sm:w-auto justify-center px-8 py-3.5 bg-transparent text-[#14182C] font-normal text-[13px] leading-[20px] tracking-[0.52px] rounded-[4px] hover:bg-[#F9F9F9] transition-colors"
                    style={{ border: '1px solid #DEE3EE' }}
                >
                    Contact Our Team
                </button>
            </div>

        </section>
    );
};

export default Cta;