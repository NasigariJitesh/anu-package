/* eslint-disable react-native/no-color-literals */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Avatar, Container, FlatListProps, Icon, Options, Search as SearchComponent, Typography } from 'anu/lib';
import { SearchBarProps } from 'anu/lib/composites/search-bar/types';
// import SearchDark from 'assets/full-screen-search-dark.gif';
// import SearchLight from 'assets/full-screen-search-light.gif';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';
import { Pressable } from 'react-native';
// import { useMenuContext } from 'screens/common/provider';

const margin = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
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

const Search = (
  props: Omit<SearchBarProps, 'value' | 'onChangeText' | 'filterOnChange' | 'flatListProps'> & {
    flatListProps?: Partial<FlatListProps<Options>>;
  },
) => {
  const [text, setText] = useState('');

  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Pressable
        style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}
        onPress={() => setText(item.value as string)}
      >
        <Typography.Body>{item.value as string}</Typography.Body>
      </Pressable>
    );
  };

  return (
    <SearchComponent
      value={text}
      onChangeText={(value: string) => {
        setText(value);
      }}
      style={{ width: 300 }}
      label='Hinted search Text'
      filterOnChange={(value: string) => data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))}
      {...props}
      flatListProps={{ ...props.flatListProps, renderItem: ListRenderItem }}
    />
  );
};

const Example1 = () => {
  const theme = useTheme();

  return (
    <Container disableGutters flexDirection='column-reverse' sx={flexStyle as never}>
      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={
            <Container disableGutters flexDirection='row' align='center'>
              <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
              <Icon name='share' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
            </Container>
          }
        />
      </Container>

      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={
            <Container disableGutters flexDirection='row' align='center'>
              <Icon name='search' color={theme.colors?.$onSurface as string} style={{ marginRight: 20 }} />
              <Avatar source={{ uri: 'https://i.pravatar.cc/300' }} variant='circle' />
            </Container>
          }
        />
      </Container>
      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='menu' color={theme.colors?.$onSurface as string} />}
          trailingIcon={<Avatar source={{ uri: 'https://i.pravatar.cc/300' }} variant='circle' />}
        />
      </Container>
      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='menu' />}
          trailingIcon={<Icon name='search' color={theme.colors?.$onSurface as string} />}
        />
      </Container>
    </Container>
  );
};

const Example2 = () => {
  // const { isDarkTheme } = useMenuContext();

  return (
    <Container disableGutters sx={flexStyle as never}>
      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='search' style={{ color: 'inherit', width: '100%' }} />}
          type='full-screen'
        />
      </Container>
    </Container>
  );
};

const Example3 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <Container disableGutters style={margin}>
        <Search
          data={data}
          leadingIcon={<Icon name='search' style={{ color: 'inherit', width: '100%' }} />}
          type='docked'
        />
      </Container>
    </Container>
  );
};

const Example4 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <Container disableGutters style={margin}>
        <Search
          data={[]}
          flatListProps={{
            ListEmptyComponent: (
              <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
                <Typography.Body>No results found</Typography.Body>
              </Pressable>
            ),
          }}
          leadingIcon={<Icon name='search' style={{ color: 'inherit' }} />}
          type='docked'
        />
      </Container>
    </Container>
  );
};

export const searchDocumentation: ContentValues = {
  mainHeading: 'searchDocumentation:mainHeading',
  mainDescription: 'searchDocumentation:mainDescription',

  properties: [
    {
      name: 'filterOnChange',
      type: '(key: string) => Options[]',
      description: 'searchDocumentation:property-filterOnChange-description',
    },
    {
      name: 'type',
      type: "'docked' | 'full-screen'",
      description: 'searchDocumentation:property-type-description',
      optional: true,
      defaultValue: "'docked'",
    },
    {
      name: 'style',
      type: 'TextFieldContainerStyle',
      description: 'searchDocumentation:property-style-description',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'searchDocumentation:example1-name',
      id: 'search-bars',
      description: 'searchDocumentation:example1-description',
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
      id: 'full-screen-search',
      description: 'searchDocumentation:example2-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Search
  data={data}
  flatListProps={{ renderItem: ListRenderItem }}
  leadingIcon={<Icon name='menu' />}
  trailingIcon={<Icon name='search' color={theme.colors?.$onSurface as string}/>}
  type='full-screen'
/>`,
    },
    {
      name: 'searchDocumentation:example3-name',
      id: 'docked-search',
      description: 'searchDocumentation:example3-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
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
      id: 'search-no-results',
      description: 'searchDocumentation:example4-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example4 />
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
    title: 'searchDocumentation:external-properties-title',
  },
};

export const searchIndex: HeadingProps = {
  heading: 'searchDocumentation:mainHeading',
  links: [
    {
      title: 'searchDocumentation:example1-name',
      link: '#search-bars',
    },
    {
      title: 'searchDocumentation:example2-name',
      link: '#full-screen-search',
    },
    {
      title: 'searchDocumentation:example3-name',
      link: '#docked-search',
    },
    {
      title: 'searchDocumentation:example4-name',
      link: '#search-no-results',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
