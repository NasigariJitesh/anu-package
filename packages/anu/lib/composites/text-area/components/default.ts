import { TextAreaProps } from '../types/text-area';

export const defaultProps: Omit<TextAreaProps, 'value'> = {
  numberOfLines: 8,
  scrollEnabled: false,
  label: 'Text Area',
};
