import { ReactChildren } from 'anu/common/types';
import { ViewProps } from 'react-native';

export type SideSheetAlign = 'left' | 'right';

export interface SideSheetProps extends Omit<ViewProps, 'style'> {
  variant?: 'standard' | 'modal';
  children?: ReactChildren;

  /**
   * Styles for the Sheet
   */
  containerStyles?: ViewProps['style'];

  /**
   * Styles for the handle
   */
  handleStyles?: ViewProps['style'];

  /**
   * @default 256px
   */
  width?: number;

  /**
   * Damping for animations
   *
   * @default 50
   */
  damping?: number;

  /**
   * Initial coordinate for the sheet to stay at.
   *
   * - -100 will show 100px of it when closed (when align="right")
   * - 100 will show 100px of it when closed (when align="left")
   *
   * @default 0
   */
  startCoordinate?: number;

  /**
   * Show divider at the end of the sheet
   *
   * @default false
   */
  divider?: boolean;

  /**
   * Alignment of the sheet
   *
   *  @default right
   */
  align?: SideSheetAlign;

  /**
   * This is the title that will be shown in the header
   */
  headline?: string;
  /**
   * If this is provided, back button will be visible, else hidden in the header
   *
   * @returns
   */
  onBackButtonPress?: () => void;

  /**
   * This can be used to close the opened side bar
   *
   * @returns
   */
  onCloseButtonPress?: () => void;
}

export interface SideSheetReferenceProps {
  /**
   * This can be used to translate the sheet to a particular X coordinate.
   *
   * - destination = 0 will be the edge of the screen
   * - when there is a start coordinate, do not forget to add or subtract it as needed, if the alignments are left and right respectively
   *
   * @param destination - x coordinate on the screen
   * @default width of the sheet
   */
  scrollTo: (destination: number) => void;

  /**
   * @returns will return true if the sheet is in the view port
   */
  isActive: () => boolean;
}
