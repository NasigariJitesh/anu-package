import { MotiSkeletonProps } from 'moti/build/skeleton/types';
import { StyleProp, ViewStyle } from 'react-native';

export interface SkeletonProps extends Omit<MotiSkeletonProps, 'Gradient'> {
  /**
   * Gradient colors. Defaults to surface and surfaceVariant colors from theme
   */
  colors?: string[];
  /**
   * Background of the box that contains the skeleton. Should match the main `colors` prop color.
   *
   * Default: surfaceVariant
   */
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}
