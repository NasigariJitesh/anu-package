import { AutoCompleteReferenceProps, Options, TextFieldAutoCompleteProps } from 'anu/lib/composites';
import { FlatListProps } from 'anu/lib/primitives';
import { PhoneNumber } from 'libphonenumber-js';

export interface PhoneInputProps extends Omit<TextFieldAutoCompleteProps, 'data' | 'flatListProps'> {
  flatListProps?: Omit<FlatListProps<Options>, 'renderItem' | 'data'>;
  onChangeText: (phoneNumber: string, phoneNumberData?: PhoneNumber) => void;
}

export type PhoneInputReferenceProps = Omit<AutoCompleteReferenceProps, 'results'>;

export interface CountryCodeObject {
  name: string;
  countryCode: string;
  flag: string;
  alt: string;
  emoji: string;
}
