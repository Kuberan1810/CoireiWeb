const JoinUs = () => {
  return (
    <section className="w-full bg-white pt-0 pb-24 md:pt-0 md:pb-32 px-6 flex flex-col items-center justify-center relative z-10">
      
      {/* Pill */}
      <div 
        data-ns-animate="true" 
        className="border border-gray-200 rounded-full px-[20px] py-[10px] mb-8 bg-white inline-flex items-center justify-center" 
        style={{ boxShadow: '0px 3px 2.3px 0px rgba(0, 0, 0, 0.25)' }}
      >
        <span className="text-[#04032E] text-[14px] font-medium leading-none">Join Coirei</span>
      </div>

      {/* Heading */}
      <h2 
        data-ns-animate="true" 
        data-delay="0.1" 
        className="text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.2] tracking-tight max-w-[900px] mb-6 text-[#04032E] text-center"
      >
        Build the <span className="text-[#F67300]">Future</span> With Us
      </h2>

      {/* Paragraph */}
      <p 
        data-ns-animate="true" 
        data-delay="0.2" 
        className="text-[#666666] text-lg md:text-[18px] leading-relaxed max-w-[700px] text-center mb-10"
      >
        Join a team of innovators building AI-powered products, solving real-world challenges, and creating technology that makes a lasting impact.
      </p>

      {/* Button */}
      <div data-ns-animate="true" data-delay="0.3">
        <button className="bg-[#111111] hover:bg-[#222222] text-white px-8 py-3.5 md:py-4 rounded-lg font-medium transition-colors">
          Join Our Team
        </button>
      </div>

    </section>
  );
};

export default JoinUs;
