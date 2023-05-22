import { TextFieldProps } from 'anu/lib';

export interface TextAreaProps extends Partial<Omit<TextFieldProps, 'multiline' | 'hideClearButton'>> {
  value: string;
}
