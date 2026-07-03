import React from "react";
import { RocketIcon, BlocksIcon, BookOpenText, ChartNoAxesCombined } from "lucide-react";

export const AccountIntelligence: React.FC = () => {
  const features = [
    {
      id: "onboarding",
      title: "Guided Onboarding",
      description: "Guide every customer through onboarding milestones with personalized assistance.",
      icon: RocketIcon,
    },
    {
      id: "adoption",
      title: "Product Adoption",
      description: "Introduce key features and recommended workflows that help customers unlock value faster.",
      icon: BlocksIcon,
    },
    {
      id: "resources",
      title: "Learning Resources",
      description: "Recommend knowledge articles, documentation, tutorials, and best practices based on customer needs.",
      icon: BookOpenText,
    },
    {
      id: "tracking",
      title: "Success Tracking",
      description: "Track onboarding progress, adoption milestones, and customer readiness in real time.",
      icon: ChartNoAxesCombined,
    }
  ];

  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-8 lg:py-10 flex justify-center bg-white">
      <div className="w-full flex flex-col items-center">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">
          {/* Badge Capsule */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Smart Onboarding</span>
          </div>

          {/* Title */}
          <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 max-w-none">
            Every Customer Starts <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              With Confidence
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed">
            The Customer Success Worker delivers personalized onboarding experiences that accelerate product adoption, guide every customer through setup, and help them realize maximum value from day one.
          </p>
        </div>

        <div className="w-full bg-[#F1F1F1] py-5 px-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
          {features.map((feat) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.id}
                className="bg-white rounded-[10px] p-5 text-left flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-[8px] flex items-center justify-center mb-20 text-white bg-[#004370]">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-[#000000] font-medium text-[24px] mb-2 tracking-tight">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[#5A5A5C] text-xs sm:text-[16px] leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AccountIntelligence;
