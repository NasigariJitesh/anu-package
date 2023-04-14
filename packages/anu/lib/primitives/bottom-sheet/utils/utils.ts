import { DripsyFinalTheme } from 'dripsy';
import { ViewProps } from 'react-native';

import { BottomSheetProps } from '../types';

/**
 * This is a central store for all the default bottom sheet style
 *
 * @param {DripsyFinalTheme} theme - current theme of the system
 * @returns sheet theme
 */
const getBottomSheetTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const sheetTheme = {
    container: {
      marginTop: 72,
      maxWidth: 640,
      backgroundColor: themeColors.$surface,
      borderRadius: 28,
      elevation: 1,
      position: 'absolute',
      width: '100%',
      zIndex: 4,
    } satisfies ViewProps['style'],

    dragHandle: {
      alignSelf: 'center',
      marginVertical: 22,
      backgroundColor: themeColors.$onSurfaceVariant,
      opacity: 0.4,
      width: 32,
      height: 4,
      borderRadius: 4,
    } satisfies ViewProps['style'],
  };

  return sheetTheme;
};

/**
 *  get styles for the bottom sheet component
 *
 *  @param {BottomSheetProps} props - The properties of the bottom sheet component
 *  @param {DripsyFinalTheme} defaultTheme - theme of the library
 *  @returns style properties for the container component
 */
export const getBottomSheetStyles = (
  props: BottomSheetProps & { height: number; startCoordinate: number },
  defaultTheme: DripsyFinalTheme,
) => {
  const theme = getBottomSheetTheme(defaultTheme);

  const container: ViewProps['style'] = {
    ...theme.container,
    top: props.height + props.startCoordinate,
    height: props.height,
    ...(props.containerStyles as Record<string, never>),
  };

  const dragHandle: ViewProps['style'] = {
    ...theme.dragHandle,
    ...(props.handleStyles as Record<string, never>),
  };

  return { container, dragHandle };
};
