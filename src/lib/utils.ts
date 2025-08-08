// Utility functions for general use

import { getCategoryIcon as getCategoryIconFromData } from "./data";

/**
 * Maps a value from one range to another.
 * @param val The value to map
 * @param min The lower bound of the current range
 * @param max The upper bound of the current range
 * @param newMin The lower bound of the target range
 * @param newMax The upper bound of the target range
 * @returns The mapped value in the new range
 */
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

// Re-export the category icon function for convenience
export const getCategoryIcon = getCategoryIconFromData; 