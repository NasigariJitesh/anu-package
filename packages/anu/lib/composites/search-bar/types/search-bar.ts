import { Options } from 'anu/lib/composites/auto-complete/types';
import { TextFieldContainerStyle } from 'anu/lib/primitives';

import { AutoCompleteProps } from '../../auto-complete/types';

export interface SearchBarProps extends AutoCompleteProps {
  /**
   * The type of view for search results
   */
  type?: 'docked' | 'full-screen';
  /**
   * The Styles for the search bar input field
   */
  style?: TextFieldContainerStyle;
  /**
   * The function to filter the results based on search key
   *
   * @param {string}key - the search key
   * @returns {Option[]} results based on  search key
   */
  filterOnChange: (key: string) => Options[];
}

export interface SearchBarReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
