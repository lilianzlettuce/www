import Draggable from "@/components/Draggable";
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, XIcon, MoonIcon, SunIcon, EyeIcon, ExpandIcon, ExpandIcon2, MinimizeIcon, PlusIcon, PlusIconThin, RoundPixelatedArrowIcon, PixelatedXIcon, PixelatedArrowIcon, GridIcon, ListIcon, BarcodeIcon, ArrowRightBar, SquareIcon } from "@/components/svg/Icons";
import Sprite from "@/components/Sprite";
import ZoomableImage from "@/components/ZoomableImage";
import { WindowMinimal, WindowTechMono } from "@/components/Windows";
import { BgPattern, GridContainer } from "@/components/svg/BgPatterns";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { DevIcon, DesignIcon, ArtIcon } from "@/components/svg/Icons";
import BoxCorners from "@/components/svg/BoxCorners";

export default function WindowsExperimentsPage() {
    return (
        <div className="w-screen h-fit p-8 flex flex-row flex-wrap gap-4">
            <h1>Windows Experiments</h1>

            {/* Window experiments */}
            <div className="relative w-screen h-fit p-8 flex flex-row flex-wrap gap-4">
              <WindowMinimal className="z-45 relative top-0 left-0 w-fit h-fit min-w-50"
                dragHandleText="Minimal window"
              >
                <div className="w-full h-full p-4 text-sm">
                  Hello friend.
                </div>
              </WindowMinimal>

              <WindowTechMono className="z-45 relative top-0 left-0 w-fit h-fit"
                dragHandleText="Tech Mono window"
              >
                <div className="w-full h-full p-4 text-sm font-roboto-mono">
                  Hello friend.
                </div>
              </WindowTechMono>
              
              <WindowTechMono className="relative top-0 left-0 w-140 min-w-100 h-60"
                dragHandleClassName="bg-background text-foreground border-b-1 border-foreground"
                dragHandleText="Icons"
                dragHandleIcon={<div className="mix-blend-difference">
                                  <Sprite
                                    id="eye-icon"
                                    spriteSize={16}
                                    backgroundImage="/img/sprite/eye-open.png"
                                    numFrames={1}
                                    duration={1}
                                    onHover={true}
                                    hoverNumFrames={2}
                                    hoverDuration={0.3}
                                    style={{ scale: "1.05 1.05" }}
                                  />
                                </div>}
              >
                <div className="w-full h-full p-4 flex items-start justify-start gap-2 font-roboto-mono text-xs">
                    <div className="w-80 h-full">
                        <p>
                            Unicode square symbols:
                        </p>
                        <div className="font-satoshi flex flex-col gap-2">
                            <p className="text-lg">
                            &#91; ▩▩▩▩▩▩▩▩ &#93;
                            </p>
                            <p className="text-lg">
                            &#91; ■ □ &#93;
                            </p>
                            <p className="">
                            &#91; ⛝ ⛶ ⧯ ⧮ ⯐ ■ □ ▩ ◼ &#93;
                            </p>
                            <p className="">
                            &#91; ■ □ ▩ ◼ ◼ &#93;
                            </p>
                            <p className="">
                            &#91; █ █ █ █ ▓ ▓ ▓ ▓ &#93;
                            </p>
                        </div>
                    </div>

                    {/* SVG Icons */}
                    <div className="w-full h-full flex flex-col justify-between gap-3">
                        <div className="w-full h-full p-4 flex flex-col gap-2  border-1 border-border">
                            <div className="w-full h-fit flex flex-row flex-wrap items-start justify-start gap-2">
                                <ArrowLeftIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                                <ExternalLinkIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                                <GithubIcon className="w-4.5 h-4.5" />
                                <SunIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <MoonIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <EyeIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <MinimizeIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <ExpandIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <ExpandIcon2 className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <PlusIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <XIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <ListIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <GridIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <DevIcon className="w-4.5 h-4.5" strokeWidth={0} />
                                <DesignIcon className="w-4.5 h-4.5" strokeWidth={0} />
                                <ArtIcon className="w-4.5 h-4.5" strokeWidth={0} />
                                <DevIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <DesignIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <ArtIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <BarcodeIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <SquareIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                                <SquareIcon className="w-4.5 h-4.5 scale-75" strokeWidth={8.5} />
                                <ArrowRightBar className="w-4.5 h-4.5 scale-120" strokeWidth={0} />
                                <PixelatedXIcon className="w-4.5 h-4.5" strokeWidth={0} />
                                <PixelatedArrowIcon className="w-4.5 h-4.5" strokeWidth={0} />
                                <PixelatedArrowIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                            </div>

                            <div className="w-full h-fit flex flex-row flex-wrap items-start justify-start gap-2">
                                <RoundPixelatedArrowIcon className="w-10 h-10" strokeWidth={0} />
                                <RoundPixelatedArrowIcon className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="text-[0.6rem] flex flex-row items-center justify-between">
                            <div>
                                IBM-X340 +++// 
                            </div>
                            <div>
                                &#91; ■■■■■□□□ &#93;
                            </div>
                        </div>
                    </div>
                </div>
              </WindowTechMono>

              <Draggable>
                <div className="z-45 relative w-[300px] h-fit flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 py-0 flex flex-row justify-between items-center border-b-1 border-foreground text-sm font-tiny5 uppercase">
                    <div className="flex flex-row items-center gap-2">
                      <div className="mix-blend-difference">
                        <Sprite
                          id="eye-icon"
                          spriteSize={16}
                          backgroundImage="/img/sprite/eye-open.png"
                          numFrames={1}
                          duration={1}
                          onHover={true}
                          hoverNumFrames={2}
                          hoverDuration={0.3}
                          style={{ scale: "1.05 1.05" }}
                        />
                      </div>
                      <div>
                        Alert!!!
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                      <XIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4 font-roboto-mono text-xs">
                      This is the window content.
                    </div>
                  </div>
                </div>
              </Draggable>

              <Draggable>
                <div className="z-45 relative w-[300px] h-fit p-1 flex flex-col bg-background text-foreground border-2 border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 pb-1 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                      <div className="mix-blend-difference">
                        <Sprite
                          id="eye-icon"
                          spriteSize={16}
                          backgroundImage="/img/sprite/eye-open.png"
                          numFrames={1}
                          duration={1}
                          onHover={true}
                          hoverNumFrames={2}
                          hoverDuration={0.3}
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
                  <div className="flex-1 flex flex-col items-center justify-center border-2 border-foreground">
                    <div className="w-full h-50 bg-white">
                      <ZoomableImage
                        className="w-full h-full"
                        src="/img/halftone/heart.png"
                        alt="zoomed halftone heart image"
                        backgroundSize={800}
                        initialX={-250}
                        initialY={-40}
                        useNextImage={false}
                      />
                    </div>
                  </div>
                </div>
              </Draggable>

              <WindowTechMono className="relative top-0 left-0 w-fit h-fit">
                <div className="p-2">
                  <div className="bg-white w-100 h-70 ">
                    <ZoomableImage
                      className="w-full h-full border-1 border-white"
                      src="/img/halftone/hands-outreached.png"
                      alt="zoomed halftone heart image"
                      backgroundSize={850}
                      initialX={-215}
                      initialY={-155}
                    />
                  </div>
                </div>
              </WindowTechMono>

              <WindowTechMono className="relative w-full min-h-100">
                <BgPattern className="absolute inset-0 w-full h-full"
                    patternTransform="scale(0.5 0.5)"
                    offset={{ x: 0, y: 0 }}
                    dimensions={{ width: 100, height: 100 }}
                    stroke="rgb(255,255,255, 0.3)"
                    fill="none"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                >
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

                          {/* Right window display */}
                          <GridContainer 
                              className="relative min-w-1/2 h-full pt-2 px-6 border-1 border-border flex items-center justify-center"
                              layers={[
                                  {
                                      spacing: 30,
                                      strokeWidth: 0.9,
                                      strokeLength: 30,
                                      color: "rgba(255,255,255)",
                                      opacity: 0.1
                                  },
                                  {
                                      spacing: 30,
                                      strokeWidth: 1,
                                      strokeLength: 3,
                                      color: "rgba(255,255,255)",
                                      opacity: 0.3
                                  },
                              ]} 
                          >
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
                              <BoxCorners
                                  icon={<PlusIcon className="w-full h-full text-secondary-foreground" strokeWidth={2} />}
                                  cornerSize="16px"
                                  cornerOffset="-8px"
                                  cornerColor="transparent"
                              />
                              <div className="absolute -top-[40%] -left-[40%] w-full h-full flex items-center justify-center">
                                you are here.
                              </div>
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
                          </GridContainer>
                      </div>

                      <div className="w-full flex flex-row justify-between font-roboto-mono">
                          <div className="flex flex-col items-start gap-2">
                              <p className="text-xs">
                                  No rest for the wicked.
                              </p>
                              <div className="flex flex-row items-center gap-2">
                                  <DevIcon className="w-3 h-3" strokeWidth={2} />
                                  <DesignIcon className="w-3 h-3" strokeWidth={2} />
                                  <ArtIcon className="w-3 h-3" strokeWidth={2} />
                              </div>
                          </div>
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
                </BgPattern>
              </WindowTechMono>
            </div>
        </div>
    );
}