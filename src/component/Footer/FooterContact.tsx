import React from "react";

interface FooterContactProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    isFollei?: boolean;
}

const FooterContact: React.FC<FooterContactProps> = ({
    icon,
    title,
    value,
    isFollei = false,
}) => {
    return (
        <div className={`group flex items-center gap-4 sm:gap-5 p-5 sm:p-8 border cursor-pointer ${isFollei ? "border-black/10" : "border-gray-200"}`}>
            <div
                className={`relative overflow-hidden p-3 sm:p-4 transition-colors duration-300
                before:absolute before:inset-0
                before:-translate-x-full before:transition-transform before:duration-300
                group-hover:before:translate-x-0 ${isFollei ? "text-black bg-black/5 before:bg-white  group-hover:text-white" : "text-gray-600 bg-gray-50 before:bg-gray-900 group-hover:text-white"}`}
            >
                <span className="relative z-10">{icon}</span>
            </div>

            <div>
                <p className={`text-xs sm:text-sm ${isFollei ? "text-black/50" : "text-gray-500"}`}>{title}</p>
                <a
                    href={`mailto:${value}`}
                    className={`font-medium text-sm sm:text-base ${isFollei ? "text-[#161616]" : "text-gray-900"}`}
                >
                    {value}
                </a>
            </div>
        </div>
    );
};

export default FooterContact;
