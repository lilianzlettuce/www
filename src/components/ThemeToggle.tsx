'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon, EyeIcon, SwatchIcon } from '@/components/Icons';

export default function ThemeToggle() {
  const { theme, setTheme, availableThemes } = useTheme();

  const themeIcons = {
    light: SunIcon,
    dark: MoonIcon,
    sepia: SwatchIcon,
    'high-contrast': EyeIcon,
  };

  const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    sepia: 'Sepia',
    'high-contrast': 'High Contrast',
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        {availableThemes.map((themeMode) => {
          const Icon = themeIcons[themeMode];
          const isActive = theme === themeMode;
          
          return (
            <button
              key={themeMode}
              onClick={() => setTheme(themeMode)}
              className={`p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-primaryForeground'
                  : 'bg-secondary text-secondaryForeground hover:bg-accent'
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