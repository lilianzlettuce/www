"use client";

import { useState } from "react";
import { DefaultSlider } from "@/components/Slider";
import ShrinkCircles from "@/components/canvasGraphics/ShrinkCircles";
import { mapTo } from "@/lib/utils";
import { WindowTechMono } from "@/components/Windows";
import { DevIcon } from "@/components/svg/Icons";

export default function ToneCanvasPage() {
  const [dotResolution, setDotResolution] = useState(100);
  const [dotResolutionInput, setDotResolutionInput] = useState(dotResolution.toString());
  const [minRadius, setMinRadius] = useState(0.1);
  const [minRadiusInput, setMinRadiusInput] = useState(minRadius.toString());
  const [maxRadius, setMaxRadius] = useState(3.8);
  const [maxRadiusInput, setMaxRadiusInput] = useState(maxRadius.toString());

  const [interactive, setInteractive] = useState(true);
  const [transparent, setTransparent] = useState(false);

  const [mouseEase, setMouseEase] = useState(0.85);
  const [mouseEaseInput, setMouseEaseInput] = useState(mouseEase.toString());

  const imageURL = "/img/lowRes/brain.png";
  //const imageURL = "/img/lowRes/hand-ok-2.png";
  //const imageURL = "/img/lowRes/goose.png";
  //const imageURL = "/img/lowRes/hands-outreached.jpg";
  //const imageURL = "/img/lowRes/brain-top.jpg";

  function handleCopyToClipboard() {
    const canvas = document.getElementById("tone-experiment-canvas") as HTMLCanvasElement;

    // Convert canvas content to Blob 
    canvas.toBlob((blob) => {
      if (blob) {
        // Create clipboard item with image Blob
        const item = new ClipboardItem({ 'image/png': blob });

        // Write clipboard item to the clipboard
        navigator.clipboard.write([item])
          .then(() => {
            alert('Copied');
          })
          .catch(err => {
            console.error('Failed to copy canvas:', err);
            alert('Failed to copy.');
          });
      } else {
        alert('Failed to create image from canvas.');
      }
    }, 'image/png'); // image format
  }

  function handleDownload() {
    const canvas = document.getElementById("tone-experiment-canvas") as HTMLCanvasElement;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = imageURL.split("/").pop()?.split(".")[0] + "-" + new Date().toISOString().split("T")[0] + ".png";
    link.click();
  }

  return (
    <div className="w-screen min-h-screen bg-background px-20 py-10 flex justify-between">

      <WindowTechMono className="relative top-0 left-0 w-fit h-fit"
        dragHandleClassName="bg-background text-foreground border-b-1 border-foreground"
        dragHandleIcon={<DevIcon className="w-2.5 h-2.5 mr-1" strokeWidth={0} />}
        dragHandleText="Settings"
      >
        <div className="flex flex-col justify-center p-8">
          <div className="flex gap-6 mb-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={interactive}
                onChange={e => setInteractive(e.target.checked)}
              />
              Interactive
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={transparent}
                onChange={e => setTransparent(e.target.checked)}
              />
              Transparent
            </label>
          </div>
          <div>
            <label htmlFor="dotResolutionSlider">Dot Resolution</label>
            <div className="flex items-center gap-2">
              <DefaultSlider 
                id="dotResolutionSlider"
                aria-labelledby="dotResolutionLabel"
                min={150}
                max={300}
                step={1}
                value={[dotResolution]}
                onValueChange={(value) => {
                  setDotResolution(value[0]);
                  setDotResolutionInput(value[0].toString());
                }}
              />
              <input 
                id="dotResolutionInput"
                aria-labelledby="dotResolutionLabel"
                type="number" 
                value={dotResolutionInput}
                min="150" 
                max="300" 
                step="1"
                onChange={(e) => setDotResolutionInput(e.target.value)}
                onKeyDown={(e) => {
                  const val = e.currentTarget.valueAsNumber;
                  if (e.key === "Enter" && val) {
                    setDotResolution(val);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="minRadiusSlider" id="minRadiusLabel">Min Radius</label>
            <div className="flex items-center gap-2">
              <DefaultSlider 
                id="minRadiusSlider"
                aria-labelledby="minRadiusLabel"
                min={0}
                max={2}
                step={0.1}
                value={[minRadius]}
                onValueChange={(value) => {
                  setMinRadius(value[0]);
                  setMinRadiusInput(value[0].toString());
                }}
              />
              <input 
                id="minRadiusInput"
                aria-labelledby="minRadiusLabel"
                type="number" 
                value={minRadiusInput}
                min="0"
                max="2"
                step="0.1"
                onChange={(e) => setMinRadiusInput(e.target.value)}
                onKeyDown={(e) => {
                  const val = e.currentTarget.valueAsNumber;
                  if (e.key === "Enter" && val) {
                    setMinRadius(val);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="maxRadiusSlider" id="maxRadiusLabel">Max Radius</label>
            <div className="flex items-center gap-2">
              <DefaultSlider 
                id="maxRadiusSlider"
                aria-labelledby="maxRadiusLabel"
                min={1}
                max={12}
                step={0.1}
                value={[maxRadius]}
                onValueChange={(value) => {
                  setMaxRadius(value[0]);
                  setMaxRadiusInput(value[0].toString());
                }}
              />
              <input 
                id="maxRadiusInput"
                aria-labelledby="maxRadiusLabel"
                type="number" 
                value={maxRadiusInput}
                min="1"
                max="12"
                step="0.1"
                onChange={(e) => setMaxRadiusInput(e.target.value)}
                onKeyDown={(e) => {
                  const val = e.currentTarget.valueAsNumber;
                  if (e.key === "Enter" && val) {
                    setMaxRadius(val);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="mouseEaseSlider" id="mouseEaseLabel">Mouse Ease</label>
            <div className="flex items-center gap-2">
              <DefaultSlider 
                id="mouseEaseSlider"
                aria-labelledby="mouseEaseLabel"
                min={0.1}
                max={20}
                step={0.01}
                value={[mouseEase]}
                onValueChange={(value) => {
                  setMouseEase(value[0]);
                  setMouseEaseInput(value[0].toString());
                }}
              />
              <input 
                id="mouseEaseInput"
                aria-labelledby="mouseEaseLabel"
                type="number" 
                value={mouseEaseInput}
                min="0.1"
                max="20"
                step="0.01"
                onChange={(e) => setMouseEaseInput(e.target.value)}
                onKeyDown={(e) => {
                  const val = e.currentTarget.valueAsNumber;
                  if (e.key === "Enter" && val) {
                    setMouseEase(val);
                  }
                }}
              />
            </div>
          </div>

          <div>
          </div>
          <button 
            onClick={handleCopyToClipboard}
          >
            Copy to clipboard
          </button>
          <button
            onClick={handleDownload}
          >
            Download Image
          </button>
        </div>
      </WindowTechMono>

      <WindowTechMono className="z-45 relative top-0 left-0 w-fit h-fit"
        dragHandleClassName="bg-background text-foreground border-b-1 border-foreground"
        dragHandleIcon={<DevIcon className="w-2.5 h-2.5 mr-1" strokeWidth={0} />}
        dragHandleText="Accessing..."
      >
        <div className="relative flex flex-col items-center justify-center gap-0">
          <div>
            <ShrinkCircles 
              id="tone-experiment-canvas"
              interactionMode={interactive ? "shrink" : "none"}
              transparent={transparent}
              imageSrc={imageURL}
              scaleFactor={1}
              gridGap={mapTo(dotResolution, 72, 300, 30, 1)}
              defaultRadius={3}
              dotColor="#000000"
              attractionDistance={200}
              shrinkFactor={1}
              minRadius={minRadius}
              maxRadius={maxRadius}
              delayFactor={mouseEase}
              delayCap={0.1}
              debounceTime={3000000}
              autoAnimStep={0.03}
            />
          </div>
        </div>
      </WindowTechMono>

        
        {/*

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
        </div>
        
        <div className="bg-white">
          <ShrinkCircles 
            imageSrc="/img/lowRes/brain.png"
            scaleFactor={2}
            gridGap={3}
            circleColor="blue"
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
        */}

        {/* Background canvases

        <div className="bg-white">
          <ShrinkCircles 
            gridGap={5}
            circleColor="black"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            defaultRadius={4}
            maxRadius={3.8}
            delayFactor={0.85}
            delayCap={0.1}
            debounceTime={300000}
            autoAnimStep={0.03}
          />
        </div>
        
        <div className="bg-white">
          <ShrinkCircles 
            gridGap={4}
            circleColor="black"
            attractionDistance={200}
            shrinkFactor={1}
            minRadius={0.1}
            defaultRadius={4}
            maxRadius={3.8}
            delayFactor={10}
            delayCap={10}
            debounceTime={300000}
            autoAnimStep={0.03}
          />
        </div>

        */}


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
  );
} 