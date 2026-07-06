

import "./sample.css"
import { motion } from 'framer-motion'
import { Bell, DollarSign, TrendingUp } from 'lucide-react'

const RevenueAutomation = () => {
  return (
         <section className="section GlobalPadding">
                    <div className="container">
                        <div className="grid-cols">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                data-slide-up-item=""
                                id="w-node-_24c69396-5c95-13c4-431e-3368ac020a0c-ac020a09"
                                className="column-left cc-features-left"
                            >
                                <div className="text-wrapper">
                                    <div data-wf--sub-title--variant="base" className="sub-title">
                                        <div style={{width: 4, height: 4, backgroundColor: '#000', borderRadius: '50%', marginRight: 6}}></div>
                                        <div>Revenue Automation</div>
                                    </div>
                                </div>
                                <div className="title-wrapper">
                                    <h2 className="text-h2">
                                        Built To Protect Every <span className="text-accent">Revenue Opportunity</span>
                                    </h2>
                                </div>
                                <div className="text-wrapper cc-top-20 cc-max-390" style={{maxWidth: '100%'}}>
                                    <div id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe" data-wf--paragraph--variant="align-left" className="text-wrapper">
                                        <p className="text-md u-text-muted">The Collections Worker continuously monitors invoices, automates payment follow-ups, and protects recurring revenue with intelligent, context-aware collections.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                data-card-wrap="" 
                                className="column-right cc-gap-16"
                            >
                                <div className="header-wrap cc-gap-16">
                                    <motion.div 
                                        variants={{
                                            hidden: { y: 0, opacity: 0.6, scale: 0.98 },
                                            visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                        }}
                                        data-card-top="" className="card" style={{ zIndex: 30, position: 'relative' }}
                                    >
                                        <div data-wf--features-card-v2--variant="base" className="features-card cc-span1">
                                            <div className="features-icon-wra" style={{display: 'flex', backgroundColor: 'rgba(255,255,255,0.2)', width: 64, height: 64, borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                                                <div className="icon cc-lg w-embed" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Bell color="#fff" size={32} />
                                                </div>
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="text-lg u-text-surface">Critical Attention</div>
                                                <div className="text-sm u-text-surface cc-top-10">Automatically send personalized payment reminders across email, WhatsApp, SMS, and voice based on due dates and customer payment behavior.</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div 
                                        variants={{
                                            hidden: { y: -130, opacity: 0.35, scale: 0.94 },
                                            visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.75, ease: "easeOut" } }
                                        }}
                                        data-card-mid="" className="card cc-z-n-2" style={{ zIndex: 20, position: 'relative' }}
                                    >
                                        <div data-wf--features-card-v2--variant="v2" className="features-card cc-span1 w-variant-c026e5a7-d592-2e69-73a1-d685cb1ee50e">
                                            <div className="features-icon-wra" style={{display: 'flex', backgroundColor: 'rgba(255,255,255,0.2)', width: 64, height: 64, borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                                                <div className="icon cc-lg w-embed" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <DollarSign color="#fff" size={32} />
                                                </div>
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="text-lg u-text-surface">AI Revenue Recovery</div>
                                                <div className="text-sm u-text-surface cc-top-10">Prioritize overdue accounts, recommend the next best action, and recover outstanding payments through intelligent collection workflows.</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div 
                                    variants={{
                                        hidden: { y: -260, opacity: 0.15, scale: 0.90 },
                                        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    data-card-bottom="" className="card cc-z-n-1" style={{ zIndex: 10, position: 'relative' }}
                                >
                                    <div data-wf--features-card-v2--variant="v3" className="features-card cc-span1 w-variant-a535aaff-62b6-829c-0aa8-3858bc163a7b">
                                        <div className="features-icon-wra w-variant-a535aaff-62b6-829c-0aa8-3858bc163a7b" style={{display: 'flex', backgroundColor: 'rgba(255,255,255,0.2)', width: 64, height: 64, borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                                            <div className="icon cc-lg w-embed" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <TrendingUp color="#fff" size={32} />
                                            </div>
                                        </div>
                                        <div className="text-wrapper">
                                            <div className="text-lg u-text-surface">Continuous Cash Flow Intelligence</div>
                                            <div className="text-sm u-text-surface cc-top-10">Analyze payment trends, improve collection performance, and continuously optimize recovery strategies to strengthen long-term cash flow.</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="border">
                        <div className="left-right w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 67 693" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <g clipPath="url(#clip0_249_58393)">
                                    <mask id="path-1-inside-1_249_58393" fill="white">
                                        <path d="M0 0H67V693H0V0Z"/>
                                    </mask>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 5.32031 922.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 19.3594 926.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 33.3984 930.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.06" x1="66.5" y1="2.18557e-08" x2="66.4999" y2="1440" stroke="#1F2A47" strokeDasharray="2 2"/>
                                </g>
                                <path d="M67 0V-1H66.0147V0V1H67V0ZM64.0441 0V-1H62.0735V0V1H64.0441V0ZM60.1029 0V-1H58.1324V0V1H60.1029V0Z" fill="#1F2A47" fillOpacity="0.08" mask="url(#path-1-inside-1_249_58393)"/>
                                <defs>
                                    <clipPath id="clip0_249_58393">
                                        <path d="M0 0H67V693H0V0Z" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="left-right w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 67 693" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <g clipPath="url(#clip0_249_58393)">
                                    <mask id="path-1-inside-1_249_58393" fill="white">
                                        <path d="M0 0H67V693H0V0Z"/>
                                    </mask>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 5.32031 922.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 19.3594 926.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.28" x1="0.5" y1="-0.5" x2="1468.57" y2="-0.5" transform="matrix(-0.5 -0.866025 0.612522 0.790453 33.3984 930.184)" stroke="#1F2A47" strokeLinecap="round" strokeDasharray="2 2"/>
                                    <line opacity="0.06" x1="66.5" y1="2.18557e-08" x2="66.4999" y2="1440" stroke="#1F2A47" strokeDasharray="2 2"/>
                                </g>
                                <path d="M67 0V-1H66.0147V0V1H67V0ZM64.0441 0V-1H62.0735V0V1H64.0441V0ZM60.1029 0V-1H58.1324V0V1H60.1029V0Z" fill="#1F2A47" fillOpacity="0.08" mask="url(#path-1-inside-1_249_58393)"/>
                                <defs>
                                    <clipPath id="clip0_249_58393">
                                        <path d="M0 0H67V693H0V0Z" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </section>

  )
}

export default RevenueAutomation