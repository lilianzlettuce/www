"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon, EyeIcon, SwatchIcon } from "@/components/Icons";
import { SquareSlider } from "./Slider";

export function ThemeSlider({ buttonClassName = "p-2 rounded-full" }: { buttonClassName?: string }) {
  const { theme, setTheme } = useTheme();
  const [sliderValue, setSliderValue] = useState(2);

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
        <SquareSlider
          min={0}
          max={4}
          step={1}
          value={[sliderValue]}
          onValueChange={(value) => {
            setSliderValue(value[0]);
          }}
        />
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