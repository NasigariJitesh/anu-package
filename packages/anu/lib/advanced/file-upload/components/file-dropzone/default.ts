import { FileDropZoneProps } from '../../types';

export const defaultProps: Omit<FileDropZoneProps, 'children' | 'cancelLabel' | 'submitLabel'> &
  Pick<FileDropZoneProps, 'cancelLabel' | 'submitLabel' | 'hideActionButtons'> = {
  uploadVariant: 'file',
  listWidth: 250,
  errorMessageForDuplicateFiles: 'Already file with same name exists please retry uploading after renaming the file',
  cancelLabel: 'Cancel',
  submitLabel: 'Submit',
  hideActionButtons: false,
};
