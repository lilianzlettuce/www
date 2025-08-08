import Draggable from "./Draggable";
import Sprite from "./Sprite";
import { MinimizeIcon, ExpandIcon, XIcon, ExpandIcon2, PixelatedXIcon } from "./svg/Icons";

type WindowProps = {
    className?: string;
    children?: React.ReactNode;
    dragHandleClassName?: string;
    dragHandleIcon?: React.ReactNode;
    dragHandleText?: string;
}

export function WindowTechMono({ 
    className = "w-fit h-fit z-50 relative", 
    children, 
    dragHandleClassName = "bg-foreground text-background", 
    dragHandleIcon, 
    dragHandleText 
}: WindowProps) {
    return (
        <Draggable>
            <div className={`${className} flex flex-col bg-background text-foreground border border-foreground shadow-lg`}>
                {/* Window handle */}
                <div className={`${dragHandleClassName} z-50 handle select-none cursor-grab px-1 py-0 flex justify-between items-center gap-2`}>
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference text-white">
                            {dragHandleIcon || <Sprite
                                id="eye-icon"
                                spriteSize={16}
                                backgroundImage="/img/sprite/eye-open.png"
                                steps={1}
                                duration={1}
                                onHover={true}
                                hoverSteps={2}
                                hoverDuration={0.3}
                                style={{ scale: 1.1 }}
                            />}
                        </div>
                        <div className="text-sm font-tiny5 uppercase">
                            {dragHandleText}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                        <MinimizeIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <ExpandIcon2 className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <XIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Window content */}
                <div className="overflow-hidden flex-1 flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}

export function HeroWindow({ 
    className = "w-[300px] h-fit",
    children,
    dragHandleClassName = "",
    dragHandleIcon,
    dragHandleText
}: WindowProps) {
    return (
        <Draggable>
            <div className={`${className} z-50 absolute p-1 flex flex-col bg-none text-foreground border-2 border-foreground shadow-lg`}>
                {/* Window handle */}
                <div className={`${dragHandleClassName} handle select-none cursor-grab bg-background px-1 pb-1 flex flex-row justify-between items-center`}>
                    <div className="flex flex-row items-center gap-2">
                            {dragHandleIcon || <div className="mix-blend-difference">
                                                    <Sprite
                                                        id="eye-icon"
                                                        spriteSize={16}
                                                        backgroundImage="/img/sprite/eye-open.png"
                                                        steps={1}
                                                        duration={1}
                                                        onHover={true}
                                                        hoverSteps={2}
                                                        hoverDuration={0.3}
                                                        style={{ scale: "1.2 1.2" }}
                                                    />
                                                </div>
                            }
                    </div>
                    <div className="text-md font-tiny5 uppercase">
                        {dragHandleText}
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <MinimizeIcon className="scale-125" strokeWidth={2.5} />
                        </div>
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <ExpandIcon className="scale-125" strokeWidth={2.5} />
                        </div>
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <PixelatedXIcon className="scale-125" strokeWidth={0} />
                        </div>
                    </div>
                </div>

                {/* Window content */}
                <div className="overflow-hidden flex-1 flex flex-col items-center justify-center border-2 border-foreground">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}

export function WindowMinimal({ 
    className = "w-fit h-fit",
    children,
    dragHandleClassName = "",
    dragHandleIcon,
    dragHandleText
}: WindowProps) {
    return (
        <Draggable>
            <div className={`${className} z-50 bg-[#1e1e1e] text-white border border-[#444] rounded-lg shadow-lg`}>
                {/* Window handle */}
                <div className={`${dragHandleClassName} handle px-2.5 py-1.5 cursor-grab bg-[#333] border-b border-[#444] rounded-t-lg select-none flex justify-between items-center gap-4`}>
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference text-white">
                            {dragHandleIcon}
                        </div>
                        <div className="text-sm font-satoshi font-medium">
                            {dragHandleText}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                        <XIcon className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Window content */}
                <div className="overflow-hidden flex-1 flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}