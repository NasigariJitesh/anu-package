import { DripsyCustomTheme, makeTheme, useDripsyTheme } from 'dripsy';
import lodash from 'lodash';
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
const mergeThemes = (theme: Partial<DripsyCustomTheme>, mode: 'light' | 'dark') => {
  const t = makeTheme({
    colors: generateColors(mode === 'light' ? lightThemeColors : darkThemeColors),
    reactNativeTypesOnly: true,

    fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
    lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
  });

  return lodash.merge(t, theme);
};

const generateColors = (colors: Record<string, string>) => {
  return {
    ...colors,
    // $background: calculateShade(colors.$primary, 99), //#010102
    // $onBackground: calculateTint(colors.$primary, 99), // #fdfdfe
    // $surface: calculateTint(colors.$primary, 99), // #010102
    // $onSurface: calculateTint(colors.$primary, 99), // #fdfdfe
    // $outline: colors.$outline, //#777680
    // $surfaceVariant: calculateTint(colors.$outline, 70), //#d6d6d9
    // $onPrimaryContainer: colors.$primary,
    // $primary: calculateTint(colors.$primary, 40), //
  } as const;
};

/**
 *  This is the default theme for the app.
 */
export const defaultTheme = makeTheme({
  colors: generateColors(darkThemeColors),
  reactNativeTypesOnly: true,

  fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
  lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
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
export const extendTheme = (theme: Partial<DripsyCustomTheme> = {}, mode: 'light' | 'dark' = 'light') => {
  const result = mergeThemes(theme, mode);

  return makeTheme(result) as DripsyCustomTheme;
};

export const getThemeMode = (theme: DripsyCustomTheme) => {
  return theme.colors.$surface === (darkThemeColors.$surface as string) ? 'dark' : 'light';
};
