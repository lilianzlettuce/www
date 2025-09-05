"use client";

import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
    className?: string;
    total?: number;
}

export function ScrollIndicator({ className, total = 6 }: ScrollIndicatorProps) {
    const [filledCount, setFilledCount] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollElement = document.documentElement;
            const scrollTop = window.scrollY || scrollElement.scrollTop || 0;
            const scrollHeight = scrollElement.scrollHeight || 1;
            const clientHeight = window.innerHeight || scrollElement.clientHeight || 1;
            const maxScrollable = Math.max(scrollHeight - clientHeight, 1);
            const ratio = Math.min(Math.max(scrollTop / maxScrollable, 0), 1);
            const nextFilled = Math.min(Math.max(Math.floor(ratio * total), 0), total);
            setFilledCount(nextFilled);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update as EventListener);
            window.removeEventListener("resize", update as EventListener);
        };
    }, [total]);

    return (
      <div
        className={`${className} bg-background rounded-lg p-0 flex flex-col items-end gap-2 font-roboto-mono`}
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
                            className={`w-[8px] h-[8px] border-[0.8px] border-secondary-foreground transition-colors duration-200 ${
                            isFilled ? "bg-secondary-foreground" : "bg-transparent"
                        }`}
                        />
                    );
                })}
            </div>
            <div className="h-6 border-r-1 border-border"></div>
            <div className="text-[0.65rem] font-mono text-muted-foreground">FIN</div>
            <div className="hidden text-center font-micro5 text-xl rotate-90 relative top-1.5">&#93;&nbsp;</div>
          </div>
      </div>
    );
  }