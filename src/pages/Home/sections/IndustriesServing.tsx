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
        <section className="pt-6 pb-6 sm:pt-8 sm:pb-8 overflow-hidden bg-[#161616] w-full">
            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4 px-4">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white hidden sm:block" 
                />
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-6 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[16px] sm:text-[22px] whitespace-nowrap shrink-0"
                >
                    AI Solutions Across Global
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white hidden sm:block" 
                />
            </div>

            {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 mb-12">
                <h2
                    data-ns-animate
                    className="text-[24px] sm:text-[32px] md:text-[40px] font-normal text-[#E3E3E0] leading-tight mb-6 max-w-4xl tracking-tight text-center"
                >
                   <span className="text-[#F67300]">Industries </span>
                   <span className="text-white"> we are serving</span>
                </h2>

                <p
                    data-ns-animate
                    className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] max-w-[908px] font-normal leading-relaxed md:leading-[32.5px] text-center"
                >
                   At Coirei, our <span className="text-[#F67300]">LMS product</span> is designed to accelerate growth, productivity, and workforce development that empowers business with <span className="text-[#F67300]">AI Solutions.</span>
                </p>
            </div>

            {/* Industries Grid */}
            <div className="flex justify-center px-6 py-10 w-full max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 sm:gap-6 px-5 py-4 bg-[#1E1E1E] border-[0.5px] border-white/15 rounded-[12px] w-full max-w-[420px] h-[96px] sm:h-[110px] cursor-pointer transition-transform hover:scale-[1.02]"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[26px] bg-white/5 border border-white/15 flex items-center justify-center text-[#F67300] shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-white text-[18px] sm:text-[22px] md:text-[24px] font-medium tracking-tight leading-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServing;
