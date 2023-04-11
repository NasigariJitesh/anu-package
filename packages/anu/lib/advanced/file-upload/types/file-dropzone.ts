import { ReactChildren } from 'anu/common/types';
import { ContainerProps } from 'anu/lib/primitives';
import { Accept } from 'react-dropzone';
import { StyleProp, ViewStyle } from 'react-native';

import { Config } from './file-upload';

interface BasicFileDropZoneProps extends Omit<ContainerProps, 'variant'> {
  children: ReactChildren;
  dragActivePlaceholder?: ReactChildren;
  variant?: 'image' | 'file';
  sortable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (data: Blob | Blob[] | null, fileUri?: string | string[] | null) => void;
  onSubmit?: () => void;
  fileType?: Accept;
  style?: StyleProp<ViewStyle>;
  dropZoneStyle?: StyleProp<ViewStyle>;
  errors?: { error: boolean; errorMessage: string }[];
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
