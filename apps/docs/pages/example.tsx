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
  MenuItem,
  MenuList,
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
  const [text, setText] = useState(false);
  const [text1, setText1] = useState(false);
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

  const { add, close } = useSnackbar();

  return (
    <Container flexDirection='column' sx={{ flex: 1, backgroundColor: '#46464F', paddingTop: 1 }}>
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
      <Container sx={{}}></Container>
      <Menu
        isOpen={text}
        onMenuToggle={(value) => {
          setText(value);
        }}
        component={
          <Button.Outlined
            title='Menu'
            onPress={() => {
              setText(true);
            }}
          />
        }
      >
        <MenuList width={400}>
          <MenuItem leadingIcon={{ name: 'close' }} disabled>
            Item 1
          </MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem inset>Item 1</MenuItem>
          <Menu
            component={
              <MenuItem style={{ width: '100%' }} onPress={() => setText1(true)}>
                Item Child
              </MenuItem>
            }
            isOpen={text1}
            onMenuToggle={(value) => {
              setText1(value);
            }}
          >
            <MenuList inner={true}>
              <MenuItem leadingIcon={{ name: 'close' }} disabled>
                Item 2
              </MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem inset>Item 2</MenuItem>
            </MenuList>
          </Menu>

          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
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
