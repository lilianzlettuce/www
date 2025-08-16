import { useScramble } from 'use-scramble';

export const ScrambleText = () => {
  const { ref } = useScramble({
    text: 'Achilles next, that nimble runner, swift on his feet as the wind',
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  return <p ref={ref} />;
};