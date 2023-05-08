/* eslint-disable react-native/no-inline-styles */
import {
  AutoComplete as AutoCompleteComponent,
  AutoCompleteProps,
  Container,
  FlatListProps,
  Options,
  Typography,
} from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';
import { Pressable } from 'react-native';

const style = {
  margin: 15,
  height: 250,
  width: 296,
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

const AutoComplete = (
  props: Omit<AutoCompleteProps, 'value' | 'onChangeText' | 'flatListProps'> & {
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
    <AutoCompleteComponent
      {...props}
      value={text}
      onChangeText={(value: string) => {
        setText(value);
      }}
      label='Auto Complete'
      flatListProps={{ ...props.flatListProps, renderItem: ListRenderItem }}
    />
  );
};

export const autoCompleteDocumentation: ContentValues = {
  mainHeading: 'autoCompleteDocumentation:mainHeading',
  properties: [
    {
      name: 'value',
      type: 'string',
      description: 'autoCompleteDocumentation:property-value-description',
    },
    {
      name: 'data',
      type: 'Array<Options>',
      description: 'autoCompleteDocumentation:property-data-description',
    },
    {
      name: 'onChangeText',
      type: '(value: string) => void',
      description: 'autoCompleteDocumentation:property-onChangeText-description',
    },
    {
      name: 'flatListProps',
      type: 'FlatListProps',
      description: 'autoCompleteDocumentation:property-flatListProps-description',
    },
    {
      name: 'variant',
      type: "'filled' | 'outlined' | 'base'",
      description: 'autoCompleteDocumentation:property-variant-description',
      defaultValue: "'outlined' ",
      optional: true,
    },
    {
      name: 'filterOnChange',
      type: '(value: string) => Array<Options>',
      description: 'autoCompleteDocumentation:property-filterOnChange-description',
      optional: true,
    },
    {
      name: 'caseSensitive',
      type: 'boolean',
      optional: true,
      description: 'autoCompleteDocumentation:property-caseSensitive-description',
      defaultValue: 'false',
    },
    {
      name: 'debounce',
      type: 'boolean',
      optional: true,
      description: 'autoCompleteDocumentation:property-debounce-description',
      defaultValue: 'false',
    },
    {
      name: 'debounceDuration',
      description: 'autoCompleteDocumentation:property-debounceDuration-description',
      type: 'number',
      optional: true,
      defaultValue: '200',
    },

    {
      name: 'resultContainerStyle',
      description: 'autoCompleteDocumentation:property-resultContainerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },

    {
      name: 'autoCompleteContainerStyle',
      description: 'autoCompleteDocumentation:property-autoCompleteContainerStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'autoCompleteDocumentation:example1-name',
      id: 'outlined-auto-complete',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <AutoComplete variant='outlined' data={data} autoCompleteContainerStyle={style} />
          </Container>
        </Container>
      ),
      code: "<AutoComplete variant='outlined' data={data} flatListProps={{ renderItem: ListRenderItem }} />",
    },
    {
      name: 'autoCompleteDocumentation:example2-name',
      id: 'filled-auto-complete',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <AutoComplete variant='filled' data={data} autoCompleteContainerStyle={style} />
        </Container>
      ),
      code: "<AutoComplete variant='filled' data={data} flatListProps={{ renderItem: ListRenderItem }} />",
    },
    {
      name: 'autoCompleteDocumentation:example3-name',
      id: 'base-auto-complete',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <AutoComplete variant='base' data={data} autoCompleteContainerStyle={style} />
        </Container>
      ),
      code: "<AutoComplete variant='base' data={data} flatListProps={{ renderItem: ListRenderItem }} />",
    },
    {
      name: 'autoCompleteDocumentation:example4-name',
      id: 'auto-complete-debouncing',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <AutoComplete variant='outlined' data={data} autoCompleteContainerStyle={style} debounce />
        </Container>
      ),
      code: "<AutoComplete variant='outlined' data={data} flatListProps={{ renderItem: ListRenderItem }} debounce />",
    },
    {
      name: 'autoCompleteDocumentation:example5-name',
      id: 'auto-complete-no-results',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <AutoComplete
            variant='outlined'
            data={[]}
            flatListProps={{
              ListEmptyComponent: (
                <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
                  <Typography.Body>No more Results</Typography.Body>
                </Pressable>
              ),
            }}
            autoCompleteContainerStyle={[style, { height: 100 }]}
          />
        </Container>
      ),
      code: `<AutoComplete
  variant='outlined'
  data={[]}
  flatListProps={{
    renderItem: ListRenderItem,
    ListEmptyComponent: (
      <Pressable style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
        <Typography.Body>No more Results</Typography.Body>
      </Pressable>
    ),
  }}
/>`,
    },
  ],
  externalProperties: {
    link: '/components/text-field',
    title: 'autoCompleteDocumentation:external-properties-title',
  },
};

export const autoCompleteIndex: HeadingProps = {
  heading: 'autoCompleteDocumentation:mainHeading',
  links: [
    {
      title: 'autoCompleteDocumentation:example1-name',
      link: '#outlined-auto-complete',
    },
    {
      title: 'autoCompleteDocumentation:example2-name',
      link: '#filled-auto-complete',
    },
    {
      title: 'autoCompleteDocumentation:example3-name',
      link: '#base-auto-complete',
    },
    {
      title: 'autoCompleteDocumentation:example4-name',
      link: '#auto-complete-debouncing',
    },
    {
      title: 'autoCompleteDocumentation:example5-name',
      link: '#auto-complete-no-results',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
