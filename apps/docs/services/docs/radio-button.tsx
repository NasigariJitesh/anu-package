import { Container } from 'anu/lib';
import { Radio, RadioButtonGroup } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

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
      description: 'Whether the radio button is selected.',
      type: 'boolean (optional)',
    },
    {
      name: 'label',
      description: 'The label to display with the radio button.',
      type: 'string (optional)',
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
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'color',
      description: 'The color of the radio button component.',
      type: 'string (optional)',
    },
    {
      name: 'style',
      description: 'The styles for the radio button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'labelStyle',
      description: 'The styles for the label of the radio button.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'onPress',
      description: 'The callback when there is a press or click on the radio button.',
      type: '(id: string) => void (optional)',
    },
  ],
  examples: [
    {
      name: 'Basic',
      id: 'basic',
      code: `<Container flexDirection='row' align='center' justify='space-around'>
  <Radio id='basic' />
  <Radio id='disabled' disabled />
</Container>`,
      component: (
        <Container flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 700 }}>
          <Radio id='basic' />
          <Radio id='disabled' disabled />
        </Container>
      ),
    },
    {
      name: 'Label ',
      id: 'label',
      code: `<Container flexDirection='row' justify='space-around' align='center' >
  <Radio id='label' label='Label' />
  <Radio id='labelLeft' label='Left' labelPlacement='left' />
  <Radio id='labelRight' label='Right' labelPlacement='right' />
  <Radio id='labelTop' label='Top' labelPlacement='top' />
  <Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />
</Container>`,
      component: (
        <Container flexDirection='row' justify='space-around' align='center' sx={{ width: '100%', maxWidth: 700 }}>
          <Radio id='label' label='Label' />
          <Radio id='labelLeft' label='Left' labelPlacement='left' />
          <Radio id='labelRight' label='Right' labelPlacement='right' />
          <Radio id='labelTop' label='Top' labelPlacement='top' />
          <Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />
        </Container>
      ),
    },
    {
      name: 'Radio Button Group',
      id: 'radio-button-group',
      code: `<Container flexDirection='row' justify='space-around' align='center' sx={{ width: '100%', maxWidth: 700 }}>
      <RadioButtonGroup >
        <Radio id='button1' label='Button 1' />
        <Radio id='button2' label='Button 2' />
        <Radio id='button3' label='Button 3' />
      </RadioButtonGroup>
    </Container>`,
      component: (
        <Container flexDirection='row' justify='space-around' align='center' sx={{ width: '100%', maxWidth: 700 }}>
          <RadioButtonGroup>
            <Radio id='button1' label='Button 1' />
            <Radio id='button2' label='Button 2' />
            <Radio id='button3' label='Button 3' />
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
      components: [
        {
          title: 'Basic',
          link: '#basic',
        },
        {
          title: 'Label',
          link: '#label',
        },
        {
          title: 'Radio Button Group',
          link: '#radio-button-group',
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
