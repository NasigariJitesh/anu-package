import { StyleProp, ViewStyle } from 'react-native';

export interface UploadListProps {
  data: Blob[] | File[];
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
}

export interface ListItemProps {
  id: number;
  dataItem: Blob | File;
  uri?: string;
  error?: { error: boolean; errorMessage: string };
  single?: boolean;
  variant?: 'image' | 'file';
  deleteData: (index: number) => void;
  previewType?: 'list' | 'carousel';
  sortable?: boolean;
  listWidth?: number;
  listItemStyle: StyleProp<ViewStyle>;
}
