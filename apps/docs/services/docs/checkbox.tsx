import { Checkbox, Container } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const checkBoxDocumentation: ContentValues = {
  mainHeading: 'Checkbox',
  mainDescription: 'Checkboxes allow users to select one or more items from a set. They can turn an option on or off.',
  properties: [
    {
      name: 'id',
      description: 'Id of the checkbox item.',
      type: 'string',
    },
    {
      name: 'selected',
      description: 'Whether the checkbox is selected',
      type: 'boolean (optional)',
    },
    {
      name: 'indeterminate',
      description: 'If true, the component appears indeterminate.',
      type: 'boolean (optional)',
    },
    {
      name: 'label',
      description: 'The label to display with the checkbox.',
      type: 'string (optional)',
    },
    {
      name: 'labelPlacement',
      description: 'Position where the label should be placed.',
      type: "'left' | 'right' | 'top' | 'bottom' (optional)",
      defaultValue: "'right'",
    },
    {
      name: 'disabled',
      description: 'If true, the component is disabled.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'error',
      description: 'Whether an error occurred regarding to the checkbox.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'iconSize',
      description: 'The size of the checked icon.',
      type: 'number (optional)',
      defaultValue: '18',
    },
    {
      name: 'color',
      description: 'The color of the checkbox component.',
      type: 'string (optional)',
    },
    {
      name: 'style',
      description: 'The styles for the checkbox component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'iconStyle',
      description: 'The styles for the checked Icon.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'labelStyle',
      description: 'The styles for the label of the checkbox.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'onPress',
      description: 'The callback when there is a press or click on the checkbox.',
      type: '(id: string) => void (optional)',
    },
  ],
  examples: [
    {
      name: 'Basic Checkbox',
      id: 'basic',
      code: `<Container flexDirection='row' align='center' justify='space-around'>
      <Checkbox id='basic' />
      <Checkbox id='disabled' disabled />
    </Container>`,
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Checkbox id='basic' />
          <Checkbox id='disabled' disabled />
        </Container>
      ),
    },
    {
      name: 'Indeterminate',
      id: 'indeterminate',
      code: `<Container>
      <Checkbox id='indeterminate' indeterminate />
    </Container>`,
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Checkbox id='indeterminate' indeterminate />
        </Container>
      ),
    },
    {
      name: 'Label',
      id: 'label',

      code: `<Container flexDirection='row' justify='space-around' align='center' >
      <Checkbox id='label' label='Label' />
      <Checkbox id='labelLeft' label='Left' labelPlacement='left' />
      <Checkbox id='labelRight' label='Right' labelPlacement='right' />
      <Checkbox id='labelTop' label='Top' labelPlacement='top' />
      <Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />
    </Container>`,
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <Checkbox id='label' label='Label' />
          <Checkbox id='labelLeft' label='Left' labelPlacement='left' />
          <Checkbox id='labelRight' label='Right' labelPlacement='right' />
          <Checkbox id='labelTop' label='Top' labelPlacement='top' />
          <Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />
        </Container>
      ),
    },
  ],
};

export const checkboxIndex: HeadingProps = {
  heading: 'Checkbox',
  links: [
    {
      components: [
        {
          title: 'Basic',
          link: '#basic',
        },
        {
          title: 'Indeterminate',
          link: '#indeterminate',
        },
        {
          title: 'Label',
          link: '#label',
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
