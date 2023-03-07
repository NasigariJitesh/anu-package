import { Chip, Container } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const chipDocumentation: ContentValues = {
  mainHeading: 'Chips',
  mainDescription:
    'Chips help people enter information, make selections, filter content, or trigger actions. There are four types of chips: assist, filter, input, and suggestion.',
  properties: [
    {
      name: 'type',
      type: "'assist' | 'filter' | 'input' | 'suggestion'",
      description: 'The type of the chip.',
      defaultValue: 'suggestion',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The content of the chip.',
    },
    {
      name: 'selected',
      type: 'boolean (optional)',
      description: 'Whether the chip is selected',
      defaultValue: 'false',
    },
    {
      name: 'elevated',
      type: 'boolean (optional)',
      description: 'Whether the chip has an elevated style',
    },

    {
      name: 'leadingIcon',
      type: 'Icon (optional)',
      description: 'Icon to be displayed before (to left of) the chip content',
    },

    {
      name: 'trailingIcon',
      type: 'Icon (optional)',
      description: 'Icon to be displayed after (to right of) the chip content',
    },

    {
      name: 'style',
      description: 'The styles for the chip component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'disabled',
      description: 'If true, the component is disabled.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
  ],
  examples: [
    {
      name: 'Assist Chip',
      id: 'assist-chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Chip type='assist' value='Assist' />
          <Chip type='assist' value='Assist' disabled />
          <Chip type='assist' value='Assist' elevated />
          <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
  <Chip type='assist' value='Assist' />
  <Chip type='assist' value='Assist' elevated />
  <Chip leadingIcon={{ name: 'right-arrow' }} type='assist' value='Assist' />
</Container>`,
      description: 'Assist chip only has a leading icon and can be used only as an informative chip',
    },
    {
      name: 'Filter Chip',
      id: 'filter-chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Chip type='filter' value='Filter' />
          <Chip type='filter' value='Filter' disabled />
          <Chip type='filter' value='Filter' selected />
          <Chip type='filter' value='Filter' selected disabled />
          <Chip type='filter' value='Filter' elevated />
          <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <Chip type='filter' value='Filter' />
  <Chip type='filter' value='Filter' disabled />
  <Chip type='filter' value='Filter' selected />
  <Chip type='filter' value='Filter' selected disabled />
  <Chip type='filter' value='Filter' elevated />
  <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
</Container>`,
      description: 'Filter chip has a leading icon and can be used as a selectable chip',
    },
    {
      name: 'Input Chip',
      id: 'input-chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Chip type='input' value='Input' />
          <Chip type='input' value='Input' disabled />
          <Chip type='input' value='Input' selected />
          <Chip type='input' value='Input' selected disabled />
          <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
          <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
        </Container>
      ),
      code: `<Container
  disableGutters
  flexDirection='row'
  align='center'
  justify='space-around'
  sx={{ width: '100%', maxWidth: 700 }}
>
  <<Chip type='input' value='Input' />
  <Chip type='input' value='Input' disabled />
  <Chip type='input' value='Input' selected />
  <Chip type='input' value='Input' selected disabled />
  <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
  <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
</Container>`,
      description: 'Filter chip has both leading and trailing icon and can be used as a selectable chip',
    },
    {
      name: 'Suggestion Chip',
      id: 'suggestion-chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Chip type='suggestion' value='Suggest' />
          <Chip type='suggestion' value='Suggest' disabled />
          <Chip type='suggestion' value='Suggest' elevated />
          <Chip type='suggestion' value='Suggest' selected />
          <Chip type='suggestion' value='Suggest' selected disabled />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
    <Chip type='suggestion' value='Suggest' />
    <Chip type='suggestion' value='Suggest' disabled />
    <Chip type='suggestion' value='Suggest' elevated />
    <Chip type='suggestion' value='Suggest' selected />
    <Chip type='suggestion' value='Suggest' selected disabled />
</Container>`,
      description: 'Suggestion chip has no icon and can be used as a selectable chip',
    },
  ],
};

export const chipIndex: HeadingProps = {
  heading: 'Chip',
  links: [
    {
      components: [
        {
          title: 'Assist Chip',
          link: '#assist-chip',
        },
        {
          title: 'Filter Chip',
          link: '#filter-chip',
        },
        {
          title: 'Input Chip',
          link: '#input-chip',
        },
        {
          title: 'Suggestion Chip',
          link: '#suggestion-chip',
        },
      ],
      title: 'Examples',
      link: '#example',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
