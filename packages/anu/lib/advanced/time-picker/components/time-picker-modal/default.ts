import { TimePickerModalProps } from '../../types';

export const defaultProps: Omit<TimePickerModalProps, 'visible'> = {
  label: 'Select time',
  cancelLabel: 'Cancel',
  confirmLabel: 'Ok',
  animationType: 'fade',
  locale: 'en',
  keyboardIcon: 'keyboard',
  clockIcon: 'access-time',
  onDismiss: () => {},
  onConfirm: () => {},
  defaultInputType: 'picker',
};
