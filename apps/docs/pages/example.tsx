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
  // DatePickerInput,
  IconButton,
  OTPInput,
  PhoneInput,
  Search,
  TextField,
  TextFieldReferenceProps,
  TouchableRipple,
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
  const [inputDate, setInputDate] = useState<Date | undefined>();

  const reference = useRef<AutoCompleteReferenceProps | null>(null);
  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Pressable
        onPress={() => console.log('press')}
        style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, alignItems: 'center' }}
      >
        <Avatar>A</Avatar>
        <Container>
          <Typography.Title>{item.value as string} </Typography.Title>
          <Typography.Body>Supporting Text</Typography.Body>
        </Container>
      </Pressable>
    );
  };

  const data = [
    { id: 'list item 1', value: 'List Item 1' },
    { id: 'list item 2', value: 'List Item 2' },
    { id: 'list item 3', value: 'List Item 3' },
    { id: 'list item 4', value: 'List Item 4' },
    { id: 'list item 5', value: 'List Item 5' },
    { id: 'list item 6', value: 'List Item 6' },
  ];

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      {/* <DatePickerInput
        locale='en'
        label='Birthdate'
        value={inputDate}
        onChange={(d) => setInputDate(d)}
        inputMode='start'
        autoComplete='birthdate-full'
        // mode="outlined" (see react-native-paper docs)
        // other react native TextInput props
      /> */}

      <TouchableRipple onPress={() => console.log('Pressed')}>
        <Container align='center' justify='center' sx={{ height: 200, width: 200 }}>
          <Typography.Body>Press anywhere</Typography.Body>
        </Container>
      </TouchableRipple>
      {/* <Search
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        value={text1}
        onChangeText={(value: string) => {
          setText1(value);
        }}
        filterOnChange={(key: string) => data.filter((item) => item.id.toLowerCase().includes(key.toLowerCase()))}
        type={'full-screen'}
        searchBarContainerStyle={{ width: ' 100%' }}
        label='Hinted search text'
        resultContainerStyle={{ zIndex: 1000 }}
      /> */}

      {/* <AutoComplete
        ref={reference}
        variant='base'
        direction='ltr'
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          console.log(value);
        }}
        data={data}
        flatListProps={{
          renderItem: ListRenderItem,
          ListEmptyComponent: <ListRenderItem item={{ id: '', value: 'No more Results' }} />,
        }}
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
      /> */}
    </Container>
  );
}
