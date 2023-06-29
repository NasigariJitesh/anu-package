/* eslint-disable @typescript-eslint/no-unused-vars */
import { GridProps } from '../../types';

/**
 *
 * @param _data
 */
export function getDefaultProps<T>(_data: T[]): Omit<GridProps<T>, 'data' | 'renderItem'> {
  return {
    width: '100%',
    disableGutters: true,
    spacing: 16,
    showScrollIndicator: false,
    defaultNumberOfColumns: 1,
    numberOfColumns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
    },
  };
}
