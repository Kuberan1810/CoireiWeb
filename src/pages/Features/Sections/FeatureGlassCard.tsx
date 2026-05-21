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
        glass backdrop-blur-4xl
        border border-white/10
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.65)]
        hover:-translate-y-1.5
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.85)]
        transition-all duration-300
        p-5 sm:p-6 md:p-7
        animate-fadeUp
        flex flex-col justify-evenly h-full
      "
        >
            {/* IMAGE FIRST */}
            {imageFirst && children && (
                <div className="mb-4 sm:mb-5 flex justify-center">
                    {children}
                </div>
            )}

            <h3 className="text-white text-[22px] sm:text-[24px] md:text-[28px] font-semibold">
                {title}
            </h3>

            <p className="text-white/70 text-sm sm:text-base mb-5 sm:mb-6 md:mb-8">
                {subtitle}
            </p>

            <p className="text-white/90 font-medium text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10">
                {description}
            </p>

            {/* NORMAL POSITION */}
            {!imageFirst && children && (
                <div className="flex justify-center">
                    {children}
                </div>
            )}
        </div>
    );
};

export default GlassCard;
