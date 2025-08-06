import Draggable from "./Draggable";
import Sprite from "./Sprite";
import ZoomableImage from "./ZoomableImage";
import { MinimizeIcon, ExpandIcon, XIcon, ExpandIcon2 } from "./svg/Icons";

type WindowProps = {
    className?: string;
    children?: React.ReactNode;
}

export function WindowTechMono({ className = "w-fit h-fit z-45 relative", children }: WindowProps) {
    return (
        <Draggable>
            <div className={`${className} flex flex-col bg-background text-foreground border border-foreground shadow-lg`}>
                <div className="handle select-none cursor-grab px-1 py-0 flex flex-row justify-between items-center bg-foreground text-background text-sm font-tiny5 uppercase">
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference">
                            <Sprite
                                id="eye-icon"
                                spriteSize={16}
                                backgroundImage="/img/sprite/eye-open.png"
                                steps={1}
                                duration={1}
                                onHover={true}
                                hoverSteps={2}
                                hoverDuration={0.3}
                                hoverBackgroundImage="/img/sprite/goose-walk.png"
                                style={{ scale: 1.1 }}
                            />
                        </div>
                        <div>
                            Accessing...
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                        <MinimizeIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <ExpandIcon2 className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <XIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                </div>
                <div className="overflow-hidden flex-1 flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}

export function HeroWindow({ className = "w-[300px] h-fit" }: WindowProps) {
    return (
        <Draggable>
            <div className={`${className} z-45 absolute p-1 flex flex-col bg-none text-foreground border-2 border-foreground shadow-lg`}>
                <div className="handle select-none cursor-grab bg-background px-1 pb-1 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference">
                            <Sprite
                                id="eye-icon"
                                spriteSize={16}
                                backgroundImage="/img/sprite/eye-open.png"
                                steps={1}
                                duration={1}
                                onHover={true}
                                hoverSteps={2}
                                hoverDuration={0.3}
                                hoverBackgroundImage="/img/sprite/goose-walk.png"
                                style={{ scale: "1.2 1.2" }}
                            />
                            </div>
                    </div>
                    <div className="text-md font-tiny5 uppercase">
                        Greetings
                    </div>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <MinimizeIcon className="scale-125" strokeWidth={2.5} />
                        </div>
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <ExpandIcon className="scale-125" strokeWidth={2.5} />
                        </div>
                        <div className="w-4.5 h-4.5 box-border border-2 border-foreground flex items-center justify-center">
                            <XIcon className="scale-125" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
                <div className="mix-blend-difference flex-1 flex flex-col items-center justify-center border-2 border-foreground">
                    <div className="w-full h-38 bg-white">
                        <ZoomableImage
                            className="w-full h-full"
                            src="/img/halftone/heart.png"
                            alt="zoomed halftone heart image"
                            backgroundSize={850}
                            initialX={-215}
                            initialY={-55}
                        />
                    </div>
                </div>
            </div>
        </Draggable>
    );
}