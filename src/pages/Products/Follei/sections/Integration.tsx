
import coireiLogo from "../../../../assets/images/products/coirei-logo.svg";
import gmailIcon from "../../../../assets/images/products/gmail 1.svg";
import whatsappIcon from "../../../../assets/images/products/whatsapplogo.svg";
import salesforceIcon from "../../../../assets/images/products/salesforce.svg";
import phoneMessageIcon from "../../../../assets/images/products/phone-message 1.svg";
import razorpayIcon from "../../../../assets/images/products/razorpay.svg";
import wtfisthisIcon from "../../../../assets/images/products/wtfisthis.svg";

const integrations = [
    {
        name: "Phone Message",
        icon: <img src={phoneMessageIcon} alt="Phone Message" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(6,182,212,0.6)]",
    },
    {
        name: "Razorpay",
        icon: <img src={razorpayIcon} alt="Razorpay" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "top-[25%] right-[6.7%] translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(0,41,255,0.5)]",
    },
    {
        name: "Salesforce",
        icon: <img src={salesforceIcon} alt="Salesforce" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "bottom-[25%] right-[6.7%] translate-x-1/2 translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_#1E6696]",
    },
    {
        name: "WhatsApp",
        icon: <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "bottom-[0%] left-[50%] -translate-x-1/2 translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(37,211,102,0.4)]",
    },
    {
        name: "Wtfisthis",
        icon: <img src={wtfisthisIcon} alt="Wtfisthis" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "bottom-[25%] left-[6.7%] -translate-x-1/2 translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(255,255,255,0.2)]",
    },
    {
        name: "Gmail",
        icon: <img src={gmailIcon} alt="Gmail" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
        positionClass: "top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(234,67,53,0.5)]",
    }
];

const Integration = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-16 text-[#E3E3E0] overflow-visible flex flex-col items-center text-center">
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 20s linear infinite;
                }
            `}</style>

            {/* Badge */}
            <div
                data-ns-animate
                data-offset="80"
                className="mb-10 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            >
                <div className="w-5 h-5 flex items-center justify-center text-cyan-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </div>
                <span className="text-[15px] font-medium text-white/90">Integrations</span>
            </div>

            {/* Heading */}
            <h2
                data-ns-animate
                data-offset="80"
                data-delay="0.1"
                className="text-[#E3E3E0] text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] mb-6 max-w-4xl mx-auto"
            >
                Seamlessly <span className="bg-gradient-to-r from-[#004370] to-[#6FC5FE] bg-clip-text text-transparent">Connect With Your</span> Favorite Tools
            </h2>

            {/* Subtext */}
            <p
                data-ns-animate
                data-offset="80"
                data-delay="0.2"
                className="text-[#B5B4B2] text-lg max-w-3xl leading-relaxed mx-auto font-light mb-20 md:mb-28"
            >
                Integrate Follei AI with the platforms you already use to automate customer engagement, streamline workflows, and centralize communication.
            </p>

            {/* Orbit Circle Graphic Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[650px] aspect-square mx-auto flex items-center justify-center scale-90 sm:scale-100 transition-all duration-500 my-8">
                
                {/* Central Logo Wrapper */}
                <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
                    <img
                        src={coireiLogo}
                        alt="Coirei Logo"
                        className="w-[90%] h-[90%] object-contain relative z-10 transition-all duration-700 hover:scale-110 hover:rotate-[360deg] cursor-pointer"
                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                    />
                </div>

                {/* 6 Integrations Cards */}
                <div className="absolute inset-0 animate-spin-slow">
                    {integrations.map((tool) => (
                        <div
                            key={tool.name}
                            className={`absolute z-20 ${tool.positionClass}`}
                        >
                            <div
                                className={`animate-spin-slow-reverse w-20 h-20 sm:w-24 sm:h-24 md:w-[130px] md:h-[130px] rounded-[32px] bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer ${tool.shadowClass}`}
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                                    {tool.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Integration;