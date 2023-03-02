import { Badge, Chip, Container, Icon } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const chipDocumentation: ContentValues = {
  heading: 'Chips',
  subTitle:
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
      name: 'active',
      type: 'boolean (optional)',
      description: 'TBD',
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
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
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
      description: 'Assist chip only has a leading icon and (cant be active)',
    },
    {
      name: 'Filter Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <Chip type='filter' value='Filter' />
          <Chip type='filter' value='Filter' disabled />
          <Chip type='filter' value='Filter' active />
          <Chip type='filter' value='Filter' active disabled />
          <Chip type='filter' value='Filter' elevated />
          <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
        </Container>
      ),
      code: `<Container
      disableGutters
      flexDirection='row'
      align='center'
      justify='space-around'
      sx={{ width: '100%', maxWidth: 500 }}
    >
      <Chip type='filter' value='Filter' />
      <Chip type='filter' value='Filter' disabled />
      <Chip type='filter' value='Filter' active />
      <Chip type='filter' value='Filter' active disabled />
      <Chip type='filter' value='Filter' elevated />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
    </Container>`,
      description: 'Filter chip has a leading icon and (can be active)',
    },
    {
      name: 'Filter Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <Chip type='input' value='Input' />
          <Chip type='input' value='Input' disabled />
          <Chip type='input' value='Input' active />
          <Chip type='input' value='Input' active disabled />
          <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
          <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
        </Container>
      ),
      code: `<Container
      disableGutters
      flexDirection='row'
      align='center'
      justify='space-around'
      sx={{ width: '100%', maxWidth: 500 }}
    >
      <<Chip type='input' value='Input' />
      <Chip type='input' value='Input' disabled />
      <Chip type='input' value='Input' active />
      <Chip type='input' value='Input' active disabled />
      <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
      <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
    </Container>`,
      description: 'Filter chip has both leading and tailing icon and (can be active)',
    },
    {
      name: 'Suggestion Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <Chip type='suggestion' value='Suggest' />
          <Chip type='suggestion' value='Suggest' disabled />
          <Chip type='suggestion' value='Suggest' elevated />
          <Chip type='suggestion' value='Suggest' active />
          <Chip type='suggestion' value='Suggest' active disabled />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
        <Chip type='suggestion' value='Suggest' />
        <Chip type='suggestion' value='Suggest' disabled />
        <Chip type='suggestion' value='Suggest' elevated />
        <Chip type='suggestion' value='Suggest' active />
        <Chip type='suggestion' value='Suggest' active disabled />
    </Container>`,
      description: 'Suggestion chip has no icon and (can be active)',
    },
  ],
};
