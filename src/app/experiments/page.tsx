import GooseMarquee from "@/components/GooseMarquee";
/*import CirclesCanvas from "@/components/canvasGraphics/CirclesCanvas";
import StarCanvas from "@/components/canvasGraphics/StarCanvas";
import GrowthCircles from "@/components/canvasGraphics/GrowthCircles";
import PixelCircle from "@/components/canvasGraphics/PixelCircle";
import GridCanvas from "@/components/canvasGraphics/GridCanvas";*/
//import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
//import GlitchCircle from "@/components/canvasGraphics/GlitchCircle";
/*import ImagePixelCanvas from "@/components/canvasGraphics/ImagePixelCanvas";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  { label: "Email", value: "hello@yourname.com", link: "mailto:hello@yourname.com" },
  { label: "LinkedIn", value: "linkedin.com/in/yourname", link: "https://linkedin.com/in/yourname" },
  { label: "GitHub", value: "github.com/yourname", link: "https://github.com/yourname" },
  { label: "Twitter", value: "@yourname", link: "https://twitter.com/yourname" }
];*/

export default async function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-background p-20">
      <div className="flex flex-col items-center justify-center gap-0">
        
        {/*<div className="z-10">
          <ImagePixelCanvas
            src="/img/lowRes/pineapple.jpg"
            scaleFactor={1.4}
            pointSize={2}           // Size of each point
            gridSize={2}            // Grid spacing (affects resolution)
            attractionDistance={20} // Mouse influence range
            debounceTime={3000000}     // Auto-animation delay
            autoAnimStep={0.01}
            maxRadius={55}
            animSpeed={1.1}
          />
        </div>

        <Image className="z-0 relative top-[-170px] left-[-20px]"
          src="/img/lowRes/rick.jpg" 
          alt="" 
          width={100}
          height={0}/>

        <ShrinkCircles 
          imageSrc="/img/lowRes/pineapple.jpg"
          scaleFactor={1.8}
          gridGap={2}
          circleColor="#000000"
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0.5}
          maxRadius={15}
          delayFactor={0.85}
          delayCap={0.1}
          debounceTime={3000}
        />
        
        <ShrinkCircles 
          imageSrc="/img/lowRes/pineapple4.jpg"
          scaleFactor={1.8}
          gridGap={2}
          circleColor="#000000"
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0.5}
          maxRadius={4}
          delayFactor={0.85}
          delayCap={0.1}
          debounceTime={3000}
          autoAnimStep={0.03}
        />
        
        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/brain.png"
            scaleFactor={1}
            gridGap={3}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={3.8}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>
        
        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/heart.png"
            scaleFactor={1.2}
            gridGap={4}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={2}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>

        // higher res version
        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/heart.png"
            scaleFactor={1.2}
            gridGap={3}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={1.6}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>

        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/tooth.png"
            scaleFactor={1.2}
            gridGap={2}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.5}
            maxRadius={5}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>

        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/toothbrush.jpg"
            scaleFactor={1.2}
            gridGap={20}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={2.5}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>
        
        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/fire.png"
            scaleFactor={1}
            gridGap={10}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={2}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.03}
          />
        </div>

        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/heart.png"
            scaleFactor={1.2}
            gridGap={3}
            circleColor="#000000"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            maxRadius={1.6}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={3000}
            autoAnimStep={0.05}
          />
        </div>*/}

        {/*<div className="goose-sprite mb-8"></div>*/}
        
        {/* Goose Marquee Examples */}
        <div className="w-full relative -left-20 flex flex-col items-start justify-start gap-4">
          <GooseMarquee duration={30} count={3} scale={6} />
          <GooseMarquee duration={30} count={5} scale={4} />
          <GooseMarquee duration={30} count={20} scale={2} />
        </div>

        {/*

        <ShrinkCircles 
          imageSrc="/img/lowRes/jieg.jpeg"
          scaleFactor={0.8}
          gridGap={10}
          circleColor="#000000"
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0.5}
          maxRadius={4}
          delayFactor={0.85}
          delayCap={0.1}
          debounceTime={3000}
        />

        <ShrinkCircles 
          imageSrc="/img/lowRes/pineapple.jpg"
          scaleFactor={1.8}
          gridGap={2}
          circleColor="#000000"
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0.5}
          maxRadius={5}
          delayFactor={0.85}
          delayCap={0.1}
          debounceTime={3000000}
        />

        <ShrinkCircles 
          imageSrc="/img/lowRes/rick.jpg"
          scaleFactor={0.8}
          gridGap={6}
          defaultRadius={25}
          circleColor="#000000"
          attractionDistance={400}
          shrinkFactor={0.7}
          minRadius={0.5}
          maxRadius={11}
          delayFactor={0.85}
          delayCap={0.1}
        />

        <ShrinkCircles 
          imageSrc="/img/lowRes/pineapple3.jpg"
          scaleFactor={1}
          gridGap={10}
          circleColor="#000000"
          attractionDistance={200}
          shrinkFactor={1}
          minRadius={0.5}
          maxRadius={4}
          delayFactor={0.85}
          delayCap={0.1}
          debounceTime={3000000}
        />

        <GridCanvas 
          gridSize={5}
          pointColor="#000000"
          pointSize={5}
          attractionDistance={50}
        />

        <GlitchCircle 
          pixelSize={20}
          circleColor="rgb(0, 0, 0, 0)"
          circleEndColor="rgb(255, 0, 255)"
          attractionDistance={30}
        />

        <PixelCircle 
          pixelSize={50}
          circleColor="rgb(255, 255, 0)"
          circleEndColor="rgb(255, 0, 255)"
          attractionDistance={100}
          shrinkFactor={1.1}
          minRadius={0.5}
          easeInFactor={20}
        />

        <ShrinkCircles 
          gridGap={25}
          defaultRadius={45}
          circleColor="#000000"
          attractionDistance={900}
          shrinkFactor={1}
          minRadius={0.5}
          easeInFactor={0.85}
        />

        <GrowthCircles 
          gridGap={25}
          defaultRadius={1}
          circleColor="#000000"
          attractionDistance={500}
          growthFactor={18}
          minRadius={1}
          easeInFactor={0.7}
        />  

        <CirclesCanvas />

        <StarCanvas 
          numLines={8}
          lineLength={100}
          starColor="#ff6b6b"
          pointSize={3}
          gridSize={5}
          lineThickness={5.5}
          debounceTime={5500}
        />

        <StarCanvas 
          numLines={12}
          lineLength={100}
          starColor="#ff6b6b"
          pointSize={10}
          gridSize={10}
          lineThickness={5.5}
          debounceTime={5500}
        />
        
        <StarCanvas 
          numLines={12}
          lineLength={100}
          starColor="#ff6b6b"
          pointSize={10}
          gridSize={1}
          lineThickness={5.5}
          debounceTime={5500}
        />

        <StarCanvas 
          numLines={12}
          lineLength={100}
          starColor="#ff6b6b"
          pointSize={1}
          gridSize={1}
          lineThickness={20}
          debounceTime={5500}
        />

        <StarCanvas 
          numLines={12}
          lineLength={150}
          starColor="#ff6b6b"
          pointSize={1}
          gridSize={1}
          lineThickness={1}
          debounceTime={5500}
        />*/}

        {/* Use below to test if html elements work on top of canvas. */}
        {/*<div className="absolute z-0">
          <CirclesCanvas />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center gap-4">
          <h1> Hello friend blah blah blah whatever</h1>
          <Link 
            href="/work" 
            className="bg-primary text-primaryForeground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </Link>
        </div>
        <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 top-24">
          <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Your Photo</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Your Name</h3>
          <p className="text-gray-600 text-center mb-6">
            Full Stack Developer & Designer
          </p>

          <div className="space-y-3">
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center space-x-3">
                <span className="text-gray-500 text-sm w-16">{contact.label}:</span>
                <a 
                  href={contact.link} 
                  className="text-blue-600 hover:text-blue-700 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
} 