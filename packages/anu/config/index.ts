export { default as DripsyProvider } from './dripsy/provider';
export { defaultTheme, getThemeMode, extendTheme as makeTheme, useTheme } from './dripsy/theme';
export * from './dripsy/utils';
export { default as PortalProvider } from './portals/provider';

export type ColorMode = 'light' | 'dark';
