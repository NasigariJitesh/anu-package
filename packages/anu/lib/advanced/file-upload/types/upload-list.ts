import { StyleProp, ViewStyle } from 'react-native';

export interface UploadListProps {
  data: File[];
  uriData?: string[];
  errors?: { error: boolean; errorMessage: string }[];
  variant?: 'image' | 'file';
  sortable?: boolean;
  previewType?: 'list' | 'carousel';
  deleteData: (index: number) => void;
  onSort: (from: number, to: number) => void;
  listStyle: StyleProp<ViewStyle>;
  listItemStyle: StyleProp<ViewStyle>;
  listWidth?: number;
  listHeight?: number;
  itemWidth?: number;
  itemHeight?: number;
}

export interface ListItemProps {
  id: number;
  dataItem: File;
  uri?: string;
  error?: { error: boolean; errorMessage: string };
  single?: boolean;
  variant?: 'image' | 'file';
  deleteData: (index: number) => void;
  previewType?: 'list' | 'carousel';
  sortable?: boolean;
  listItemStyle: StyleProp<ViewStyle>;
  itemWidth?: number;
  itemHeight?: number;
}
