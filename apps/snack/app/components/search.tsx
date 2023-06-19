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

const SearchScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  return (
    <Container disableGutters style={{ flex: 1, width: '100%' }}>
      <Container disableGutters style={{ flex: 1, padding: 10, width: '100%', zIndex: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Docked Search</Typography.Title>
        <Search
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
          label='Hinted search Text'
          filterOnChange={(value: string) =>
            data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))
          }
          flatListProps={{
            renderItem: ({ item }: { item: Options }) => <ListRenderItem item={item} setValue={setText} />,
          }}
          data={data}
          leadingIcon={<Icon name='search' />}
          type='docked'
        />
      </Container>
      <Container disableGutters style={{ flex: 1, padding: 10, width: '100%', zIndex: 90 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Full Screen Search</Typography.Title>
        <Search
          value={text1}
          onChangeText={(value: string) => {
            setText1(value);
          }}
          label='Hinted search Text'
          filterOnChange={(value: string) =>
            data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))
          }
          flatListProps={{
            renderItem: ({ item }: { item: Options }) => <ListRenderItem item={item} setValue={setText1} />,
          }}
          data={data}
          leadingIcon={<Icon name='search' />}
          type='full-screen'
        />
      </Container>
    </Container>
  );
};

export default SearchScreen;
