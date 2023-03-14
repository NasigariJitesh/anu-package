import { DripsyBaseTheme, DripsyCustomTheme, DripsyFinalTheme, makeTheme, useDripsyTheme } from 'dripsy';
import lodash from 'lodash';

export const themeColors = {
  $text: '#46464f', // @deprecated

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

/**
 *  This will replace the default theme properties with the new properties extended by the user
 *
 * @param theme - new theme to extend
 */
const mergeThemes = (theme: DripsyBaseTheme & DripsyCustomTheme) => {
  return lodash.merge(theme, defaultTheme);
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
  colors: generateColors(themeColors),
  reactNativeTypesOnly: true,

  fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
  lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
});

/**
 * Fetch the theme of the app
 *
 */
export const useTheme = () => {
  return useDripsyTheme().theme as DripsyFinalTheme;
};

/**
 * Extend the default dripsy theme of the component
 *
 * @param theme - The theme object for the project
 */
export const extendTheme = (theme: DripsyBaseTheme) => {
  const result = mergeThemes(theme);

  return makeTheme(result);
};
