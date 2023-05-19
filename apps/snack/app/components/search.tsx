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
        style={{ width: 260 }}
        leadingIcon={<Icon name='search' />}
        type='full-screen'
      />
    </Container>
  );
};

export default SearchScreen;
