import { NavBar, NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button } from "@/components/Button";

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
        </div>
    </div>
  );
}