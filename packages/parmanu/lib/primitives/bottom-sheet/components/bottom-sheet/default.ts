import { BottomSheetProps } from '../../types';

export const defaultProps: BottomSheetProps & {
  startCoordinate: number;
} = {
  startCoordinate: 0,
  damping: 50,
};
