import { SideSheetAlign, SideSheetProps } from '../../types';

export const defaultProps: SideSheetProps & {
  width: number;
  startCoordinate: number;
  align: SideSheetAlign;
} = {
  width: 256,
  startCoordinate: 0,
  divider: false,
  align: 'right',
  damping: 50,
};
