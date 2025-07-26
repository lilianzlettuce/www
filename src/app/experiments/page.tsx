import GrowthCircles from "@/components/canvasGraphics/GrowthCircles";
import PixelCircle from "@/components/canvasGraphics/PixelCircle";
import GridCanvas from "@/components/canvasGraphics/GridCanvas";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import GlitchCircle from "@/components/canvasGraphics/GlitchCircle";
import PixelTrail from "@/components/canvasGraphics/PixelTrail";

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

        <GridCanvas 
          gridSize={5}
          pointColor="#000000"
          pointSize={5}
          attractionDistance={50}
          debounceTime={9999900}
        />

        <div className="w-screen h-screen flex flex-col items-start justify-center">
          <p className="text-[200px] font-bold">Glitch Circle</p>
          <p className="text-sm">
            This is a glitch circle. It is a glitchy circle that is made up of pixels.
          </p>
          <div className="absolute mix-blend-difference">
            <GlitchCircle 
              pixelSize={20}
              circleColor="rgb(0, 0, 0, 0)"
              circleEndColor="rgb(255, 0, 255)"
              attractionDistance={30}
              glitchDebounceTime={100}
            />
          </div>
        </div>

        <div className="w-screen h-screen flex flex-col items-start justify-center">
          <p className="text-[200px] font-bold">Pixel Circle</p>
          <p className="text-sm">
            This is a pixel circle. It is a circle that is made up of pixels.
          </p>
          <div className="absolute mix-blend-difference">
            <PixelCircle 
              pixelSize={30}
              circleColor="rgb(0, 0, 0)"
              circleEndColor="rgb(255, 0, 255)"
              attractionDistance={60}
              shrinkFactor={1.1}
              minRadius={0.5}
              easeInFactor={20}
              debounceTime={99999}
            />
          </div>
        </div>

        <div className="w-screen h-screen flex flex-col items-start justify-center">
          <p className="text-[200px] font-bold">Pixel Trail</p>
          <p className="text-sm">
            This is a pixel trail. It is a trail that is made up of pixels.
          </p>
          <div className="absolute mix-blend-difference">
            <PixelTrail 
              pixelSize={60}
              circleColor="rgb(0, 0, 0)"
              circleEndColor="rgb(255, 255, 255)"
              attractionDistance={45}
              shrinkFactor={1.1}
              minRadius={0.5}
              easeInFactor={20}
              trailDebounceTime={100}
              drawMode={true}
            />
          </div>
        </div>

        <ShrinkCircles 
          gridGap={25}
          defaultRadius={45}
          circleColor="#000000"
          attractionDistance={900}
          shrinkFactor={1}
          minRadius={0.5}
          delayFactor={0.85}
          delayCap={0.1}
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

        {/* 

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