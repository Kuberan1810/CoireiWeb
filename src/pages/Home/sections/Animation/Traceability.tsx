import type { JSX } from "react";
import Lottie from "lottie-react";

import homePageLottie from "../../../../assets/js/traceability.json"

export default function Traceability(): JSX.Element {
    return (
        <div className="home-lottie-wrap w-full h-[370px] flex items-center justify-center">
            <div className="lottie-100 w-full h-full bg-[#242424] px-2.5">
                <Lottie
                    animationData={homePageLottie}
                    loop
                    autoplay
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
