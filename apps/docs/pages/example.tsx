/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Container,
  IconButton,
  OTPInput,
  PhoneInput,
  SearchBar,
  TextField,
  TextFieldReferenceProps,
  Typography,
} from 'anu/lib';
import { AutoCompleteReferenceProps, Options } from 'anu/lib/composites/auto-complete/types';
import { useRef, useState } from 'react';
import { Pressable } from 'react-native';

/**
 *
 */
export default function Example() {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const reference = useRef<AutoCompleteReferenceProps | null>(null);
  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Pressable onPress={() => console.log('press')} style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
        <Typography.Body>{item.value as string} </Typography.Body>
      </Pressable>
    );
  };

  const data = [
    { id: 'hello', value: 'Hello' },
    { id: 'abcd', value: 'Abcd' },
    { id: 'efgh', value: 'Efgh' },
    { id: 'ijkl', value: 'Ijkl' },
    { id: 'lmno', value: 'LMNO' },
    { id: 'pqrs', value: 'PQRS' },
  ];

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1 }}>
      <SearchBar
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        value={text1}
        onChangeText={(value: string) => {
          setText1(value);
        }}
        filterOnChange={(key: string) => data.filter((item) => item.id.includes(key))}
        type={'full-screen'}
        label='Search'
      />
      <AutoComplete
        ref={reference}
        variant='outlined'
        direction='ltr'
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          console.log(value);
        }}
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        caseSensitive
        debounce
        autoCompleteContainerStyle={{ width: 300, height: 300 }}
        hideDropDownButton={false}
      />

      <PhoneInput
        value={text2}
        onChangeText={(value: string) => {
          setText2(value);
        }}
        defaultCountryCode={'+91'}
        variant={'outlined'}
      />
    </Container>
  );
}
