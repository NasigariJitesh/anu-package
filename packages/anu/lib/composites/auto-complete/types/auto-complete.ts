import { ReactChildren } from 'anu/common/types';
import { FlatListProps, TextFieldProps } from 'anu/lib/primitives';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface Options {
  id: string;
  value?: unknown;
}

interface CommonAutoCompleteProps {
  resultContainerStyle?: StyleProp<ViewStyle>;
  autoCompleteContainerStyle?: StyleProp<ViewStyle>;
  data: Array<Options>;
  filterOnChange?: (value: string) => Array<Options>;
  caseSensitive?: boolean;
  debounce?: boolean;
  debounceDuration?: number;
  variant?: 'filled' | 'outlined' | 'standard';
  onChangeText: (value: string) => void;
  value: string;
  direction?: 'rtl' | 'ltr';
  hideDropDownButton?: boolean;
  flatListProps: FlatListProps<Options>;
}

export interface StandardAutoCompleteProps
  extends Omit<TextInputProps, 'variant' | 'value' | 'onChangeText' | 'style'>,
    CommonAutoCompleteProps {
  variant?: 'standard';
  trailingComponent?: ReactChildren;
  leadingComponent?: ReactChildren;
  autoCompleteStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  inputAreaStyle?: StyleProp<TextStyle>;
}

export interface TextFieldAutoCompleteProps
  extends CommonAutoCompleteProps,
    Omit<Partial<TextFieldProps>, 'value' | 'onChangeText'> {
  variant: 'filled' | 'outlined';
}

export type AutoCompleteProps = StandardAutoCompleteProps | TextFieldAutoCompleteProps;

export interface AutoCompleteReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
