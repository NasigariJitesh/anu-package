import { Checkbox, Container } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

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
      name: 'containerStyle',
      description: 'The styles for the container of the checkbox.',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'onPress',
      description: 'The callback when there is a press or click on the checkbox.',
      type: '(id: string) => void (optional)',
    },
  ],
  examples: [
    {
      name: 'Default',
      id: 'default',
      code: `<Checkbox id='basic' />
<Checkbox id='disabled' disabled />
<Checkbox id='error' error />
<Checkbox id='selected' selected />
<Checkbox id='selected-disabled' selected disabled />
<Checkbox id='selected-error' selected error />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Checkbox id='basic' containerStyle={style} />
          <Checkbox id='disabled' disabled containerStyle={style} />
          <Checkbox id='error' error containerStyle={style} />
          <Checkbox id='selected' selected containerStyle={style} />
          <Checkbox id='selected-disabled' selected disabled containerStyle={style} />
          <Checkbox id='selected-error' selected error containerStyle={style} />
        </Container>
      ),
    },
    {
      name: 'Checkbox - Indeterminate',
      id: 'checkbox-indeterminate',
      code: `<Checkbox id='indeterminate' indeterminate />
<Checkbox id='indeterminate-disabled' indeterminate disabled />
<Checkbox id='indeterminate-error' indeterminate error />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Checkbox id='indeterminate' indeterminate containerStyle={style} />
          <Checkbox id='indeterminate-disabled' indeterminate disabled containerStyle={style} />
          <Checkbox id='indeterminate-error' indeterminate error containerStyle={style} />
        </Container>
      ),
    },
    {
      name: 'Checkbox - with Label',
      id: 'checkbox-label',

      code: `<Checkbox id='label' label='Label' />
<Checkbox id='labelLeft' label='Left' labelPlacement='left' />
<Checkbox id='labelRight' label='Right' labelPlacement='right' />
<Checkbox id='labelTop' label='Top' labelPlacement='top' />
<Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Checkbox id='label' label='Label' containerStyle={style} />
          <Checkbox id='labelLeft' label='Left' labelPlacement='left' containerStyle={style} />
          <Checkbox id='labelRight' label='Right' labelPlacement='right' containerStyle={style} />
          <Checkbox id='labelTop' label='Top' labelPlacement='top' containerStyle={style} />
          <Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' containerStyle={style} />
        </Container>
      ),
    },
  ],
};

export const checkboxIndex: HeadingProps = {
  heading: 'Checkbox',
  links: [
    {
      title: 'Default',
      link: '#default',
    },
    {
      title: 'Checkbox - Indeterminate',
      link: '#checkbox-indeterminate',
    },
    {
      title: 'Checkbox - with Label',
      link: '#checkbox-label',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
