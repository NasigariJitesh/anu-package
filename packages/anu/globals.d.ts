/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from './config/dripsy/theme';

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }
}

type MyTheme = typeof defaultTheme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {
    colors: {
      // new codes
      $primary: 'string';
      $onPrimary: 'string';
      $primaryContainer: 'string';
      $onPrimaryContainer: 'string';
      $secondary: 'string';
      $onSecondary: 'string';
      $secondaryContainer: 'string';
      $onSecondaryContainer: 'string';
      $tertiary: 'string';
      $onTertiary: 'string';
      $tertiaryContainer: 'string';
      $onTertiaryContainer: 'string';
      $error: 'string';
      $onError: 'string';
      $errorContainer: 'string';
      $onErrorContainer: 'string';
      $background: 'string';
      $onBackground: 'string';
      $surface: 'string';
      $onSurface: 'string';
      $outline: 'string';
      $surfaceVariant: 'string';
      $onSurfaceVariant: 'string';
      $outlineVariant: 'string';
      $shadow: 'string';
      $surfaceTint: '';
      $inverseSurface: 'string';
      $inverseOnSurface: 'string';
      $inversePrimary: 'string';
      $scrim: 'string';
    };
  }
}
