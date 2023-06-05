import { DripsyFinalTheme } from 'dripsy';

export { default as DripsyProvider } from './dripsy/provider';
export { generateTheme, getThemeMode, useTheme } from './dripsy/theme';
export * from './dripsy/utils';
export { default as PortalProvider } from './portals/provider';

export type ColorMode = 'light' | 'dark';
export type AnuFinalTheme = DripsyFinalTheme;
