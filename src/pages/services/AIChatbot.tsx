import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { ArrowUpRight, HandCoins } from "lucide-react";
import FAQSection from "../Home/sections/FAQSection";
import { motion, useInView } from "framer-motion";
import ServicesWorkFlow from "./section/ServicesWorkFlow";

const DigitReel = ({ digit, delay }: { digit: number; delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [yPos, setYPos] = useState(0);

    const cycles = 5; // how many times the digits spin
    const allDigits = Array.from({ length: cycles * 10 }, (_, i) => i % 10);

    useEffect(() => {
        if (isInView) {
            // Landing index in the last cycle
            const finalIndex = (cycles - 1) * 10 + digit;
            setYPos(-finalIndex * (100 / (cycles * 10)));
        }
    }, [isInView, digit]);

    return (
        <div
            ref={ref}
            className="inline-block overflow-hidden relative"
            style={{ height: "1.1em", verticalAlign: "bottom" }}
        >
            <motion.div
                initial={{ y: "0%" }}
                animate={isInView ? { y: `${yPos}%` } : { y: "0%" }}
                transition={{
                    duration: 2.0,
                    ease: [0.15, 0.85, 0.3, 1.0], // Custom cubic-bezier for slot machine slowing down
                    delay: delay
                }}
                className="flex flex-col text-center"
            >
                {allDigits.map((num, idx) => (
                    <span key={idx} className="leading-none select-none h-[1.1em] flex items-center justify-center">
                        {num}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const JackpotNumber = ({ value }: { value: string }) => {
    const chars = value.split("");
    let digitCount = 0;

    return (
        <span className="inline-flex items-baseline justify-center">
            {chars.map((char, index) => {
                const isDigit = /^[0-9]$/.test(char);
                if (isDigit) {
                    const digitVal = parseInt(char, 10);
                    const delay = digitCount * 0.15;
                    digitCount++;
                    return (
                        <DigitReel
                            key={index}
                            digit={digitVal}
                            delay={delay}
                        />
                    );
                } else {
                    return (
                        <span key={index} className="leading-none select-none">
                            {char}
                        </span>
                    );
                }
            })}
        </span>
    );
};

const countryCodes = [
    { flagUrl: "https://flagcdn.com/w20/in.png", code: "+91", alt: "India" },
    { flagUrl: "https://flagcdn.com/w20/us.png", code: "+1", alt: "USA" },
    { flagUrl: "https://flagcdn.com/w20/gb.png", code: "+44", alt: "UK" },
    { flagUrl: "https://flagcdn.com/w20/ae.png", code: "+971", alt: "UAE" },
    { flagUrl: "https://flagcdn.com/w20/sg.png", code: "+65", alt: "Singapore" },
];

const AIChatbot = () => {
    useScrollAnimations();
    const navigate = useNavigate();

    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [countryOpen, setCountryOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = () => {
        console.log({
            ...formData,
            countryCode: selectedCountry.code,
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setCountryOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-32 pb-20 w-full bg-[#161616] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- HEADER SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full">
                        {/* Main Title */}
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
                            Enhance Your Business with <span className="text-[#F67300]">AI Chat</span> and <span className="text-[#F67300]">Virtual Assistance</span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mb-24 font-light">
                            Welcome to the future of business communication. Coirei AI chatbot and virtual assistant are designed to help you automate customer support, streamline operations, and engage with your audience like never before.
                        </p>
                    </div>
                </div>

                {/* --- FEATURES SECTION --- */}
                <div className="w-full mt-10 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
                    <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                        Features of <span className="text-[#F67300]">Coirei AI Chatbot</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 w-full">
                        {/* Feature 1 */}
                        <div data-ns-animate="true" data-start="top 80%" className="flex flex-col">
                            <div className="h-px w-full bg-white/20 mb-8"></div>
                            <div className="mb-8 text-white">
                                {/* Temporary basic icon for 24/7 */}
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between mb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-[#F67300]">
                                    24/7 Customer Support
                                </h3>
                                <ArrowUpRight size={24} className="text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed font-light pr-4">
                                Our chatbot never sleeps. It's there for your customers at any hour, answering questions, solving problems, and offering guidance so you never miss a lead.
                            </p>
                        </div>

                        {/* Feature 2: Easy Integration */}
                        <div data-ns-animate="true" data-start="top 80%" className="flex flex-col">
                            <div className="h-px w-full bg-white/20 mb-8"></div>
                            <div className="mb-8 text-white">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="6" cy="6" r="3" />
                                    <circle cx="6" cy="18" r="3" />
                                    <path d="M20 4L8.12 15.88" />
                                    <path d="M14.47 14.48L20 20" />
                                    <path d="M8.12 8.12L12 12" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between mb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-[#F67300]">
                                    Easy Integration
                                </h3>
                                <ArrowUpRight size={24} className="text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed font-light pr-4">
                                Connect the chatbot effortlessly with your CRM, website, or other business tools, making your workflow smoother than ever.
                            </p>
                        </div>

                        {/* Feature 3: Personalized User Interactions */}
                        <div data-ns-animate="true" data-start="top 80%" className="flex flex-col">
                            <div className="h-px w-full bg-white/20 mb-8"></div>
                            <div className="mb-8 text-white">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between mb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-[#F67300]">
                                    Personalized User Interactions
                                </h3>
                                <ArrowUpRight size={24} className="text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed font-light pr-4">
                                The AI learns and adapts to each user, offering tailored responses that make every interaction feel personal and valuable.
                            </p>
                        </div>

                        {/* Feature 4: Advanced Analytics */}
                        <div data-ns-animate="true" data-start="top 80%" className="flex flex-col">
                            <div className="h-px w-full bg-white/20 mb-8"></div>
                            <div className="mb-8 text-white">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between mb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-[#F67300]">
                                    Advanced Analytics
                                </h3>
                                <ArrowUpRight size={24} className="text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed font-light pr-4">
                                Track user interactions, measure engagement, and discover insights that help you refine your customer strategy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- HOW IT WORKS SECTION --- */}
                <div className="w-full mt-32 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
                    <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                        How <span className="text-[#F67300]">Coirei AI Virtual Assistant</span> Works
                    </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 border-b border-white/20">
                            {/* Step 1 */}
                            <div data-ns-animate="true" data-direction="right" className="flex flex-col border-t border-white/20 py-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-[#F67300]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-medium text-white">
                                        Identify Customer Needs
                                    </h3>
                                </div>
                                <p className="text-white/70 text-[17px] leading-relaxed font-light">
                                    Right from the first interaction, Coirei AI spots what your customers need and responds accordingly.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div data-ns-animate="true" data-direction="left" data-delay="0.1" className="flex flex-col border-t border-white/20 py-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-[#F67300]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            <path d="M3 15v-4a2 2 0 0 1 2-2h4" />
                                            <path d="m7 5 4-4 4 4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-medium text-white">
                                        Natural Language Processing
                                    </h3>
                                </div>
                                <p className="text-white/70 text-[17px] leading-relaxed font-light">
                                    Using advanced NLP, the assistant understands and engages in real, human-like conversation.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div data-ns-animate="true" data-direction="right" className="flex flex-col border-t border-white/20 py-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-[#F67300]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="7" height="7" rx="1" />
                                            <rect x="14" y="14" width="7" height="7" rx="1" />
                                            <path d="M6.5 10v3a2 2 0 0 0 2 2h5.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-medium text-white">
                                        Custom Workflows
                                    </h3>
                                </div>
                                <p className="text-white/70 text-[17px] leading-relaxed font-light">
                                    Every business is unique so we tailor the chatbot to guide users step by step, ensuring they get exactly what they need.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div data-ns-animate="true" data-direction="left" data-delay="0.1" className="flex flex-col border-t border-white/20 py-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-[#F67300]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                            <path d="M8 7h8" />
                                            <path d="M8 11h8" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-medium text-white">
                                        Ongoing Learning
                                    </h3>
                                </div>
                                <p className="text-white/70 text-[17px] leading-relaxed font-light">
                                    Coirei AI keeps improving. With each conversation, it learns, ensuring smarter, more accurate responses over time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-32 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
                        <ServicesWorkFlow />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- WHY CHOOSE US SECTION --- */}
                    <div className="w-full mt-32">
                        <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                            Why Choose <span className="text-[#F67300]">Coirei AI</span> Chatbot for Your Business
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 md:px-0">
                            {/* Card 1 */}
                            <div data-ns-animate="true" data-delay="0.1" className="flex flex-col items-center text-center bg-[#292929] border border-white/15 rounded-[20px] p-10 hover:bg-[#323232] hover:border-white/25 transition-all duration-300 min-h-[580px] justify-between group">
                                <div className="w-[250px] h-[250px] flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300">
                                    <HandCoins size={250} strokeWidth={0.5} className="text-white/80 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col items-center gap-[53px]">
                                    <h3 className="text-[22px] md:text-[24px] font-medium text-[#F67300] tracking-tight">
                                        Reduce Operational Cost
                                    </h3>
                                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                                        Automate routine tasks and support queries, so you save time and money on manual processes.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div data-ns-animate="true" data-delay="0.2" className="flex flex-col items-center text-center bg-[#292929] border border-white/15 rounded-[20px] p-10 hover:bg-[#323232] hover:border-white/25 transition-all duration-300 min-h-[580px] justify-between group">
                                <div className="w-[250px] h-[250px] flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300">
                                    <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="48" cy="30" r="14" />
                                        <path d="M22 75 C22 58, 32 54, 48 54 C64 54, 74 58, 74 75" />
                                        <path d="M68 22 A 10 10 0 0 1 76 38" />
                                        <path d="M78 58 C84 60, 88 65, 88 75" />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-[53px]">
                                    <h3 className="text-[22px] md:text-[24px] font-medium text-[#F67300] tracking-tight">
                                        Improve Customer Engagement
                                    </h3>
                                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                                        Offer instant, personalized responses that keep customers happy and engaged.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div data-ns-animate="true" data-delay="0.3" className="flex flex-col items-center text-center bg-[#292929] border border-white/15 rounded-[20px] p-10 hover:bg-[#323232] hover:border-white/25 transition-all duration-300 min-h-[580px] justify-between group">
                                <div className="w-[250px] h-[250px] flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300">
                                    <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="30" cy="30" r="6" />
                                        <circle cx="80" cy="70" r="6" />
                                        <path d="M30 36 L30 70 L74 70" />
                                        <path d="M30 70 L55 45" />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-[53px]">
                                    <h3 className="text-[22px] md:text-[24px] font-medium text-[#F67300] tracking-tight">
                                        Scale Effortlessly
                                    </h3>
                                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                                        Whether you have 100 customers or 10,000, Coirei AI scales with you, no extra effort required.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- PROVEN IMPACT TEXT --- */}
                    <div className="w-full mt-24 text-center">
                        <p data-ns-animate="true" className="text-white text-2xl md:text-3xl font-light tracking-wide">
                            Proven Impact, Measurable Results
                        </p>
                    </div>

                    {/* --- STATS GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-16 max-w-5xl mx-auto w-full mb-16">
                        <div data-ns-animate="true" data-delay="0.1">
                            <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                <JackpotNumber value="50+" />
                            </h4>
                            <p className="text-white/60 text-base md:text-[18px] font-light">Companies Trust Us</p>
                        </div>
                        <div data-ns-animate="true" data-delay="0.2">
                            <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                <JackpotNumber value="10+" />
                            </h4>
                            <p className="text-white/60 text-base md:text-[18px] font-light">Industries Served</p>
                        </div>
                        <div data-ns-animate="true" data-delay="0.3">
                            <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                <JackpotNumber value="99%" />
                            </h4>
                            <p className="text-white/60 text-base md:text-[18px] font-light">Customer Satisfaction</p>
                        </div>
                    </div>

                </div>

                {/* --- CTA SECTION --- */}
                <div className="w-full mt-32 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
                    <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                        Get Started with <span className="text-[#F67300]">Coirei AI</span> Virtual Assistant
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 md:items-center items-start w-full mb-10">
                        {/* Left Content */}
                        <div data-ns-animate="true" data-direction="right" className="flex flex-col gap-4 items-start text-left">
                            <h3 className="text-3xl md:text-[35px] font-medium text-white leading-tight">
                                Ready to transform your business?
                            </h3>
                            <p className="text-white/70 text-lg font-light leading-relaxed mb-2">
                                We'll customize the chatbot to fit your needs.
                            </p>
                            <button
                                onClick={() => navigate("/contactsales")}
                                className="text-[#252525] py-2.5 px-6 bg-[#FAF9F6] rounded-md font-semibold border border-transparent hover:bg-[#F67300] hover:text-white hover:border-[#F67300] transition-all duration-500 ease-out cursor-pointer text-xs sm:text-sm w-fit"
                            >
                                Book a Consultation
                            </button>
                        </div>

                        {/* Right Content - Contact Form */}
                        <div data-ns-animate="true" data-direction="left" data-delay="0.15" className="w-full">
                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-[15px] font-medium text-[#8a8a8a] mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-12 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-4 text-base text-white/90 focus:outline-none focus:border-white/20 transition"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-[15px] font-medium text-[#8a8a8a] mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full h-12 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-4 text-base text-white/90 focus:outline-none focus:border-white/20 transition"
                                    />
                                </div>

                                {/* Phone & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div>
                                        <label className="block text-[15px] font-medium text-[#8a8a8a] mb-2">
                                            Phone
                                        </label>
                                        <div className="flex items-center h-12 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg overflow-visible focus-within:border-white/20 transition relative">
                                            {/* Dropdown */}
                                            <div ref={dropdownRef} className="relative h-full">
                                                <button
                                                    type="button"
                                                    onClick={() => setCountryOpen(!countryOpen)}
                                                    className="flex items-center gap-2 px-3 h-full border-r border-[#2d2d2d] text-white/80 text-[14px] bg-[#202020] rounded-l-lg cursor-pointer"
                                                >
                                                    <img
                                                        src={selectedCountry.flagUrl}
                                                        alt={selectedCountry.alt}
                                                        className="w-5 h-auto object-contain shrink-0"
                                                    />
                                                    <span>{selectedCountry.code}</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className={`text-white/40 transition ${countryOpen ? "rotate-180" : ""}`}
                                                    >
                                                        <path d="m6 9 6 6 6-6" />
                                                    </svg>
                                                </button>

                                                {/* Dropdown Menu */}
                                                {countryOpen && (
                                                    <div className="absolute top-14 left-0 w-[130px] bg-[#1A1A1A] border border-[#2d2d2d] rounded-xl overflow-hidden z-50 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                                                        {countryCodes.map((country) => (
                                                            <button
                                                                key={country.code}
                                                                type="button"
                                                                onClick={() => {
                                                                    setSelectedCountry(country);
                                                                    setCountryOpen(false);
                                                                }}
                                                                className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/5 transition cursor-pointer"
                                                            >
                                                                <img
                                                                    src={country.flagUrl}
                                                                    alt={country.alt}
                                                                    className="w-5 h-auto object-contain shrink-0"
                                                                />
                                                                <span>{country.code}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="98765 43210"
                                                className="flex-1 h-full bg-transparent px-4 text-base text-white/90 placeholder:text-white/20 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-[15px] font-medium text-[#8a8a8a] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-12 bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-4 text-base text-white/90 focus:outline-none focus:border-white/20 transition"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[15px] font-medium text-[#8a8a8a] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-base text-white/90 resize-none focus:outline-none focus:border-white/20 transition"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmitForm}
                                    className="w-full h-12 bg-[#F67300] text-white rounded-lg text-lg font-medium transition-all duration-300 ease-out hover:brightness-95 hover:shadow-[0_0_0_3px_rgba(246,115,0,0.25)] active:scale-[0.98] cursor-pointer"
                                >
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <FAQSection />

            <Footer />
        </>
    );
};

export default AIChatbot;
