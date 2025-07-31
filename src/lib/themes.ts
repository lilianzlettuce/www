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
    background: 'var(--white)',
    foreground: 'var(--black)',
    primary: 'var(--blue-600)',
    primaryForeground: 'var(--white)',
    secondary: 'var(--gray-100)',
    secondaryForeground: 'var(--gray-600)',
    muted: 'var(--gray-50)',
    mutedForeground: 'var(--gray-500)',
    accent: 'var(--gray-100)',
    accentForeground: 'var(--gray-600)',
    border: 'var(--gray-200)',
    input: 'var(--white)',
    ring: 'var(--blue-600)',
    card: 'var(--white)',
    cardForeground: 'var(--gray-900)',
    popover: 'var(--white)',
    popoverForeground: 'var(--gray-900)',
    destructive: 'var(--red-500)',
    destructiveForeground: 'var(--white)',
    success: 'var(--green-500)',
    successForeground: 'var(--white)',
    warning: 'var(--yellow-500)',
    warningForeground: 'var(--white)',
  },
  dark: {
    background: 'var(--black)',
    foreground: 'var(--white)',
    primary: 'var(--blue-500)',
    primaryForeground: 'var(--white)',
    secondary: 'var(--gray-700)',
    secondaryForeground: 'var(--gray-300)',
    muted: 'var(--gray-800)',
    mutedForeground: 'var(--gray-400)',
    accent: 'var(--gray-700)',
    accentForeground: 'var(--gray-300)',
    border: 'var(--gray-600)',
    input: 'var(--gray-700)',
    ring: 'var(--blue-500)',
    card: 'var(--gray-800)',
    cardForeground: 'var(--gray-50)',
    popover: 'var(--gray-800)',
    popoverForeground: 'var(--gray-50)',
    destructive: 'var(--red-500)',
    destructiveForeground: 'var(--white)',
    success: 'var(--green-500)',
    successForeground: 'var(--white)',
    warning: 'var(--yellow-500)',
    warningForeground: 'var(--white)',
  },
  sepia: {
    background: 'var(--sepia-bg)',
    foreground: 'var(--brown-800)',
    primary: 'var(--brown-600)',
    primaryForeground: 'var(--sepia-bg)',
    secondary: 'var(--brown-100)',
    secondaryForeground: 'var(--brown-700)',
    muted: 'var(--brown-50)',
    mutedForeground: 'var(--brown-300)',
    accent: 'var(--brown-100)',
    accentForeground: 'var(--brown-700)',
    border: 'var(--brown-200)',
    input: 'var(--sepia-bg)',
    ring: 'var(--brown-600)',
    card: 'var(--sepia-card)',
    cardForeground: 'var(--brown-800)',
    popover: 'var(--sepia-card)',
    popoverForeground: 'var(--brown-800)',
    destructive: 'var(--red-600)',
    destructiveForeground: 'var(--sepia-bg)',
    success: 'var(--green-600)',
    successForeground: 'var(--sepia-bg)',
    warning: 'var(--yellow-600)',
    warningForeground: 'var(--sepia-bg)',
  },
  'high-contrast': {
    background: 'var(--black)',
    foreground: 'var(--white)',
    primary: 'var(--yellow)',
    primaryForeground: 'var(--black)',
    secondary: 'var(--white)',
    secondaryForeground: 'var(--black)',
    muted: 'var(--gray-dark)',
    mutedForeground: 'var(--gray-light-2)',
    accent: 'var(--yellow)',
    accentForeground: 'var(--black)',
    border: 'var(--white)',
    input: 'var(--black)',
    ring: 'var(--yellow)',
    card: 'var(--black)',
    cardForeground: 'var(--white)',
    popover: 'var(--black)',
    popoverForeground: 'var(--white)',
    destructive: 'var(--red)',
    destructiveForeground: 'var(--white)',
    success: 'var(--green)',
    successForeground: 'var(--black)',
    warning: 'var(--orange)',
    warningForeground: 'var(--black)',
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