import { AutoCompleteProps, AutoCompleteReferenceProps, Options } from 'anu/lib/composites';
import { FlatListProps } from 'anu/lib/primitives';
import { PhoneNumber } from 'libphonenumber-js';

export interface PhoneInputProps
  extends Omit<AutoCompleteProps, 'data' | 'flatListProps' | 'variant' | 'filterOnChange' | 'caseSensitive'> {
  flatListProps?: Omit<FlatListProps<Options>, 'renderItem' | 'data'>;
  onChangeText: (phoneNumber: string, phoneNumberData?: PhoneNumber) => void;
  defaultCountryCode?: string;
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
