export type ThemeMode = 'light' | 'dark' | 'sepia' | 'high-contrast';

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  destructive: string;
  destructiveForeground: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
}

export const themes: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#ffffff',
    foreground: '#171717',
    primary: '#2563eb',
    primaryForeground: '#ffffff',
    secondary: '#f3f4f6',
    secondaryForeground: '#374151',
    muted: '#f9fafb',
    mutedForeground: '#6b7280',
    accent: '#f3f4f6',
    accentForeground: '#374151',
    border: '#e5e7eb',
    input: '#ffffff',
    ring: '#2563eb',
    card: '#ffffff',
    cardForeground: '#171717',
    popover: '#ffffff',
    popoverForeground: '#171717',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    success: '#10b981',
    successForeground: '#ffffff',
    warning: '#f59e0b',
    warningForeground: '#ffffff',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#ededed',
    primary: '#3b82f6',
    primaryForeground: '#ffffff',
    secondary: '#1f2937',
    secondaryForeground: '#d1d5db',
    muted: '#111827',
    mutedForeground: '#9ca3af',
    accent: '#1f2937',
    accentForeground: '#d1d5db',
    border: '#374151',
    input: '#1f2937',
    ring: '#3b82f6',
    card: '#111827',
    cardForeground: '#f9fafb',
    popover: '#111827',
    popoverForeground: '#f9fafb',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    success: '#10b981',
    successForeground: '#ffffff',
    warning: '#f59e0b',
    warningForeground: '#ffffff',
  },
  sepia: {
    background: '#fdf8f3',
    foreground: '#2d1810',
    primary: '#8b4513',
    primaryForeground: '#fdf8f3',
    secondary: '#f4e4d6',
    secondaryForeground: '#5d3a1a',
    muted: '#f9f1e8',
    mutedForeground: '#8b6f47',
    accent: '#f4e4d6',
    accentForeground: '#5d3a1a',
    border: '#e6d5c3',
    input: '#fdf8f3',
    ring: '#8b4513',
    card: '#faf5f0',
    cardForeground: '#2d1810',
    popover: '#faf5f0',
    popoverForeground: '#2d1810',
    destructive: '#dc2626',
    destructiveForeground: '#fdf8f3',
    success: '#059669',
    successForeground: '#fdf8f3',
    warning: '#d97706',
    warningForeground: '#fdf8f3',
  },
  'high-contrast': {
    background: '#000000',
    foreground: '#ffffff',
    primary: '#ffff00',
    primaryForeground: '#000000',
    secondary: '#ffffff',
    secondaryForeground: '#000000',
    muted: '#333333',
    mutedForeground: '#cccccc',
    accent: '#ffff00',
    accentForeground: '#000000',
    border: '#ffffff',
    input: '#000000',
    ring: '#ffff00',
    card: '#000000',
    cardForeground: '#ffffff',
    popover: '#000000',
    popoverForeground: '#ffffff',
    destructive: '#ff0000',
    destructiveForeground: '#ffffff',
    success: '#00ff00',
    successForeground: '#000000',
    warning: '#ff8800',
    warningForeground: '#000000',
  },
};

export function getThemeCSSVariables(theme: ThemeColors): string {
  return Object.entries(theme)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n  ');
}

export function applyThemeToDocument(theme: ThemeColors) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
} 