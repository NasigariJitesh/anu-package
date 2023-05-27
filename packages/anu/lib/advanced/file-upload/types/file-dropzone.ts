import { ReactChildren } from 'anu/common/types';
import { ContainerProps } from 'anu/lib/primitives';
import { Accept } from 'react-dropzone';
import { StyleProp, ViewStyle } from 'react-native';

import { Config } from './file-upload';

interface BasicFileDropZoneProps extends Omit<ContainerProps, 'variant'> {
  /**
   * The content of dropzone
   */
  children: ReactChildren;
  /**
   * The content of dropzone when its is active
   */
  dragActivePlaceholder?: ReactChildren;
  /**
   * The variant of file upload (wether image or files).
   */
  uploadVariant?: 'image' | 'file';
  /**
   * Whether to allow multiple  files upload
   */
  multiple?: boolean;
  /**
   * Whether to allow sorting after uploading files
   */
  sortable?: boolean;
  /**
   * Whether the dropzone is disabled
   */
  disabled?: boolean;
  /**
   * Callback function that will be called when there is any change in uploaded file list
   *
   * @param data - files
   * @param fileUri - uris of files
   */
  onChange?: (data: File | File[] | null, fileUri?: string | string[] | null) => void;
  /**
   * Callback function that will be called when the uploaded files are submitted
   *
   * @param data - files
   * @param fileUri - uris of files
   */
  onSubmit?: () => void;
  /**
   * The mimetype of the files to be allowed for upload
   */
  fileType?: Accept;
  /**
   * Whether to copy file to cache directory after uploading
   */
  copyToCacheDirectory?: boolean;
  /**
   * The styles for the drop zone/area
   */
  dropZoneStyle?: StyleProp<ViewStyle>;
  /**
   * The styles for the file upload component
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The Styles for the upload list
   */
  listStyle?: StyleProp<ViewStyle>;
  /*
   * The Styles for the upload list Item
   */
  listItemStyle?: StyleProp<ViewStyle>;
  /**
   * The error state and message for each file
   */
  errors?: { error: boolean; errorMessage: string }[];
  /**
   * The width of files upload list
   */
  listWidth?: number;
  /**
   * The message to display when duplicate file name is found in upload list
   */
  errorMessageForDuplicateFiles?: string;

  /**
   * Hide action buttons
   */
  hideActionButtons?: boolean;

  cancelLabel?: string;
  submitLabel?: string;
}

interface ImageFileDropZoneProps extends BasicFileDropZoneProps {
  uploadVariant?: 'image';
  /**
   * The type of preview of image in the upload list
   */
  previewType?: 'list' | 'carousel';
  /**
   * Whether to optimize image during upload
   */
  optimization?: boolean;
  optimizationConfig?: Config;
}

interface OtherFileDropZoneProps extends BasicFileDropZoneProps {
  uploadVariant: 'file';
}

export type FileDropZoneProps = ImageFileDropZoneProps | OtherFileDropZoneProps;

export interface FileDropZoneReferenceProps {
  files: File[];
}
