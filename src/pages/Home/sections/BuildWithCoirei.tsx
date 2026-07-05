import  { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TypewriterHeading from '../../../component/TypewriterHeading';

const TypewriterText = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && displayedText.length === 0) {
          setIsTyping(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [isTyping, displayedText.length]);

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 2));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === text.length) {
      if (isTyping) {
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }
  }, [displayedText, isTyping, text, onComplete]);

  return (
    <p 
      ref={containerRef}
      style={{
        fontFamily: "'Cascadia Code', monospace",
        fontWeight: 350,
        fontSize: '16px',
        lineHeight: '35px',
        color: '#000000',
        minHeight: '105px' // To prevent layout shift while typing
      }}
      className="mb-8"
    >
      {displayedText}
      <span className={`inline-block w-2 h-4 ml-1 bg-black ${!isTyping && displayedText.length === text.length ? 'animate-pulse' : ''}`}></span>
    </p>
  );
};

const BuildWithCoirei = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const services = [
    { name: "AI Solutions & Integrations", path: "/services/ai-chatbot-development" },
    { name: "Enterprise Applications & SaaS", path: "/services/custom-business-application-development" },
    { name: "Web & Mobile Products", path: "/services/custom-web-platform-development" },
    { name: "CRM & ERP Platforms", path: "/services/process-automation-system-integration" },
    { name: "Business Automation Systems", path: "/services/process-automation-system-integration" },
    { name: "Custom Enterprise Platforms", path: "/services" }
  ];

  return (
    <section className="GlobalPadding">
      <h2 data-ns-animate className="text-5xl md:text-[52px] font-semibold text-black mb-15 min-h-[82px]">
                <TypewriterHeading text="Build With Coirei" />
            </h2>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-center">
        {/* Left Card */}
        <div data-ns-animate data-delay="0.1" className="w-full lg:w-[60%] bg-[#F7F7F3] p-8 md:p-12 rounded-[20px]">
          <div 
            className="mb-10 font-semibold"
            style={{ 
              fontFamily: "'Cascadia Code', monospace", 
              fontSize: '24px', 
              lineHeight: '58px', 
              color: '#585858' 
            }}
          >
            Our engineering partner, from <br />
            <span className="bg-[#F48120] text-gray-800 px-2 py-1">
              concept to deployment.
            </span>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <TypewriterText 
              text="A multidisciplinary team designs and builds intelligent technology solutions tailored to your business — beyond our own products." 
              onComplete={() => setIsTypingDone(true)}
            />
            
            <div className={`flex flex-wrap gap-3 transition-all duration-700 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {['AI Engineers', 'Product Architects', 'Cloud & DevOps', 'UI/UX Designers'].map((badge) => (
                <span key={badge} className="font-mono text-xs text-[#5B6280] px-3 py-1.5 border border-[#DEE3EE] rounded">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right List */}
        <div data-ns-animate data-delay="0.2" className="w-full lg:w-[40%] flex flex-col">
          {services.map((service, index) => (
            <Link 
              to={service.path}
              key={index} 
              className={`px-2 py-5 border-b border-[#EEF1F6] flex justify-between items-center group hover:border-[#51566C50] transition-colors duration-300 hover:bg-gray-50 `}
            >
              <span className="text-[#5B6280] text-sm md:text-base font-medium group-hover:font-medium group-hover:text-[#51566C] transition-colors duration-300">{service.name}</span>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-[#6e6e6e] transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildWithCoirei;