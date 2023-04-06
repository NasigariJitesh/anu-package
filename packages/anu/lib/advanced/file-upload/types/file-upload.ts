import { CommonButtonProps } from 'anu/lib/primitives';
import { DocumentResult } from 'expo-document-picker';

export interface Config {
  quality?: number;
  maxHeight?: number;
  maxWidth?: number;
  convertSize?: number;
  convertTypes?: string[];
}

type BasicFileUploadProps = CommonButtonProps & {
  variant: 'image' | 'file';
  multiple?: boolean;
  sortable?: boolean;
  onUpload?: (data: Blob | Blob[]) => void;
  fileType?: string | string[];
  copyToCacheDirectory?: boolean;
};

type ImageFileUploadProps = BasicFileUploadProps & {
  variant: 'image';
  previewStyle?: 'list' | 'carousel';
  optimization?: boolean;
  optimizationConfig?: Config;
};

type OtherFileUploadProps = BasicFileUploadProps & {
  variant: 'file';
};

export type FileUploadProps = ImageFileUploadProps | OtherFileUploadProps;

export interface FileUploadReferenceProps {
  isUploading: () => boolean;
  files: Blob[];
}
