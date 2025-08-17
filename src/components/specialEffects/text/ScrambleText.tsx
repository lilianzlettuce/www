import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
}
  
export default function ScrambleText ({ text, className }: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text: text,
    playOnMount: true,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 5,
    //range: [33, 47],
    overdrive: false,
  });

  return <p ref={ref} className={className} onMouseOver={replay} />;
};