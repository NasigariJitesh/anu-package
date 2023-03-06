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
  /**
   * The type of the text field
   */
  variant: TextInputVariant;
  /**
   * Icon to be displayed to left of the text field
   */
  leadingIcon?: ReactChildren;
  /**
   * Icon to be displayed to right of the text field
   */
  trailingIcon?: ReactChildren;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProp;
  /**
   * The styles for the text field component.
   */
  containerStyle?: TextFieldContainerStyle;
  /**
   * The properties of the pressable component of react native (except sx)
   */
  pressableProps?: Omit<React.ComponentProps<typeof Pressable>, 'sx'>;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If there is any error related to field
   */
  error?: boolean;
  /**
   * Error messages need to be displayed with the text field
   */
  errorMessage?: string | string[];
  /**
   * styles for the error message
   */
  errorMessageStyle?: StyleProp<TextStyle>;
  /**
   * Support text need to be displayed with the text field
   */
  supportingTextStyle?: StyleProp<TextStyle>;
  /**
   * styles for the supporting text of text field
   */
  supportingText?: string;
}

export interface TextInputLabelProps extends TextFieldProps {
  states?: PressableStateCallbackType;
  height: number;
  textInputRef: MutableRefObject<RNTextInput | null>;
}
