import * as Slider from "@radix-ui/react-slider";

type SliderProps = {
    className?: string;
    min: number;
    max: number;
    step: number;
    value: number[];
    onValueChange: (value: number[]) => void;
    id?: string;
    "aria-labelledby"?: string;
}

export function SquareSlider({ className = "w-24", min, max, step, value, onValueChange, id, "aria-labelledby": ariaLabelledby }: SliderProps) {
    return (
        <div>
            <Slider.Root 
                className={`${className} relative h-full flex items-center gap-2 cursor-pointer`} 
                min={min}
                max={max} 
                step={step}
                value={value}
                onValueChange={onValueChange}
                id={id}
                aria-labelledby={ariaLabelledby}
            >
                <Slider.Track className="relative w-full h-[5px] grow-1 rounded-full bg-foreground/30 box-border border-[2px] border-background">
                    <Slider.Range className="absolute h-full rounded-full bg-foreground" />
                </Slider.Track>
                <Slider.Thumb className="block w-[10px] h-[10px] bg-background border-1 border-foreground focus:outline-none" aria-label="Volume" />
            </Slider.Root>
        </div>
    );
}

export function MinimalLineSlider({ className = "w-24", min, max, step, value, onValueChange, id, "aria-labelledby": ariaLabelledby }: SliderProps) {
    return (
        <Slider.Root 
            className={`${className} relative h-full flex items-center gap-2 cursor-pointer`} 
            min={min}
            max={max} 
            step={step}
            value={value}
            onValueChange={onValueChange}
            id={id}
            aria-labelledby={ariaLabelledby}
        >
            <Slider.Track className="relative w-full h-[5px] grow-1 rounded-full bg-foreground/30 box-border border-[2px] border-background">
                <Slider.Range className="absolute h-full rounded-full bg-foreground" />
            </Slider.Track>
            <Slider.Thumb className="block w-[5px] h-[5px] bg-foreground focus:outline-none" aria-label="Volume" />
        </Slider.Root>
    );
}

export function DefaultSlider({ min, max, step, value, onValueChange, id, "aria-labelledby": ariaLabelledby }: SliderProps) {
    return (
        <div>
            <Slider.Root 
                className="relative w-36 h-6 flex items-center gap-2 cursor-pointer" 
                min={min}
                max={max} 
                step={step}
                value={value}
                onValueChange={onValueChange}
                id={id}
                aria-labelledby={ariaLabelledby}
            >
                <Slider.Track className="relative w-full h-1 grow-1 rounded-full bg-foreground/30">
                    <Slider.Range className="absolute h-full rounded-full bg-foreground" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 rounded-full bg-background border-2 border-foreground focus:outline-none focus:ring-1 focus:ring-foreground" aria-label="Volume" />
            </Slider.Root>
        </div>
    );
}