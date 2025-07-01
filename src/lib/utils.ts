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