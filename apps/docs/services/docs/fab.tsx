import { Container, FAB } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const FABDocumentation: ContentValues = {
  mainHeading: 'Button',
  heading: 'Floating Action Buttons',
  subTitle:
    'The FAB represents the most important action on a screen. It puts key actions within reach. There are three sizes of floating action buttons: FAB, small FAB, and large FAB.',
  properties: [
    {
      name: 'size',
      type: "'small' | 'medium' | 'large'",
      description: 'The size of the floating action button',
      defaultValue: "'medium'",
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
      name: 'pressableProps',
      description: 'The properties of the pressable component of react native (except sx)',
      type: 'pressableProps (optional)',
    },
  ],
  examples: [
    {
      name: 'size',
      component: (
        <Container flexDirection='row' justify='space-around' align='center' sx={{ width: '100%', maxWidth: 800 }}>
          <FAB FABColor='primary' size='small' icon={{ name: 'add' }} />
          <FAB FABColor='primary' size='medium' icon={{ name: 'add' }} />
          <FAB FABColor='primary' size='large' icon={{ name: 'add' }} />
        </Container>
      ),
      code: `<Container flexDirection='row' justify='space-around'  align='center' >
      <FAB FABColor='primary' size='small' icon={{ name: 'add' }} />
      <FAB FABColor='primary' size='medium' icon={{ name: 'add' }} />
      <FAB FABColor='primary' size='large' icon={{ name: 'add' }} />
    </Container>`,
    },
    {
      name: 'FABColor',
      component: (
        <Container flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 800 }}>
          <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />
          <FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} />
          <FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} />
          <FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
      <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />
      <FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} />
      <FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} />
      <FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} />
    </Container>`,
    },
    {
      name: 'Lowered',
      component: (
        <Container flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 800 }}>
          <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />
          <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} lowered />
        </Container>
      ),
      code: `<Container flexDirection='row' justify='space-around'  align='center' >
      <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />
      <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} lowered />
    </Container>`,
    },
  ],
};
