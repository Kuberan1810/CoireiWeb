import React from 'react';
import LMSdashboard from '../../../../assets/images/products/LMSdashboard.svg';
import bgcurveee from '../../../../assets/images/products/bgcurveee.png';
import { useNavigate } from 'react-router-dom';

const IntelligentLearning: React.FC = () => {
   const navigate = useNavigate();
  return (
    <section className="relative pt-24 pb-10 md:pb-20 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 font-inter-sans overflow-hidden bg-transparent">
      {/* Glow Animation Style Block */}
      <style>{`
        @keyframes glow-flow {
          0%, 100% {
            opacity: var(--base-opacity);
            filter: drop-shadow(0 0 1px rgba(246, 115, 0, 0.2));
            background-color: #F67300;
          }
          15% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(246, 115, 0, 0.9)) brightness(1.2);
            background-color: #FFA133;
          }
          30%, 95% {
            opacity: var(--base-opacity);
            filter: drop-shadow(0 0 1px rgba(246, 115, 0, 0.2));
            background-color: #F67300;
          }
        }
        .animate-glow-dash {
          animation: glow-flow 3.5s infinite ease-in-out;
        }
      `}</style>

      {/* Background Curve Image */}
      <img 
        src={bgcurveee} 
        alt="Background Curve" 
        className="absolute top-0 right-70 w-[70%] md:w-[60%] h-auto pointer-events-none -z-10 opacity-90 object-contain" 
      />

      <div className="w-full flex flex-col items-center justify-center relative z-10 max-w-7xl mx-auto">
        
        {/* Top Text Content with Corner Brackets */}
        <div className="relative text-center max-w-4xl mb-8 flex flex-col items-center z-10 pt-10">
          {/* Top Left Corner Bracket */}
          <div className="absolute top-2 -left-12 w-10 h-10 border-t border-l border-[#F66F00] opacity-60 hidden md:block"></div>
          
          <h2
            data-ns-animate
            className="text-[36px] md:text-[50px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.2] mb-6 font-instrument-sans"
          >
            Intelligent Learning <br className="hidden md:block"/> Infrastructure
          </h2>
          
          <p
            data-ns-animate
            data-delay="0.1"
            className="text-[16px] sm:text-[17px] text-zinc-300/80 leading-relaxed max-w-[700px] mb-10"
          >
            Coirei LMS is an AI-powered learning system that adapts, tracks, and evolves with every learner — delivering personalized experiences at scale.
          </p>

          <div 
            data-ns-animate
            data-delay="0.2"
            className="flex flex-wrap items-center justify-center gap-4 relative w-full"
          >
             <button
                onClick={() => navigate('/contactsales')}
                className="bg-[#F66F00] text-white py-2.5 px-8 rounded hover:bg-[#d55e00] transition-colors font-medium text-[15px]"
              >
                Get Start
              </button>
              <button
                onClick={() => navigate('/contact-sales')}
                className="bg-[#292929] border border-white/10 hover:border-white/20 text-[#F66F00] py-2.5 px-8 rounded transition-colors font-medium text-[15px]"
              >
                Contact us
              </button>

              {/* Bottom Right Corner Bracket (Positioned relative to buttons/text block) */}
              <div className="absolute -bottom-6 -right-16 w-10 h-10 border-b border-r border-[#F66F00] opacity-60 hidden md:block"></div>
          </div>
        </div>

        {/* Badges Container - Absolutely positioned relative to the full hero content area */}
        <div className="relative w-full h-[60px] mt-8 mb-20 hidden md:block">
          {/* Left Badge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-[#292929] border border-white/10 px-5 py-3 rounded z-20 shadow-lg w-[230px] justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <span className="text-[#F66F00] text-[15px] font-medium">All-in-One LMS</span>
          </div>

          {/* Right Badge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-[#292929] border border-white/10 px-5 py-3 rounded z-20 shadow-lg w-[230px] justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            <span className="text-[#F66F00] text-[15px] font-medium">Real-Time Analytics</span>
          </div>
        </div>

        {/* Dashboard Image & Dashed Lines container */}
        <div className="relative w-full  flex justify-center">
          {/* Top Left Corner Dashed Lines */}
          <div className="absolute left-[-40px] top-0 flex flex-col gap-[14px] hidden md:flex z-0">
             {[0, 1, 2, 3].map((idx) => (
               <div 
                 key={idx} 
                 className="w-[5px] h-[51px] rounded-[5px] animate-glow-dash" 
                 style={{
                   '--base-opacity': 1 - idx * 0.25,
                   animationDelay: `${(3 - idx) * 0.2}s`
                 } as React.CSSProperties}
               />
             ))}
          </div>

          {/* Bottom Left Corner Dashed Lines */}
          <div className="absolute left-[-40px] bottom-0 flex flex-col gap-[14px] hidden md:flex z-0">
             {[0, 1, 2, 3].map((idx) => (
               <div 
                 key={idx} 
                 className="w-[5px] h-[51px] rounded-[5px] animate-glow-dash" 
                 style={{ 
                   '--base-opacity': 0.25 + idx * 0.25,
                   animationDelay: `${(3 - idx) * 0.2}s`
                 } as React.CSSProperties}
               />
             ))}
          </div>

          {/* Top Right Corner Dashed Lines */}
          <div className="absolute right-[-40px] top-0 flex flex-col gap-[14px] hidden md:flex z-0">
             {[0, 1, 2, 3].map((idx) => (
               <div 
                 key={idx} 
                 className="w-[5px] h-[51px] rounded-[5px] animate-glow-dash" 
                 style={{ 
                   '--base-opacity': 1 - idx * 0.25,
                   animationDelay: `${(3 - idx) * 0.2}s`
                 } as React.CSSProperties}
               />
             ))}
          </div>

          {/* Bottom Right Corner Dashed Lines */}
          <div className="absolute right-[-40px] bottom-0 flex flex-col gap-[14px] hidden md:flex z-0">
             {[0, 1, 2, 3].map((idx) => (
               <div 
                 key={idx} 
                 className="w-[5px] h-[51px] rounded-[5px] animate-glow-dash" 
                 style={{ 
                   '--base-opacity': 0.25 + idx * 0.25,
                   animationDelay: `${(3 - idx) * 0.2}s`
                 } as React.CSSProperties}
               />
             ))}
          </div>

          {/* Dashboard Image */}
          <div className="rounded-2xl border border-white/10 p-1.5 bg-[#1C1C1C] relative z-10 w-full overflow-hidden shadow-2xl shadow-black/80">
             <div className="rounded-xl overflow-hidden border border-white/5 bg-[#141414]">
                  <img src={LMSdashboard} alt="Intelligent Learning Infrastructure Dashboard" className="w-full h-auto object-cover opacity-90" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentLearning;
