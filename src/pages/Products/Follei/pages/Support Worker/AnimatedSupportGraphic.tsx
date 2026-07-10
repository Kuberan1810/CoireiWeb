import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageSquareText } from 'lucide-react';
import staticbgglobal from '../../../../../assets/images/products/staticbgglobal.svg';
import logo from '../../../../../assets/images/products/folleinew.svg';

const AnimatedSupportGraphic: React.FC = () => {
    // Layout grid: 500 x 343 virtual canvas (matches the reference crop)
    const centerPoint = { x: 250, y: 300 };

    const pfpNodes = [
        { id: 1, x: 130, y: 210, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces', ring: '#5B5FD9', side: 'left' as const },
        { id: 2, x: 167, y: 175, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces', ring: '#F4BCAE', side: 'left' as const },
        { id: 3, x: 333, y: 175, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces', ring: '#5B5FD9', side: 'right' as const },
        { id: 4, x: 370, y: 210, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces', ring: '#0A0E29', side: 'right' as const },
    ];

    const nodeOuterRadius = 21; // outer ring radius on the 500x343 grid

    // Builds a single straight radial line connecting the PFP node directly to the central logo
    const buildConnector = (node: typeof pfpNodes[number]) => {
        const start = { x: node.x, y: node.y + nodeOuterRadius };
        const dx = centerPoint.x - start.x;
        const dy = centerPoint.y - start.y;
        const dist = Math.hypot(dx, dy);

        // Terminate the line at the edge of the center logo (approx 45px radius)
        const end = {
            x: centerPoint.x - (dx / dist) * 45,
            y: centerPoint.y - (dy / dist) * 45
        };

        const d = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
        const length = Math.hypot(end.x - start.x, end.y - start.y);

        return { d, length };
    };

    return (
        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden flex items-center justify-center shadow-lg bg-[#27303E]">
            <img
                src={staticbgglobal}
                alt="Mountain Backdrop"
                className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
            />

            <div className="relative z-10 w-[90%] h-[80%] bg-white rounded-[24px] shadow-2xl overflow-hidden flex items-center justify-center">

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 343" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#E8EEF2" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#E8EEF2" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {[150, 115, 82].map((r, i) => (
                        <circle
                            key={`radar-${i}`}
                            cx={centerPoint.x}
                            cy={centerPoint.y}
                            r={r}
                            fill="none"
                            stroke="#E8EEF2"
                            strokeWidth="1"
                        />
                    ))}
                    <circle cx={centerPoint.x} cy={centerPoint.y} r={100} fill="url(#logoGlow)" />

                    {pfpNodes.map((node, index) => {
                        const { d, length } = buildConnector(node);
                        return (
                            <g key={`group-${node.id}`}>
                                <path d={d} fill="none" stroke="#E8EEF2" strokeWidth="1.5" strokeDasharray="3 4" />

                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke="#C7CEE8"
                                    strokeWidth="1.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.4 + index * 0.25, ease: 'easeInOut' }}
                                />

                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke="#5B5FD9"
                                    strokeWidth="2"
                                    strokeDasharray="1 14"
                                    strokeLinecap="round"
                                    initial={{ opacity: 0 }}
                                    animate={{ strokeDashoffset: [0, -length], opacity: [0, 1, 1, 0] }}
                                    transition={{
                                        strokeDashoffset: { duration: 4, ease: 'linear', repeat: Infinity },
                                        opacity: { duration: 5, repeat: Infinity, repeatDelay: 1.5, delay: 1.6 + index * 0.4 },
                                    }}
                                />
                            </g>
                        );
                    })}
                </svg>

                <motion.div
                    className="absolute w-[72px] h-[72px] bg-white rounded-full border-[4px] border-white flex items-center justify-center z-20"
                    style={{ left: `${(centerPoint.x / 500) * 100}%`, top: `${(centerPoint.y / 343) * 100}%`, marginLeft: '-36px', marginTop: '-36px' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                >
                    <div className="w-full h-full rounded-full border border-gray-100 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F8FA] to-white">
                        <img src={logo} alt="Follei Logo" className="w-[60%] h-[60%] object-contain" />
                    </div>
                </motion.div>

                {pfpNodes.map((node, index) => (
                    <motion.div
                        key={`pfp-${node.id}`}
                        className="absolute flex items-center justify-center z-20"
                        style={{
                            left: `${(node.x / 500) * 100}%`,
                            top: `${(node.y / 343) * 100}%`,
                            marginLeft: '-21px',
                            marginTop: '-21px',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', delay: 0.8 + index * 0.2, bounce: 0.4 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <div
                            className="absolute w-[42px] h-[42px] rounded-full border-[2px]"
                            style={{ borderColor: node.ring }}
                        />
                        <div className="relative z-10 w-[32px] h-[32px] rounded-full overflow-hidden shadow-md bg-white">
                            <img src={node.img} alt={`Support Worker ${node.id}`} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className="absolute top-[6%] left-[5%] bg-white shadow-[0_8px_25px_rgb(0,0,0,0.08)] rounded-[14px] p-2 flex items-center justify-center border border-gray-100 z-30"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="w-9 h-9 rounded-lg bg-[#EEF0FC] text-[#5B5FD9] flex items-center justify-center"
                        animate={{ rotate: [0, -16, 13, -10, 7, -4, 0] }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 2.4, repeat: Infinity, repeatDelay: 2.4 }}
                        style={{ transformOrigin: '50% 15%' }}
                    >
                        <Bell size={18} strokeWidth={2.5} />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute top-[6%] right-[5%] bg-white shadow-[0_8px_25px_rgb(0,0,0,0.08)] rounded-[14px] p-2 flex items-center gap-2.5 border border-gray-100 z-30"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-9 h-9 rounded-lg bg-[#EEF0FC] text-[#5B5FD9] flex items-center justify-center">
                        <MessageSquareText size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <motion.div
                            className="h-2 w-14 rounded-full"
                            style={{ backgroundColor: '#E7E9EF' }}
                            animate={{
                                backgroundColor: ['#E7E9EF', '#E7E9EF', '#F4CFC4'],
                                opacity: [0.5, 1, 0.5, 1, 0.5, 1],
                            }}
                            transition={{
                                backgroundColor: { duration: 1.6, times: [0, 0.7, 1], delay: 2.2 },
                                opacity: { duration: 0.5, repeat: 3, repeatType: 'mirror', delay: 2.2 },
                            }}
                        />
                        <motion.div
                            className="h-2 w-8 rounded-full"
                            style={{ backgroundColor: '#E7E9EF' }}
                            animate={{
                                backgroundColor: ['#E7E9EF', '#E7E9EF', '#F8E4DD'],
                                opacity: [0.5, 1, 0.5, 1, 0.5, 1],
                            }}
                            transition={{
                                backgroundColor: { duration: 1.6, times: [0, 0.7, 1], delay: 2.35 },
                                opacity: { duration: 0.5, repeat: 3, repeatType: 'mirror', delay: 2.35 },
                            }}
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedSupportGraphic;