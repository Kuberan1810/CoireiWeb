import { LayoutDashboard, BookOpen, FileText, Users, MessageSquare, ClipboardList, CalendarCheck } from 'lucide-react';

import bgImage from "../../../../assets/images/products/bg.svg";
import coireiLogo from "../../../../assets/images/homepage/coirei-logo.png";
import circleLogo from "../../../../assets/images/Features/coirei-cirlce-logo.png";
import LMSdashboard from "../../../../assets/images/products/LMSdashboard.svg";

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'Courses', active: false },
    { icon: FileText, label: 'Assignments', active: false },
    { icon: Users, label: 'Community', active: false },
    { icon: MessageSquare, label: 'Chat', active: false },
    { icon: ClipboardList, label: 'Test', active: false },
    { icon: CalendarCheck, label: 'Attendance', active: false },
];

const Studentfeature = () => {
    return (
        <section className="relative text-[#04032E] bg-white GlobalPadding overflow-hidden">
            {/* <div className="max-w-7xl mx-auto"> */}

            <div className="flex flex-col items-center text-center mb-10 md:mb-20">
                <h2
                    data-ns-animate
                    data-delay="0.1"
                    className="text-[36px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] max-w-4xl text-[#04032E] tracking-tight"
                >
                    Teaching should scale.<br />
                    Not stay manual.
                </h2>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  items-center">

                <div
                    data-ns-animate
                    data-offset="100"
                    className="relative"
                >
                    <div className="relative rounded-[25px] overflow-hidden max-w-[540px] mx-auto lg:ml-auto">
                        <img
                            src={bgImage}
                            alt=""
                            className="absolute inset-0  object-cover w-full"
                        />

                        <div className="relative z-10 p-[30px]">

                            <div className="bg-white border border-[#E9ECFF] shadow-sm rounded-[20px] px-4 py-4 mb-3 flex items-center">
                                <img src={coireiLogo} alt="coirei" className="h-6 w-auto filter grayscale opacity-80" />
                            </div>

                            <div className="bg-white border border-[#E9ECFF] shadow-sm rounded-[20px] p-[20px]">
                                <p className="text-[18px] text-[#5A5A5C] font-medium mb-4 pl-2">Overview</p>
                                <div className="space-y-1">
                                    {navItems.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-[15px] transition-all duration-300 ${item.active
                                                    ? "bg-gray-100"
                                                    : ""
                                                    }`}
                                            >
                                                <Icon
                                                    size={18}
                                                    className={item.active ? "text-[#F67300]" : "text-[#5A5A5C]"}
                                                />
                                                <span className={`text-[20px] ${item.active
                                                    ? "text-[#F67300] font-medium"
                                                    : "text-[#5A5A5C] font-normal"
                                                    }`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    data-ns-animate
                    data-delay="0.2"
                    className="flex flex-col gap-8 lg:max-w-[558px]"
                >
                    <div className="flex items-center gap-3">
                        <LayoutDashboard size={20} strokeWidth={2.5} className="text-[#04032E]" />
                        <span className="text-[20px] font-medium tracking-widest text-[#04032E]">Dashboard</span>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium leading-[1.1] text-[#04032E] tracking-tight">
                            improve outcome <br />Continuously
                        </h3>
                        <p className="text-[17px] md:text-[20px] text-[#5A5A5C] leading-relaxed font-light">
                            Experience a dashboard that thinks with you. From real-time feedback to adaptive learning paths, Coirei ensures you never just 'study', you evolve.
                        </p>
                    </div>
                </div>

            </div>

            {/* Grid Feature Highlights Section */}
            <div
                data-ns-animate
                data-offset="100"
                className="mt-20 md:mt-32 max-w-7xl mx-auto w-full"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px_1fr] border border-[#E9ECFF] rounded-3xl overflow-hidden bg-white ">
                    {/* Left Column */}
                    <div className="flex flex-col border-b lg:border-b-0 border-[#E9ECFF]">
                        <div className="flex-1 p-8 sm:p-10 border-b border-[#E9ECFF] flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Real Time Progress Intelligence
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Track learner engagement, progress, and outcomes with live insights that give complete visibility across the system.
                            </p>
                        </div>
                        <div className="flex-1 p-8 sm:p-10 border-b border-[#E9ECFF] flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Personalized Learning Experience
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Deliver structured learning journeys with organized courses, assignments, and progress tracking tailored to every learner.
                            </p>
                        </div>
                        <div className="flex-1 p-8 sm:p-10 border-b lg:border-b-0 border-[#E9ECFF] flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Adaptive Learning Paths
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Personalized learning journeys that evolve in real time based on each learner's behavior, performance, and interaction patterns.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div
                        className="flex flex-col justify-between items-center border-b lg:border-b-0 border-[#E9ECFF] bg-white group min-h-[570px] border-x"
                        style={{
                            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(246, 115, 0, 0.05) 100%)',
                        }}
                    >
                        {/* Top: Logo */}
                        <div className="flex-1 flex items-center justify-center pt-12 pb-6">
                            <div className="relative flex items-center justify-center">
                                <img
                                    src={circleLogo}
                                    alt="Coirei Circle Logo"
                                    className="w-32 h-32 object-contain relative z-10 transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg]"
                                />
                            </div>
                        </div>

                        {/* Bottom: Dashboard mockup */}
                        <div className="w-full px-6 pb-6">
                            <img
                                src={LMSdashboard}
                                alt="Coirei Dashboard Mockup"
                                className="w-full h-auto object-cover rounded-2xl shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] border border-[#E9ECFF]"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        <div className="flex-1 p-8 sm:p-10 border-b border-[#E9ECFF] flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Scalable Learning Systems
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Seamlessly scale learning across teams, organizations, and global users without losing performance or control.
                            </p>
                        </div>
                        <div className="flex-1 p-8 sm:p-10 border-b border-[#E9ECFF] flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Continuous Learning Optimization
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Improve learning outcomes through continuous feedback loops and evolving system intelligence.
                            </p>
                        </div>
                        <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center gap-3">
                            <h4 className="text-[22px] sm:text-[26px] font-medium text-[#04032E] tracking-tight">
                                Data Driven Intelligence
                            </h4>
                            <p className="text-[15px] sm:text-[17px] text-[#5A5A5C] font-light leading-relaxed">
                                Use deep analytics and insights to refine learning strategies and maximize effectiveness over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </section>
    );
};

export default Studentfeature;
