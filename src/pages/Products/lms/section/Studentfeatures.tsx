import { LayoutDashboard, BookOpen, FileText, Users, MessageSquare, ClipboardList, CalendarCheck } from 'lucide-react';

import bgImage from "../../../../assets/images/products/bg.svg";
import coireiLogo from "../../../../assets/images/homepage/coirei-logo.png";

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
        <section className="relative text-white bg-[#161616] px-6 md:px-12 overflow-hidden py-10 md:py-20">
            {/* <div className="max-w-7xl mx-auto"> */}

            <div className="flex flex-col items-center text-center mb-10 md:mb-20">
                <p
                    data-ns-animate
                    data-offset="40"
                    className="backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base text-[#959493] mb-5">
                    LMS Features
                </p>
                <h2
                    data-ns-animate
                    data-delay="0.1"
                    className="text-[36px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] max-w-4xl text-white tracking-tight"
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

                            <div className="bg-[#2A2A2A] rounded-[20px] px-4 py-4 mb-3 flex items-center">
                                <img src={coireiLogo} alt="coirei" className="h-6 w-auto" />
                            </div>

                            <div className="bg-[#2A2A2A] rounded-[20px] p-[20px]">
                                <p className="text-[18px] text-[#E0E0E0] font-normal mb-4 pl-2">Overview</p>
                                <div className="space-y-1">
                                    {navItems.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-[15px] transition-all duration-300 ${item.active
                                                    ? "bg-[#1E1E1E]"
                                                    : ""
                                                    }`}
                                            >
                                                <Icon
                                                    size={18}
                                                    className={item.active ? "text-[#F67300]" : "text-[#E0E0E0]"}
                                                />
                                                <span className={`text-[20px] ${item.active
                                                    ? "text-[#F67300] font-normal"
                                                    : "text-[#E0E0E0] font-normal"
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
                        <LayoutDashboard size={20} strokeWidth={2.5}  className="text-white" />
                        <span className="text-[20px] font-medium tracking-widest text-[#FFFFFF]">Dashboard</span>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium leading-[1.1] text-white tracking-tight">
                           improve outcome <br />Continuously
                        </h3>
                        <p className="text-[17px] md:text-[20px] text-white/60 leading-relaxed font-light">
                           Experience a dashboard that thinks with you. From real-time feedback to adaptive learning paths, Coirei ensures you never just 'study', you evolve.
                        </p>
                    </div>
                </div>

            </div>

            {/* </div> */}
        </section>
    );
};

export default Studentfeature;
