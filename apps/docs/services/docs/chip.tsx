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
  mainHeading: 'chipDocumentation:mainHeading',
  mainDescription: 'chipDocumentation:mainDescription',
  properties: [
    {
      name: 'type',
      type: "'assist' | 'filter' | 'input' | 'suggestion'",
      description: 'chipDocumentation:property-type-description',
      defaultValue: 'suggestion',
    },
    {
      name: 'value',
      type: 'string',
      description: 'chipDocumentation:property-value-description',
    },
    {
      name: 'selected',
      type: 'boolean',
      optional: true,
      description: 'chipDocumentation:property-selected-description',
      defaultValue: 'false',
    },
    {
      name: 'elevated',
      type: 'boolean',
      optional: true,
      description: 'chipDocumentation:property-elevated-description',
    },
    {
      name: 'leadingIcon',
      type: 'Icon',
      optional: true,
      description: 'chipDocumentation:property-leadingIcon-description',
    },
    {
      name: 'trailingIcon',
      type: 'Icon',
      optional: true,
      description: 'chipDocumentation:property-trailingIcon-description',
    },
    {
      name: 'style',
      description: 'chipDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'disabled',
      description: 'chipDocumentation:property-disabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
  ],
  examples: [
    {
      name: 'chipDocumentation:example1-name',
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
      description: 'chipDocumentation:example1-description',
    },
    {
      name: 'chipDocumentation:example2-name',
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
      description: 'chipDocumentation:example2-description',
    },
    {
      name: 'chipDocumentation:example3-name',
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
      description: 'chipDocumentation:example3-description',
    },
    {
      name: 'chipDocumentation:example4-name',
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
      description: 'chipDocumentation:example4-description',
    },
    {
      name: 'chipDocumentation:example5-name',
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
      description: 'chipDocumentation:example5-description',
    },
    {
      name: 'chipDocumentation:example6-name',
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
      description: 'chipDocumentation:example6-description',
    },
    {
      name: 'chipDocumentation:example7-name',
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
      description: 'chipDocumentation:example7-description',
    },
  ],
};
export const chipIndex: HeadingProps = {
  heading: 'chipDocumentation:mainHeading',
  links: [
    {
      title: 'chipDocumentation:example1-name',
      link: '#assist-chip',
    },
    {
      title: 'chipDocumentation:example2-name',
      link: '#filter-chip',
    },
    {
      title: 'chipDocumentation:example3-name',
      link: '#filter-chip-selected',
    },
    {
      title: 'chipDocumentation:example4-name',
      link: '#input-chip',
    },
    {
      title: 'chipDocumentation:example5-name',
      link: '#input-chip-selected',
    },
    {
      title: 'chipDocumentation:example6-name',
      link: '#suggestion-chip',
    },
    {
      title: 'chipDocumentation:example7-name',
      link: '#suggestion-chip-selected',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
