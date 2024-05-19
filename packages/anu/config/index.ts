import { DripsyFinalTheme } from 'dripsy';
import { generateTheme } from './dripsy/theme';

export { default as DripsyProvider } from './dripsy/provider';
export { generateTheme, getThemeMode, useTheme } from './dripsy/theme';
export * from './dripsy/utils';
export { default as PortalProvider } from './portals/provider';

export type ColorMode = 'light' | 'dark';
export type AnuFinalTheme = DripsyFinalTheme;

export const defaultTheme = generateTheme({
  theme: {},
  color: { primary: '#090C7D', secondary: '#7D0946', tertiary: '#7D7A09', neutral: '#929094' },
  colorScheme: 'light',
  extendDefaultTheme: true,
});
