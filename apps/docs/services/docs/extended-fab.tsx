import { Container, ExtendedFAB } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const extendedFABDocumentation: ContentValues = {
  mainHeading: 'Button',
  heading: 'Extended Floating Action Buttons',
  subTitle:
    'Extended FABs help people take primary actions. They are wider than FABs to accommodate a text label and larger target area.',
  properties: [
    {
      name: 'title',
      type: 'string',
      description: 'The label/title for the regular button',
    },
    {
      name: 'icon',
      description: 'The icon component or the icon props for material icons.',
      type: 'IconType | ReactElement',
    },
    {
      name: 'FABColor',
      description: 'The theme color of the FAB.',
      type: "'primary' | 'secondary' | 'surface' | 'tertiary'",
      defaultValue: "'primary'",
    },
    {
      name: 'lowered',
      description: 'Whether the FAB is lowered than usual FAB elevation.',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'containerStyle',
      description: 'The styles for the regular button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'titleStyle',
      description: 'The styles for the label of the button.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'pressableProps',
      description: 'The properties of the pressable component of react native (except sx)',
      type: 'pressableProps (optional)',
    },
  ],
  examples: [
    {
      name: 'FABColor',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} />
          <ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} />
          <ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} />
          <ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
      <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} />
      <ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} />
      <ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} />
      <ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} />
    </Container>`,
    },
    {
      name: 'Lowered',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 700 }}
        >
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'add' }} />
          <ExtendedFAB FABColor='primary' title='Lowered' icon={{ name: 'add' }} lowered />
        </Container>
      ),
      code: `<Container flexDirection='row' justify='space-around'  align='center' >
      <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'add' }} />
      <ExtendedFAB FABColor='primary' title='Lowered' icon={{ name: 'add' }} lowered />
    </Container>`,
    },
  ],
};
