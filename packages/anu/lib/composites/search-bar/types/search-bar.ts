import { Options } from 'anu/lib/composites/auto-complete/types';
import { TextFieldContainerStyle } from 'anu/lib/primitives';
import { StyleProp, ViewStyle } from 'react-native';

import { AutoCompleteProps } from '../../auto-complete/types';

export interface SearchBarProps
  extends Omit<AutoCompleteProps, 'autoCompleteStyle' | 'autoCompleteContainerStyle' | 'style'> {
  type?: 'docked' | 'full-screen';
  containerStyle?: StyleProp<ViewStyle>;
  searchBarContainerStyle?: StyleProp<ViewStyle>;
  searchBarStyle?: TextFieldContainerStyle;
  filterOnChange: (key: string) => Options[];
}

export interface SearchBarReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
