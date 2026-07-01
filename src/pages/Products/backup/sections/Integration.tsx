
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
        icon: <img src={phoneMessageIcon} alt="Phone Message" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
        positionClass: "top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(6,182,212,0.6)]",
    },
    {
        name: "Razorpay",
        icon: <img src={razorpayIcon} alt="Razorpay" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
        positionClass: "top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(0,41,255,0.5)]",
    },
    {
        name: "Salesforce",
        icon: <img src={salesforceIcon} alt="Salesforce" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
        positionClass: "top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_#1E6696]",
    },
    {
        name: "WhatsApp",
        icon: <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
        positionClass: "top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(37,211,102,0.4)]",
    },
    {
        name: "Wtfisthis",
        icon: <img src={wtfisthisIcon} alt="Wtfisthis" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
        positionClass: "top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2",
        shadowClass: "shadow-[inset_0_1px_12px_rgba(255,255,255,0.2)]",
    },
    {
        name: "Gmail",
        icon: <img src={gmailIcon} alt="Gmail" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />,
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
                className="mb-10 flex justify-center"
            >
                <div
                    className="inline-flex items-center justify-center gap-2 px-[13px] py-[7px] bg-[#24292C]/20 border border-white/10 text-white select-none relative"
                    style={{
                        boxShadow: `
                            inset 0 3px 4px rgba(255, 255, 255, 0.2), 
                            inset 0 -3px 4px rgba(255, 255, 255, 0.2)
                        `,
                        borderRadius: '2px',
                        overflow: 'visible'
                    }}
                >
                    {/* Top-Right Corner Line */}
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-white/40 pointer-events-none" />
                    {/* Bottom-Left Corner Line */}
                    <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-white/40 pointer-events-none" />

                    <div className="w-5 h-5 flex items-center justify-center text-cyan-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                    </div>
                    <span className="text-sm tracking-wide text-white">Integrations</span>
                </div>
            </div>

            {/* Heading */}
            <h2
                data-ns-animate
                data-offset="80"
                data-delay="0.1"
                className="text-[#E3E3E0] text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] mb-6 max-w-4xl mx-auto"
            >
                Seamlessly <span className="bg-linear-to-r from-[#004370] to-[#6FC5FE] bg-clip-text text-transparent">Connect With Your</span> Favorite Tools
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
            <div className="relative w-full max-w-[400px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[450px] aspect-square mx-auto flex items-center justify-center scale-90 sm:scale-100 transition-all duration-500 my-8">
                
                {/* Central Logo Wrapper */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                    <img
                        src={coireiLogo}
                        alt="Coirei Logo"
                        className="w-[85%] h-[85%] object-contain relative z-10 transition-all duration-700 hover:scale-110 hover:rotate-360 cursor-pointer"
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
                                className={`animate-spin-slow-reverse w-14 h-14 sm:w-18 sm:h-18 md:w-[88px] md:h-[88px] rounded-[20px] md:rounded-[24px] bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer ${tool.shadowClass}`}
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
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