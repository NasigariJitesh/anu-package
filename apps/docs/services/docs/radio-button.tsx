/* eslint-disable react-native/no-inline-styles */
import { Container } from 'anu/lib';
import { Radio, RadioButtonGroup } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};
const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const radioDocumentation: ContentValues = {
  mainHeading: 'radioDocumentation:mainHeading',
  mainDescription: 'radioDocumentation:mainDescription',
  properties: [
    {
      name: 'id',
      description: 'radioDocumentation:property-id-description',
      type: 'string',
    },
    {
      name: 'selected',
      description: 'radioDocumentation:property-selected-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'label',
      description: 'radioDocumentation:property-label-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'labelPlacement',
      description: 'radioDocumentation:property-labelPlacement-description',
      type: "'left' | 'right' | 'top' | 'bottom'",
      defaultValue: 'right',
      optional: true,
    },
    {
      name: 'disabled',
      description: 'radioDocumentation:property-disabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'color',
      description: 'radioDocumentation:property-color-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'style',
      description: 'radioDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'labelStyle',
      description: 'radioDocumentation:property-labelStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },

    {
      name: 'onPress',
      description: 'radioDocumentation:property-onPress-description',
      type: '(id: string) => void',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'radioDocumentation:example1-name',
      id: 'default',
      code: `<Radio id='basic' />
<Radio id='disabled' disabled />
<Radio id='basic' selected='basic' />
<Radio id='basic-disabled' selected='basic-disabled' disabled/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Radio id='basic' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='disabled' disabled />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='basic' selected='basic' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='basic-disabled' selected='basic-disabled' disabled />
          </Container>
        </Container>
      ),
    },
    {
      name: 'radioDocumentation:example2-name',
      id: 'radio-button-label',
      code: `<Radio id='label' label='Label' />
<Radio id='labelLeft' label='Left' labelPlacement='left' />
<Radio id='labelRight' label='Right' labelPlacement='right' />
<Radio id='labelTop' label='Top' labelPlacement='top' />
<Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Radio id='label' label='Label' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='labelLeft' label='Left' labelPlacement='left' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='labelRight' label='Right' labelPlacement='right' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='labelTop' label='Top' labelPlacement='top' />
          </Container>
          <Container disableGutters style={style}>
            <Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />
          </Container>
        </Container>
      ),
    },
    {
      name: 'radioDocumentation:example3-name',
      id: 'radio-button-group',
      // eslint-disable-next-line no-secrets/no-secrets
      code: `<RadioButtonGroup flexDirection='row'>
  <Radio id='button1' label='Button 1' />
  <Radio id='button2' label='Button 2' />
  <Radio id='button3' label='Button 3' />
</RadioButtonGroup>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <RadioButtonGroup flexDirection='row'>
            <Radio id='button1' label='Button 1' labelStyle={{ marginRight: 5 }} />
            <Radio id='button2' label='Button 2' labelStyle={{ marginRight: 5 }} />
            <Radio id='button3' label='Button 3' labelStyle={{ marginRight: 5 }} />
          </RadioButtonGroup>
        </Container>
      ),
    },
  ],
};

export const radioButtonIndex: HeadingProps = {
  heading: 'radioDocumentation:mainHeading',
  links: [
    {
      title: 'radioDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'radioDocumentation:example2-name',
      link: '#radio-button-label',
    },
    {
      title: 'radioDocumentation:example3-name',
      link: '#radio-button-group',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
