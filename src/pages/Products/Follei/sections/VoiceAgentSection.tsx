import React from 'react';
import Lottie from 'lottie-react';

// Lottie animation URL for the sound wave
const LOTTIE_URL = "https://cdn.prod.website-files.com/6805daf026a06d8cef9c3391/680de0686c5c0a3560801f3e_Animation%20-%201745390881854.json";
const ROBO_LOTTIE_URL = "https://cdn.prod.website-files.com/69108ccf43c3987ea965e960/6930eade4c8d752651faf61b_robo%20head%203.json";




const VoiceAgentSection: React.FC = () => {
    const [animationData, setAnimationData] = React.useState<any>(null);
    const [roboData, setRoboData] = React.useState<any>(null);

    React.useEffect(() => {
        // Load center robo head animation
        fetch(ROBO_LOTTIE_URL)
            .then(res => res.json())
            .then(data => setRoboData(data))
            .catch(err => console.error("Failed to load robo animation", err));
    }, []);
    React.useEffect(() => {
        fetch(LOTTIE_URL)
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Failed to load Lottie animation", err));
    }, []);

    return (
        <section  className="relative w-full  pb-20">
            
            {/* Background Soundwave Animation */}
            <div className="absolute bottom-[-180px] left-0 w-full h-[400px] opacity-15 pointer-events-none z-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full flex">
                    {animationData && <Lottie animationData={animationData} loop={true} />}
                    {animationData && <Lottie animationData={animationData} loop={true} />}
                    {animationData && <Lottie animationData={animationData} loop={true} className='hidden md:block' />}
                    {animationData && <Lottie animationData={animationData} loop={true} className='hidden md:block' />}
                </div>
            </div>

            <div className="relative px-6 sm:px-10 md:px-15 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 z-5 ">
              

                {/* Left Card: Voice Description */}
                <div 
                    data-ns-animate
                    data-direction="right"
                    data-offset="80"
                    className=" backdrop-blur-3xl bg-[#29292990] rounded-[15px] w-full  mt-[95px] pt-[44px] pr-[37px] pb-[44px] pl-[44px] hidden md:block z-999 shadow-2xl "
                >
                    <div className="flex flex-col h-full">
                        <div className="text-[26px] font-bold mb-3 text-white tracking-tight">Voice</div>
                        <p className="text-[14px] lg:text-[17px] text-white/80 leading-relaxed mb-8 pr-4">Describe the desired AI voice's identity, voice qualities, and more</p>
                        <div className="bg-[#292929] border border-[#4b4a4a] rounded-[11.03px] mb-[16px] p-[23px]">
                            <p className="text-[14px] lg:text-[17px] leading-[1.8] text-white/80">
                                The speaker has the voice of an effusive, charismatic influencer, 
                                delivering a joyful, high-energy pep talk with the bright, upbeat 
                                tone of someone who's just won a lifetime supply of their favorite thing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center Content: Robo Head Lottie Animation */}
                <div 
                    data-ns-animate
                    data-offset="80"
                    data-delay="0.1"
                    className="relative w-full lg:w-[300px] shrink-0 flex items-center justify-center z-10 pointer-events-none mx-20"
                >

                    <div className="md:w-full w-[60%] aspect-square flex items-center justify-center overflow-visible">
                        {roboData && (
                            <Lottie 
                                animationData={roboData} 
                                loop={true} 
                                className="w-full h-full scale-125 lg:scale-150 transform-gpu"
                            />
                        )}
                    </div>
                </div>
                    
               

                {/* Right Card: Script */}
                <div 
                    data-ns-animate
                    data-direction="left"
                    data-offset="80"
                    data-delay="0.2"
                   className="backdrop-blur-3xl bg-[#29292990] rounded-[15px] w-full  mt-[95px] pt-[44px] pr-[37px] pb-[44px] pl-[44px] hidden md:block z-999 shadow-2xl "
                >
                    <div className="flex flex-col h-full">
                        <div className="text-[26px] font-bold mb-3 text-white tracking-tight">Script</div>
                        <p className=" leading-relaxed mb-8 pr-4  lg:text-[17px] text-white/80">To help shape the voice we generate, input something distinctive this AI voice would say</p>
                        <div className="bg-[#292929] border border-[#4b4a4a] rounded-[11.03px] mb-[16px] p-[23px]">
                            <p className="text-[14px] lg:text-[17px] leading-[1.8] text-white/80">
                                Okay, so like, you've totally got this, i'm telling you! 
                                just believe in your self, radiate, positivity, and watch how 
                                the universe, like, unfolds for you!
                            </p>
                        </div>
                        <button className="px-4 py-3 bg-[#f37500] rounded-full text-white font-semibold  mt-9 ">
                            Generate
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VoiceAgentSection;
