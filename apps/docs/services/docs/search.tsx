/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Avatar, Container, Icon, Options, Search as SearchComponent, Typography } from 'anu/lib';
import { SearchBarProps } from 'anu/lib/composites/search-bar/types';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { DripsyFinalTheme } from 'dripsy';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { useMenuContext } from 'screens/common/provider';

const style = {
  margin: 15,
  width: 360,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

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
const ListRenderItem = ({ item }: { item: Options }) => {
  return (
    <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
      <Typography.Body>{item.value as string}</Typography.Body>
    </Pressable>
  );
};

const Search = (props: Omit<SearchBarProps, 'value' | 'onChangeText' | 'filterOnChange'>) => {
  const [text, setText] = useState('');

  return (
    <SearchComponent
      {...props}
      value={text}
      onChangeText={(value: string) => {
        setText(value);
      }}
      label='Hinted search Text'
      filterOnChange={(value: string) => data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))}
    />
  );
};

const Example1 = () => {
  const { isDarkTheme } = useMenuContext();

  const theme = useTheme();
  const containerStyle = {
    ...flexStyle,
    borderRadius: 18,
    backgroundColor: (isDarkTheme ? '#46464F' : theme.colors?.$surfaceVariant) as string,
    borderColor: theme.colors?.$outline as string,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  return (
    <Container disableGutters flexDirection='column-reverse' sx={containerStyle as never}>
      <Container disableGutters style={style}>
        <Search
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={
            <Container disableGutters flexDirection='row' align='center'>
              <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
              <Icon name='share' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
            </Container>
          }
          containerStyle={{ width: 360 }}
          resultContainerStyle={{ width: 360 }}
        />
      </Container>

      <Container disableGutters style={style}>
        <Search
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={
            <Container disableGutters flexDirection='row' align='center'>
              <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/300' }} variant='circle' />
            </Container>
          }
          containerStyle={{ width: 360 }}
          resultContainerStyle={{ width: 360 }}
        />
      </Container>
      <Container disableGutters style={style}>
        <Search
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={<Avatar source={{ uri: 'https://i.pravatar.cc/300' }} variant='circle' />}
          containerStyle={{ width: 360 }}
          resultContainerStyle={{ width: 360 }}
        />
      </Container>
      <Container disableGutters style={style}>
        <Search
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          leadingIcon={<Icon name='menu' />}
          trailingIcon={<Icon name='search' color={theme.colors?.$onSurface as string} />}
          containerStyle={{ width: 360 }}
          resultContainerStyle={{ width: 360 }}
        />
      </Container>
    </Container>
  );
};

export const searchDocumentation: ContentValues = {
  mainHeading: 'searchDocumentation:mainHeading',
  properties: [
    {
      name: 'type',
      type: "'docked' | 'full-screen'",
      description: 'searchDocumentation:property-type-description',
      optional: true,
      defaultValue: "'docked'",
    },

    {
      name: 'searchBarStyle',
      type: 'TextFieldContainerStyle',
      description: 'searchDocumentation:property-searchBarStyle-description',
      optional: true,
    },
    {
      name: 'searchBarContainerStyle',
      description: 'searchDocumentation:property-searchBarContainerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'containerStyle',
      description: 'searchDocumentation:property-containerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'searchDocumentation:example1-name',
      id: 'search-bars',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='menu' />}
  trailingIcon={<Icon name='search' color={theme.colors?.$onSurface as string}/>}
/>

<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
  trailingIcon={<Avatar source={{ uri:'https://i.pravatar.cc/300' }} variant='circle' />}
/>

<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
  trailingIcon={
    <Container disableGutters flexDirection='row' align='center' >
      <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }}/>
      <Avatar source={{ uri:'https://i.pravatar.cc/300' }} variant='circle' />
    </Container>}
/>

<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
  trailingIcon={
    <Container disableGutters flexDirection='row' align='center' >
      <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }}/>
      <Icon name='share' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }}/>
    </Container>
  }
/>`,
    },
    {
      name: 'searchDocumentation:example2-name',
      id: 'filled-auto-complete',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          {/* <AutoComplete
            variant='filled'
            data={data}
            flatListProps={{ renderItem: ListRenderItem }}
          /> */}
        </Container>
      ),
      code: "<AutoComplete variant='filled' data={data} flatListProps={{ renderItem: ListRenderItem }} />",
    },
    {
      name: 'searchDocumentation:example3-name',
      id: 'base-auto-complete',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={[style, { height: 160 }]}>
            <Search
              data={data}
              flatListProps={{ renderItem: ListRenderItem }}
              leadingIcon={<Icon name='search' />}
              resultContainerStyle={{ maxHeight: 100 }}
              type='docked'
            />
          </Container>
        </Container>
      ),
      code: `<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='search' />}
  type='docked'
/>`,
    },
    {
      name: 'searchDocumentation:example4-name',
      id: 'auto-complete-debouncing',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          {/* <AutoComplete
            variant='outlined'
            data={data}
            flatListProps={{ renderItem: ListRenderItem }}
            debounce
          /> */}
        </Container>
      ),
      code: "<AutoComplete variant='outlined' data={data} flatListProps={{ renderItem: ListRenderItem }} debounce />",
    },
    {
      name: 'searchDocumentation:example5-name',
      id: 'auto-complete-no-results',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters style={[style, { height: 160 }]}>
            <Search
              data={[]}
              flatListProps={{
                renderItem: ListRenderItem,
                ListEmptyComponent: (
                  <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
                    <Typography.Body>No more Results</Typography.Body>
                  </Pressable>
                ),
              }}
              leadingIcon={<Icon name='search' />}
              resultContainerStyle={{ maxHeight: 100 }}
              type='docked'
            />
          </Container>
        </Container>
      ),
      code: `<Search
  data={[]}
  flatListProps={{
    renderItem: ListRenderItem,
    ListEmptyComponent: (
      <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
        <Typography.Body>No more Results</Typography.Body>
      </Pressable>
    ),
  }}              
  leadingIcon={<Icon name='search' />}
  type='docked'
/>`,
    },
  ],
  externalProperties: {
    link: '/components/auto-complete',
    title: 'searchDocumentation:externalProperties',
  },
};

export const searchIndex: HeadingProps = {
  heading: 'searchDocumentation:mainHeading',
  links: [
    {
      title: 'searchDocumentation:example1-name',
      link: '#outlined-auto-complete',
    },
    {
      title: 'searchDocumentation:example2-name',
      link: '#filled-auto-complete',
    },
    {
      title: 'searchDocumentation:example3-name',
      link: '#base-auto-complete',
    },
    {
      title: 'searchDocumentation:example4-name',
      link: '#auto-complete-debouncing',
    },
    {
      title: 'searchDocumentation:example5-name',
      link: '#auto-complete-no-results',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
