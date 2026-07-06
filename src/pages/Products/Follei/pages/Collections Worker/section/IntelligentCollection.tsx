import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Monitor",
    description: "Track invoices, due dates, and customer payment activity in real time."
  },
  {
    id: "02",
    title: "Engage",
    description: "Send personalized reminders through intelligent, multi-channel communication."
  },
  {
    id: "03",
    title: "Recover",
    description: "Recover payments faster with AI-driven follow-ups and customer-friendly interactions."
  },
  {
    id: "04",
    title: "Optimize",
    description: "Continuously improve collection performance using payment intelligence and recovery insights."
  }
];

const IntelligentCollection = () => {
  return (
    <section className="w-full GlobalPadding flex flex-col items-center bg-white relative">

      {/* Badge */}
      <div data-ns-animate="true" data-delay="0.1" className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#004370] rounded-[10px] text-[#04032E] font-medium text-[12px] sm:text-[14px] mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]"></span>
        Intelligent Collection
      </div>

      {/* Title */}
      <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-3xl sm:text-[60px] md:text-5xl font-medium text-center mb-6 max-w-4xl leading-tight">
        Every Payment Journey Ends <br />
        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">With Revenue Recovered</span>
      </h2>

      {/* Subtitle */}
      <p data-ns-animate="true" data-delay="0.3" className="text-[#6E6E6E] text-sm sm:text-[16px] text-center max-w-3xl mb-16 leading-relaxed">
        Follei intelligently manages every stage of the collections lifecycle—from invoice monitoring to successful payment recovery—helping businesses improve cash flow while maintaining trusted customer relationships.
      </p>

      {/* Cards Grid */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-ns-animate="true"
            data-delay={0.4 + index * 0.1}
            className="group relative h-[360px] p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border-[0.5px] border-[#004370]/20 overflow-hidden bg-white hover:bg-[#004370] hover:border-transparent hover:shadow-md"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start w-full">
              <span className="text-[120px] leading-none tracking-tighter transition-colors duration-300 text-[#004370] group-hover:text-white">
                {step.id}
              </span>
              <ArrowUpRight
                size={24}
                strokeWidth={1.5}
                className="transition-colors duration-300 text-[#004370] group-hover:text-white"
              />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col">
              <h3 className="text-[18px] transition-colors duration-300 text-[#000000] group-hover:text-white">
                {step.title}
              </h3>
              <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 mt-0 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-3">
                <p className="text-[16px] leading-relaxed text-white/90">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default IntelligentCollection;