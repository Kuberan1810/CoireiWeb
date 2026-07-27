import React from "react";

interface GlassCardProps {
    title: string;
    subtitle: string;
    description: string;
    children?: React.ReactNode;
    imageFirst?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
    title,
    subtitle,
    description,
    children,
    imageFirst = false,
}) => {
    return (
        <div
            className="
        bg-gray-50
        border border-gray-200
        rounded-[20px] md:rounded-[24px]
        p-6 sm:p-7 md:p-8
        animate-fadeUp
        flex flex-col justify-between h-full
        relative overflow-hidden
      "
            style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
        >
            {/* IMAGE FIRST */}
            {imageFirst && children && (
                <div className="mb-4 sm:mb-5 flex justify-center">
                    {children}
                </div>
            )}

            <div>
                <h3 className="text-gray-900 text-xl sm:text-2xl md:text-[26px] font-medium tracking-tight mb-2">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base font-light mb-4 sm:mb-5">
                    {subtitle}
                </p>

                <p className="text-gray-600 font-light text-sm sm:text-base md:text-[17px] leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* NORMAL POSITION */}
            {!imageFirst && children && (
                <div className="flex justify-center mt-auto">
                    {children}
                </div>
            )}
        </div>
    );
};

export default GlassCard;
