/* eslint-disable no-mixed-spaces-and-tabs */
import { StyleProp, ViewStyle } from 'react-native';

import { ContainerProps } from './container';

export type NumberOfColumns =
  | {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    }
  | {
      minWidth: number;
      columns: number;
    }[];

export interface RowProps<T> {
  items: T[];
  rowIndex: number;
  numberOfRows: number;
  numberOfColumns: number;
  renderItem: (item: T, index: { row: number; column: number }) => React.ReactNode;
  styles: {
    rowStyle: StyleProp<ViewStyle>;
    spacerStyle: StyleProp<ViewStyle>;
    itemStyle: StyleProp<ViewStyle>;
    itemSpacerStyle: StyleProp<ViewStyle>;
  };
  rowSpacing?: number;
}

export interface GridProps<T> extends Omit<ContainerProps, 'flexDirection' | 'align' | 'justify' | 'children'> {
  numberOfColumns: NumberOfColumns;
  defaultNumberOfColumns?: number;
  rowHeight?: number;
  spacing?: number;
  showScrollIndicator?: boolean;
  data: T[];
  renderItem: (item: T, index: { row: number; column: number }) => React.ReactNode;
}
