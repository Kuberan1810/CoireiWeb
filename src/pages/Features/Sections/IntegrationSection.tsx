import React from "react";
import CoireiLogo from "../../../assets/images/Features/coirei-cirlce-logo.png";
import RightLine from "../../../assets/images/Features/right-line.svg";
import LeftLine from "../../../assets/images/Features/left-line.svg";
import DownLine from "../../../assets/images/Features/down-line.svg";
import HosueIocn from "../../../assets/images/Features/house-icon.svg";
import CircleIcon from "../../../assets/images/Features/circle-icon.svg";
import CubeIocn from "../../../assets/images/Features/cube-icon.svg";
import HalftCircleIocn from "../../../assets/images/Features/halfcircle-icon.svg";
import CloudIocn from "../../../assets/images/Features/cloud-icon.svg";
import IconN from "../../../assets/images/Features/icon-N.svg";
import IconB from "../../../assets/images/Features/icon-B.svg";
import Icon3 from "../../../assets/images/Features/icon-3.svg";
import IntegrationsMobile from "./IntegrationsMobile";



const IntegrationsSection: React.FC = () => {
    return (
        <section className="py-20 mx-15 max-sm:mx-5 max-sm:py-16">

            {/* TOP */}
            <div className="flex flex-col items-center justify-center mb-20 max-sm:mb-12">
                <h2
                    data-ns-animate
                    data-offset="40"
                    className="inline-flex items-center justify-center text-xl max-sm:text-base text-white py-2.5 px-10 max-sm:px-6 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 rounded-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] mb-10 max-sm:mb-6"
                >
                    Seamless Integrations
                </h2>

                <p
                    data-ns-animate
                    data-delay="0.2"
                    data-offset="80"
                    className="text-center text-[#E3E3E0] font-normal text-[32px] md:text-[60px] max-sm:text-[26px] max-w-220 mb-5 leading-tight"
                >
                    Native Integrations Across Your Execution Stack
                </p>

                <p
                    data-ns-animate
                    data-delay="0.4"
                    data-offset="60"
                    className="text-center text-xl max-sm:text-base text-[#CECECE] max-w-3xl"
                >
                    Connect repositories, cloud providers, internal tools, and services into a single intelligent execution fabric.
                </p>
            </div>

            {/* GRAPH */}
            <div
                data-ns-animate
                data-direction="up"
                data-offset="100"
                className="relative w-full flex justify-center items-center"
            >

                <IntegrationsMobile />

                {/* DESKTOP */}
                <div className="hidden md:flex w-full max-w-240 h-[302px] relative mx-auto">

                    {/* LEFT */}
                    <div className="w-full h-[186px] relative">
                        <img src={LeftLine} className="w-full h-full object-contain object-[100%_50%]" />


                        {[{ icon: HalftCircleIocn, pos: "-top-[15%] left-0" },
                        { icon: CircleIcon, pos: "top-[35%] left-[28%]" },
                        { icon: HosueIocn, pos: "-bottom-[15%] left-0" }].map((item, i) => (

                            <div key={i} className={`absolute ${item.pos} w-[60px] h-[60px] rounded-full flex items-center justify-center bg-linear-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]`}>

                                <img src={item.icon} />
                            </div>
                        ))}
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col items-center pt-[29px] relative">

                        <div className="w-[130px] h-[130px] relative flex items-center justify-center">

                            <div className="bg-white  rounded-full w-[80px] h-[80px] flex items-center justify-center z-1">
                                <img src={CoireiLogo} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full animate-ring1" />
                            <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full animate-ring2" />
                        </div>

                        <img src={DownLine} className="w-[189px] h-[104px] absolute bottom-[40px]" />

                        <div className="flex justify-between w-full max-w-[189px] absolute bottom-0">
                            {[IconN, CloudIocn].map((icon, i) => (

                                <div key={i} className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-linear-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] p-2.5">
                                    <img src={icon} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full h-[186px] relative">
                        <img src={RightLine} className="w-full h-full object-contain object-[0%_50%]" />
                        {[{ icon: CubeIocn, pos: "-top-[15%] right-0" }, { icon: Icon3, pos: "top-[35%] right-[28%]" }, { icon: IconB, pos: "-bottom-[15%] right-0" }].map((item, i) => (
                            <div key={i} className={`absolute ${item.pos} w-[60px] h-[60px] rounded-full flex items-center justify-center bg-linear-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] p-2.5`}>
                                <img src={item.icon} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
