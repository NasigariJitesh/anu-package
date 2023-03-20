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
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

export const radioDocumentation: ContentValues = {
  mainHeading: 'Radio',

  mainDescription: 'Radio buttons allow users to select one option from a set.',
  properties: [
    {
      name: 'id',
      description: 'Id of the radio button item.',
      type: 'string',
    },
    {
      name: 'selected',
      description: 'Id of the selected radio button.',
      type: 'string',
      optional: true,
    },
    {
      name: 'label',
      description: 'The label to display with the radio button.',
      type: 'string',
      optional: true,
    },
    {
      name: 'labelPlacement',
      description: 'Position where the label should be placed.',
      type: "'left' | 'right' | 'top' | 'bottom' (optional)",
      defaultValue: 'right',
    },
    {
      name: 'disabled',
      description: 'If true, the component is disabled.',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'color',
      description: 'The color of the radio button component.',
      type: 'string',
      optional: true,
    },
    {
      name: 'style',
      description: 'The styles for the radio button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'labelStyle',
      description: 'The styles for the label of the radio button.',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'containerStyle',
      description: 'The styles for the container of the radio button.',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'onPress',
      description: 'The callback when there is a press or click on the radio button.',
      type: '(id: string) => void',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'Default',
      id: 'default',
      code: `<Radio id='basic' />
<Radio id='disabled' disabled />
<Radio id='basic' selected='basic' />
<Radio id='basic-disabled' selected='basic-disabled' disabled/>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Radio id='basic' containerStyle={style} />
          <Radio id='disabled' disabled containerStyle={style} />
          <Radio id='basic' selected='basic' containerStyle={style} />
          <Radio id='basic-disabled' selected='basic-disabled' disabled containerStyle={style} />
        </Container>
      ),
    },
    {
      name: 'Radio Button - with Label',
      id: 'radio-button-label',
      code: `<Radio id='label' label='Label' />
<Radio id='labelLeft' label='Left' labelPlacement='left' />
<Radio id='labelRight' label='Right' labelPlacement='right' />
<Radio id='labelTop' label='Top' labelPlacement='top' />
<Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Radio id='label' label='Label' containerStyle={style} />
          <Radio id='labelLeft' label='Left' labelPlacement='left' containerStyle={style} />
          <Radio id='labelRight' label='Right' labelPlacement='right' containerStyle={style} />
          <Radio id='labelTop' label='Top' labelPlacement='top' containerStyle={{ ...style, marginTop: -1 }} />
          <Radio id='labelBottom' label='Bottom' labelPlacement='bottom' containerStyle={style} />
        </Container>
      ),
    },
    {
      name: 'Radio Button - Group',
      id: 'radio-button-group',
      code: `<RadioButtonGroup flexDirection='row'>
  <Radio id='button1' label='Button 1' />
  <Radio id='button2' label='Button 2' />
  <Radio id='button3' label='Button 3' />
</RadioButtonGroup>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <RadioButtonGroup flexDirection='row'>
            <Radio id='button1' label='Button 1' containerStyle={style} />
            <Radio id='button2' label='Button 2' containerStyle={style} />
            <Radio id='button3' label='Button 3' containerStyle={style} />
          </RadioButtonGroup>
        </Container>
      ),
    },
  ],
};

export const radioButtonIndex: HeadingProps = {
  heading: 'Regular Button',
  links: [
    {
      title: 'Default',
      link: '#default',
    },
    {
      title: 'Radio Button - with Label',
      link: '#radio-button-label',
    },
    {
      title: 'Radio Button - Group',
      link: '#radio-button-group',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
