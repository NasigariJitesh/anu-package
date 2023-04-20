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
  Search,
  TextField,
  TextFieldReferenceProps,
  Typography,
  useSnackbar,
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

  const { add, close } = useSnackbar();

  return (
    <Container flexDirection='column' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
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
      <Button.Text
        title='add snack'
        onPress={() => {
          add({
            content: 'First Snack',
          });
        }}
      />
      <Button.Text
        title='add snack 2'
        onPress={() => {
          add({
            content:
              'This is very long snack, This is very long snack , This is very long snack, This is very long snack ,   This is very long snack, This is very long snack , This is very long snack, This is very long snack , This is very long snack, This is very long snack  ',
            action: { title: 'Close', onPress: close },
            icon: { icon: { name: 'close' }, type: 'standard', onPress: close },
            duration: 10_000,
            style: { height: 200 },
          });
        }}
      />
    </Container>
  );
}
