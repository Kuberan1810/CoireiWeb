import React from "react";
import CoireiLogo from "../../../assets/images/Features/coirei-cirlce-logo.png";

import HosueIocn from "../../../assets/images/Features/house-icon.svg";
import CircleIcon from "../../../assets/images/Features/circle-icon.svg";
import CubeIocn from "../../../assets/images/Features/cube-icon.svg";
import HalftCircleIocn from "../../../assets/images/Features/halfcircle-icon.svg";
import CloudIocn from "../../../assets/images/Features/cloud-icon.svg";
import IconN from "../../../assets/images/Features/icon-N.svg";
import IconB from "../../../assets/images/Features/icon-B.svg";
import Icon3 from "../../../assets/images/Features/icon-3.svg";

import "../Features.css";

/* 8 ICONS – INDIVIDUAL ORBIT */
const icons = [
    HalftCircleIocn,
    IconB,
    CircleIcon,
    IconN,
    HosueIocn,
    CloudIocn,
    Icon3,
    CubeIocn,
];
const IntegrationsMobile: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full md:hidden py-16 overflow-hidden" >

            {/* FIXED SIZE WRAPPER */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">

                {/* CENTER LOGO */}
                <div className="absolute z-2">
                    <div className="relative w-[96px] h-[96px] flex items-center justify-center">
                        <div className="bg-white  rounded-full w-[64px] h-[64px] flex items-center justify-center ">
                            <img src={CoireiLogo} className="w-full h-full object-cover" />
                        </div>

                        {/* PULSE RINGS */}
                        <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full animate-ring1" />
                        <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full animate-ring2" />
                    </div>
                </div>

                {/* ORBIT */}
                <div className="absolute inset-0 animate-slowSpin">
                    {icons.map((icon, i) => {
                        const angle = (360 / icons.length) * i;

                        return (
                            <div
                                key={i}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ transform: `rotate(${angle}deg)` }}
                            >
                                <div
                                    className=" -translate-y-[130px] w-[56px] h-[56px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5]
                    border border-[#d4d4d4] p-2
                  "
                                >
                                    <img src={icon} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};


export default IntegrationsMobile;
