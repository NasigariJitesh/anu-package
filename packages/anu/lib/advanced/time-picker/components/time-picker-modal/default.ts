import { TimePickerModalProps } from '../../types';

export const defaultProps: TimePickerModalProps = {
  label: 'Select time',
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  animationType: 'fade',
  locale: 'en',
  keyboardIcon: 'keyboard',
  clockIcon: 'access-time',
  visible: undefined,
  onDismiss: () => {},
  onConfirm: () => {},
};
