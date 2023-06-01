import { FlatListProps, TextFieldProps } from 'anu/lib/primitives';

export interface Options {
  id: string;
  value?: unknown;
}

export interface AutoCompleteProps extends Omit<Partial<TextFieldProps>, 'value' | 'onChangeText' | 'variant'> {
  /**
   * The Value of the text in auto complete
   */
  value: string;
  /**
   * The array of items to be searched from
   */
  data: Array<Options>;
  /**
   * Callback Function when the value is changed
   *
   * @param value - value of text
   */
  onChangeText: (value: string) => void;
  /**
   * The properties for the flat list component used to display results
   */
  flatListProps: Omit<FlatListProps<Options>, 'data'>;
  /**
   *The variant of the auto complete component
   */
  variant?: 'filled' | 'outlined' | 'base';
  /**
   * Function to filter the options on change of text value
   *
   * @param value - value of text
   * @returns {Options[]} - filtered options
   */
  filterOnChange?: (value: string) => Array<Options>;
  /**
   * Whether the comparison is case sensitive
   */
  caseSensitive?: boolean;
  /**
   * If true, uses debouncing technique when filtering
   */
  debounce?: boolean;
  /**
   * Time Duration for the debouncing
   */
  debounceDuration?: number;
  /**
   * The direction which the dropdown button is displayed
   */
  direction?: 'rtl' | 'ltr';
  /**
   * Whether to hide the drop down button
   */
  hideDropDownButton?: boolean;
  /**
   * Whether to show the result drop down
   */
  showResults?: boolean;
  /**
   * Callback to toggle the showResults property
   */
  toggleShowResults?: (value: React.SetStateAction<boolean>) => void;

  /**
   * should use portal while rendering the results drop down
   */
  usePortal?: boolean;
}

export interface AutoCompleteReferenceProps {
  focus: () => void;
  blur: () => void;
  results: Array<Options>;
}
