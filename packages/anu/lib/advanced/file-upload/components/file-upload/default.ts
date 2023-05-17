import { FileUploadProps } from '../../types';

export const defaultProps: FileUploadProps = {
  category: 'common',
  size: 'medium',
  title: 'Upload File',
  variant: 'elevated',
  listWidth: 250,
  errorMessageForDuplicateFiles: 'Already file with same name exists please retry uploading after renaming the file',
  uploadVariant: 'file',
};
