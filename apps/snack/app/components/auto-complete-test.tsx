/* eslint-disable react-native/no-inline-styles */
import { AutoComplete, Container, Options, TouchableRipple, Typography } from 'anu/lib';
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

const Item = ({ item, onPress }: { item: Options; onPress: () => void }) => {
  return (
    <TouchableRipple style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }} onPress={onPress}>
      <Typography.Body>{item.value as string}</Typography.Body>
    </TouchableRipple>
  );
};

const AutoCompleteScreen = () => {
  const [text, setText] = useState('');
  const [show, toggleShow] = useState(false);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Item
        onPress={() => {
          setText(item.value as string);
          toggleShow(false);
        }}
        item={item}
      />
    );
  };

  return (
    <Container disableGutters sx={{ flex: 1 }}>
      <Container disableGutters sx={{ margin: 10, zIndex: 150 }}>
        <AutoComplete
          variant='outlined'
          data={data}
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
          label='Auto Complete'
          style={{ width: 150 }}
          flatListProps={{ renderItem: ListRenderItem }}
          showResults={show}
          toggleShowResults={toggleShow}
        />
      </Container>
      <Container disableGutters sx={{ margin: 10, zIndex: 100 }}>
        <AutoComplete
          variant='outlined'
          data={data}
          value={text1}
          onChangeText={(value: string) => {
            setText1(value);
          }}
          label='Auto Complete'
          style={{ height: 45 }}
          flatListProps={{ renderItem: ListRenderItem, style: { maxHeight: 100 } }}
        />
      </Container>
      <Container disableGutters sx={{ margin: 10, zIndex: 50 }}>
        <AutoComplete
          variant='outlined'
          data={data}
          value={text2}
          onChangeText={(value: string) => {
            setText2(value);
          }}
          label='Auto Complete'
          flatListProps={{ renderItem: ListRenderItem }}
        />
      </Container>
    </Container>
  );
};

export default AutoCompleteScreen;
