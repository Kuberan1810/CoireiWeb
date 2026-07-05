

import React from 'react';
import LmsHeroimg from '../../../../assets/images/products/lmshero.png';
import { useNavigate } from 'react-router-dom';

const LmsHero: React.FC = () => {
  const navigate = useNavigate();
  return (

    /* font-inter-sans applied for the whole section to match typography */
    <section className="mt-28 sm:mt-36 lg:mt-40 mb-10 md:mb-20 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">


      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-12  justify-between items-center" >

          {/* Left Content Alignment */}
          {/* LEFT COLUMN: Fixed Alignment to match Navbar Logo */}
          <div className="flex flex-col items-start text-left flex-1 w-full md:w-1/2">
            <div className="mb-8 md:mb-10 w-full">
              {/* Badge */}
              <p
                data-ns-animate
                data-offset="80"
                className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit text-sm sm:text-base text-[#959493] mb-6 md:mb-8"
              >
                Coirei LMS
              </p>

              {/* H1: Exact Figma Specs Applied */}
              <h1
                data-ns-animate
                data-offset="80"
                data-delay="0.1"
                className="flex flex-col text-[24px] md:text-[38px] lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] md:leading-[1.1] mb-6 md:mb-10  "
              >
                <span className="max-w-2xl">Scalable Learning Infrastructure for Modern Institutes</span>
              </h1>

              {/* Description: Width adjusted for better visual balance */}
              <p
                data-ns-animate
                data-offset="80"
                data-delay="0.2"
                className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-zinc-400 leading-relaxed font-light max-w-3xl"
              >
                Coirei LMS is a powerful learning management system that helps institutes and training providers deliver structured and scalable learning experiences. Manage courses, track performance, and improve learning outcomes all in one platform.
              </p>
            </div>

            {/* Buttons */}
            <div
              data-ns-animate
              data-offset="80"
              data-delay="0.3"
              className="flex flex-col sm:flex-row gap-3 sm:gap-[10px] mt-2 md:mt-8 w-full"
            >
              {/* Primary Button */}
              <button
                onClick={() => navigate('/contactsales')}
                className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer text-[14px] sm:text-base w-full sm:w-auto text-center flex items-center justify-center"
              >
                Request Early Access
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => navigate('/contact-sales')}
                className="text-white py-2.5 px-4 bg-[#292929] rounded font-semibold border border-white/10 hover:bg-white hover:text-[#292929] transition-all duration-500 ease-out cursor-pointer text-[14px] sm:text-base w-full sm:w-auto text-center flex items-center justify-center"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right Media Section - Aligned with the top of text */}
          <div
            data-ns-animate
            data-offset="80"
            data-delay="0.4"
            data-direction="left"
            className="pt-8 md:pt-4 flex flex-1 w-full md:w-1/2 items-center justify-center"
          >
            <div className="w-full rounded-3xl flex items-center justify-center">
              <img
                src={LmsHeroimg}
                alt="Intelligent Infrastructure"
                className="h-auto w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Slogan Section with specific margin gap */}
        <div
          data-ns-animate
          data-offset="80"
          className="mt-[60px] md:mt-[80px] w-full flex justify-center"
        >
          <p className="text-zinc-100 text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-medium tracking-tight text-center leading-tight">
            Learn faster. Organize better. Scale without limits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LmsHero;