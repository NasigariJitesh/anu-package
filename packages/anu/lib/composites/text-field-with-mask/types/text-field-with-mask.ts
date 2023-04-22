import { TextFieldProps } from 'anu/lib';

export interface TextFieldWithMaskProps extends Partial<TextFieldProps> {
  mask: string;
  value: string;
}
