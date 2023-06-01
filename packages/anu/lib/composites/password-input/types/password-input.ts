import { TextFieldProps } from 'anu/lib';

export type PasswordInputProps = Partial<Omit<TextFieldProps, 'multiline' | 'secureTextEntry'>> & { value: string };
