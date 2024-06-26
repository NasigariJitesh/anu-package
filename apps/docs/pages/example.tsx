/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {
  Accordion,
  AutoComplete,
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  Container,
  FileUpload,
  Grid,
  Icon,
  Options,
  PasswordInput,
  PhoneInput,
  Search,
  Step,
  StepIndicator,
  Tab,
  Tabs,
  TextArea,
  TextField,
  TimePickerModal,
  TouchableRipple,
  Typography,
} from 'anu/lib';
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

const data1 = [
  'Item1',
  'Item2',
  'Item3',
  'Item4',
  'Item5',
  'Item6',
  'Item7',
  'Item8',
  'Item9',
  'Item10',
  'Item11',
  'Item12',
  'Item13',
  'Item14',
  'Item15',
  'Item16',
  'Item17',
];
/**
 *
 */
export default function Example() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <Accordion.Container title={<Accordion.Header>Accordion 1</Accordion.Header>} collapse={visible2}>
        <Accordion.Children>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
        </Accordion.Children>
      </Accordion.Container>

      <Grid
        data={data1}
        numberOfColumns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
        }}
        renderItem={(item, index) => (
          <Container align='center' justify='center' width='100%' style={{ height: 100 }}>
            <Typography.Title>
              {item} {index.row},{index.column}
            </Typography.Title>
          </Container>
        )}
      />

      <StepIndicator width={500}>
        <Step completed editable>
          Step 1
        </Step>
        <Step optional>Step 2</Step>
        <Step notApplicable name={'Custom\nname'} icon={<Icon name='person' />}>
          Step 3
        </Step>
        <Step error>Step 4</Step>
      </StepIndicator>

      <TouchableRipple
        style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}
        onPress={() => setVisible2((p) => !p)}
      >
        <>Press</>
      </TouchableRipple>

      <PasswordInput value={text} onChangeText={setText} />
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

      <Button.Tonal onPress={() => setLoading((previous) => !previous)} title='Loading test' isLoading={loading} />

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
