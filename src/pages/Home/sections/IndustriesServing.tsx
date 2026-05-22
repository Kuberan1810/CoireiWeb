
import { ChartCandlestick, ShoppingBag, GraduationCap, Globe, HeartPulse, Hospital } from "lucide-react";

const industries = [
    { name: "Information Technology", icon: <Globe size={20} /> },
    { name: "Fintech", icon: <ChartCandlestick size={20} /> },
    { name: "E-Commerce", icon: <ShoppingBag size={20} /> },
    { name: "Education", icon: <GraduationCap size={20} /> },
    { name: "Healthcare", icon: <HeartPulse size={20} /> },
    { name: "Hospitality", icon: <Hospital size={20} color="currentColor" /> },
    



];

const IndustriesServing = () => {

    return (
        <section className="py-20 overflow-hidden bg-[#161616]">
            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4">
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"

                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[22px] whitespace-nowrap shrink-0">
                    AI Solutions Across Global
                </div>
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-l from-[#161616] to-white" />
            </div>
            {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 mb-16">

                <h2
                    data-ns-animate
                    className="text-[20px] sm:text-[20px] md:text-[40px] font-normal  text-[#E3E3E0] leading-[1.13] md:leading-[68px] mb-8 max-w-4xl tracking-tight text-center"
                >
                   <span className="text-[#F67300]">Industries </span>
                   <span className="text-white"> we are serving</span>
                     
                </h2>

                <p
                    data-ns-animate
                    className="text-[#FFFFFF] text-[20px] sm:text-[20px] max-w-[908px] font-normal leading-relaxed md:leading-[32.5px] text-center"
                >
                  <span className="text-white">At Coirei, our <span className="text-[#F67300]">LMS product</span> is designed to accelerate growth, productivity, and workforce development that empowers business with <span className="text-[#F67300]">AI Solutions.</span></span>
                </p>
            </div>

            {/* Industries Train (Marquee) */}
            <div className=" flex justify-center overflow-hidden py-10">
                <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[25px] items-center">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-[25px] px-[20px] py-[15px] bg-[#1E1E1E] border-[0.5px] border-white/15 rounded-[12px] w-[420px] h-[110px] shrink-0 cursor-pointer transition-transform hover:scale-[1.02]"
                        >
                            <div className="w-14 h-14 rounded-[26px] bg-white/5 border border-white/15 flex items-center justify-center text-[#F67300]">
                                {item.icon}
                            </div>
                            <span className="text-white text-[24px] font-medium tracking-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style> */}
        </section>
    );
};

export default IndustriesServing;

