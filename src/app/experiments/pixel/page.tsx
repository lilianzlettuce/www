import GooseMarquee from "@/components/GooseMarquee";
import { NavBar } from "@/components/NavBar";
import Sprite from "@/components/Sprite";

export default async function PixelPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="p-20">
        <div className="flex flex-col items-center justify-center gap-0">
          <div className="flex flex-col items-center justify-center gap-0">
            <h1 className="text-4xl font-bold">Pixel Experiments</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-0">
          
          {/* Sprite Component Examples */}
          <div className="mb-8 w-full">
            <h2 className="text-lg font-semibold mb-4">Sprite Component Examples:</h2>
            <div className="flex gap-8 items-center mb-8">
              <div>
                <h3 className="text-sm font-medium mb-2">Goose (4 steps, 1s)</h3>
                <Sprite
                  id="finite-goose"
                  spriteSize={32}
                  numRows={1}
                  numCols={4}
                  backgroundImage="/img/sprite/goose-walk2.png"
                  steps={3}
                  duration={1}
                  style={{ scale: 3 }}
                  iterationCount="1"
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Goose with Different Hover Sprite</h3>
                <Sprite
                  id="infinite-goose"
                  spriteSize={32}
                  numRows={1}
                  numCols={4}
                  backgroundImage="/img/sprite/goose-walk2.png"
                  steps={4}
                  duration={1}
                  onHover={true}
                  hoverSteps={4}
                  hoverDuration={0.5}
                  style={{ scale: 3 }}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Goose with Different Hover Sprite</h3>
                <Sprite
                  id="eye-sprite"
                  spriteSize={15}
                  numRows={3}
                  numCols={5}
                  backgroundImage="/img/sprite/eye-sprite.png"
                  steps={1}
                  duration={1}
                  row={0}
                  hoverRow={2}
                  onHover={true}
                  hoverSteps={5}
                  hoverDuration={0.5}
                  style={{ scale: 3 }}
                  iterationCount="1"
                />
              </div>
            </div>
          </div>
          
          {/* Goose Marquee Examples */}
          <div className="w-full relative -left-20 flex flex-col items-start justify-start gap-4">
            <GooseMarquee duration={10} count={3} scale={6} />
            <GooseMarquee duration={30} count={5} scale={4} />
            <GooseMarquee duration={30} count={20} scale={2} />
          </div>
        </div>
      </div>
    </div>
  );
} 