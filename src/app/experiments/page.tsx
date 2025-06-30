import CirclesCanvas from "@/components/canvasGraphics/CirclesCanvas";
import Squares from "@/components/canvasGraphics/Squares";

export default async function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-background p-20">
      <div className="flex flex-col items-center justify-center gap-20">
        <CirclesCanvas />
        <Squares />
        <canvas id="starCanvas" className="relative xl:-ml-[58px] lg:-ml-[50px] md:-ml-[40px] sm:left-0 left-0"></canvas>
      </div>
    </div>
  );
} 