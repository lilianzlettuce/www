import { BrainLight, BrainDarkMouseLight, BrainDarkMouseDark } from "./ToneCanvas";
import { DraggableWindow } from "../DraggableWindow";

export default function Hero() {
    
    return (
      <section className="relative h-screen min-h-screen py-[400px] flex items-center justify-start">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="h-fit absolute left-5/12">
        <DraggableWindow />
        {/*<BrainLight imageSrc="/img/lowRes/brain.png" />
        <BrainDarkMouseLight imageSrc="/img/lowRes/brain.png" />
        <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" />*/}
        <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" tooltipText="POKE" />
      </div>
      <div className="relative z-10 text-left max-w-lg px-4 sm:px-6 lg:px-8">
        <h1 className="font-uncut-sans text-md md:text-2xl font-medium text-foreground mb-6">
          Hello, I&apos;m <span className="text-foreground font-black">a rat in three trenchcoats</span>.
        </h1>
        <p className="font-mono text-md md:text-lg text-mutedForeground mb-8 max-w-2xl mx-auto">
          UI Engineer and artist exploring spaces between pixels and atoms.
        </p>
      </div>
    </section>
    );
}