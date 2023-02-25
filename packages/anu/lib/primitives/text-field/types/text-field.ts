import { ExtendedDisabledStyles, ExtendedHoverStyles, ReactChildren } from 'common/types';
import { Pressable, SxProp, TextInput } from 'dripsy';
import { MutableRefObject } from 'react';
import { PressableStateCallbackType, StyleProp, TextInput as RNTextInput, TextStyle } from 'react-native';

/***
 * The Variant type of the text Field
 * Check out {@link https://m3.material.io/components/text-fields/overview Text Fields} to learn more
 */
export type TextInputVariant = 'outlined' | 'filled';

/**
 * The props type of the dripsy text input
 */
export type TextInputProps = React.ComponentPropsWithoutRef<typeof TextInput>;

/**
 *  The type for the style of text field container
 */
export interface TextFieldContainerStyle extends ExtendedHoverStyles, ExtendedDisabledStyles {}

export interface TextFieldProps extends Omit<TextInputProps, 'variant'> {
  variant: TextInputVariant;
  leadingIcon?: ReactChildren;
  trailingIcon?: ReactChildren;
  sx?: SxProp;
  containerStyle?: TextFieldContainerStyle;
  pressableProps?: Omit<React.ComponentProps<typeof Pressable>, 'sx'>;
  disabled?: boolean;
  errorMessage?: string | string[];
  errorMessageStyle?: StyleProp<TextStyle>;
  supportingTextStyle?: StyleProp<TextStyle>;
  supportingText?: string;
}

export interface TextInputLabelProps extends TextFieldProps {
  states?: PressableStateCallbackType;
  height: number;
  textInputRef: MutableRefObject<RNTextInput | null>;
}
