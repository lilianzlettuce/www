"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function ScrollIndicator({ className, total = 6 }: { className?: string; total?: number }) {
    const [filledCount, setFilledCount] = useState(0);
    const { scrollYProgress } = useScroll(); // whole page progress (0..1)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const next = Math.min(Math.max(Math.floor(latest * total), 0), total);
        setFilledCount(next);
    });

    return (
        <div
            className={`${className} mix-blend-difference rounded-lg p-0 flex flex-col items-end gap-2 font-roboto-mono`}
            aria-label="Scroll progress indicator"
        >
            <div className="text-sm flex flex-col items-center gap-4">
                <div className="hidden text-center font-micro5 text-xl rotate-90 relative top-3">&#91;&nbsp;</div>
                <div className="flex flex-col justify-center gap-1">
                    
                    {Array.from({ length: total }).map((_, index) => {
                        const isFilled = index < filledCount;
                        return (
                            <div
                                key={index} 
                                className={`w-[8px] h-[8px] border-[0.8px] border-zinc-200 transition-colors duration-200 ${
                                isFilled ? "bg-zinc-200" : "bg-transparent"
                            }`}
                            />
                        );
                    })}
                </div>
                <div className="h-6 border-r-1 border-zinc-700"></div>
                <div className="text-[0.65rem] font-mono text-zinc-400">FIN</div>
                <div className="hidden text-center font-micro5 text-xl rotate-90 relative top-1.5">&#93;&nbsp;</div>
            </div>
        </div>
    );
  }