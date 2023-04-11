import { SortableListProps } from '../../types';

export const defaultProps: Omit<SortableListProps<string>, 'data' | 'keyExtractor' | 'renderItem'> = {
  itemHeight: 60,
  itemWidth: 200,
};
