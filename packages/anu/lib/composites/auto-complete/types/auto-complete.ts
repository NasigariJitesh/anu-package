import { FlatListProps, TextFieldProps } from 'anu/lib/primitives';
import { StyleProp, ViewStyle } from 'react-native';

export interface Options {
  id: string;
  value?: unknown;
}

export interface AutoCompleteProps extends Omit<Partial<TextFieldProps>, 'value' | 'onChangeText' | 'variant'> {
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
  showResults?: boolean;
  toggleShowResults?: (value: React.SetStateAction<boolean>) => void;
  flatListProps: Omit<FlatListProps<Options>, 'data'>;
}

export interface AutoCompleteReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
