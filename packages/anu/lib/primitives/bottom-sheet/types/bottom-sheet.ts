import { ReactChildren } from 'anu/common/types';
import { ViewProps } from 'react-native';
import { AnimationCallback } from 'react-native-reanimated';

export interface BottomSheetProps extends Omit<ViewProps, 'style'> {
  children?: ReactChildren;

  /**
   * Styles for the Sheet
   */
  containerStyles?: ViewProps['style'];

  /**
   * Styles for the handle4xr
   */
  handleStyles?: ViewProps['style'];

  /**
   * @default false
   */
  hideDragHandle?: boolean;

  /**
   * @default screen's height
   */
  height?: number;

  /**
   * Damping for animations
   *
   * @default 50
   */
  damping?: number;

  /**
   * Initial coordinate for the sheet to stay at
   *
   * @default 0
   */
  startCoordinate?: number;
}

export interface BottomSheetReferenceProps {
  /**
   * This can be used to translate the sheet to a particular Y coordinate.
   *
   * - destination = 0 will be the bottom of the screen
   * - when there is a start coordinate, do not forget to add or subtract it as needed, if the alignments are left and right respectively
   *
   * @param destination - y coordinate on the screen
   * @param callback - callback function to be called after the animation is completed
   */
  scrollTo: (destination: number, callback?: AnimationCallback | undefined) => void;

  /**
   * @returns will return true if the sheet is in the view port
   */
  isActive: () => boolean;
}
