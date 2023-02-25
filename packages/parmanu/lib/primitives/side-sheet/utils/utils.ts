import { getTheme } from 'config/dripsy';
import { ViewProps } from 'react-native';

import { SideSheetProps } from '../types';

/**
 * This is a central store for all the default side sheet style
 *
 * @returns sheet theme
 */
const getSideSheetTheme = () => {
  const themeColors = getTheme().colors;

  const sheetTheme = {
    container: {
      marginTop: 72,
      backgroundColor: themeColors.$surface,
      elevation: 1,
      position: 'absolute',
      height: '100%',
      zIndex: 4,
      borderColor: themeColors.$outline,
    } satisfies ViewProps['style'],

    alignLeft: {
      borderBottomLeftRadius: 28,
      borderTopLeftRadius: 28,
    } satisfies ViewProps['style'],

    alignRight: {
      borderBottomLeftRadius: 28,
      borderTopLeftRadius: 28,
    } satisfies ViewProps['style'],
  };

  return sheetTheme;
};

/**
 *  get styles for the side sheet component
 *
 *  @param {SideSheetProps} props - The properties of the side sheet component
 *  @returns style properties for the side sheet component
 */
export const getSideSheetStyles = (props: SideSheetProps & { width: number; startCoordinate: number }) => {
  const theme = getSideSheetTheme();

  let container: ViewProps['style'] = {
    ...theme.container,
  };

  container =
    props.align === 'right'
      ? {
          ...container,
          ...theme.alignRight,
          right: -props.startCoordinate,
          width: props.width,
          borderLeftWidth: props.divider ? 1 : 0,
        }
      : {
          ...container,
          ...theme.alignLeft,
          left: props.startCoordinate,
          width: props.width,
          borderRightWidth: props.divider ? 1 : 0,
        };

  return { container, ...(props.containerStyles as Record<string, never>) };
};
