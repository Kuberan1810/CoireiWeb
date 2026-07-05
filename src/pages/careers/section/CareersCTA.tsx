import React from "react";

const CareersCTA = () => {
    return (
        <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-[#FFFFFF]">
            
            {/* Background Grid Layer */}
            <div 
                className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Ambient Bottom Glow (Rectangular) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[250px] bg-[#F67300] opacity-60 blur-[80px] z-0 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] mx-auto">
                <h2 data-ns-animate data-delay="0.1" className="font-medium text-[42px] md:text-[52px] leading-[1.2] text-[#000000] mb-4">
                    Lets <span className="text-[#F67300]">Talk</span> Together
                </h2>
                
                <p data-ns-animate data-delay="0.2" className="font-normal text-[16px] md:text-[18px] leading-[29.25px] text-[#4F4F4F] mb-10">
                    Join thousands writing faster and better with us.
                </p>

                <button 
                    data-ns-animate data-delay="0.3"
                    className="bg-[#272727] text-white font-normal text-[20px] md:text-[22px] leading-[33px] px-10 py-3 rounded-[8px] hover:bg-[#1a1a1a] transition-colors duration-300 shadow-lg"
                    style={{ borderTop: "1px solid #000000" }}
                >
                    Contact us
                </button>
            </div>
        </section>
    );
};

export default CareersCTA;
