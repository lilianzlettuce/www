import { NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { DraggableWindow } from "@/components/DraggableWindow";
import Draggable from "@/components/Draggable";

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
            <div className="w-screen h-screen b-green-300 flex flex-row gap-4">
              <div className="relative bg-foreground/20">
                <DraggableWindow />
              </div>
              ljlkjl
              <Draggable>
                <div className="z-100 relative w-[300px] h-[300px] flex flex-col bg-background text-foreground border border-foreground shadow-lg">
                  <div className="handle select-none cursor-grab px-1 py-0 bg-foreground text-background text-sm font-tiny5 uppercase">
                    Accessing...
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4 border border-foreground/50 font-ibm-plex-mono text-sm">
                      This is the window content.
                    </div>
                  </div>
                </div>
              </Draggable>
            </div>
        </div>
    </div>
  );
}