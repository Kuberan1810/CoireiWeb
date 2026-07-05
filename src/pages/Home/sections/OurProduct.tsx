import React from "react";
import { Link } from "react-router-dom";
import follei from "../../../assets/videos/Follei.mp4";
import Lms from "../../../assets/videos/lms.mp4";
import veleiImg from "../../../assets/images/products/Analytics Dashboard.svg";
import Tasie from "./Animation/Tasie";
import Velei from "./Animation/Velei";
import TypewriterHeading from "../../../component/TypewriterHeading";
import {  ChevronRight } from "lucide-react";

const products = [
    {
        id: "follei",
        name: "Follei",
        category: "AUTONOMOUS AI SALES WORKFORCE",
        description: "An end-to-end AI sales automation platform that manages the complete customer journey  from first contact to long-term customer success  as a coordinated workforce of specialized agents, not a single chatbot.",
        pills: ["Voice", "WhatsApp", "Email", "Web Chat"],
        mediaType: "video",
        src: follei,
        link: "/products/follei"
    },
    {
        id: "lms",
        name: "Coirei LMS",
        category: "AI-POWERED LEARNING MANAGEMENT PLATFORM",
        description: "An intelligent learning platform for schools, colleges, universities, and corporate training  combining modern learning infrastructure with AI across student, faculty, admin, and super admin portals.",
        pills: ["Student Portal", "Faculty Portal", "Admin Portal", "Super Portal"],
        mediaType: "video",
        src: Lms,
        link: "/products/coireilms"
    },
    {
        id: "velei",
        name: "Velei",
        upcomming: "(Coming Soon)",
        category: "THE FUTURE OF AI RECRUITMENT",
        description: "Recruitment based on skills, not just resumes. Velei runs autonomous AI interviews and delivers structured candidate assessments in place of manual resume review.",
        pills: [],
        mediaType: "component",
        component: <Velei />
    },
    {
        id: "tasie",
        name: "TASIE",
        upcomming: "(Coming Soon)",
        category: "AI-POWERED SECURE SOFTWARE ENGINEERING",
        description: "Rather than catching vulnerabilities after development, TASIE analyzes code continuously as it's written  helping teams shift quality and security earlier in the lifecycle.",
        pills: [],
        mediaType: "component",
        component: <Tasie />
    }
];

const ProductCard = ({ product, index }: { product: any, index: number }) => {
    const [isTypingDone, setIsTypingDone] = React.useState(false);

    return (
        <div
            className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center "
        >
            {/* Text Content */}
            <div
                data-ns-animate="true"
                data-delay={`${0.1 + index * 0.05}`}
                data-offset="50"
                className="lg:col-span-5 flex flex-col items-start max-w-[530px]"
            >
                {/* Product Title */}
                <h3 className="text-3xl md:text-[30px] font-bold text-[#14182C] tracking-tight mb-2 min-h-[45px]">
                    <TypewriterHeading text={product.name} delay={40} />
                    {product.upcomming && (
                        <span className="text-lg text-[#5B6280] font-medium">
                            <TypewriterHeading text={` ${product.upcomming}`} delay={30} />
                        </span>
                    )}
                </h3>

                {/* Category Subtitle */}
                <span className="text-[12px] font-medium text-[#878FAA] tracking-wider uppercase mb-4 min-h-[18px] block">
                    <TypewriterHeading text={product.category} delay={20} />
                </span>

                {/* Description */}
                <p className="text-[#5B6280] text-base md:text-[18px] leading-relaxed mb-5 font-light min-h-[81px]">
                    <TypewriterHeading
                        text={product.description}
                        delay={10}
                        onComplete={() => setIsTypingDone(true)}
                    />
                </p>

                {/* Pills */}
                {product.pills && product.pills.length > 0 && (
                    <div className={`flex flex-wrap gap-2 transition-all duration-700 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {product.pills.map((pill: string) => (
                            <span
                                key={pill}
                                className="px-4 py-2.5 border border-[#DEE3EE] rounded-full text-xs md:text-[14px] text-[#5B6280] hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>
                )}

                {/* View More Button */}
                {product.link && (
                    <div
                        className={`mt-8 transform transition-all duration-700 ease-out ${isTypingDone
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                    >
                        <Link
                            to={product.link}
                            className="group/btn inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-[#E5E5E5] bg-[#B7BFD910] px-7 py-3 font-medium text-[#14182C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm sm:w-auto"
                        >
                            <span>View More</span>

                            <ChevronRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-2" />
                        </Link>
                    </div>
                )}
            </div>



            {/* Image Container */}
            <div
                data-ns-animate="true"
                data-delay={`${0.15 + index * 0.05}`}
                data-offset="60"
                className="lg:col-span-7 w-full"
            >
                <div className="block relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                    {product.mediaType === "video" && (
                        <video
                            src={product.src}
                            className="w-full h-full object-cover"
                            playsInline
                            muted
                            autoPlay
                            loop
                            preload="metadata"
                            controls={false}
                            disablePictureInPicture
                            disableRemotePlayback
                        />
                    )}
                    {product.mediaType === "image" && (
                        <img
                            src={product.src}
                            alt={`${product.name} interface`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    )}
                    {product.mediaType === "component" && (
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-r from-green-50 to-indigo-100">
                            {product.component}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const OurProduct = () => {
    return (
        <section id="our-products" className="relative GlobalPadding">
            <div className="">

                {/* Section Header */}
                <div className="mb-10 md:mb-12.5">
                    <h2
                        data-ns-animate="true"
                        data-delay="0.1"
                        data-offset="40"
                        className="text-5xl md:text-[52px] font-medium text-black min-h-[78px]"
                    >
                        <TypewriterHeading text="Our Products" />
                    </h2>
                </div>

                {/* Products List */}
                <div className="flex flex-col gap-12 md:gap-20">
                    {products.map((product, index) => {
                        return (
                            <ProductCard key={product.id} product={product} index={index} />
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default OurProduct;