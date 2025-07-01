"use client";

import { useEffect, useRef } from "react";

// Custom hook to run animation frames
// Takes in callback function (where you can pass a custom draw function)
export function useAnimationFrame(callback: (time: number) => void) {
    // Store animation frame IDs
    const requestRef = useRef<number>(0);

    // Store ref to callback
    const callbackRef = useRef(callback);

    // Update ref with most current callback 
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])
  
    // Set up animation
    useEffect(() => {
        // time param: timestamp, ms since the page loaded
        const animate = (time: number) => {
            callbackRef.current(time);
            requestRef.current = requestAnimationFrame(animate);
        };

        // Schedule first animation frame 
        requestRef.current = requestAnimationFrame(animate);

        // Clean up function
        return () => cancelAnimationFrame(requestRef.current!);
    }, []);
}