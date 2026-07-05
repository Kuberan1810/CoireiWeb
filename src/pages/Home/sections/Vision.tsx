import React from "react";
import zoomImg from "../../../assets/images/homepage/zoom.svg";
import handshakeImg from "../../../assets/images/homepage/handshake.svg";
import TypewriterHeading from "../../../component/TypewriterHeading";

const Vision = () => {
    return (
        <section className="w-full GlobalPadding">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                
                {/* Heading */}
                <h2 
                    data-ns-animate 
                    className="font-semibold text-[40px] md:text-[68px] leading-[1.2] md:leading-[28px] text-[#000000] uppercase mb-20 text-center min-h-[82px]"
                >
                    <TypewriterHeading text="Vision & Mission" />
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-[1100px]">
                    
                    {/* Vision Card */}
                    <div 
                        data-ns-animate 
                        data-delay="0.1"
                        className="flex flex-col rounded-[20px] overflow-hidden shadow-[0px_3px_4px_0px_#00000040]"
                    >
                        {/* Image Top */}
                        <div className="w-full flex-shrink-0">
                            <img src={zoomImg} alt="Our Vision" className="w-full h-auto object-cover block" />
                        </div>
                        
                        {/* Content Bottom */}
                        <div className="relative bg-[#000000] p-10 md:p-12 flex-grow min-h-[300px]">
                            {/* Orange Corner Badge */}
                            <div className="absolute top-4 left-4 w-0 h-0 border-t-[36px] border-t-[#F67300] border-r-[36px] border-r-transparent" />
                            
                            <h3 className="font-semibold text-[24px] leading-[28px] text-[#FFFFFF] mb-6 mt-2">
                                Our Vision
                            </h3>
                            <p className="font-normal text-[18px] md:text-[21px] leading-[1.5] md:leading-[31px] text-[#D8D8D8]">
                                To become a global leader in enterprise artificial intelligence  building intelligent products that transform how organizations sell, learn, hire, and build software.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div 
                        data-ns-animate 
                        data-delay="0.2"
                        className="flex flex-col rounded-[20px] overflow-hidden shadow-[0px_3px_4px_0px_#00000040]"
                    >
                        {/* Image Top */}
                        <div className="w-full flex-shrink-0">
                            <img src={handshakeImg} alt="Our Mission" className="w-full h-auto object-cover block" />
                        </div>
                        
                        {/* Content Bottom */}
                        <div className="relative bg-[#000000] p-10 md:p-12 flex-grow min-h-[300px]">
                            {/* Orange Corner Badge */}
                            <div className="absolute top-4 left-4 w-0 h-0 border-t-[36px] border-t-[#F67300] border-r-[36px] border-r-transparent" />
                            
                            <h3 className="font-semibold text-[24px] leading-[28px] text-[#FFFFFF] mb-6 mt-2">
                                Our Mission
                            </h3>
                            <p className="font-normal text-[18px] md:text-[21px] leading-[1.5] md:leading-[31px] text-[#D8D8D8]">
                                To become a global leader in enterprise artificial intelligence  building intelligent products that transform how organizations sell, learn, hire, and build software.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Vision;