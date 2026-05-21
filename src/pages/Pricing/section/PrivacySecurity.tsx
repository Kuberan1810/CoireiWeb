import door from "../../../assets/images/pricing/door.png";

const PrivacySecurity = () => {
    return (
        <section className="max-w-7xl mx-auto mt-24 px-6">
            <div 
                data-ns-animate 
                data-offset="100" 
                className="mb-17"
            >
                <p className="text-orange-500 text-6xl mb-2">
                    Your privacy and security
                </p>
                <h2 className="text-6xl text-[#FFFFFF] mb-4">
                    {" "}
                    Transparency and control at every touchpoint.
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex justify-bottom">
                    <img src={door} alt="Security" className="rounded-xl object-cover" />
                </div>

                <section className="bg-[#0b0b0b] text-white max-w-6xl mx-auto px-6 h-auto">
                    <div className="border-t border-gray-700 h-full flex flex-col justify-between">
                        {/* Row 1 */}
                        <div 
                            data-ns-animate 
                            data-offset="40" 
                            className="grid grid-cols-2 gap-10 py-6 border-b border-gray-700"
                        >
                            <h3 className="text-lg font-medium">
                                Your data, secure and private
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Warp is SOC 2 compliant and has{" "}
                                <span className="font-semibold text-white">
                                    Zero Data Retention
                                </span>{" "}
                                policies with all contracted LLM providers — no customer data is
                                retained, stored, or used for training.
                                <br />
                                <br />
                                App telemetry can be individually configured and automatically
                                enforced for teams.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div 
                            data-ns-animate 
                            data-offset="40" 
                            className="grid grid-cols-2 gap-10 py-6 border-b border-gray-700"
                        >
                            <h3 className="text-lg font-medium">
                                Complete control of your agents
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Control exactly how much autonomy agents have, from approving
                                every step to allowing full{" "}
                                <span className="underline underline-offset-4 text-white">
                                    autonomy
                                </span>
                                . Configurable at the individual and{" "}
                                <span className="underline underline-offset-4 text-white">
                                    enterprise
                                </span>{" "}
                                level.
                                <br />
                                <br />
                                <span className="underline underline-offset-4 text-white cursor-pointer">
                                    Learn how credits work and how to get the more out of an AI
                                    credit.
                                </span>
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-2 gap-10 py-6">
                            <h3 className="text-lg font-medium">Full transparency</h3>

                            <p className="text-gray-300 leading-relaxed">
                                You can read the list of high-level telemetry events that sent
                                for app analytics and monitor{" "}
                                <span className="underline underline-offset-4 text-white">
                                    telemetry
                                </span>{" "}
                                in real-time with our native{" "}
                                <span className="underline underline-offset-4 text-white">
                                    Network Log.
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default PrivacySecurity;