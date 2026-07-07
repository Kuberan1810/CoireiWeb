
import { motion } from 'framer-motion'
import { Bell, DollarSign, TrendingUp } from 'lucide-react'

const Sample = () => {
  return (
    <section className="w-full GlobalPadding relative overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 relative">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="self-center text-center lg:text-left max-w-[33.75rem] mx-auto lg:mx-0"
          >
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#004370] rounded-[10px] text-[#04032E] font-medium text-[12px] sm:text-[14px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004370]"></span>
                <div>Revenue Automation</div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-tight">
                Built To Protect Every <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Revenue Opportunity</span>
              </h2>
            </div>

            <div className="max-w-[24.375rem] mx-auto lg:mx-0 mb-16 lg:mb-0">
              <p className="text-[#6E6E6E] text-sm sm:text-[16px] leading-relaxed">
                The Collections Worker continuously monitors invoices, automates payment follow-ups, and protects recurring revenue with intelligent, context-aware collections.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col gap-4 relative z-10 w-full  lg:mx-0"
          >
            <motion.div
              variants={{
                hidden: { y: 0, opacity: 0.6, scale: 0.98 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="relative z-30"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start rounded-[1.5rem] bg-gradient-to-r from-[#4d73ff] via-[#6348ea] to-[#52a8ff] p-5 sm:pl-4">
                <div className="flex items-center justify-center bg-white/20 w-16 h-16 min-w-[4rem] rounded-xl shadow-sm">
                  <Bell color="#fff" size={32} />
                </div>
                <div>
                  <div className="text-xl font-medium text-white leading-[1.4]">Critical Attention</div>
                  <div className="text-sm text-white/90 mt-2.5 leading-[1.4]">Automatically send personalized payment reminders across email, WhatsApp, SMS, and voice based on due dates and customer payment behavior.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { y: -130, opacity: 0.35, scale: 0.94 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.75, ease: "easeOut" } }
              }}
              className="relative z-20"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start rounded-[1.5rem] bg-[#0080b2] p-5 sm:pl-4">
                <div className="flex items-center justify-center bg-white/20 w-16 h-16 min-w-[4rem] rounded-xl shadow-sm">
                  <DollarSign color="#fff" size={32} />
                </div>
                <div>
                  <div className="text-xl font-medium text-white leading-[1.4]">AI Revenue Recovery</div>
                  <div className="text-sm text-white/90 mt-2.5 leading-[1.4]">Prioritize overdue accounts, recommend the next best action, and recover outstanding payments through intelligent collection workflows.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { y: -260, opacity: 0.15, scale: 0.90 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="relative z-10"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center rounded-[1.5rem] bg-[#005b80] p-5 sm:pl-4">
                <div className="flex items-center justify-center bg-white/20 w-16 h-16 min-w-[4rem] rounded-xl shadow-sm">
                  <TrendingUp color="#fff" size={32} />
                </div>
                <div>
                  <div className="text-xl font-medium text-white leading-[1.4]">Continuous Cash Flow Intelligence</div>
                  <div className="text-sm text-white/90 mt-2.5 leading-[1.4]">Analyze payment trends, improve collection performance, and continuously optimize recovery strategies to strengthen long-term cash flow.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 hidden lg:flex justify-between max-w-[90rem] mx-auto pointer-events-none">
        <div className="w-full min-w-[4.25rem] max-w-[4.25rem] h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 67 693" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
            <g clipPath="url(#clip0_249_58393)">
              <mask id="path-1-inside-1_249_58393" fill="white">
                <path d="M0 0H67V693H0V0Z" />
              </mask>
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 5.32031 922.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 19.3594 926.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 33.3984 930.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.06" x1="66.5" y1="2.18557e-08" x2="66.4999" y2="1440" stroke="#1F2A47" strokeDasharray="2 2" />
            </g>
            <path d="M67 0V-1H66.0147V0V1H67V0ZM64.0441 0V-1H62.0735V0V1H64.0441V0ZM60.1029 0V-1H58.1324V0V1H60.1029V0Z" fill="#1F2A47" fillOpacity="0.08" mask="url(#path-1-inside-1_249_58393)" />
            <defs>
              <clipPath id="clip0_249_58393">
                <path d="M0 0H67V693H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-full min-w-[4.25rem] max-w-[4.25rem] h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 67 693" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
            <g clipPath="url(#clip0_249_58393)">
              <mask id="path-1-inside-1_249_58393" fill="white">
                <path d="M0 0H67V693H0V0Z" />
              </mask>
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 5.32031 922.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 19.3594 926.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 33.3984 930.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2" />
              <line opacity="0.06" x1="66.5" y1="2.18557e-08" x2="66.4999" y2="1440" stroke="#1F2A47" strokeDasharray="2 2" />
            </g>
            <path d="M67 0V-1H66.0147V0V1H67V0ZM64.0441 0V-1H62.0735V0V1H64.0441V0ZM60.1029 0V-1H58.1324V0V1H60.1029V0Z" fill="#1F2A47" fillOpacity="0.08" mask="url(#path-1-inside-1_249_58393)" />
            <defs>
              <clipPath id="clip0_249_58393">
                <path d="M0 0H67V693H0V0Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Sample