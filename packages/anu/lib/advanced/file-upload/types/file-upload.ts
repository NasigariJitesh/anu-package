import { CommonButtonProps } from 'anu/lib/primitives';
// import { DocumentResult } from 'expo-document-picker';
import { ImagePickerResult, MediaTypeOptions } from 'expo-image-picker';

type BasicFileUploadProps = CommonButtonProps & {
  variant: 'image' | 'file';
  multiple?: boolean;
  sortable?: boolean;
  optimization?: boolean;
};

type ImageFileUploadProps = BasicFileUploadProps & {
  variant: 'image';
  mediaType?: MediaTypeOptions;
  onUpload: (data: ImagePickerResult) => void;
  previewStyle?: 'list' | 'carousel';
  selectionLimit?: number;
  orderedSelection?: boolean;
};

type OtherFileUploadProps = BasicFileUploadProps & {
  variant: 'file';
  fileType?: string | string[];
  copyToCacheDirectory?: boolean;
  // onUpload: (data: DocumentResult) => void;
};

export type FileUploadProps = ImageFileUploadProps | OtherFileUploadProps;

export interface FileUploadReferenceProps {
  isUploading: () => boolean;
  files: never[];
}
