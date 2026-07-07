import React, { useState } from "react";
import { Brain, BookOpen, FileText, Heart, Users, Cpu } from "lucide-react";

// Image Imports from assets/images/products
import businessintelligenceImg from "../../../../assets/images/products/businessintelligence.svg";
import knowledgesystemImg from "../../../../assets/images/products/knowledge system.svg";
import revenueintelligenceImg from "../../../../assets/images/products/revenueintelligence.svg";
import customerintelligenceImg from "../../../../assets/images/products/customerintelligence.svg";
import aiworkforceImg from "../../../../assets/images/products/aiworkforce.svg";
import learningengineImg from "../../../../assets/images/products/learningengine2.svg";

interface CardData {
  id: number;
  title: string;
  description: string;
  graphic: string;
  icon: React.ComponentType<any>;
  iconBg: string;
}

const row1Cards: CardData[] = [
  {
    id: 0,
    title: "Business Intelligence",
    description: "Learns your business from websites, documents, CRM, ERP, emails, and communication channels.",
    graphic: businessintelligenceImg,
    icon: Brain,
    iconBg: "bg-[#004370]/10 text-[#004370]"
  },
  {
    id: 1,
    title: "Knowledge system",
    description: "Creates a unified knowledge layer from products, pricing, policies, and customer interactions.",
    graphic: knowledgesystemImg,
    icon: BookOpen,
    iconBg: "bg-[#8E2884]/10 text-[#8E2884]"
  },
  {
    id: 2,
    title: "Revenue Intelligence",
    description: "Identifies buying intent, prioritizes leads, and predicts conversion opportunities.",
    graphic: revenueintelligenceImg,
    icon: FileText,
    iconBg: "bg-[#1079B7]/10 text-[#1079B7]"
  }
];

const row2Cards: CardData[] = [
  {
    id: 3,
    title: "Customer Intelligence",
    description: "Identifies buying intent, prioritizes leads, and predicts conversion opportunities.",
    graphic: customerintelligenceImg,
    icon: Heart,
    iconBg: "bg-[#1079B7]/10 text-[#1079B7]"
  },
  {
    id: 4,
    title: "AI Workforce",
    description: "Deploys AI workers across sales, support, collections, renewals, and customer success.",
    graphic: aiworkforceImg,
    icon: Users,
    iconBg: "bg-[#8E2884]/10 text-[#8E2884]"
  },
  {
    id: 5,
    title: "Learning Engine",
    description: "Continuously learns from every interaction to improve decisions and outcomes.",
    graphic: learningengineImg,
    icon: Cpu,
    iconBg: "bg-[#004370]/10 text-[#004370]"
  }
];

