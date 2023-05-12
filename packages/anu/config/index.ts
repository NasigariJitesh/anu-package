import { DripsyFinalTheme } from 'dripsy';

export { default as DripsyProvider } from './dripsy/provider';
export { defaultTheme, extendTheme, getThemeMode, useTheme } from './dripsy/theme';
export * from './dripsy/utils';
export { default as PortalProvider } from './portals/provider';
export { makeTheme } from 'dripsy';

export type ColorMode = 'light' | 'dark';
export type AnuFinalTheme = DripsyFinalTheme;
