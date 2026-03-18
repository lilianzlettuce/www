import { socialLinks } from "@/lib/data";
import Link from "next/link";
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
    <div className="overflow-x-hidden w-full max-w-full flex flex-col items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      {/* Header */}
      <WindowTechMono className="w-full 2xl:w-11/12">
        <div className="w-full h-full p-4 flex flex-col gap-4">
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-4 font-ibm-plex-mono text-xs">
                {/* Left text */}
                <div className="w-full md:w-1/2 lg:w-fit flex flex-col gap-4">
                    <div className="w-fit text-left">
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
                  <div className="h-full p-4 py-6">
                    <p className="font-roboto-mono text-xs max-w-2xl">
                      Hello — I&apos;m lettuce! I make stuff sometimes
                      <br/>
                      <br/>
                      I&apos;m currently a senior studying Computer Science at Purdue University. I enjoy dabbling in web based solutions, human-computer interaction, data analysis/visualization, mixed reality, game development, and whatever else catches my interest.
                      <br/>
                      <br/>
                      <br/>
                      My artwork combines digital media and physical computing to explore agency, consciousness, and the interplay between the organic and the artificial in the age of intelligent machines. I utilize data-driven graphics, reprogrammed electronics, and responsive soundscapes to investigate metaphysical relationships between body and mind. 
                      <br/>
                      <br/>
                      <br/>
                      right now I am working on: finishing this website
                    </p>
                    <p className="hidden text-base max-w-2xl">
                      Hello — I&apos;m Lilian! I&apos;m a student studying Computer Science at Purdue University, and I like making things, especially when it involves mixed reality, web based solutions, human-computer interaction, and game development.
                    </p>
                  </div>
                </GridContainer>

                </div>

                {/* Right window display */}
                <div className="relative overflow-hidden w-fit sm:w-fit sm:min-w-80 lg:min-w-fit h-120 bg-background border-1 border-border">
                  <ShrinkCircles 
                    className="overflow-hidden max-w-full"
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
                  />
                  {/*<ShrinkCircles 
                    className="w-fit h-fit"
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
                  />*/}
                </div>
            </div>

            <div className="w-full flex flex-row justify-between font-roboto-mono">
                <div className="flex flex-col items-start gap-2">
                    <p className="text-xs text-muted-foreground">
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

      <section className="hidden">
        <div className="flex flex-col sm:flex-row py-12">
          <div className="sm:w-[48%] mr-4">
            <p className="font-mono text-sm max-w-2xl">
              Hello — I&apos;m lettuce! I make stuff sometimes
              <br/>
              <br/>
              I started rebuilding my website 6 months ago and trashed my previous about. I am now struggling to formulate good description of who I am. Until then we will have to make do with this...
              <br/>
              <br/>
              <br/>
              right now I am working on: finishing this website
            </p>
            <p className="hidden text-base max-w-2xl">
              Hello — I&apos;m Lilian! I&apos;m a student studying Computer Science at Purdue University, and I like making things, especially when it involves mixed reality, web based solutions, human-computer interaction, and game development.
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
          />
          
          <div className="sm:w-1/2">
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
          </div>*/}
        </div>
      </section>

      {/* Main Content */}
      <section className="hidden py-16">
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