export const Automation: React.FC = () => {
  const [activeRow1, setActiveRow1] = useState<number>(0);
  const [activeRow2, setActiveRow2] = useState<number>(5);

  return (
    <section className="relative w-full GlobalPadding overflow-hidden bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1079B7]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8E2884]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center gap-12">

        {/* Header Area */}
        <div className="flex flex-col items-center">
          {/* Badge capsule */}
          <div data-ns-animate className="mb-6 flex justify-center">
            <div
              style={{
                borderWidth: '0.5px',
                borderColor: '#004370',
                borderRadius: '10px',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '12px',
                paddingRight: '12px',
                gap: '10px'
              }}
              className="inline-flex items-center bg-white border"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
              <span className="text-sm font-medium text-[#0A0E29]">Introducing the Future of Automation</span>
            </div>
          </div>

          {/* Heading */}
          <h2 data-ns-animate data-delay="0.1" className="text-[#0A0E29] text-3xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
            The Six Intelligence Systems That Power <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Every AI Decision</span>
          </h2>

          {/* Subheading */}
          <p data-ns-animate data-delay="0.2" className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed text-center">
            Every AI decision is backed by six layers of intelligent reasoning. Follei combines data insights, autonomous execution, and adaptive learning into one cohesive system—powering organizations to operate at peak efficiency and scale rapidly.
          </p>
        </div>

        {/* Cards Container - Figma style bg, padding, and gaps */}
        <div className="w-full bg-[#F2F2F2] border border-[#E8E8E8] rounded-[10px] p-[15px] flex flex-col gap-[25px]">

          {/* Row 1 */}
          <div
            data-ns-animate
            data-delay="0.3"
            onMouseLeave={() => setActiveRow1(0)}
            className="flex flex-col md:flex-row gap-[25px] w-full"
          >
            {row1Cards.map((card) => {
              const isExpanded = card.id === activeRow1;
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveRow1(card.id)}
                  className={`w-full border border-slate-100 bg-[#FFFFFF] p-[20px] flex flex-col justify-between text-left h-auto min-h-[320px] md:h-[320px] rounded-[10px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden ${isExpanded ? "md:flex-[2.1_1_0%]" : "md:flex-[1_1_0%]"
                    }`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 w-full h-full">
                    {/* Left Text content - Fixed Width prevents Reflow */}
                    <div className={`flex flex-col justify-between flex-1 w-full ${isExpanded ? "md:w-[220px] md:min-w-[220px] md:max-w-[220px]" : "md:w-full md:min-w-0"}`}>
                      <div className="w-[46px] h-[46px] rounded-[8px] bg-[#004370] text-[#FFFFFF] flex items-center justify-center mb-[20px]">
                        <IconComponent className="w-[22px] h-[22px]" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Graphic content - smooth reveal */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex items-center justify-center bg-slate-50/20 border border-slate-100 rounded-xl ${isExpanded
                      ? "w-full md:w-[48%] opacity-100 p-4 min-h-[160px] md:min-h-full"
                      : "w-0 h-0 md:h-auto opacity-0 p-0 border-none"
                      }`}>
                      <img
                        src={card.graphic}
                        alt={card.title}
                        className={`max-h-[140px] md:max-h-[180px] w-auto object-contain transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "scale-100 rotate-0" : "scale-95 -rotate-2"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            data-ns-animate
            data-delay="0.4"
            onMouseLeave={() => setActiveRow2(5)}
            className="flex flex-col md:flex-row gap-[25px] w-full"
          >
            {row2Cards.map((card) => {
              const isExpanded = card.id === activeRow2;
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveRow2(card.id)}
                  className={`w-full border border-slate-100 bg-[#FFFFFF] p-[20px] flex flex-col justify-between text-left h-auto min-h-[320px] md:h-[320px] rounded-[10px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden ${isExpanded ? "md:flex-[2.1_1_0%]" : "md:flex-[1_1_0%]"
                    }`}
                >
                  <div className={`flex flex-col ${isExpanded ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-stretch gap-6 w-full h-full`}>
                    {/* Right Text content - Fixed Width prevents Reflow */}
                    <div className={`flex flex-col justify-between flex-1 w-full ${isExpanded ? "md:w-[220px] md:min-w-[220px] md:max-w-[220px]" : "md:w-full md:min-w-0"}`}>
                      <div className="w-[46px] h-[46px] rounded-[8px] bg-[#004370] text-[#FFFFFF] flex items-center justify-center mb-[20px]">
                        <IconComponent className="w-[22px] h-[22px]" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Left Graphic content - smooth reveal */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex items-center justify-center bg-slate-50/20 border border-slate-100 rounded-xl ${isExpanded
                      ? "w-full md:w-[48%] opacity-100 p-4 min-h-[160px] md:min-h-full"
                      : "w-0 h-0 md:h-auto opacity-0 p-0 border-none"
                      }`}>
                      <img
                        src={card.graphic}
                        alt={card.title}
                        className={`max-h-[140px] md:max-h-[180px] w-auto object-contain transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "scale-100 rotate-0" : "scale-95 rotate-2"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Automation;