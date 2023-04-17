import { Options } from 'anu/lib/composites/auto-complete/types';
import { TextFieldContainerStyle } from 'anu/lib/primitives';
import { StyleProp, ViewStyle } from 'react-native';

import { AutoCompleteProps } from '../../auto-complete/types';

export interface SearchBarProps
  extends Omit<AutoCompleteProps, 'autoCompleteStyle' | 'autoCompleteContainerStyle' | 'style'> {
  /**
   * The type of view for search results
   */
  type?: 'docked' | 'full-screen';
  /**
   * The Styles for the search bar component and results container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * The Styles for the search bar container
   */
  searchBarContainerStyle?: StyleProp<ViewStyle>;
  /**
   * The Styles for the search bar input field
   */
  searchBarStyle?: TextFieldContainerStyle;
  /**
   * The function to filter the results based on search key
   *
   * @param {string}key - the serach key
   * @returns {Option[]} results based on  search key
   */
  filterOnChange: (key: string) => Options[];
}

export interface SearchBarReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
