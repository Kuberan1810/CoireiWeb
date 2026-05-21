import React from "react";

interface TopsectionProps {
    isAnnual: boolean;
    setIsAnnual: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topsection = ({ isAnnual, setIsAnnual }: TopsectionProps) => {
    return (
        <section className="pt-50  text-center  px-4">
            <div className="flex justify-center mb-10">
                <p 
                    data-ns-animate 
                    data-offset="40" 
                    className="backdrop-blur-md border border-white/20 rounded-full py-3 px-10 text-white"
                >
                    Pricing
                </p>
            </div>

            <h1 
                data-ns-animate 
                data-delay="0.2" 
                data-offset="80" 
                className="text-7xl text-[#E3E3E0] font-medium mb-6"
            >
                Plans that scale with your usage
            </h1>

            {/* TOGGLE */}
            <div 
                data-ns-animate 
                data-delay="0.4" 
                data-offset="60" 
                className="flex items-center justify-center gap-4 text-gray-300 "
            >

                <span className={`text-[28px] ${!isAnnual ? "text-white" : "opacity-50"}`}>
                    Monthly
                </span>

                <button
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 cursor-pointer
            ${isAnnual ? "bg-orange-500" : "bg-gray-700"}
          `}
                >
                    <span
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300
              ${isAnnual ? "left-8" : "left-1"}
            `}
                    />
                </button>

                <span className={`text-[28px] ${isAnnual ? "text-white" : "opacity-50"}`}>
                    Annual
                    {isAnnual && (
                        <span className="text-orange-500 ml-2">(save 25%)</span>
                    )}
                </span>

            </div>
        </section>
    );
};

export default Topsection;
