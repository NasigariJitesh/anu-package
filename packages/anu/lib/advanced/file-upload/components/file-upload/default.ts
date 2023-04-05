// import { DocumentResult } from 'expo-document-picker';
import { ImagePickerResult, MediaTypeOptions } from 'expo-image-picker';

import { FileUploadProps } from '../../types';

export const defaultProps: FileUploadProps = {
  variant: 'image',
  onUpload: (data: ImagePickerResult) => {},
  category: 'regular',
  size: 'medium',
  title: 'Upload File',
  type: 'elevated',
};
