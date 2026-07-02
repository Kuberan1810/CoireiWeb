

import callIcon from '../../../..//assets/images/products/integration/call.png';
import gmailIcon from '../../../..//assets/images/products/integration/gmail.png';
import whatsappIcon from '../../../..//assets/images/products/integration/whatsapp.png';
import documentIcon from '../../../..//assets/images/products/integration/document.png';
import filesIcon from '../../../..//assets/images/products/integration/files.png';
import recordIcon from '../../../..//assets/images/products/integration/record.png';
import folleiIcon from '../../../..//assets/images/products/integration/follei.png';
import robot2Icon from '../../../..//assets/images/products/integration/robot-2.png';
import callOutIcon from '../../../..//assets/images/products/integration/call-out.png';
import httpsIcon from '../../../..//assets/images/products/integration/https.png';
import chatIcon from '../../../..//assets/images/products/integration/chat.png';
import robotIcon from '../../../..//assets/images/products/integration/robot.png';
import rectangleIcon from '../../../..//assets/images/products/integration/Rectangle.png';



const HexItem = ({ icon, active, empty }: { icon?: string, active?: boolean, empty?: boolean }) => {
    return (
        <div className={`relative w-[80px] h-[92px] sm:w-[110px] sm:h-[127px] md:w-[130px] md:h-[150px] flex items-center justify-center shrink-0 ${empty ? 'opacity-40' : ''}`}>
            <div className="absolute inset-0 ">
                <svg viewBox="0 0 100 116" className="w-full h-full" style={{ filter: active ? 'drop-shadow(0px 8px 24px rgba(37, 99, 235, 0.25))' : 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.03))' }}>
                    {active ? (
                        <>
                            <defs>
                                <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#e0e8ff" />
                                    <stop offset="100%" stopColor="#c7d4ff" />
                                </linearGradient>
                            </defs>
                            <polygon points="50,0 100,29 100,87 50,116 0,87 0,29" fill="url(#hexGrad)" />
                        </>
                    ) : (
                        <polygon points="50,0 100,29 100,87 50,116 0,87 0,29" fill="white" stroke="#f8fafc" strokeWidth="2" />
                    )}
                </svg>
            </div>
            {icon && (
                <div className={`relative z-10 flex items-center justify-center ${active ? 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 scale-110' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'}`}>
                    <img src={icon} alt="integration icon" className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    )
}

const Integrations = () => {
    const row1 = [
        { empty: true }, { empty: true },
        { icon: callIcon }, { icon: gmailIcon }, { icon: whatsappIcon }, { icon: documentIcon },
        { empty: true }, { empty: true }
    ];

    const row2 = [
        { empty: true }, { empty: true },
        { icon: filesIcon }, { icon: recordIcon }, { icon: folleiIcon, active: true }, { icon: robot2Icon }, { icon: callOutIcon },
        { empty: true }, { empty: true }
    ];

    const row3 = [
        { empty: true }, { empty: true },
        { icon: httpsIcon }, { icon: chatIcon }, { icon: robotIcon }, { icon: rectangleIcon },
        { empty: true }, { empty: true }
    ];

    return (
        <section className="py-24 overflow-hidden bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                {/* Header Area */}
                <div data-ns-animate className="flex flex-col items-center mb-20">
                    {/* Badge with Figma style from Overview */}
                    <div className="mb-6 flex justify-center">
                        <div
                            style={{
                                borderWidth: '0.5px',
                                borderColor: '#004370',
                                borderRadius: '10px',
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                gap: '10px'
                            }}
                            className="inline-flex items-center bg-white border"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
                            <span className="text-sm font-medium text-[#0A0E29]">How We Work</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#0A0E29] text-3xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
                        Seamless Integrations Across <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Every Workflow </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-[#5A5A5C] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed text-center">
                        Follei connects with the platforms your teams already rely on, ensuring AI workers always have the right context.
                    </p>
                </div>

                {/* Hexagon Grid */}
                {/* Widths: 
            Base (80px): gap=16px (4). overlap = 23px
            SM (110px): gap=20px (5). overlap = 31px
            MD (130px): gap=24px (6). overlap = 37px
        */}
                <div data-ns-animate data-delay="0.2" className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center scale-90 sm:scale-100">

                    <div className="flex gap-4 sm:gap-5 md:gap-6 justify-center">
                        {row1.map((item, idx) => (
                            <HexItem key={`r1-${idx}`} {...item} />
                        ))}
                    </div>

                    <div className="flex gap-4 sm:gap-5 md:gap-6 justify-center -mt-[23px] sm:-mt-[31px] md:-mt-[37px]">
                        {row2.map((item, idx) => (
                            <HexItem key={`r2-${idx}`} {...item} />
                        ))}
                    </div>

                    <div className="flex gap-4 sm:gap-5 md:gap-6 justify-center -mt-[23px] sm:-mt-[31px] md:-mt-[37px]">
                        {row3.map((item, idx) => (
                            <HexItem key={`r3-${idx}`} {...item} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Integrations;