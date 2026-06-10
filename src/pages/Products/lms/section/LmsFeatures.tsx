import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      data-ns-animate
      data-delay={delay}
      className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-[#1C1C1C]/60 hover:bg-[#252525]/80 hover:border-[#F67300]/30 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(246,115,0,0.08)]"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#292929] border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-[#F67300]/10 group-hover:border-[#F67300]/20 transition-all duration-500">
        <div className="text-white group-hover:text-[#F67300] transition-colors duration-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-[22px] font-medium text-white tracking-tight leading-tight mb-4 font-instrument-sans transition-colors duration-500">
        {title}
      </h3>
      <p className="text-zinc-400 text-[15px] sm:text-base leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

const LmsFeatures: React.FC = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Adaptive Learning Paths",
      description: "Personalized learning journeys that evolve in real time based on each learner's behavior, performance, and interaction patterns."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Personalized Learning Experience",
      description: "Deliver structured learning journeys with organized courses, assignments, and progress tracking tailored to every learner."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      title: "Real Time Progress Intelligence",
      description: "Track learner engagement, progress, and outcomes with live insights that give complete visibility across the system."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Scalable Learning Systems",
      description: "Seamlessly scale learning across teams, organizations, and global users without losing performance or control."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4M21 5H9a5 5 0 0 0-5 5M7 23l-4-4 4-4M3 19h12a5 5 0 0 0 5-5" />
        </svg>
      ),
      title: "Continuous Learning Optimization",
      description: "Improve learning outcomes through continuous feedback loops and evolving system intelligence."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      ),
      title: "Data Driven Intelligence",
      description: "Use deep analytics and insights to refine learning strategies and maximize effectiveness over time."
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 font-inter-sans overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] font-instrument-sans"
          >
            Powerful Features for <br className="hidden sm:block" /> Modern Learning Management.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`${(idx % 3) * 0.15}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LmsFeatures;
