import React from "react";
import { Target, ChartLine, Brain, BadgeCheck } from "lucide-react";

export const LeadQualification: React.FC = () => {
  const features = [
    {
      id: "onboarding",
      title: "Customer Intent",
      description: "Recognizes buying interest, goals, and purchase readiness.",
      icon: Target,
    },
    {
      id: "adoption",
      title: "Engagement Signals",
      description: "Tracks conversations, website activity, and communication history. ",
      icon: ChartLine,
    },
    {
      id: "resources",
      title: "Business Context ",
      description: "Understands products, pricing, policies, and business knowledge.",
      icon: Brain,
    },
    {
      id: "tracking",
      title: " Sales Qualification",
      description: "Identifies high-value opportunities ready for the sales team.",
      icon: BadgeCheck,
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
            <span>Lead Qualification</span>
          </div>

          {/* Title */}
          <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 max-w-none">
            Identify High-Value <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Opportunities Instantly
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed">
            The SDR Worker evaluates every prospect using business intelligence, customer behavior, engagement history, and buying signals to identify sales-ready opportunities with confidence.          </p>
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

export default LeadQualification;
