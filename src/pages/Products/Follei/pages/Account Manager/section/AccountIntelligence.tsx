import React from "react";

import { Users, Target, LineChart, Heart } from "lucide-react";


export const AccountIntelligence: React.FC = () => {
  const features = [
    {

      id: "business",
      title: "Business Relationships",
      description: "Strengthen customer partnerships with continuous relationship intelligence.",
      icon: Users,
    },
    {
      id: "growth",

      title: "Growth Intelligence",
      description: "Identify upsell, cross-sell, and account growth opportunities using AI-powered customer intelligence.",
      icon: Target,
    },
    {

      id: "executive",

      title: "Executive Insights",
      description: "Keep decision-makers informed with AI-generated account summaries and performance insights.",
      icon: LineChart,
    },
    {

      id: "health",
      title: "Account Health",
      description: "Track relationship strength, customer satisfaction, renewal and overall account performance.",
      icon: Heart,

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
            <span>Account Intelligence</span>
          </div>

          {/* Title */}
          <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 max-w-none">
            Every Strategic Account <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Grows With Intelligence
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed">
            The Account Manager Worker continuously monitors customer relationships, product adoption, executive engagement, and business opportunities to maximize account growth and long-term customer value.
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
