/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {
  AutoComplete,
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  Container,
  FileUpload,
  Icon,
  Options,
  PasswordInput,
  PhoneInput,
  Search,
  Tab,
  Tabs,
  TextField,
  TimePickerModal,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import TextArea from 'anu/lib/composites/text-area/components/text-area';
import React, { useCallback } from 'react';
import { useState } from 'react';

const data = [
  {
    id: 'item 1',
    value: 'Item 1',
  },
  {
    id: 'item 2',
    value: 'Item 2',
  },
  {
    id: 'item 3',
    value: 'Item 3',
  },
  {
    id: 'item 4',
    value: 'Item 4',
  },
  {
    id: 'item 5',
    value: 'Item 5',
  },
  {
    id: 'item 6',
    value: 'Item 6',
  },
];
/**
 *
 */
export default function Example() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [visible1, setVisible1] = useState(false);

  const onDismiss = useCallback(() => {
    setVisible(false);
    setVisible1(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setVisible(false);
      setVisible1(false);
      console.log({ hours, minutes });
    },
    [setVisible],
  );
  const [text1, setText1] = useState('');

  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <TouchableRipple
        style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}
        onPress={() => setText(item.value as string)}
      >
        <Typography.Body>{item.value as string}</Typography.Body>
      </TouchableRipple>
    );
  };

  return (
    <Container flexDirection='column' sx={{ flex: 1, paddingTop: 1 }}>
      <PasswordInput
        label='LOngggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
        value={text}
        onChangeText={setText}
        variant='filled'
      />
      <AvatarGroup total={15}>
        <Avatar source={{ uri: 'https://i.pravatar.cc/?img=10' }} variant='circle' />
        <Avatar source={{ uri: 'https://i.pravatar.cc/?img=11' }} variant='circle' />
        <Avatar source={{ uri: 'https://i.pravatar.cc/?img=12' }} variant='circle' />
        <Avatar source={{ uri: 'https://i.pravatar.cc/?img=13' }} variant='circle' />
      </AvatarGroup>

      <FileUpload
              category='common'
              variant='filled'
              size='medium'
              title='Choose a file'
              uploadVariant='image'
              previewType='list'
              multiple
              sortable
            />

      <Container disableGutters style={{ zIndex: 1000, marginVertical: 10, width: '100%' }}>
        <AutoComplete
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
          variant='filled'
          data={data}
          label='Auto Complete'
          flatListProps={{ renderItem: ListRenderItem, style: { maxHeight: 140 } }}
        />
      </Container>

      <TextArea
        value={text}
        onChangeText={setText}
        numberOfLines={3}
        textBreakStrategy='highQuality'
        variant='filled'
        labelStyle={{
          '@active': {
            backgroundColor: 'red',
          },
        }}
      />
      <Container disableGutters style={{ zIndex: 1000, marginVertical: 10, width: '100%' }}>
        <Search
          value={text1}
          onChangeText={(value: string) => {
            setText1(value);
          }}
          label='Hinted search Text'
          filterOnChange={(value: string) =>
            data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))
          }
          flatListProps={{ renderItem: ListRenderItem }}
          data={data}
          leadingIcon={<Icon name='search' />}
          type='docked'
        />
      </Container>
      <Container disableGutters style={{ zIndex: 900, marginVertical: 10, width: '100%' }}>
        <PhoneInput
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
          label='Phone number'
        />
      </Container>
      <TextField
        value={text}
        onChangeText={setText}
        error={() => {
          return text === 'error';
        }}
      />

      <Chip
        value='Action'
        type='input'
        style={{
          width: 300,
          borderRadius: 10,
          marginTop: 10,
          paddingVertical: 50,
          borderColor: 'pink',
          borderWidth: 5,
        }}
      />
      <Tabs type='primary' maxWidth={500}>
        <Tab name='One' icon={{ name: 'favorite' }}>
          <Typography.Body>
            This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
            is very long snack, This is very long snack , This is very long snack, This is very long snack , This is
            very long snack, This is very long snack
          </Typography.Body>
        </Tab>
        <Tab name='Two'>
          <Container sx={{ backgroundColor: 'yellow' }}>
            <Typography.Body>
              This is Two very long snack, This is very long snack , This is very long snack, This is very long snack ,
              This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
              is very long snack, This is very long snack
            </Typography.Body>
          </Container>
        </Tab>
        <Tab name='One' icon={{ name: 'favorite' }}>
          <Typography.Body>
            This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
            is very long snack, This is very long snack , This is very long snack, This is very long snack , This is
            very long snack, This is very long snack
          </Typography.Body>
        </Tab>
      </Tabs>
      <Container flexDirection='row'>
        <Button.Text onPress={() => setVisible(true)} title='pick time' />
        <Button.Text onPress={() => setVisible1(true)} title='pick time 24hrs' />
      </Container>
      <TimePickerModal visible={visible} onDismiss={onDismiss} onConfirm={onConfirm} hours={12} minutes={14} />
      <TimePickerModal
        visible={visible1}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
        use24HourClock
      />
    </Container>
  );
}
