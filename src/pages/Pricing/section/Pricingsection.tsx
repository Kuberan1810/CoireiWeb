interface PricingsectionProps {
    isAnnual: boolean;
}

const Pricingsection = ({ isAnnual }: PricingsectionProps) => {
    const monthlyPrice = 40;
    const annualPrice = 32;

    const features = [
        "Unlimited Projects",
        "Task creation & due dates",
        "Team collaboration (up to 3 members)",
        "Advanced analytics",
    ];

    return (
        <section className="relative mt-24 px-6 py-5 overflow-hidden">

           
            <div className="relative mx-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch ">

                {/* STARTER */}
                <div 
                    data-ns-animate 
                    data-offset="80"
                    className="group relative rounded-3xl
                    bg-white/10 backdrop-blur-3xl
                    border border-white/20
                    shadow-[0_30px_80px_rgba(0,0,0,0.1)]
                    transition-all duration-500 ease-out
                    hover:scale-[1.05] hover:border-white/40">

                    {/* liquid shine */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                        bg-linear-to-br from-white/20 via-transparent to-transparent
                        transition-all duration-500" />

                    <div className="relative p-10 flex flex-col h-full text-white">

                        <h3 className="text-3xl font-semibold pb-4 border-b border-white/20">
                            Starter
                        </h3>

                        <p className="text-white/70 mt-6">
                            Perfect for individuals and small teams getting started
                        </p>

                        <p className="text-3xl font-bold mt-12">
                            Free
                        </p>

                        <div className="mt-auto">
                            <button className="w-full py-3 mt-10 rounded-xl text-lg font-medium
                                bg-white/15 backdrop-blur-md border border-white/25
                                hover:bg-white/25 transition">
                                Get Started
                            </button>

                            <ul className="mt-10 space-y-4 text-white/80">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* PROFESSIONAL – LIQUID HERO */}
                <div 
                    data-ns-animate 
                    data-delay="0.2" 
                    data-offset="80"
                    className="group relative rounded-3xl
                    bg-white/10 backdrop-blur-3xl
                    border border-white/20
                    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                    transition-all duration-500 ease-out
                    hover:scale-[1.05] hover:border-white/40">


                    <div className="relative p-10 flex flex-col h-full text-white">

                        <span className="mb-4 w-fit px-4 py-1 rounded-full text-sm bg-orange-500/15 text-orange-300 border border-orange-400/30 transition-all duration-300 ease-out group-hover:bg-orange-500/40 group-hover:text-orange-200 group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                            Most Popular
                        </span>



                        <h3 className="text-3xl font-semibold pb-4 border-b border-white/20">
                            Professional
                        </h3>

                        <p className="text-white/70 mt-6">
                            Best for growing teams who need advanced features.
                        </p>

                        <p className="text-5xl font-bold mt-12">
                            ${isAnnual ? annualPrice : monthlyPrice}
                        </p>

                        <p className="text-white/60">
                            / month {isAnnual && "(billed yearly)"}
                        </p>

                        <div className="mt-auto">
                            <button className="w-full py-3 mt-10 rounded-xl text-lg font-semibold
                                bg-orange-500 hover:bg-orange-600 transition shadow-lg">
                                Start Professional
                            </button>

                            <ul className="mt-10 space-y-4 text-white/85">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ENTERPRISE */}
                <div 
                    data-ns-animate 
                    data-delay="0.4"
                    data-offset="80" 
                    className="group relative rounded-3xl
                    bg-white/10 backdrop-blur-3xl
                    border border-white/20
                    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                    transition-all duration-500 ease-out
                    hover:scale-[1.05] hover:border-white/40">

                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                        bg-linear-to-br from-white/20 via-transparent to-transparent
                        transition-all duration-500" />

                    <div className="relative p-10 flex flex-col h-full text-white">

                        <h3 className="text-3xl font-semibold pb-4 border-b border-white/20">
                            Enterprise
                        </h3>

                        <p className="text-white/70 mt-6">
                            Tailored for large organizations with complex workflows.
                        </p>

                        <p className="text-3xl font-bold mt-12">
                            Custom
                        </p>

                        <p className="text-white/60">
                            Contact us for a demo
                        </p>

                        <div className="mt-auto">
                            <button className="w-full py-3 mt-10 rounded-xl text-lg font-medium
                                bg-white/15 backdrop-blur-md border border-white/25
                                hover:bg-white/25 transition">
                                Get Enterprise
                            </button>

                            <ul className="mt-10 space-y-4 text-white/80">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">✓</span>
                                        {item}
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

export default Pricingsection;