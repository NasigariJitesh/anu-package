import { BreakPoints, Flex } from 'common/types';
import { SxProp, View } from 'dripsy';
import { StyleProp, ViewStyle } from 'react-native';

/**
 * The alignment type for alignment of all items on the cross axis
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis Align Items} to learn more
 */
export type ContainerAlign = 'center' | 'flex-start' | 'flex-end';

/**
 * The alignment type for alignment of all items on the main axis
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis Justify Content} to learn more
 */
export type ContainerJustify = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';

type ViewProps = React.ComponentProps<typeof View>;

export interface ContainerProps extends ViewProps {
  /**
   * The direction in which the children components are positioned
   */
  flexDirection?: Flex;
  /**
   * The alignment of all items on the cross axis
   */
  align?: ContainerAlign;
  /**
   * The alignment of all items on the main axis
   */
  justify?: ContainerJustify;
  /**
   * The maximum width of the container in breakpoints, pixels or percentage.
   */
  maxWidth?: BreakPoints | string | number;
  /**
   * The styles for the container component.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The width of the container in pixels or percentage
   */
  width?: number | string;
  /**
   * If true, sets the max-width to match the min-width of the current breakpoint.
   */
  fixed?: boolean;
  /**
   * If true, the left and right padding is removed.
   */
  disableGutters?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProp;
}
