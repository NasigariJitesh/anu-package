import { AutoCompleteProps, AutoCompleteReferenceProps, Options } from 'anu/lib/composites';
import { FlatListProps } from 'anu/lib/primitives';
import { PhoneNumber } from 'libphonenumber-js';

export interface PhoneInputProps
  extends Omit<AutoCompleteProps, 'data' | 'flatListProps' | 'variant' | 'filterOnChange' | 'caseSensitive'> {
  flatListProps?: Omit<FlatListProps<Options>, 'renderItem' | 'data'>;
  /**
   * Callback Function when the value is changed or new data related to phone number is available.
   *
   * @param phoneNumber - phone number entered
   * @param phoneNumberData - data related to phone number
   */
  onChangeText: (phoneNumber: string, phoneNumberData?: PhoneNumber) => void;
  /**
   * The default country code value of phone input.
   */
  defaultCountryCode?: string;
  /**
   * The Value of the phone number.
   */
  variant?: 'outlined' | 'filled';
}

export type PhoneInputReferenceProps = Omit<AutoCompleteReferenceProps, 'results'>;

export interface CountryCodeObject {
  name: string;
  countryCode: string;
  flag: string;
  alt: string;
  emoji: string;
}
