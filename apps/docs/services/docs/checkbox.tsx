import { Checkbox, Container } from 'anu/lib';
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
export const checkBoxDocumentation: ContentValues = {
  mainHeading: 'checkBoxDocumentation:mainHeading',
  mainDescription: 'checkBoxDocumentation:mainDescription',
  properties: [
    {
      name: 'id',
      description: 'checkBoxDocumentation:property-id-description',
      type: 'string',
    },
    {
      name: 'selected',
      description: 'checkBoxDocumentation:property-selected-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'indeterminate',
      description: 'checkBoxDocumentation:property-indeterminate-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'label',
      description: 'checkBoxDocumentation:property-label-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'labelPlacement',
      description: 'checkBoxDocumentation:property-labelPlacement-description',
      type: "'left' | 'right' | 'top' | 'bottom'",
      defaultValue: "'right'",
      optional: true,
    },
    {
      name: 'disabled',
      description: 'checkBoxDocumentation:property-disabled-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'error',
      description: 'checkBoxDocumentation:property-error-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'iconSize',
      description: 'checkBoxDocumentation:property-iconSize-description',
      type: 'number',
      optional: true,
      defaultValue: '18',
    },
    {
      name: 'color',
      description: 'checkBoxDocumentation:property-color-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'style',
      description: 'checkBoxDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'iconStyle',
      description: 'checkBoxDocumentation:property-iconStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'labelStyle',
      description: 'checkBoxDocumentation:property-labelStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'onPress',
      description: 'checkBoxDocumentation:property-onPress-description',
      type: '(id: string) => void',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'checkBoxDocumentation:example1-name',
      id: 'default',
      code: `<Checkbox id='basic' /> 
<Checkbox id='disabled' disabled /> 
<Checkbox id='error' error /> 
<Checkbox id='selected' selected /> 
<Checkbox id='selected-disabled' selected disabled /> 
<Checkbox id='selected-error' selected error />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Checkbox id='basic' />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='disabled' disabled />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='error' error />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='selected' selected />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='selected-disabled' selected disabled />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='selected-error' selected error />
          </Container>
        </Container>
      ),
    },
    {
      name: 'checkBoxDocumentation:example2-name',
      id: 'checkbox-indeterminate',
      code: `<Checkbox id='indeterminate' indeterminate /> 
<Checkbox id='indeterminate-disabled' indeterminate disabled /> 
<Checkbox id='indeterminate-error' indeterminate error />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Checkbox id='indeterminate' indeterminate />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='indeterminate-disabled' indeterminate disabled />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='indeterminate-error' indeterminate error />
          </Container>
        </Container>
      ),
    },
    {
      name: 'checkBoxDocumentation:example3-name',
      id: 'checkbox-label',
      code: `<Checkbox id='label' label='Label' /> 
<Checkbox id='labelLeft' label='Left' labelPlacement='left' /> 
<Checkbox id='labelRight' label='Right' labelPlacement='right' /> 
<Checkbox id='labelTop' label='Top' labelPlacement='top' /> 
<Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />`,
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Checkbox id='label' label='Label' />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='labelLeft' label='Left' labelPlacement='left' />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='labelRight' label='Right' labelPlacement='right' />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='labelTop' label='Top' labelPlacement='top' />
          </Container>
          <Container disableGutters style={style}>
            <Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />
          </Container>
        </Container>
      ),
    },
  ],
};

export const checkboxIndex: HeadingProps = {
  heading: 'checkBoxDocumentation:mainHeading',
  links: [
    {
      title: 'checkBoxDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'checkBoxDocumentation:example2-name',
      link: '#checkbox-indeterminate',
    },
    {
      title: 'checkBoxDocumentation:example3-name',
      link: '#checkbox-label',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
