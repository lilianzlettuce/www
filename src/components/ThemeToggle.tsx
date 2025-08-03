"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon, EyeIcon, SwatchIcon } from "@/components/Icons";
import { MinimalLineSlider, SquareSlider } from "./Slider";

export function ThemeSlider({ sliderClassName = "w-24", buttonClassName = "p-2 rounded-full" }: { sliderClassName?: string, buttonClassName?: string }) {
  const { theme, setTheme } = useTheme();
  const [sliderValue, setSliderValue] = useState(0.1);

  /*const themeIcons = {
    light: SunIcon,
    dark: MoonIcon,
    sepia: SwatchIcon,
    "high-contrast": EyeIcon,
  };

  const themeLabels = {
    light: "Light",
    dark: "Dark",
    sepia: "Sepia",
    "high-contrast": "High Contrast",
  };*/

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <MinimalLineSlider
          className={sliderClassName}
          min={0}
          max={1}
          step={0.01}
          value={[sliderValue]}
          onValueChange={(value) => {
            setSliderValue(value[0]);
            document.documentElement.style.setProperty('--invert', value[0].toString());
          }}
          aria-labelledby="theme-slider"
        />
        <button
          onClick={() => {
            if (theme === "dark") setTheme("light");
            else setTheme("dark");
          }}
          className={`${buttonClassName} text-foreground hover:bg-accent`}
          title={theme === "dark" ? "Light" : "Dark"}
        >
          {theme === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
} 

export function ThemeToggle({ buttonClassName = "p-2 rounded-full" }: { buttonClassName?: string }) {
  const { theme, setTheme } = useTheme();

  /*const themeIcons = {
    light: SunIcon,
    dark: MoonIcon,
    sepia: SwatchIcon,
    "high-contrast": EyeIcon,
  };

  const themeLabels = {
    light: "Light",
    dark: "Dark",
    sepia: "Sepia",
    "high-contrast": "High Contrast",
  };*/

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <button
          onClick={() => {
            if (theme === "dark") setTheme("light");
            else setTheme("dark");
          }}
          className={`${buttonClassName} ${
            theme === "dark"
              ? "text-foreground hover:bg-accent"
              : "bg-foreground text-background"
          }`}
          title={theme === "dark" ? "Light" : "Dark"}
        >
          {theme === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
} 

export function ThemeMultiToggle() {
  const { theme, setTheme, availableThemes } = useTheme();

  const themeIcons = {
    light: SunIcon,
    dark: MoonIcon,
    sepia: SwatchIcon,
    "high-contrast": EyeIcon,
  };

  const themeLabels = {
    light: "Light",
    dark: "Dark",
    sepia: "Sepia",
    "high-contrast": "High Contrast",
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        {availableThemes.slice(0, 2).map((themeMode) => {
          const Icon = themeIcons[themeMode];
          const isActive = theme === themeMode;
          
          return (
            <button
              key={themeMode}
              onClick={() => setTheme(themeMode)}
              className={`p-2 rounded-full transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "bg-background text-secondaryForeground hover:bg-accent"
              }`}
              title={themeLabels[themeMode]}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
} 