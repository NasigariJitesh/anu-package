import { Sx } from 'dripsy';

/**
 * Extend the interface and build your own React component
 *
 * @example
 *
 * interface ExampleComponents extends ReactChildren {
 *  propertyOne: string
 * }
 */
export type ReactChildren = { children: React.ReactNode };

/**
 * The tokens to denote the flex direction
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#values Flex Direction} to learn more
 */
export type Flex = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * The Breakpoint tokens to denote different screen sizes
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design Responsive Design} to learn more
 */
export type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Extend the styles to include disabled styles
 */
export interface ExtendedDisabledStyles extends Sx {
  '@disable'?: Sx;
}

/**
 * Extend the styles to include elevated styles
 */
export interface ExtendedElevatedStyles extends Sx {
  '@elevated'?: Sx;
}

/**
 * Extend the styles to include hover styles
 */
export interface ExtendedHoverStyles extends Sx {
  '@hover'?: Sx;
  '@focus'?: Sx;
  '@press'?: Sx;
}
