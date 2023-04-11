import { SharedValue } from 'react-native-reanimated';

export interface ItemProps<T> {
  id: string;
  value: T;
}

export interface ItemComponentProps<T> {
  renderItem: (item: T, index: number) => React.ReactNode;
  item: T;
  index: number;
  height: number;
}

export interface MovableItemProps<T> {
  index: number;
  id: string;
  item: T;
  containerHeight: number;
  positions: SharedValue<{ [id: string]: number }>;
  lowerBound: SharedValue<number>;
  autoScrollDirection: SharedValue<ScrollDirection>;
  itemsCount: number;
  itemHeight?: number;
  itemWidth?: number;
  onSort?: (from: number, to: number) => void;
  renderItem: (item: T, index: number) => React.ReactNode;
  onSortStart?: (from: number) => void;
  onSortEnd?: (to: number) => void;
}

export interface HorizontalMovableItemProps<T>
  extends Omit<MovableItemProps<T>, 'autoScrollDirection' | 'containerHeight'> {
  autoScrollDirection: SharedValue<ScrollDirectionHorizontal>;
  containerWidth: number;
}

export interface ListProps<T> {
  data: ItemProps<T>[];
  itemHeight?: number;
  itemWidth?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  onSort?: (from: number, to: number) => void;
  onSortStart?: (from: number) => void;
  onSortEnd?: (to: number) => void;
  containerHeight: number;
}

export interface HorizontalListProps<T> extends Omit<ListProps<T>, 'containerHeight'> {
  containerWidth: number;
}

export interface SortableListProps<T> {
  data: T[];
  itemHeight?: number;
  itemWidth?: number;
  horizontal?: boolean;
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  onSort?: (from: number, to: number) => void;
  onSortStart?: (from: number) => void;
  onSortEnd?: (to: number) => void;
  containerHeight?: number;
  containerWidth?: number;
}

export enum ScrollDirection {
  None,
  Up,
  Down,
}

export enum ScrollDirectionHorizontal {
  None,
  Left,
  Right,
}
