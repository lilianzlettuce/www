import ImagePixelCanvas from "@/components/canvasGraphics/ImagePixelCanvas";
import Image from "next/image";

export default async function PixelCanvasPage() {
  return (
    <div className="min-h-screen bg-background p-20">
      <div className="flex flex-col items-center justify-center gap-0">
        
        <div className="z-10">
          <ImagePixelCanvas
            src="/img/lowRes/pineapple.jpg"
            scaleFactor={1.4}
            pointSize={2}           // Size of each point
            gridSize={2}            // Grid spacing (affects resolution)
            attractionDistance={20} // Mouse influence range
            debounceTime={3000}     // Auto-animation delay
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

        

      </div>
    </div>
  );
} 