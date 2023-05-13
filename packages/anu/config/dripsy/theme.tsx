import { DripsyBaseTheme, DripsyCustomTheme, makeTheme, useDripsyTheme } from 'dripsy';

import { ColorMode } from '..';
export { makeTheme } from 'dripsy';

export const lightThemeColors = {
  // new codes
  $primary: '#4d53b7',
  $onPrimary: '#ffffff',
  $primaryContainer: '#e0e0ff',
  $onPrimaryContainer: '#00006e',
  $secondary: '#a63066',
  $onSecondary: '#ffffff',
  $secondaryContainer: '#ffd9e3',
  $onSecondaryContainer: '#3e001f',
  $tertiary: '#646100',
  $onTertiary: '#ffffff',
  $tertiaryContainer: '#ece76e',
  $onTertiaryContainer: '#1e1d00',
  $error: '#ba1a1a',
  $onError: '#ffffff',
  $errorContainer: '#ffdad6',
  $onErrorContainer: '#410002',
  $background: '#fffbff',
  $onBackground: '#1b1b1f',
  $surface: '#fffbff',
  $surfaceContainerHigh: '#ebe7eb',
  $surfaceContainerLow: '#f7f2f6',
  $surfaceContainerHighest: '#e5e1e5',
  $onSurface: '#1b1b1f',
  $outline: '#777680',
  $surfaceVariant: '#e4e1ec',
  $onSurfaceVariant: '#46464f',
  $outlineVariant: '#c7c5d0',
  $shadow: '#000000',
  $surfaceTint: '#090C7D',
  $inverseSurface: '#303034',
  $inverseOnSurface: '#f3eff4',
  $inversePrimary: '#bfc2ff',
  $scrim: '#000000',
} as const;

export const darkThemeColors = {
  // new codes
  $primary: '#BFC2FF',
  $onPrimary: '#1A1F88',
  $primaryContainer: '#343A9E',
  $onPrimaryContainer: '#E0E0FF',
  $secondary: '#FFB0CA',
  $onSecondary: '#640036',
  $secondaryContainer: '#87154E',
  $onSecondaryContainer: '#FFD9E3',
  $tertiary: '#CFCB55',
  $onTertiary: '#333200',
  $tertiaryContainer: '#4B4900',
  $onTertiaryContainer: '#ECE76E',
  $error: '#FFB4AB',
  $onError: '#690005',
  $errorContainer: '#93000A',
  $onErrorContainer: '#FFDAD6',
  $background: '#1B1B1F',
  $onBackground: '#E5E1E6',
  $surface: '#1B1B1F',
  $surfaceContainerHigh: '#2b292d',
  $surfaceContainerLow: '#1c1b1e',
  $surfaceContainerHighest: '#363438',
  $onSurface: '#E5E1E6',
  $outline: '#918F9A',
  $surfaceVariant: '#46464F',
  $onSurfaceVariant: '#C7C5D0',
  $outlineVariant: '#46464F',
  $shadow: '#000000',
  $surfaceTint: '#090C7D',
  $inverseSurface: '#E5E1E6',
  $inverseOnSurface: '#303034',
  $inversePrimary: '#4D53B7',
  $scrim: '#000000',
} as const;

/**
 *  This will replace the default theme properties with the new properties extended by the user
 *
 * @param theme - new theme to extend
 * @param mode - Weather you want a light or a dark mode
 */
const mergeThemes = (theme: DripsyBaseTheme, mode: ColorMode) => {
  const t = makeTheme({
    reactNativeTypesOnly: true,
    fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
    lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
    colorScheme: mode,
    ...theme,
    colors: generateColors(mode === 'light' ? lightThemeColors : darkThemeColors, mode, theme),
  });

  return t;
};

const generateColors = (colors: Record<string, string>, mode: ColorMode, theme: DripsyBaseTheme) => {
  const modeColors: Record<string, string> =
    // @ts-expect-error - this is a hack to get the colors from the theme
    mode === 'light' ? theme.colors?.modes?.light || {} : theme.colors?.modes?.dark || {};

  const result = {
    ...colors,
    ...theme.colors,
    ...modeColors,
  };

  return result;
};

/**
 *  This is the default theme for the app.
 */
export const defaultTheme = makeTheme({
  colors: generateColors(darkThemeColors, 'light', {}),
  reactNativeTypesOnly: true,
  fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
  lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
  colorScheme: 'light' as ColorMode,
});

/**
 * Fetch the theme of the app
 *
 */
export const useTheme = () => {
  return useDripsyTheme().theme;
};

/**
 * Extend the default dripsy theme of the component
 *
 * @param theme - The theme object for the project
 * @param mode - Weather you want a light or a dark mode. Default is lite
 */
export const extendTheme = (theme: DripsyBaseTheme = {}, mode: ColorMode = 'light') => {
  const result = mergeThemes(theme, mode);

  return makeTheme(result) as DripsyCustomTheme;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getThemeMode = (theme: DripsyCustomTheme) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useTheme().colorScheme;
};

type MyTheme = typeof defaultTheme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {
    colors: {
      // new codes
      $primary: string;
      $onPrimary: string;
      $primaryContainer: string;
      $onPrimaryContainer: string;
      $secondary: string;
      $onSecondary: string;
      $secondaryContainer: string;
      $onSecondaryContainer: string;
      $tertiary: string;
      $onTertiary: string;
      $tertiaryContainer: string;
      $onTertiaryContainer: string;
      $error: string;
      $onError: string;
      $errorContainer: string;
      $onErrorContainer: string;
      $background: string;
      $onBackground: string;
      $surface: string;
      $onSurface: string;
      $outline: string;
      $surfaceVariant: string;
      $onSurfaceVariant: string;
      $outlineVariant: string;
      $shadow: string;
      $surfaceTint: string;
      $inverseSurface: string;
      $inverseOnSurface: string;
      $inversePrimary: string;
      $scrim: string;
      $surfaceContainerHigh: string;
      $surfaceContainerHighest: string;
      $surfaceContainerLow: string;
    };
  }
}
