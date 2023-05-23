/* eslint-disable react-native/no-inline-styles */
import { Container, Icon, Options, Search, TouchableRipple, Typography } from 'anu/lib';
import React, { useState } from 'react';

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

const SearchScreen = () => {
  const [text, setText] = useState('');

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
    <Container disableGutters style={{ margin: 10 }}>
      <Search
        value={text}
        onChangeText={(value: string) => {
          setText(value);
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
  );
};

export default SearchScreen;
