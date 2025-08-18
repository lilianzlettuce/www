import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  tick?: number;
  step?: number;
  scramble?: number;
  seed?: number;
  range?: [number, number];
  overdrive?: boolean;
}
  
export default function ScrambleText ({ 
  text, 
  className,
  speed = 0.6,
  tick = 1,
  step = 1,
  scramble = 4,
  seed = 5,
  range = [65, 125],
  overdrive = false
}: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text: text,
    playOnMount: true,
    speed,
    tick,
    step,
    scramble,
    seed,
    range, //range: [33, 47],
    overdrive,
  });

  return <p ref={ref} className={className} onMouseOver={replay} />;
};