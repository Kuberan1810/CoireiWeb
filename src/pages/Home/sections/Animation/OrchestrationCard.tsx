import type { JSX } from "react";
import { OptimizedLottie } from "../../../../component/OptimizedLottie";

import smartLayouts from "../../../../assets/js/orchestration.json";

export default function OrchestrationCard(): JSX.Element {
    return (
        <div className="lottie-100 w-full  flex items-center justify-center">
            <OptimizedLottie
                animationData={smartLayouts}
                loop
                className="w-full h-full"
            />
        </div>
    );
}
