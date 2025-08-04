import { NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button } from "@/components/Buttons";
import { DraggableWindow } from "@/components/DraggableWindow";
import Draggable from "@/components/Draggable";
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, XIcon, SwatchIcon, MoonIcon, SunIcon, EyeIcon, ExpandIcon, ExpandIcon2, MinimizeIcon, PlusIcon, PlusIconThin } from "@/components/Icons";
import Sprite from "@/components/Sprite";
import ZoomableImage from "@/components/ZoomableImage";
import { WindowTechMono } from "@/components/Windows";

export default function UIExperimentsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <NavBarGrid />
        <NavBarBasic />
        <NavBarFloating />
        <div className="h-screen mt-[400px] p-48 flex flex-col items-center justify-center">
            <h1 className="font-psygen uppercase text-[150px] font-bold">UI Experiments</h1>
            <h1 className="font-archivo-black uppercase text-8xl font-bold">UI Experiments</h1>
            
            <h1 className="font-roboto-mono text-4xl font-bold">UI Experiments</h1>
            <p className="text-lg">
                This is a page for UI experiments.
            </p>
            <Button text="Hello" />

            <div className="w-full flex flex-col items-start gap-2">
              Plus icon for grid
              <PlusIconThin className="w-48 h-48 text-foreground" strokeWidth={0.1} />

              Plus icon row
              <div className="w-full p-8 flex flex-row items-center justify-between">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="w-8 h-8d">
                    <PlusIcon className="w-7 h-7 text-foreground" strokeWidth={3} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-screen min-h-screen h-fit b-green-300 p-8 flex flex-row flex-wrap gap-4">
              <div className="relative">
                <DraggableWindow />
              </div>
              <Draggable>
                <div className="z-45 relative w-[300px] h-[300px] flex flex-col bg-background text-foreground border border-foreground shadow-lg">
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
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4 font-ibm-plex-mono text-xs">
                      This is the window content.
                    </div>
                  </div>
                </div>
              </Draggable>
              <Draggable>
                <div className="z-45 relative w-[300px] h-fit flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                <div className="handle select-none cursor-grab px-1 py-0 flex flex-row justify-between items-center border-b-1 border-foreground text-sm font-tiny5 uppercase">
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
                          style={{ scale: "1.05 1.05" }}
                        />
                      </div>
                      <div>
                        Greetings
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                      <MinimizeIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                      <ExpandIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                      <XIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4 font-roboto-mono text-xs">
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
                      <p className="text-[0.6rem]">
                        IBM-X340 +++// 
                      </p>
                      <div className="flex flex-row gap-2 flex-wrap">
                        <ArrowLeftIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <ExternalLinkIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                        <GithubIcon className="w-4.5 h-4.5" />
                        <SunIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                        <MoonIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                        <SwatchIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                        <EyeIcon className="w-4.5 h-4.5" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </Draggable>

              <Draggable>
                <div className="z-45 relative w-[300px] h-fit flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 py-0 flex flex-row justify-between items-center border-b-1 border-foreground text-sm font-tiny5 uppercase">
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

              <WindowTechMono className="w-fit h-fit">
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
            </div>
        </div>
    </div>
  );
}