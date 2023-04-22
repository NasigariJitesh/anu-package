// import Color from 'color';
// import { overlay, useTheme } from 'react-native-paper';

// /**
//  *
//  */
// export const useHeaderBackgroundColor = () => {
//   const theme = useTheme();
//   if (theme.isV3) {
//     return theme.colors.surface;
//   }
//   return theme.dark && theme.mode === 'adaptive' ? overlay(4, theme.colors.surface) : theme.colors.primary;
// };

// /**
//  *
//  */
// export const useHeaderColorIsLight = () => {
//   const theme = useTheme();
//   const background = theme.dark && theme.mode === 'adaptive' ? theme.colors.surface : theme.colors.primary;
//   return Color(background).isLight();
// };

// /**
//  *
//  */
// export function useHeaderTextColor() {
//   const theme = useTheme();
//   const isLight = useHeaderColorIsLight();
//   if (theme.isV3) {
//     return theme.colors.onSurfaceVariant;
//   }
//   return isLight ? '#000' : '#fff';
// }

// /**
//  *
//  */
// export function useTextColorOnPrimary() {
//   const theme = useTheme();
//   const isDark = !Color(theme.colors.primary).isLight();

//   if (theme.isV3) {
//     return isDark && theme.dark ? theme.colors.onSurface : theme.colors.onPrimary;
//   }

//   return isDark ? '#fff' : '#000';
// }

/**
 *
 * @param start
 * @param end
 */
export const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 })
    .fill(null)
    .map((_, index) => start + index);
};

// /**
//  *
//  * @param color
//  * @param ratio
//  */
// export const lightenBy = (color: Color, ratio: number) => {
//   const lightness = color.lightness();
//   return color.lightness(lightness + (100 - lightness) * ratio);
// };

// /**
//  *
//  * @param color
//  * @param ratio
//  */
// export const darkenBy = (color: Color, ratio: number) => {
//   const lightness = color.lightness();
//   return color.lightness(lightness - lightness * ratio);
// };
