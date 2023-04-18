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
  Menu,
  MenuComponent,
  MenuItem,
  MenuList,
  OTPInput,
  PhoneInput,
  Search,
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
  const [text, setText] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const reference = useRef<AutoCompleteReferenceProps | null>(null);
  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Pressable
        onPress={() => console.log('press')}
        style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 5, alignItems: 'center' }}
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
    <Container
      flexDirection='column'
      justify='space-between'
      sx={{ flex: 1, backgroundColor: '#46464F', height: '100vh', paddingTop: 1 }}
    >
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
      <Menu
        isOpen={text}
        onMenuToggle={(value) => {
          setText(value);
        }}
      >
        <MenuComponent>
          <Button.Outlined
            title='Menu'
            onPress={() => {
              setText(true);
            }}
          />
        </MenuComponent>
        <MenuList position='top-left' style={{ width: 400 }}>
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 1</MenuItem>
        </MenuList>
      </Menu>
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
