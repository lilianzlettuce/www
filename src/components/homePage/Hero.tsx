import { BrainDarkMouseDark, /*BrainDarkMouseLight, BrainLight*/ } from "./ToneCanvas";
import { HeroWindow } from "../Windows";
import ZoomableImage from "../ZoomableImage";
import { /*CycleText,*/ CycleTextBlend } from "../specialEffects/text/CycleText";

export default function Hero() {
    return (
      <section className="relative overflow-hidden sm:h-screen sm:min-h-screen py-10 sm:py-[400px] flex flex-col sm:flex-row items-center justify-start">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        {/* Text */}
        <div className="relative z-10 text-left w-11/12 sm:w-1/2 h-30 sm:h-fit px-4 sm:px-6 lg:px-8">
          <h1 className="font-ibm-plex-mono text-base md:text-2xl font-bold text-foreground mb-6">
            Hello, I&apos;m&nbsp;
              <CycleTextBlend
                className="w-40 inline-block whitespace-nowrap text-base md:text-2xl font-bold italic"
                texts={[
                  "Lilian",
                  "lettuce",
                  "not a robot.",
                  "a rat in three trenchcoats.",
                  "just some guy on the internet.",
                  "a bag of meat.",
                  "never gonna give you up.",
                  //"not even here.",
                  "your mother",
                ]}
                scrambleProps={{
                  range: [33, 47],
                  replayOnHover: true,
                }}
              />
          </h1>
          <p className="font-roboto-mono text-xs md:text-sm text-foreground mb-8 max-w-2xl mx-auto">
            UI Engineer and artist exploring spaces between pixels and atoms.
          </p>
        </div>
        {/* Graphics */}
        <div className="h-fit relative top-1/12 sm:top-0 left-1/12">
          <HeroWindow className="z-10 w-60 sm:w-[300px] h-40 sm:h-fit -translate-x-20 -translate-y-10 sm:-translate-x-10 sm:translate-y-4"
            dragHandleText="Greetings"
          >
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
          </HeroWindow>
          <div className="sm:w-full sm:h-full">
            {/*<BrainLight imageSrc="/img/lowRes/brain.png" />
            <BrainDarkMouseLight imageSrc="/img/lowRes/brain.png" />
            <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" tooltipText="POKE" />*/}
            <BrainDarkMouseDark imageSrc="/img/lowRes/brain.png" tooltipText="POKE" />
          </div>
        </div>
    </section>
    );
}