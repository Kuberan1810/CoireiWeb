import React, { useState, useEffect, useRef } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
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
      setIsTyping(false);
    }
  }, [displayedText, isTyping, text]);

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
  const services = [
    "AI Solutions & Integrations",
    "Enterprise Applications & SaaS",
    "Web & Mobile Products",
    "CRM & ERP Platforms",
    "Business Automation Systems",
    "Custom Enterprise Platforms"
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 data-ns-animate className="text-5xl md:text-6xl font-medium text-black mb-12">
        Build With Coirei
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
            
            <TypewriterText text="A multidisciplinary team designs and builds intelligent technology solutions tailored to your business — beyond our own products." />
            
            <div className="flex flex-wrap gap-3">
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
            <div 
              key={index} 
              className={`py-5 ${index !== services.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <span className="text-[#5B6280] text-sm md:text-base font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildWithCoirei;