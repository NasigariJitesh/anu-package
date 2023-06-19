/* eslint-disable react-native/no-inline-styles */
import { AutoComplete, Container, Options, TouchableRipple, Typography } from 'anu/lib';
import { useState } from 'react';
import { Pressable } from 'react-native';

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
  {
    id: 'item 7',
    value: 'Item 7',
  },
  {
    id: 'item 8',
    value: 'Item 8',
  },
  {
    id: 'item 9',
    value: 'Item 9',
  },
  {
    id: 'item 10',
    value: 'Item 10',
  },
];

const Item = ({ item, onPress }: { item: Options; onPress: () => void }) => {
  return (
    <TouchableRipple style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }} onPress={onPress}>
      <Typography.Body>{item.value as string}</Typography.Body>
    </TouchableRipple>
  );
};

const ListRenderItem = ({ item, setValue }: { item: Options; setValue: (text: string) => void }) => {
  return <Item onPress={() => setValue(item.value as string)} item={item} />;
};

const ListEmptyComponent = () => {
  return (
    <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
      <Typography.Body>No more Results</Typography.Body>
    </Pressable>
  );
};

const AutoCompleteScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <Container style={{ width: '100%', flex: 1 }}>
      <Container disableGutters style={{ width: '100%', height: 150, padding: 10, zIndex: 120 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined</Typography.Title>
        <AutoComplete
          variant='outlined'
          data={data}
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
          label='Auto Complete'
          flatListProps={{
            renderItem: ({ item }: { item: Options }) => <ListRenderItem item={item} setValue={setText} />,
            ListEmptyComponent: ListEmptyComponent,
          }}
        />
      </Container>
      <Container disableGutters style={{ width: '100%', height: 150, padding: 10, zIndex: 110 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled</Typography.Title>
        <AutoComplete
          variant='filled'
          data={data}
          value={text1}
          onChangeText={(value: string) => {
            setText1(value);
          }}
          label='Auto Complete'
          flatListProps={{
            renderItem: ({ item }: { item: Options }) => <ListRenderItem item={item} setValue={setText1} />,
            ListEmptyComponent: ListEmptyComponent,
          }}
        />
      </Container>
      <Container disableGutters style={{ width: '100%', height: 150, padding: 10, zIndex: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Base</Typography.Title>
        <AutoComplete
          variant='base'
          data={data}
          value={text2}
          onChangeText={(value: string) => {
            setText2(value);
          }}
          label='Auto Complete'
          flatListProps={{
            renderItem: ({ item }: { item: Options }) => <ListRenderItem item={item} setValue={setText2} />,
            ListEmptyComponent: ListEmptyComponent,
          }}
        />
      </Container>
    </Container>
  );
};

export default AutoCompleteScreen;
