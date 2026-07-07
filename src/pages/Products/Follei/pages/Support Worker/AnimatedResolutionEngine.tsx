import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Users, UserCheck } from 'lucide-react';
import { ComposedChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import staticbgglobal from '../../../../../assets/images/products/staticbgglobal.svg';

const AnimatedCounter = ({ value, inView }: { value: number; inView: boolean }) => {
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [spring, value, inView]);

  return <motion.span>{display}</motion.span>;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#111827] text-white text-xs font-medium py-2 px-3 rounded shadow-lg flex flex-col gap-1 pointer-events-none">
        <div className="font-bold border-b border-gray-600 pb-1 mb-1">{data.month}</div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-gray-300">Follei Predicts:</span>
          <span>{data.follei}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-gray-300">Actual Renewal:</span>
          <span>{data.actual}</span>
        </div>
      </div>
    );
  }
  return null;
};

const OverlayBars = (props: any) => {
  const { x, y, width, height, payload, inView } = props;
  const outerWidth = Math.min(width, 32);
  const innerWidth = Math.min(width * 0.625, 20);
  const offsetXOuter = (width - outerWidth) / 2;
  const offsetXInner = (width - innerWidth) / 2;

  const actualRatio = payload.actual / payload.follei;
  const innerHeight = height * actualRatio;
  const innerY = y + (height - innerHeight);

  return (
    <g>
      <motion.rect
        x={x + offsetXOuter}
        width={outerWidth}
        initial={{ height: 0, y: y + height }}
        animate={inView ? { height: height, y: y } : { height: 0, y: y + height }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        fill="#014370"
        rx={6}
        className="transition-opacity duration-200 hover:opacity-80"
      />
      <motion.rect
        x={x + offsetXInner}
        width={innerWidth}
        initial={{ height: 0, y: y + height }}
        animate={inView ? { height: innerHeight, y: innerY } : { height: 0, y: y + height }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        fill="#99B4C6"
        rx={4}
        className="transition-opacity duration-200 hover:opacity-80"
      />
    </g>
  );
};

const chartData = [
    { month: 'Feb', follei: 45, actual: 30 },
    { month: 'Mar', follei: 80, actual: 60 },
    { month: 'Apr', follei: 100, actual: 85 },
    { month: 'May', follei: 60, actual: 40 },
    { month: 'June', follei: 75, actual: 60 },
    { month: 'July', follei: 70, actual: 55 },
    { month: 'August', follei: 55, actual: 40 },
];

const AnimatedResolutionEngine: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="relative w-full h-full min-h-[250px] rounded-[16px] overflow-hidden flex items-center justify-center border border-gray-100">
            {/* Background */}
            <img 
                src={staticbgglobal} 
                alt="Backdrop" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay similar to the screenshot */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Content Container */}
            {/* Added mt-6 to the container to give space for the overlapping icons */}
            <div className="relative z-10 w-full px-5 flex items-center justify-between gap-4 h-[75%] mt-4">
                
                {/* Left Card: Total Leads */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-md rounded-[16px] px-5 pb-5 pt-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center justify-center flex-1 h-[90%] min-w-[140px] relative overflow-visible"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center">
                        <Users size={20} className="text-[#014370]" />
                    </div>
                    <span className="text-[13px] text-[#64748B] font-bold mb-1">Total leads</span>
                    <div className="text-[32px] font-bold text-[#6693B1] leading-none mb-3 font-urbanist">
                        <AnimatedCounter value={1284} inView={inView} />
                    </div>
                    <div className="text-[#10B981] text-[11px] font-medium flex items-center gap-1">
                        <span>↑ 12% vs yesterday</span>
                    </div>
                </motion.div>

                {/* Center Chart Card */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/95 backdrop-blur-md rounded-[16px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex-[1.5] h-full flex flex-col"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[13px] font-semibold text-[#0D1C2E]">Renewal Prediction</span>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#014370]" />
                                <span className="text-[9px] text-[#64748B] font-medium">Follei Predicts</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#99B4C6]" />
                                <span className="text-[9px] text-[#64748B] font-medium">Actual Renewal</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                <XAxis 
                                    dataKey="month" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#64748B', fontSize: 10, fontWeight: 500 }}
                                    dy={5}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={false} />
                                <Bar dataKey="follei" shape={(props: any) => <OverlayBars {...props} inView={inView} />} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Right Card: Converted */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/95 backdrop-blur-md rounded-[16px] px-5 pb-5 pt-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center justify-center flex-1 h-[90%] min-w-[140px] relative overflow-visible"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center">
                        <UserCheck size={20} className="text-[#014370]" />
                    </div>
                    <span className="text-[13px] text-[#64748B] font-bold mb-1">Converted</span>
                    <div className="text-[32px] font-bold text-[#6693B1] leading-none mb-3 font-urbanist">
                        <AnimatedCounter value={58} inView={inView} />
                    </div>
                    <div className="text-[#10B981] text-[11px] font-medium flex items-center gap-1">
                        <span>↑ 4% vs last week</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedResolutionEngine;
