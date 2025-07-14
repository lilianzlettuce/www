import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";

export default async function ToneCanvasPage() {
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

        */}

      </div>
    </div>
  );
} 