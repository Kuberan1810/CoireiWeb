import React from 'react';
import overlay1Img from '../../../../../../assets/images/products/overlay1.svg';

const FirstResponse: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-15 pt-20 md:pt-32 pb-8 md:pb-12 flex justify-center bg-white relative overflow-hidden">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Premium Capsule Badge */}
          <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider relative shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>First Response</span>
            </div>
          </div>

          {/* Heading */}
          <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-4xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6">
            Every Conversation Starts{" "}
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              With The Right Response
            </span>
          </h2>

          {/* Description */}
          <p
            data-ns-animate="true"
            data-delay="0.3"
            style={{
              fontSize: '20px',
              letterSpacing: '0px',
              lineHeight: '28px',
              color: '#5A5A5C'
            }}
            className="font-normal max-w-xl"
          >
            Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context—ensuring no lead is ever left waiting.
          </p>
        </div>

        {/* Right Column: Graphic Display */}
        <div data-ns-animate="true" data-delay="0.4" data-direction="left" className="lg:col-span-6 flex items-center justify-center lg:justify-end relative">
          <div className="w-full max-w-[720px] relative group bg-transparent">
            <img
              src={overlay1Img}
              alt="First Response Interaction Overlay"
              className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstResponse;
