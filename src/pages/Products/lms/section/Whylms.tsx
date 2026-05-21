import React from 'react';
import whylmsimg from '../../../../assets/images/products/whylms.png';

const WhyLms: React.FC = () => {
  return (
    /* Root section: pt-32 adds enough breathable space at the top */
    <section className="px-6 sm:px-10 md:px-15 py-16 md:py-10">
      <div className="">
        
        {/* 1. Pill Badge - Specifications from Figma */}
        {/* Width: Hug (179px), Height: Hug (58px), Radius: 70px, Padding: 5px 20px */}
        <div className="flex flex-col justify-center items-center mb-14 md:mb-22 text-center">
          <p 
            data-ns-animate 
            data-offset="80" 
            className="backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base text-[#959493] mb-5"
          >
                        Why LMS Exist?
          </p>

           <h2 
            data-ns-animate 
            data-offset="80" 
            className="leading-tight text-[#E3E3E0] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] max-w-5xl"
          >
          Learning should adopt. <br />
          
          Not Stay static
        </h2>
        </div>

        {/* 2. GAP: Exact 80px between Pill Badge and Heading */}
       

        {/* 3. GAP: Exact 100px between Heading and Content Grid */}
        <div className="">
          {/* Container: Fixed 1372px width simulated, Gap 180px */}
          <div className="flex lg:flex-row flex-col ] gap-18 w-full justify-center">
            
            {/* Left: Dashboard Preview */}
            <div 
              data-ns-animate
              data-offset="80"
              data-direction="right"
              className="w-full"
            >
              <img 
                src={whylmsimg} 
                alt="Analytics Dashboard" 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Right: Feature List - Top padding aligned with image top */}
            <div className="flex flex-col pt-2 w-full">
              <h3 
                data-ns-animate
                data-offset="80"
                className="text-[40px] text-white md:text-[50px] lg:text-[56px] font-medium tracking-tight leading-[1.1] mb-8 "
              >
                Learning breaks <br /> When:
              </h3>
              
              <ul className="space-y-6 ">
                {[
                  "Training is the same for every learner",
                  "Progress is not tracked in real time",
                  "Content is not structured effectively",
                  "Insights are delayed or unavailable"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    data-ns-animate
                    data-offset="80"
                    data-delay={0.1 * index}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <p className="text-zinc-400 text-[18px] md:text-[19px] font-light">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLms;