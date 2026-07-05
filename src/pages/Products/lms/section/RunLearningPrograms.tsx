import React from 'react';

const RunLearningPrograms: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create Courses",
      description: "Build and organize courses, modules and learning content from a single platform.",
      gradientFrom: "#FFEBD9",
      gradientTo: "#9D4A00"
    },
    {
      number: "02",
      title: "Enroll Students",
      description: "Add learners to batches, manage access and track their learning journey.",
      gradientFrom: "#FBA961",
      gradientTo: "#9D4A00"
    },
    {
      number: "03",
      title: "Track Performance",
      description: "Monitor attendance, assignments and progress with real-time analytics.",
      gradientFrom: "#F67300",
      gradientTo: "#9D4A00"
    }
  ];

  return (
    <section className="relative text-[#04032E] bg-white  py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes borderFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -380;
          }
        }
        .animate-border-flow {
          animation: borderFlow 1s linear infinite;
        }
      `}} />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-[#04032E] tracking-tight leading-[1.15]  "
          >
            Everything You Need <br /> To Run Learning Programs
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 xl:gap-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-ns-animate
              data-delay={`${idx * 0.1}`}
              className="relative w-full min-h-[220px] flex items-start justify-center lg:justify-start"
            >
              {/* Left Side: Number, Glowing Box */}
              <div className="w-[120px] shrink-0 relative z-20 h-full min-h-[200px]">
                {/* Number 01 / 02 / 03 - Centered */}
                <span className="absolute left-0 w-[120px] text-center top-[30px] text-[48px] font-semibold text-[#04032E] leading-none tracking-tight select-none z-10  ">
                  {step.number}
                </span>

                {/* Left Box: 85x85 container with faint outline and rounded edges */}
                <div
                  className="absolute left-[17.5px] top-[110px] w-[85px] h-[85px] rounded-[15px] p-[10px] flex items-center justify-center z-10 bg-[#FAFAFA]  border border-[#E9ECFF]"
                >
                  {/* Inner 65x65 container enclosing the blurred orange gradient */}
                  <div className="w-[65px] h-[65px] rounded-[10px] overflow-hidden flex items-center justify-center">
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`,
                        filter: 'blur(10px)'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: The Card (280x135 px) */}
              <div className="flex-1 max-w-[280px] mt-5 relative z-10">
                {/* Shadow Outline Card */}
                <div className="absolute -left-[50px] top-[20px] w-[280px] h-[135px] pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" fill="none">
                    <defs>
                      <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={step.gradientFrom} stopOpacity="0.8" />
                        <stop offset="50%" stopColor={step.gradientFrom} stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.05)" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Fills the inside of the shadow card to block background */}
                    <rect x="0.75" y="0.75" width="278.5" height="133.5" rx="14.25" fill="#FFFFFF" />

                    {/* Static outline gradient */}
                    <rect
                      x="0.75"
                      y="0.75"
                      width="278.5"
                      height="133.5"
                      rx="14.25"
                      stroke={`url(#grad-${idx})`}
                      strokeWidth="1.5"
                    />

                    {/* Animated running glow border */}
                    <rect
                      x="0.75"
                      y="0.75"
                      width="278.5"
                      height="133.5"
                      rx="14.25"
                      stroke={step.gradientFrom}
                      strokeWidth="1.5"
                      strokeDasharray="80 300"
                      className="animate-border-flow"
                      style={{
                        filter: `drop-shadow(0 0 5px ${step.gradientFrom})`
                      }}
                    />
                  </svg>
                </div>

                {/* Main Content Card */}
                <div
                  className="relative z-10 bg-white/80 border border-[#E9ECFF] rounded-[15px] p-[15px] hover:bg-gray-50/90 hover:border-[#F67300]/30 transition-all duration-300 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] w-[280px] h-[135px] flex flex-col justify-center gap-[15px]"
                  style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  <h3 className="text-lg font-semibold text-[#04032E]   leading-none">
                    {step.title}
                  </h3>
                  <p className="text-[#5A5A5C] text-[13px] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RunLearningPrograms;
