import { Chip, Container } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

const flexStyle = { width: 200, flexWrap: 'wrap', height: 90 } as const;

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
      component: (
        <Container disableGutters flexDirection='row' align='center' justify='space-around' sx={flexStyle}>
          <Chip type='assist' value='Assist' />
          <Chip type='assist' value='Assist' disabled />
          <Chip type='assist' value='Assist' elevated />
          <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' />
        </Container>
      ),
      code: `<Chip type='assist' value='Assist' />
<Chip type='assist' value='Assist' elevated />
<Chip leadingIcon={{ name:'right-arrow' }} type='assist' value='Assist' />`,
      description: 'Assist chip only has a leading icon and can be used only as an informative chip',
    },
    {
      name: 'Filter Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-between'
          sx={{ ...flexStyle, width: 230 }}
        >
          <Chip type='filter' value='Filter' />
          <Chip type='filter' value='Filter' disabled />
          <Chip type='filter' value='Filter' selected />
          <Chip type='filter' value='Filter' selected disabled />
          <Chip type='filter' value='Filter' elevated />
          <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
        </Container>
      ),
      code: `<Chip type='filter' value='Filter' />
<Chip type='filter' value='Filter' disabled />
<Chip type='filter' value='Filter' selected />
<Chip type='filter' value='Filter' selected disabled />
<Chip type='filter' value='Filter' elevated />
<Chip leadingIcon={{ name:'filter-alt' }} type='filter' value='Filter' />
`,
      description: 'Filter chip has a leading icon and can be used as a selectable chip',
    },
    {
      name: 'Filter Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-between'
          sx={{ ...flexStyle, width: 260 }}
        >
          <Chip type='input' value='Input' />
          <Chip type='input' value='Input' disabled />
          <Chip type='input' value='Input' selected />
          <Chip type='input' value='Input' selected disabled />
          <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
          <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
        </Container>
      ),
      code: `<Chip type='input' value='Input' />
<Chip type='input' value='Input' disabled />
<Chip type='input' value='Input' selected />
<Chip type='input' value='Input' selected disabled />
<Chip leadingIcon={{ name:'add' }} type='input' value='Input' />
<Chip trailingIcon={{ name:'close' }} type='input' value='Input' />`,
      description: 'Filter chip has both leading and trailing icon and can be used as a selectable chip',
    },
    {
      name: 'Suggestion Chip',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-between'
          sx={{ ...flexStyle, width: 270 }}
        >
          <Chip type='suggestion' value='Suggest' />
          <Chip type='suggestion' value='Suggest' disabled />
          <Chip type='suggestion' value='Suggest' elevated />
          <Chip type='suggestion' value='Suggest' selected />
          <Chip type='suggestion' value='Suggest' selected disabled />
        </Container>
      ),
      code: `<Chip type='suggestion' value='Suggest' />
<Chip type='suggestion' value='Suggest' disabled />
<Chip type='suggestion' value='Suggest' elevated />
<Chip type='suggestion' value='Suggest' selected />
<Chip type='suggestion' value='Suggest' selected disabled />`,
      description: 'Suggestion chip has no icon and can be used as a selectable chip',
    },
  ],
};
