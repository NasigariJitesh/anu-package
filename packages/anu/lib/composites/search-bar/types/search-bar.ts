import { Options } from 'anu/lib/composites/auto-complete/types';
import { StyleProp, ViewStyle } from 'react-native';

import { StandardAutoCompleteProps } from '../../auto-complete/types';

export interface SearchBarProps
  extends Omit<StandardAutoCompleteProps, 'autoCompleteStyle' | 'autoCompleteContainerStyle'> {
  type?: 'docked' | 'full-screen';
  containerStyle?: StyleProp<ViewStyle>;
  searchBarStyle?: StyleProp<ViewStyle>;
  clearText: () => void;
  filterOnChange: (key: string) => Options[];
}

export interface SearchBarReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
