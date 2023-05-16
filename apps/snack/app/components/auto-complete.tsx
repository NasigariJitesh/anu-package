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

  const ListRenderItem = ({ item }: { item: Options }) => {
    return <Item onPress={() => setText(item.value as string)} item={item} />;
  };

  return (
    <Container disableGutters sx={{ margin: 10, flex: 1 }}>
      <AutoComplete
        variant='outlined'
        data={data}
        value={text}
        onChangeText={(value: string) => {
          setText(value);
        }}
        label='Auto Complete'
        flatListProps={{ renderItem: ListRenderItem }}
      />
    </Container>
  );
};

export default AutoCompleteScreen;
