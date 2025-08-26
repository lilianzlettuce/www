import { socialLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { WindowTechMono } from "@/components/Windows";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { GridContainer } from "@/components/svg/BgPatterns";
import { DevIcon, DesignIcon, ArtIcon } from "@/components/svg/Icons";
import ScrambleText from "@/components/specialEffects/text/ScrambleText";

export default function About() {
  const skills = [
    { category: "List 1", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "List 2", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
  ];

  return (
    <div className="w-full flex flex-col px-4 py-4 sm:px-6 lg:px-8">

      <AboutPageHeader />
    
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="flex py-12">
          <div>
            <p className="text-base max-w-2xl">
              Hello — I’m Lilian! I'm a student studying Computer Science at Purdue University, and I like making things, especially when it involves mixed reality, web based solutions, human-computer interaction, and game development.
            </p>
          </div>
          
          {/*<ShrinkCircles 
            imageSrc="/img/lowRes/pineapple.jpg"
            scaleFactor={1.8}
            gridGap={2}
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.5}
            maxRadius={5}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
          />*/}
          
          <ShrinkCircles 
            className="w-fit h-fit"
            interactionMode="none"
            showStats={false}
            imageSrc="/img/lowRes/pineapple4.jpg"
            scaleFactor={1.8}
            gridGap={3}
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.5}
            maxRadius={4}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Photo and Contact */}
            <div className="lg:col-span-1">
              <div className="p-6 sticky top-24">

                <div className="space-y-3">
                  {socialLinks.map((contact) => (
                    <div key={contact.label} className="flex items-center space-x-3">
                      <span className="text-gray-500 text-sm w-16">{contact.label}:</span>
                      <a 
                        href={contact.href} 
                        className="text-blue-600 hover:text-blue-700 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Story */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Large block of text</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    I&apos;m a passionate developer with over 5 years of experience building web applications 
                    and digital experiences. My journey in tech started when I built my first website 
                    in high school, and I&apos;ve been hooked ever since.
                  </p>
                  <p className="text-gray-600 mb-4">
                    I believe in creating software that not only works well but also provides a 
                    delightful user experience. Whether it&apos;s a simple landing page or a complex 
                    web application, I approach every project with the same level of care and attention to detail.
                  </p>
                  <p className="text-gray-600">
                    When I&apos;m not coding, you can find me reading tech blogs, experimenting with new 
                    technologies, or exploring the outdoors for inspiration.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Stuff</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                <div className="bg-background p-8 text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
                  <p className="text-blue-100 mb-6">
                    I&apos;m always interested in new opportunities and exciting projects. 
                    Let&apos;s discuss how we can bring your ideas to life.
                  </p>
                  <Link 
                    href="mailto:hello@yourname.com" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 

export function AboutPageHeader() {
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
                                  <ScrambleText
                                      text="About"
                                      className="w-fit text-4xl md:text-6xl/[0.8] font-micro5 font-bold text-foreground uppercase mb-4"
                                      replayOnHover={true}
                                  />
                                  <ScrambleText
                                      text="What are you even searching for?"
                                      className="text-xs text-muted-foreground"
                                  />
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
                              id="work-page-header-2-grid"
                              className="min-w-1/2 h-full pt-2 px-6 border-1 border-border flex items-center justify-center"
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
              </WindowTechMono>
          </div>
      </div>
  );
}