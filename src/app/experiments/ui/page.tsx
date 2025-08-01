import { NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button } from "@/components/Buttons";
import { DraggableWindow } from "@/components/DraggableWindow";
import Draggable from "@/components/Draggable";
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, XIcon, SwatchIcon, MoonIcon, SunIcon, EyeIcon, ExpandIcon, ExpandIcon2, MinimizeIcon } from "@/components/Icons";

export default function UIExperimentsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <NavBarGrid />
        <NavBarBasic />
        <NavBarFloating />
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="font-psygen uppercase text-[150px] font-bold">UI Experiments</h1>
            <h1 className="font-archivo-black uppercase text-8xl font-bold">UI Experiments</h1>
            
            <h1 className="font-roboto-mono text-4xl font-bold">UI Experiments</h1>
            <p className="text-lg">
                This is a page for UI experiments.
            </p>
            <Button text="Hello" />

            <div className="w-screen h-screen b-green-300 p-4 flex flex-row gap-4">
              <div className="relative">
                <DraggableWindow />
              </div>
              <Draggable>
                <div className="z-100 relative w-[300px] h-[300px] flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 py-0 flex flex-row justify-between items-center bg-foreground text-background text-sm font-tiny5 uppercase">
                    <div className="flex flex-row gap-2">
                      Accessing...
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                      <ExpandIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                      <ExpandIcon2 className="w-4.5 h-4.5" strokeWidth={2.5} />
                      <MinimizeIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
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
                <div className="z-100 relative w-[300px] h-fit flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 py-0 text-foreground text-sm font-tiny5 uppercase border-b-1 border-foreground">
                    Greetings
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
            </div>
        </div>
    </div>
  );
}