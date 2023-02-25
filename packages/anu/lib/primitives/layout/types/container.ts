import { BreakPoints, Flex } from 'common/types';
import { SxProp } from 'dripsy';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

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

export interface ContainerProps extends ViewProps {
  flexDirection: Flex;
  align: ContainerAlign;
  justify: ContainerJustify;
  maxWidth?: BreakPoints | string | number;
  style: StyleProp<ViewStyle>;
  width?: number | string;
  fixed: boolean;
  disableGutters: boolean;
  sx?: SxProp;
}
