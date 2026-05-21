import React from "react";
import BlogCtaImg from "../../../../assets/images/Resourses/blog-cta-code.png";

const BlogCTA: React.FC = () => {
  return (
    <section className="relative pt-24 mb-15 overflow-hidden">
      
      <div className="absolute inset-0 bg-linear-to-b  from-[#161616] via-[#7C4817] to-[#161616] " />

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
      
        <p className="text-xl font-medium text-white mb-7.5">
          Trusted by hundreds of thousands of professional developers
        </p>

    
        <h2 className="text-4xl max-w-190 md:text-8xl font-medium mb-12.5 leading-24 mx-auto">
          Download Warp  to get started
        </h2>

      
        <button
          className="inline-flex items-center justify-center text-[40px] font-medium text-white px-20 py-3 rounded-md bg-white/20 backdrop-blur-xl border border-white/30  transition-all duration-300 ease-out hover:bg-white/30 hover:shadow-[0_4px_12px_rgba(255,255,255,0.10)] active:scale-95">
          Download
        </button>

      </div>

      
      <div className="relative  mt-2.5 max-w-6xl mx-auto ">
        <img
          src={BlogCtaImg}
          alt="Blog Cta code"
          className="w-full"
        />

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 
  bg-linear-to-t from-[#161616] to-transparent" />
      </div>

    </section>
  );
};

export default BlogCTA;
