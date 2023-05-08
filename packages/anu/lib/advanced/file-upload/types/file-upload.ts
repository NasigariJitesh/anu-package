import { CommonButtonProps } from 'anu/lib/primitives';
import { StyleProp, ViewStyle } from 'react-native';

export interface Config {
  quality?: number;
  maxHeight?: number;
  maxWidth?: number;
  convertSize?: number;
  convertTypes?: string[];
}
type BasicFileUploadProps = CommonButtonProps & {
  /*
   * The variant of file upload (wether image or files).
   */
  variant?: 'image' | 'file';
  /*
   * Whether to allow multiple  files upload
   */
  multiple?: boolean;
  /*
   * Whether to allow sorting after uploading files
   */
  sortable?: boolean;
  /*
   * Callback function that will be called when there is any change in uploaded file list
   * @param data - files
   * @param fileUri - uris of files
   */
  onChange?: (data: File | File[] | null, fileUri?: string | string[] | null) => void;
  /*
   * The mimetype of the files to be allowed for upload
   */
  fileType?: MimeType | MimeType[];
  /*
   * Whether to copy file to cache directory after uploading
   */
  copyToCacheDirectory?: boolean;
  /*
   * The styles for the file upload component
   */
  style?: StyleProp<ViewStyle>;
  /*
   * The Styles for the upload list
   */
  listStyle?: StyleProp<ViewStyle>;
  /*
   * The Styles for the upload list Item
   */
  listItemStyle?: StyleProp<ViewStyle>;
  /*
   * The error state and message for each file
   */
  errors?: { error: boolean; errorMessage: string }[];
  /*
   * The width of files upload list
   */
  listWidth?: number;
  /*
   * The message to display when duplicate file name is found in upload list
   */
  errorMessageForDuplicateFiles?: string;
};

type ImageFileUploadProps = BasicFileUploadProps & {
  variant?: 'image';
  /*
   * The type of preview of image in the upload list
   */
  previewType?: 'list' | 'carousel';
  /*
   * Whether to optimize image during upload
   */
  optimization?: boolean;
  optimizationConfig?: Config;
  /*
   * The mimetype of the files to be allowed for upload
   */
  fileType?: ImageMimeType | ImageMimeType[];
};

type OtherFileUploadProps = BasicFileUploadProps & {
  variant: 'file';
};

export type FileUploadProps = ImageFileUploadProps | OtherFileUploadProps;

export interface FileUploadReferenceProps {
  isUploading: () => boolean;
  files: File[];
}

export type MimeType =
  | 'image/*'
  | 'application/*'
  | 'text/*'
  | 'video/*'
  | 'audio/*'
  | 'font/*'
  | 'audio/aac'
  | 'application/x-abiword'
  | 'application/x-freearc'
  | 'image/avif'
  | 'video/x-msvideo'
  | 'application/vnd.amazon.ebook'
  | 'application/octet-stream'
  | 'image/bmp'
  | 'application/x-bzip'
  | 'application/x-bzip2'
  | 'application/x-cdf'
  | 'application/x-csh'
  | 'text/css'
  | 'text/csv'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.ms-fontobject'
  | 'application/epub+zip'
  | 'application/gzip'
  | 'image/gif'
  | 'text/html'
  | 'image/vnd.microsoft.icon'
  | 'text/calendar'
  | 'application/java-archive'
  | 'image/jpeg'
  | 'text/javascript (Specifications: HTML and RFC 9239)'
  | 'application/json'
  | 'application/ld+json'
  | 'audio/midi'
  | 'audio/x-midi'
  | 'text/javascript'
  | 'audio/mpeg'
  | 'video/mp4'
  | 'video/mpeg'
  | 'application/vnd.apple.installer+xml'
  | 'application/vnd.oasis.opendocument.presentation'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.oasis.opendocument.text'
  | 'audio/ogg'
  | 'video/ogg'
  | 'application/ogg'
  | 'audio/opus'
  | 'font/otf'
  | 'image/png'
  | 'application/pdf'
  | 'application/x-httpd-php'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/vnd.rar'
  | 'application/rtf'
  | 'application/x-sh'
  | 'image/svg+xml'
  | 'application/x-tar'
  | 'image/tiff'
  | 'video/mp2t'
  | 'font/ttf'
  | 'text/plain'
  | 'application/vnd.visio'
  | 'audio/wav'
  | 'audio/webm'
  | 'video/webm'
  | 'image/webp'
  | 'font/woff'
  | 'font/woff2'
  | 'application/xhtml+xml'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/xml'
  | 'application/vnd.mozilla.xul+xml'
  | 'application/zip'
  | 'video/3gpp'
  | 'audio/3gpp'
  | 'video/3gpp2'
  | 'audio/3gpp2'
  | 'application/x-7z-compressed';

export type ImageMimeType =
  | 'image/*'
  | 'image/webp'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/png'
  | 'image/gif'
  | 'image/vnd.microsoft.icon'
  | 'image/jpeg'
  | 'image/avif'
  | 'image/bmp';
