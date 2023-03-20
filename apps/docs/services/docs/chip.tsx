import { Chip, Container } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
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
      type: 'boolean',
      optional: true,
      description: 'Whether the chip is selected',
      defaultValue: 'false',
    },
    {
      name: 'elevated',
      type: 'boolean',
      optional: true,
      description: 'Whether the chip has an elevated style',
    },

    {
      name: 'leadingIcon',
      type: 'Icon',
      optional: true,
      description: 'Icon to be displayed before (to left of) the chip content',
    },

    {
      name: 'trailingIcon',
      type: 'Icon',
      optional: true,
      description: 'Icon to be displayed after (to right of) the chip content',
    },

    {
      name: 'style',
      description: 'The styles for the chip component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'disabled',
      description: 'If true, the component is disabled.',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
  ],
  examples: [
    {
      name: 'Assist Chip',
      id: 'assist-chip',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='assist' value='Assist' style={style} />
            <Chip type='assist' value='Assist' elevated style={style} />
            <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' style={style} />
            <Chip leadingIcon={{ name: 'person' }} elevated type='assist' value='Assist' style={style} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='assist' value='Assist' disabled style={style} />
            <Chip type='assist' value='Assist' elevated disabled style={style} />
            <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' disabled style={style} />
            <Chip leadingIcon={{ name: 'person' }} elevated type='assist' value='Assist' style={style} disabled />
          </Container>
        </Container>
      ),
      code: `<Chip type='assist' value='Assist' />
<Chip type='assist' value='Assist' elevated />
<Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' />
<Chip leadingIcon={{ name: 'person' }} elevated type='assist' value='Assist' />

<Chip type='assist' value='Assist' disabled />
<Chip type='assist' value='Assist' elevated disabled />
<Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' disabled />
<Chip leadingIcon={{ name: 'person' }} elevated type='assist' value='Assist' disabled />`,
      description: 'Assist chip only has a leading icon and can be used only as an informative chip',
    },
    {
      name: 'Filter Chip',
      id: 'filter-chip',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='filter' value='Filter' style={style} />
            <Chip type='filter' value='Filter' elevated style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated style={style} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='filter' value='Filter' disabled style={style} />
            <Chip type='filter' value='Filter' elevated disabled style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' disabled style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated disabled style={style} />
          </Container>
        </Container>
      ),
      code: `<Chip type='filter' value='Filter' />
<Chip type='filter' value='Filter' elevated />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated />

<Chip type='filter' value='Filter' disabled />
<Chip type='filter' value='Filter' elevated disabled />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' disabled />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated disabled />`,
      description: 'Filter chip has a leading icon and can be used as a selectable chip',
    },
    {
      name: 'Filter Chip - Selected',
      id: 'filter-chip-selected',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='filter' value='Filter' selected style={style} />
            <Chip type='filter' value='Filter' selected elevated style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected elevated style={style} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='filter' value='Filter' selected disabled style={style} />
            <Chip type='filter' value='Filter' selected elevated disabled style={style} />
            <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected disabled style={style} />
            <Chip
              leadingIcon={{ name: 'filter-alt' }}
              type='filter'
              value='Filter'
              selected
              elevated
              disabled
              style={style}
            />
          </Container>
        </Container>
      ),
      code: `<Chip type='filter' value='Filter' selected />
<Chip type='filter' value='Filter' selected elevated />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected elevated />

<Chip type='filter' value='Filter' selected disabled />
<Chip type='filter' value='Filter' selected elevated disabled />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected disabled />
<Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected elevated disabled />`,
      description: 'Filter chip has a leading icon and can be used as a selectable chip',
    },
    {
      name: 'Input Chip',
      id: 'input-chip',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='input' value='Input' style={style} />
            <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' style={style} />
            <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' style={style} />
            <Chip
              leadingIcon={{ name: 'filter-alt' }}
              trailingIcon={{ name: 'close' }}
              type='input'
              value='Input'
              style={style}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='input' value='Input' disabled style={style} />
            <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' disabled style={style} />
            <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' disabled style={style} />
            <Chip
              leadingIcon={{ name: 'filter-alt' }}
              trailingIcon={{ name: 'close' }}
              type='input'
              value='Input'
              disabled
              style={style}
            />
          </Container>
        </Container>
      ),
      code: `<Chip type='input' value='Input' />
<Chip leadingIcon={{ name: 'add' }} type='input' value='Input' />
<Chip trailingIcon={{ name: 'close' }} type='input' value='Input' />
<Chip leadingIcon={{ name: 'filter-alt' }} trailingIcon={{ name: 'close' }} type='input' value='Input' />

<Chip type='input' value='Input' disabled/>
<Chip leadingIcon={{ name: 'add' }} type='input' value='Input' disabled/>
<Chip trailingIcon={{ name: 'close' }} type='input' value='Input' disabled/>
<Chip leadingIcon={{ name: 'filter-alt' }} trailingIcon={{ name: 'close' }} type='input' value='Input' disabled/>`,
      description: 'Input chip has both leading and trailing icon and can be used as a selectable chip',
    },
    {
      name: 'Input Chip - Selected',
      id: 'input-chip-selected',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='input' value='Input' selected style={style} />
            <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' selected style={style} />
            <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' selected style={style} />
            <Chip
              leadingIcon={{ name: 'filter-alt' }}
              trailingIcon={{ name: 'close' }}
              type='input'
              value='Input'
              selected
              style={style}
            />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='input' value='Input' selected disabled style={style} />
            <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' selected disabled style={style} />
            <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' selected disabled style={style} />
            <Chip
              leadingIcon={{ name: 'filter-alt' }}
              trailingIcon={{ name: 'close' }}
              type='input'
              value='Input'
              selected
              disabled
              style={style}
            />
          </Container>
        </Container>
      ),
      code: `<Chip type='input' value='Input' selected />
<Chip leadingIcon={{ name: 'add' }} type='input' value='Input' selected />
<Chip trailingIcon={{ name: 'close' }} type='input' value='Input' selected />
<Chip leadingIcon={{ name: 'filter-alt' }} trailingIcon={{ name: 'close' }} type='input' value='Input' selected />

<Chip type='input' value='Input' selected disabled/>
<Chip leadingIcon={{ name: 'add' }} type='input' value='Input' selected disabled/>
<Chip trailingIcon={{ name: 'close' }} type='input' value='Input' selected disabled/>
<Chip leadingIcon={{ name: 'filter-alt' }} trailingIcon={{ name: 'close' }} type='input' value='Input' selected disabled/>`,
      description: 'Input chip has both leading and trailing icon and can be used as a selectable chip',
    },
    {
      name: 'Suggestion Chip',
      id: 'suggestion-chip',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='suggestion' value='Suggestion' style={style} />
            <Chip type='suggestion' value='Suggestion' elevated style={style} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='suggestion' value='Suggestion' disabled style={style} />
            <Chip type='suggestion' value='Suggestion' elevated disabled style={style} />
          </Container>
        </Container>
      ),
      code: `<Chip type='suggestion' value='Suggestion' />
<Chip type='suggestion' value='Suggestion' elevated />

<Chip type='suggestion' value='Suggestion' disabled />
<Chip type='suggestion' value='Suggestion' elevated disabled />`,
      description: 'Suggestion chip has no icon and can be used as a selectable chip',
    },
    {
      name: 'Suggestion Chip - Selected',
      id: 'suggestion-chip-selected',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='suggestion' value='Suggestion' selected style={style} />
            <Chip type='suggestion' value='Suggestion' selected elevated style={style} />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <Chip type='suggestion' value='Suggestion' selected disabled style={style} />
            <Chip type='suggestion' value='Suggestion' selected elevated disabled style={style} />
          </Container>
        </Container>
      ),
      code: `<Chip type='suggestion' value='Suggestion' selected />
<Chip type='suggestion' value='Suggestion' selected elevated />

<Chip type='suggestion' value='Suggestion' selected disabled />
<Chip type='suggestion' value='Suggestion' selected elevated disabled />`,
      description: 'Suggestion chip has no icon and can be used as a selectable chip',
    },
  ],
};

export const chipIndex: HeadingProps = {
  heading: 'Chip',
  links: [
    {
      title: 'Assist Chip',
      link: '#assist-chip',
    },
    {
      title: 'Filter Chip',
      link: '#filter-chip',
    },
    {
      title: 'Filter Chip - Selected',
      link: '#filter-chip-selected',
    },
    {
      title: 'Input Chip',
      link: '#input-chip',
    },
    {
      title: 'Input Chip - Selected',
      link: '#input-chip-selected',
    },
    {
      title: 'Suggestion Chip',
      link: '#suggestion-chip',
    },
    {
      title: 'Suggestion Chip - Selected',
      link: '#suggestion-chip-selected',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
