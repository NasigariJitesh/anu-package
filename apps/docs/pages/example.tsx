/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Chip,
  Container,
  Icon,
  Options,
  Search,
  Tab,
  Tabs,
  TextField,
  TimePickerModal,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

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
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      {/* <PasswordInput error value={text} onChangeText={setText} /> */}

      <KeyboardAvoidingView>
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
          searchBarStyle={{ width: 260 }}
          leadingIcon={<Icon name='search' />}
          type='full-screen'
        />
      </KeyboardAvoidingView>
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
