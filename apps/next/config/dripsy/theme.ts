import { DripsyBaseTheme, DripsyCustomTheme, makeTheme } from 'dripsy';
import lodash from 'lodash';

const themeColors = {
  $text: '#000000',
  $background: '#ffffff',
  $primary: '#4d53b7',
  $secondary: '#a63066',
  $tertiary: '#609',
  $shadow: '#938f94',
} as const;

/**
 *  This will replace the default theme properties with the new properties extended by the user
 *
 * @param theme - new theme to extend
 */
const mergeThemes = (theme: DripsyBaseTheme & DripsyCustomTheme) => {
  return lodash.merge(theme, defaultTheme);
};

/**
 *  This is the default theme for the app.
 */
export const defaultTheme = makeTheme({
  colors: themeColors,
  reactNativeTypesOnly: true,

  fontSizes: [57, 45, 36, 32, 28, 24, 22, 16, 14, 12, 11],
  lineHeights: [64, 52, 44, 40, 36, 32, 28, 24, 20, 16],
});

/**
 * Fetch the theme of the app
 *
 */
export const getTheme = () => {
  return defaultTheme;
};

/**
 * Extend the default dripsy theme of the component
 *
 * @param theme - The theme object for the project
 */
export const extendTheme = (theme: DripsyBaseTheme & DripsyCustomTheme) => {
  const result = mergeThemes(theme);

  return makeTheme(result);
};
