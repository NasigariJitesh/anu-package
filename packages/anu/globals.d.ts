/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from './config/dripsy/theme';

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'dev' | 'prod';
  }
}

type MyTheme = typeof defaultTheme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
