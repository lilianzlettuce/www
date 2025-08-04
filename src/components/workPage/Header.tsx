import Image from "next/image";
import { WindowTechMono } from "../Windows";
import ShrinkCircles from "../canvasGraphics/ShrinkCircles";

export function WorkPageHeader2() {
    return (
        <div className="w-full min-h-[50vh] py-3 flex flex-row gap-4">
          

            <div className="relative w-full h-full">
                <div className="hidden absolute -top-60 left-0 w-190 h-150 bg-white">
                <Image src="/img/halftone/brain-bg-black.png" 
                    alt="Work" 
                    fill={true}
                    className="w-full h-full object-cover" />
                </div>
                <WindowTechMono className="w-full min-h-100">
                    <div className="w-full h-full p-4 flex flex-col gap-4">
                        <div className="w-full h-full flex flex-row justify-between gap-2 font-ibm-plex-mono text-xs">
                            <div className="flex flex-col gap-4">
                                <div className="text-left">
                                    <h1 className="text-4xl md:text-6xl/[0.8] scale-x-100 translate-x-0 font-micro5 font-bold text-foreground uppercase mb-4">
                                        Work
                                    </h1>
                                    <p className="text-xs text-mutedForeground max-w-2xl">
                                        What are you even searching for?
                                    </p>
                                </div>
                                <div className="relative overflow-hidden w-full h-60 border-1 border-border">
                                    <ShrinkCircles 
                                        className="absolute -inset-x-50 -inset-y-40"
                                        interactionMode="none"
                                        bgColor="none"
                                        transparent={true}
                                        showStats={false}
                                        imageSrc="/img/lowRes/heart.png"
                                        scaleFactor={1}
                                        gridGap={2}
                                        dotMapMode="light"
                                        dotColor="white"
                                        attractionDistance={400}
                                        shrinkFactor={20}
                                        defaultRadius={1.3}
                                        minRadius={0.4}
                                        maxRadius={4}
                                        delayFactor={0.4}
                                        delayCap={0.1}
                                        debounceTime={0}
                                        autoAnimStep={0.03}
                                    />
                                </div>
                            </div>

                            <div className="min-w-1/2 h-full pt-2 px-6 border-1 border-border flex items-center justify-center">
                                {/*<ShrinkCircles 
                                    imageSrc="/img/lowRes/brain.png"
                                    interactionMode="none"
                                    showStats={false}
                                    scaleFactor={0.6}
                                    gridGap={2}
                                    dotColor="#000000"
                                    attractionDistance={200}
                                    shrinkFactor={1}
                                    minRadius={0.1}
                                    maxRadius={3.8}
                                    delayFactor={0.85}
                                    delayCap={0.1}
                                    debounceTime={0}
                                    autoAnimStep={0.03}
                                />*/}
                                <ShrinkCircles 
                                    interactionMode="none"
                                    bgColor="none"
                                    transparent={true}
                                    showStats={false}
                                    imageSrc="/img/lowRes/brain.png"
                                    scaleFactor={0.6}
                                    gridGap={2}
                                    dotMapMode="light"
                                    dotColor="white"
                                    attractionDistance={400}
                                    shrinkFactor={20}
                                    defaultRadius={1.3}
                                    minRadius={0}
                                    maxRadius={4}
                                    delayFactor={0.4}
                                    delayCap={0.1}
                                    debounceTime={0}
                                    autoAnimStep={0.03}
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row justify-between font-roboto-mono">
                            <p className="text-xs">
                                No rest for the wicked.
                            </p>
                            <div className="flex flex-col items-end">
                                <p className="text-[0.65rem]">
                                    IBM-X340 +++// 
                                </p>
                                <p className="text-sm">
                                    <span className="font-micro5 text-xl">&#91;&nbsp;</span>
                                    <span className="relative top-0.4">■■■■■□□□</span>
                                    <span className="font-micro5 text-xl">&nbsp;&#93;</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </WindowTechMono>
            </div>
        </div>
    );
}

export function WorkPageHeader() {
    return (
        <div className="pt-30 min-h-[50vh] flex flex-row gap-4">
          <div className="min-w-1/2 text-left mb-16">
            <h1 className="text-4xl md:text-6xl/[0.8] scale-x-100 translate-x-0 font-micro5 font-bold text-foreground uppercase mb-4">
              Work
            </h1>
            <p className="text-sm text-mutedForeground max-w-2xl">
              What are you even searching for?
            </p>
          </div>

          <div className="z-0 relative w-fit h-fit">
            <div className="fixed -top-30 -right-60 w-190 h-150 bg-white">
                <Image src="/img/halftone/brain-bg-black.png" 
                    alt="Work" 
                    fill={true}
                    className="w-full h-full object-cover" />

                <ShrinkCircles 
                    interactionMode="none"
                    bgColor="none"
                    transparent={true}
                    showStats={false}
                    imageSrc="/img/lowRes/brain.png"
                    scaleFactor={1}
                    gridGap={3}
                    dotMapMode="light"
                    dotColor="white"
                    attractionDistance={400}
                    shrinkFactor={20}
                    defaultRadius={1.6}
                    minRadius={0}
                    maxRadius={6}
                    delayFactor={0.4}
                    delayCap={0.1}
                    debounceTime={0}
                    autoAnimStep={0.03}
                />
            </div>
            <WindowTechMono className="hidden w-fit h-fit">
              <div className="w-45 h-50 p-2 border-1 border-foreground font-ibm-plex-mono text-xs">
                <div className="w-full h-full p-2 border-1 border-foreground">
                  <div className="w-full h-full p-2 border-1 border-foreground">
                    <div className="w-full h-full p-2 border-1 border-foreground">
                    
                    </div>
                  </div>
                </div>
              </div>
            </WindowTechMono>
          </div>
        </div>
    );
}