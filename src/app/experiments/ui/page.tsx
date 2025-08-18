"use client";

import { NavBarGrid, NavBarBasic, NavBarFloating } from "@/components/NavBar";
import { Button, RevealButton, RevealButton2 } from "@/components/Buttons";
import Link from "next/link";
import { PlusIcon, PlusIconThin } from "@/components/svg/Icons";
import BlendText from "@/components/specialEffects/text/BlendText";
import ScrambleText from "@/components/specialEffects/text/ScrambleText";
import { MultiSliceText, RollingSliceText } from "@/components/specialEffects/text/SliceText";
import { CycleText } from "@/components/specialEffects/text/CycleText";

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
          <h1 className="whitespace-nowrap font-archivo-black uppercase text-8xl font-bold">
            UI Experiments
          </h1>
          
          <h1 className="font-roboto-mono text-4xl font-bold">UI Experiments</h1>
          <p className="text-lg">
            This is a page for UI experiments.
          </p>

          <ScrambleText 
            text="This is a page for UI experiments." 
            className="min-w-100 text-lg"
          />

          <div className="my-8 p-8 border-y-2 border-gray-400 pt-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Cycle Text</h2>

            <CycleText 
              texts={[
                "destroy the universe.",
                "build something new.",
                "start over again."
              ]}
              duration={4}
              className="text-3xl font-mono"
            />
          </div>

          {/* Slice text components */}
          <div className="mt-8 border-y-2 mb-6 border-gray-400 pt-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Slice Text</h2>

            <MultiSliceText 
              slices={3}
              maxOffset={12}
              minOffset={4}
              className="font-roboto-mono text-4xl font-bold"
              reRenderOnHover={true}
              randomizeHeights={true}
            >
              This is page for UI experiments.
            </MultiSliceText>

            <MultiSliceText 
              slices={3}
              maxOffset={8}
              className="my-4 font-roboto-mono text-4xl font-bold"
              reRenderOnHover={true}
            >
              rat in three trenchcoats.
            </MultiSliceText>

            <RollingSliceText 
              slices={5}
              bandHeightPct={5}
              maxOffset={3}
              className="my-4 font-roboto-mono whitespace-nowrap text-9xl font-bold"
            >
              rolling slice.
            </RollingSliceText>
          </div>

          {/* BlendText components */}
          <div className="mt-8 border-y-2 mb-6 border-gray-400 pt-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Blend Text</h2>

            {/* Chromatic Aberration */}
            <BlendText 
              className="mix-blend-normal text-center font-psygen uppercase text-[130px]/[1] font-bold"
              mainTextClassName="relative z-0 text-text-blend-secondary"
              layers={[
                {
                  className: "text-red mix-blend-screen blur-1 animate-glitch",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue mix-blend-screen blur-1 animate-glitch-reverse",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              Chromatic Aberration
            </BlendText>

            {/* Chromatic Aberration with slice */}
            <BlendText 
              className="mix-blend-normal text-center font-psygen uppercase text-[130px]/[1] font-bold"
              mainTextClassName="relative z-0 text-text-blend-secondary"
              layers={[
                {
                  className: "text-red mix-blend-screen blur-1 animate-glitch",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue mix-blend-screen blur-1 animate-glitch-reverse",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              <RollingSliceText 
                slices={5}
                bandHeightPct={5}
                maxOffset={3}
                className="font-roboto-mono whitespace-nowrap text-9xl font-bold"
              >
                with slice.
              </RollingSliceText>
            </BlendText>

            {/* Blur */}
            <BlendText 
              className="group whitespace-nowrap blur-[2px] font-archivo-black uppercase text-8xl font-bold"
              mainTextClassName="relative z-0 text-text-blend-secondary"
              layers={[
                {
                  className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_infinite]",
                  position: { x: 8, y: 6 },
                },
                {
                  className: "text-blue mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_reverse_both_infinite]",
                  position: { x: -6, y: -6 },
                },
              ]}
            >
              Blur
            </BlendText>

            {/* Distortion */}
            <BlendText 
              className="group whitespace-nowrap blur-[1px] font-archivo-black uppercase text-8xl font-bold"
              mainTextClassName="relative z-0 text-text-blend-secondary"
              layers={[
                {
                  className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_infinite]",
                  position: { x: 8, y: 6 },
                },
                {
                  className: "text-blue mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_reverse_both_infinite]",
                  position: { x: -6, y: -6 },
                },
              ]}
            >
              <MultiSliceText 
                slices={3}
                maxOffset={8}
                className="text-8xl"
                reRenderOnHover={true}
              >
                distortion.
              </MultiSliceText>
            </BlendText>

            {/* Glitch */}
            <BlendText 
              className="group whitespace-nowrap font-murmure uppercase text-[220px] font-bold"
              mainTextClassName="relative z-0 text-text-blend-primary"
              layers={[
                {
                  className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_infinite]",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue mix-blend-screen",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              Glitch
            </BlendText>

            {/* destroy the universe */}
            <div 
              className="mb-8"
              style={{ "--glitch-offset-y": "3px" } as React.CSSProperties}
            >
              <BlendText 
                className="group cursor-pointer whitespace-nowrap font-roboto-mono font-bold"
                mainTextClassName="relative z-0 text-text-blend-secondary"
                layers={[
                  {
                    className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: -4, y: 2 },
                  },
                  {
                    className: "text-blue mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: 2, y: -3 },
                  },
                ]}
              >
                <MultiSliceText 
                  slices={3}
                  maxOffset={8}
                  className="text-3xl"
                  reRenderOnHover={true}
                >
                  <ScrambleText 
                    text="destroy the universe." 
                    className="min-w-100 text-8xl"
                  />
                </MultiSliceText>
              </BlendText>
            </div>

            {/* rat in three trenchcoats */}
            <div 
              className="mb-8"
              style={{ "--glitch-offset-y": "3px" } as React.CSSProperties}
            >
              <BlendText 
                className="group cursor-pointer whitespace-nowrap font-roboto-mono font-bold"
                mainTextClassName="relative z-0 text-text-blend-secondary"
                layers={[
                  {
                    className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: -4, y: 2 },
                  },
                  {
                    className: "text-blue mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_1]",
                    position: { x: 2, y: -3 },
                  },
                ]}
              >
                <MultiSliceText 
                  slices={3}
                  maxOffset={8}
                  className="text-3xl"
                  reRenderOnHover={true}
                >
                  rat in three trenchcoats.
                </MultiSliceText>
              </BlendText>
            </div>

            {/* Melancholy Ice Cream */}
            <BlendText 
              className="whitespace-nowrap font-roboto-mono uppercase text-4xl font-bold"
              mainTextClassName="relative z-0 text-blue-300"
              layers={[
                {
                  className: "text-red mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_both_infinite]",
                  position: { x: 8, y: 6 },
                },
                {
                  className: "text-blue mix-blend-screen group-hover:animate-[glitch-erratic_0.3s_reverse_both_infinite]",
                  position: { x: -6, y: -6 },
                },
              ]}
            >
              Melancholy ice cream
            </BlendText>
            
            {/* We are all made of stars */}
            <BlendText 
              className="whitespace-nowrap text-lg font-roboto-mono uppercase"
              mainTextClassName="relative z-0 text-blue-300"
            >
              We are all made of stars
            </BlendText>

            {/* Glow */}
            <BlendText 
              className="whitespace-nowrap blur-[0px] font-murmure uppercase text-[230px] font-bold"
              mainTextClassName="relative z-0 text-blue-300"
              layers={[
                {
                  className: "text-red blur-xs mix-blend-screen",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue blur-xs mix-blend-screen",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              Glow
            </BlendText>


            {/* CSS 3D text */}
            <BlendText 
              className="mix-blend-normal whitespace-nowrap font-archivo-black lowercase tracking-widest text-[130px] font-bold"
              mainTextClassName="relative z-0 text-blue-500"
              layers={[
                {
                  className: "text-blue-400 blur-[1px] mix-blend-screen",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue-300 blur-[1px] mix-blend-screen",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              CSS 3D text
            </BlendText>

            <BlendText 
              className="mix-blend-normal whitespace-nowrap font-psygen uppercase text-[180px] font-bold"
              mainTextClassName="relative z-0 text-blue-500"
              layers={[
                {
                  className: "text-blue-400 blur-[1px] mix-blend-screen",
                  position: { x: 8, y: 2 },
                },
                {
                  className: "text-blue-300 blur-[1px] mix-blend-screen",
                  position: { x: 12, y: -2 },
                },
              ]}
            >
              CSS 3D text
            </BlendText>
            
          </div>

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