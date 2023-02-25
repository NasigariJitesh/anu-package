/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="rnw-overrides" />

import 'react-native';

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'dev' | 'prod';
  }
}

declare module '*.css';
