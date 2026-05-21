import type { JSX } from "react";
import Lottie from "lottie-react";

import smartLayouts from "../../../../assets/js/orchestration.json";

export default function OrchestrationCard(): JSX.Element {
    return (
        <div className="lottie-100 w-full  flex items-center justify-center">
            <Lottie
                animationData={smartLayouts}
                loop
                autoplay
                className="w-full h-full"
            />
        </div>
    );
}
