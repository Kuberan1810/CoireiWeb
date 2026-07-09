import type { JSX } from "react";
import { OptimizedLottie } from "../../../../component/OptimizedLottie";

import homePageLottie from "../../../../assets/js/traceability.json"

export default function Traceability(): JSX.Element {
    return (
        <div className="home-lottie-wrap w-full h-[370px] flex items-center justify-center">
            <div className="lottie-100 w-full h-full bg-[#242424] px-2.5">
                <OptimizedLottie
                    animationData={homePageLottie}
                    loop
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
