import { ContainerProps } from 'anu/lib/primitives';
import { Accept } from 'react-dropzone';
import { StyleProp, ViewStyle } from 'react-native';

import { Config } from './file-upload';

interface BasicFileDropZoneProps extends Omit<ContainerProps, 'variant'> {
  variant?: 'image' | 'file';
  sortable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (data: Blob | Blob[] | null) => void;
  onSubmit?: () => void;
  fileType?: Accept;
  style?: StyleProp<ViewStyle>;
  dropZoneStyle?: StyleProp<ViewStyle>;
}

interface ImageFileDropZoneProps extends BasicFileDropZoneProps {
  variant?: 'image';
  previewStyle?: 'list' | 'carousel';
  optimization?: boolean;
  optimizationConfig?: Config;
}

interface OtherFileDropZoneProps extends BasicFileDropZoneProps {
  variant: 'file';
}

export type FileDropZoneProps = ImageFileDropZoneProps | OtherFileDropZoneProps;

export interface FileDropZoneReferenceProps {
  files: Blob[];
}
