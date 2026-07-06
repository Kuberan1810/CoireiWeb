import { Zap, PenTool, Code, Percent } from "lucide-react";

const roles = [
    {
        title: "AI / ML Intern",
        desc: "Build intelligent AI models, automate workflows, and work on real-world machine learning projects",
        icon: Zap
    },
    {
        title: "UI / UX Intern",
        desc: "Design intuitive user experiences and modern interfaces for next-generation AI products.",
        icon: PenTool
    },
    {
        title: "Frontend & Full Stack Intern",
        desc: "Develop scalable web applications using modern technologies and collaborate with our AI engineering team.",
        icon: Code
    },
    {
        title: "Digital Marketing Intern",
        desc: "Drive brand growth through digital campaigns, content strategy, SEO, and performance marketing.",
        icon: Percent
    }
];

const CareersRoles = () => {
    return (
        <section id="roles" className="w-full GlobalPadding bg-[#FFFFFF]">
            
            {/* Top Divider & Pill */}
            <div data-ns-animate className="w-full max-w-[1400px] mx-auto flex items-center justify-center gap-6 mb-24">
                {/* Left Line */}
                <div 
                    className="flex-grow h-[1px]" 
                    style={{ background: "linear-gradient(270deg, rgba(22, 22, 22, 0.5) 0%, rgba(35, 35, 35, 0.5) 7.14%, rgba(49, 49, 49, 0.5) 14.29%, rgba(64, 64, 64, 0.5) 21.43%, rgba(79, 79, 79, 0.8) 28.57%, rgba(95, 95, 95, 0.8) 35.71%, rgba(111, 111, 111, 0.8) 42.86%, rgba(128, 128, 128, 0.8) 50%, rgba(145, 145, 145, 0.8) 57.14%, #A3A3A3 64.29%, #B4B4B4 71.43%, #C7C7C7 78.57%, #D9D9D9 85.71%, #ECECEC 92.86%, #FFFFFF 100%)" }} 
                />
                
                {/* Center Pill (Boxy) */}
                <div className="shrink-0 bg-white px-8 py-3 rounded-[12px] border border-[rgba(0,0,0,0.1)] shadow-sm">
                    <span className="font-normal text-[18px] md:text-[22px] leading-[33px] text-[#000000]">Join Our Team</span>
                </div>

                {/* Right Line */}
                <div 
                    className="flex-grow h-[1px]" 
                    style={{ background: "linear-gradient(90deg, rgba(22, 22, 22, 0.5) 0%, rgba(35, 35, 35, 0.5) 7.14%, rgba(49, 49, 49, 0.5) 14.29%, rgba(64, 64, 64, 0.5) 21.43%, rgba(79, 79, 79, 0.8) 28.57%, rgba(95, 95, 95, 0.8) 35.71%, rgba(111, 111, 111, 0.8) 42.86%, rgba(128, 128, 128, 0.8) 50%, rgba(145, 145, 145, 0.8) 57.14%, #A3A3A3 64.29%, #B4B4B4 71.43%, #C7C7C7 78.57%, #D9D9D9 85.71%, #ECECEC 92.86%, #FFFFFF 100%)" }} 
                />
            </div>

            {/* Section Heading */}
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="font-medium text-[40px] md:text-[52px] leading-[1.2] text-[#000000] mb-6">
                    Build the <span className="text-[#F67300]">Future</span> With Us
                </h2>
                <p className="font-normal text-[16px] md:text-[18px] leading-[1.5] md:leading-[29.25px] text-[#4F4F4F] max-w-[700px]">
                    Discover exciting career opportunities where innovation, collaboration, and continuous learning come together.
                </p>
            </div>

            {/* Job Cards */}
            <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
                {roles.map((role, index) => (
                    <div 
                        key={index}
                        data-ns-animate
                        data-delay={0.1 * index}
                        className="bg-[#F3F4F7] rounded-[16px] p-6 sm:p-8 flex flex-col w-full relative"
                        style={{ border: "0.5px solid #93939320" }}
                    >
                        {/* Top Row: Icon and Internship Type */}
                        <div className="flex justify-between items-start mb-6">
                            {/* Icon Container */}
                            <div 
                                className="rounded-[24px] p-[1.5px] shrink-0"
                                style={{ background: "linear-gradient(145deg, #5960DF 36.85%, #F8CBC0 69.28%)" }}
                            >
                                <div className="rounded-[22.5px] bg-white p-2">
                                    <div 
                                        className="rounded-[14px] w-[50px] h-[50px] flex items-center justify-center"
                                        style={{ 
                                            background: "linear-gradient(0deg, rgba(89, 96, 223, 0.08), rgba(89, 96, 223, 0.08)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)" 
                                        }}
                                    >
                                        <role.icon className="w-7 h-7" style={{ color: "#5A6FD8", strokeWidth: 1.5 }} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Internship Type */}
                            <span className="font-normal text-[16px] sm:text-[18.43px] leading-[26.11px] text-[#000000] pt-2">
                                Hybrid Internship
                            </span>
                        </div>

                        {/* Job Title */}
                        <h3 className="font-normal text-[24px] sm:text-[30.72px] leading-[1.2] sm:leading-[38.4px] tracking-[-1.54px] text-[#000000] mb-6">
                            {role.title}
                        </h3>

                        {/* Bottom Row: Description and Button */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-auto">
                            <p className="font-normal text-[16px] sm:text-[18.43px] leading-[1.5] sm:leading-[26.11px] text-[#000000] max-w-[650px]">
                                {role.desc}
                            </p>
                            
                            {/* Apply Button */}
                            <div 
                                className="rounded-full p-[2.5px] shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                style={{ background: "linear-gradient(145deg, #5960DF 36.85%, #F8CBC0 69.28%)" }}
                            >
                                <button 
                                    className="rounded-full bg-white px-8 py-2.5 text-[#000000] shadow-[inset_0px_2px_9px_0px_#E2E8F0] h-full w-full"
                                >
                                    <span className="font-normal text-[16px] sm:text-[18.43px] leading-[26.11px]">Apply Now</span>
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default CareersRoles;
