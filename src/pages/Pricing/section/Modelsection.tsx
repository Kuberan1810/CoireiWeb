import globe from "../../../assets/images/pricing/globeBG.png";
import coirei from "../../../assets/images/pricing/Coirei.png"

const Modelsection = () => {
    return (
        <section className="GlobalPadding grid md:grid-cols-2 gap-10 items-center">
            <div 
                data-ns-animate 
                data-direction="left" 
                data-offset="100"
            >
                <div>
                    <h2 className="text-orange-500 text-6xl mb-2">Models</h2>
                    <h3 className="text-6xl text-[#FFFFFF] mb-4">The best for the job</h3>
                </div>

                <p className="text-[#FFFFFF] text-2xl w-150  font-light">
                    Access Coirei, Claude Sonnet 4.5, Claude Opus 4.5, Gemini 3 Pro, and
                    more. Pick the best model for the task.
                </p>
            </div>

            <div 
                data-ns-animate 
                data-direction="right" 
                data-offset="100" 
                className="bg-black rounded-xl overflow-hidden relative"
            >
                <img src={globe} alt="Coirei" className="w-full h-full object-cover  " />
                <img src={coirei} alt="coirei logo" className="max-w-100 absolute top-1/2 left-60
              -translate-x-1/2 -translate-y-1/2" />
            </div>
        </section>
    );
};

export default Modelsection;