import { FileDropZoneProps } from '../../types';

export const defaultProps: Omit<FileDropZoneProps, 'children'> = {
  variant: 'file',
  listWidth: 250,
  errorMessageForDuplicateFiles: 'Already file with same name exists please retry uploading after renaming the file',
};
