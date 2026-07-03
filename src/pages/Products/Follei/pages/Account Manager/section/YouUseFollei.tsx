import React from 'react';
import { Shield } from 'lucide-react';

const YouUseFollei: React.FC = () => {
    return (
        <section className="relative w-full py-24 bg-white flex flex-col items-center justify-center">
            {/* Container with side borders to match the screenshot's faint vertical lines */}
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-15 border-x border-red-500/10 py-16 flex flex-col items-center text-center">

                {/* Icon Container */}
                <div className="w-12 h-12 bg-[#004370] rounded-[10px] flex items-center justify-center mb-8 shadow-sm">
                    <Shield className="text-white" size={20} strokeWidth={2} />
                </div>
                <div data-ns-animate className="flex flex-col items-center">
                   

                    {/* Heading */}
                    <h2 className="text-[#0A0E29] text-3xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
                        The More You Use Follei,  <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">The Better It Gets</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-[#475569] text-base sm:text-lg max-w-4xl mx-auto font-normal leading-relaxed text-center">
                         Unlike traditional software that remains static, Follei continuously learns from every interaction, outcome, and customer response to improve performance over time.
                    </p>
                </div>
                

            </div>
        </section>
    );
};

export default YouUseFollei;