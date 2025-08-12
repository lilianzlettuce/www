import BoxCorners from "./svg/BoxCorners";

type ButtonProps = {
  text: string;
  icon?: string | React.ReactNode;
  className?: string;
}

export function IconButton({ 
    text = "Proceed", 
    className = "rounded-full px-2 bg-background text-foreground border-1 border-background hover:bg-foreground hover:text-background", 
    icon = "→" 
}: ButtonProps) {
    return (
        <button className={`${className} box-border group inline-flex items-center gap-1 transition-all duration-200 h-fit`}>
            
            {text} {icon}
        </button>
    );
}

export function BracketButton({ 
    text = "Proceed", 
    className = "rounded-full px-2 bg-background text-foreground border-1 border-background hover:bg-foreground hover:text-background", 
    icon = "→" 
}: ButtonProps) {
    return (
        <button className={`${className} box-border group inline-flex items-center gap-1 transition-all duration-200 h-fit`}>
            &#91; {text} {icon} &#93;
        </button>
    );
}

export function RevealButton2({ 
    text = "Proceed", 
    className = "rounded-full px-2 bg-foreground text-background border-1 border-foreground hover:bg-background hover:text-foreground", 
    icon = "→" 
}: ButtonProps) {
    return (
        <button className={`${className} box-border group inline-flex items-center gap-1 transition-all duration-200 h-fit`}>
            <div className="">
                {text}
            </div>
            <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                {icon}
            </div>
        </button>
    );
}

export function RevealButton({ text = "Proceed", className = "", icon = "→" }: ButtonProps) {
    return (
        <button className={`${className} group inline-flex items-center gap-1 transition-all duration-200
                        rounded-full px-2 bg-foreground border-1 border-foreground text-background hover:bg-background hover:text-foreground`}>
            <div className="">
                {text}
            </div>
            <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                {icon}
            </div>
        </button>
    );
}

export function Button({ text = "Schedule a demo" }: ButtonProps) {
  return (
    <div className="w-full flex flex-col gap-4">
        <div className="flex flex-row gap-4">
            <button className="group inline-flex items-center gap-1 transition-all duration-200
                        rounded-full px-2 bg-foreground text-background hover:bg-background hover:text-foreground">
                <div className="">
                    {text}
                </div>
                <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                    →
                </div>
            </button>
            <button className="group inline-flex items-center gap-1 transition-all duration-200
                        rounded-full bg-background text-foreground border-1 border-foreground hover:bg-foreground hover:text-background hover:border-background">
                <div className="">
                    {text}
                </div>
                <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                    →
                </div>
            </button>
            <button className="group inline-flex items-center gap-1 transition-all duration-200
                        rounded-full px-2 bg-foreground text-background border-1 border-foreground hover:bg-background hover:text-foreground">
                <div className="">
                    {text}
                </div>
                <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                    •
                </div>
            </button>
            <button className="group inline-flex items-center gap-1 transition-all duration-200
                        rounded-full bg-background text-foreground border-1 border-none hover:bg-foreground hover:text-background hover:border-background">
                <div className="">
                    {text}
                </div>
                <div className="relative -left-8 overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:left-0 group-hover:max-w-[20px]">
                    •
                </div>
            </button>
        </div>
        <div className="flex flex-row gap-4">
            <button className="group inline-flex items-center gap-1 transition-all duration-200
                        hover-slide-bg hover:bg-white">
                <div className="mix-blend-difference">
                    {text}
                </div>
                <div className="mix-blend-difference overflow-hidden min-w-0 max-w-0 transition-all duration-200 group-hover:max-w-[20px]">
                    →
                </div>
            </button>
            <button className="hover-slide-bg hover:bg-white hover:text-green hover:border-purple">
                <span className="mix-blend-difference hover:after:text-green">
                    {text} jklj
                </span>
            </button>
            <button className="hover-slide-bg">
                <span className="mix-blend-screen">
                    {text}
                </span>
            </button>
            <button className="hover-slide-line transition">
                <span className="">
                    {text}
                </span>
            </button>
            <button className="hover-slide-line transition hover:rotate-[-3deg] hover:scale-[1.03]">
                <span className="">
                    {text}
                </span>
            </button>
        </div>
    </div>
  );
}