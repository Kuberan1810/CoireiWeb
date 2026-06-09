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
    <section className="relative text-white bg-[#161616] py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] font-instrument-sans"
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
                <span className="absolute left-0 w-[120px] text-center top-[30px] text-[48px] font-semibold text-white leading-none tracking-tight select-none z-10 font-instrument-sans">
                  {step.number}
                </span>

                {/* Left Box: 85x85 container with faint outline and rounded edges */}
                <div 
                  className="absolute left-[17.5px] top-[110px] w-[85px] h-[85px] rounded-[15px] p-[10px] flex items-center justify-center z-10 bg-[#161616] border border-white/5"
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
                <div 
                  className="absolute -left-[50px] top-[20px] w-full h-full rounded-[15px] pointer-events-none z-0 p-[1.5px]"
                  style={{ background: `linear-gradient(135deg, ${step.gradientFrom} 0%, rgba(255,255,255,0.05) 100%)` }}
                >
                  <div className="w-full h-full bg-[#161616] rounded-[14px]" />
                </div>

                {/* Main Content Card */}
                <div 
                  className="relative z-10 bg-[#1E1E1E]/80 border border-white/5 rounded-[15px] p-[15px] hover:bg-[#252525]/90 hover:border-white/10 transition-all duration-300 shadow-xl w-[280px] h-[135px] flex flex-col justify-center gap-[15px]"
                  style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  <h3 className="text-lg font-semibold text-white font-instrument-sans leading-none">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-[13px] leading-relaxed font-light">
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
