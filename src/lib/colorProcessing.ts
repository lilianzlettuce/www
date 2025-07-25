export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
}
export type ColorChannel = keyof Color;

export function parseColorString(colorString: string): Color | null {
  const regex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)$/;
  const match = colorString.match(regex);
  if (!match) return null;

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const a = match[4] !== undefined ? Number(match[4]) : 1;

  if (
    [r, g, b].some((v) => v < 0 || v > 255) ||
    a < 0 || a > 1
  ) {
    return null; // out of range values
  }

  return { r, g, b, a };
}

export function colorToString(color: Color): string {
  const { r, g, b, a } = color;
  if (a === undefined || a === 1) {
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  } else {
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${+a.toFixed(3)})`;
  }
}  

// Takes in a color and a function specifying how to transform it
export function mapColor(
  color: Color,
  fn: (value: number, channel: ColorChannel) => number
): Color {
  const result = {} as Color;
  (["r", "g", "b", "a"] as ColorChannel[]).forEach((channel) => {
      result[channel] = fn(color[channel], channel);
  });
  return result;
}

export function getRandomGlitchColor(): Color {
  const palette = [
    { r: 255, g: 0, b: 0, a: 1 },      // red
    { r: 0, g: 255, b: 0, a: 1 },      // green
    { r: 0, g: 0, b: 255, a: 1 },      // blue
    { r: 255, g: 255, b: 0, a: 1 },    // yellow
    { r: 0, g: 255, b: 255, a: 1 },    // cyan
    { r: 255, g: 0, b: 255, a: 1 },    // magenta
    { r: 255, g: 255, b: 255, a: 1 },  // white
    { r: 0, g: 0, b: 0, a: 1 },        // black
    { r: 0, g: 0, b: 0, a: 0 },        // clear
  ];
  return palette[Math.floor(Math.random() * palette.length)];
}
  
export function getBrightness(color: Color): number {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
}

// New function: getAlphaBrightness
// If brightness is low, lower alpha increases brightness; if brightness is high, lower alpha decreases brightness.
export function getAlphaBrightness(color: Color): number {
  const brightness = getBrightness(color);
  // Normalize brightness to [0, 1]
  const normBrightness = brightness / 255;
  // If dark, lower alpha increases brightness; if bright, lower alpha decreases brightness
  if (normBrightness < 0.5) {
    // For dark colors, blend toward white as alpha decreases
    return brightness + (1 - color.a) * (255 - brightness);
  } else {
    // For bright colors, blend toward black as alpha decreases
    return brightness - (1 - color.a) * brightness;
  }
}