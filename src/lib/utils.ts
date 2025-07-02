export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
}
export type ColorChannel = keyof Color;

export function mapTo(
    val: number, 
    min: number, 
    max: number, 
    newMin: number, 
    newMax: number
) {
    // Maps val to a range of 0 - 1
    const ratio = (val - min) / (max - min);

    // Map to new given range
    return newMin + ratio * (newMax - newMin); 
}

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