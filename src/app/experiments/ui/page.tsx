"use client";

import { NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button, RevealButton, RevealButton2 } from "@/components/Buttons";
import Link from "next/link";
import { PlusIcon, PlusIconThin } from "@/components/svg/Icons";

export default function UIExperimentsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <NavBarGrid />
        <NavBarBasic />
        <NavBarFloating />
        <div className="relative w-screen min-h-screen p-48 flex flex-col items-center justify-center">
          <h1 className="whitespace-nowrap font-psygen uppercase text-[130px] font-bold">
            UI Experiments
          </h1>
          <h1 className="blur-xs whitespace-nowrap font-archivo-black uppercase text-8xl font-bold">
            UI Experiments
          </h1>
          
          <h1 className="font-roboto-mono text-4xl font-bold">UI Experiments</h1>
          <p className="text-lg">
            This is a page for UI experiments.
          </p>

          <h1 className="glitch-text whitespace-nowrap font-psygen uppercase text-[130px] font-bold"
            data-text="UI Experiments"
          >
            UI Experiments
          </h1>
          <h1 className="glitch-text blur-xs whitespace-nowrap font-archivo-black uppercase text-8xl font-bold"
            data-text="UI Experiments"
          >
            UI Experiments
          </h1>
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
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-background">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-mono text-xl md:text-xl font-bold text-foreground mb-6">
              Hello, I&apos;m <span className="text-foreground">a rat in three trenchcoats</span>.
            </h1>
            <p className="font-mono text-xl md:text-lg text-mutedForeground mb-8 max-w-2xl mx-auto">
              UI Engineer and artist exploring spaces between pixels and atoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work" 
              >
                <RevealButton 
                  text="View My Work" 
                  icon="→" 
                  className="h-fit px-6 py-1 rounded-full" 
                />
              </Link>
              <Link 
                href="/about" 
              >
                <RevealButton2 
                  text="Learn More" 
                  icon="•" 
                  className="h-fit px-6 py-1 rounded-full bg-background border-1 border-secondary hover:bg-foreground/20" 
                />
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}