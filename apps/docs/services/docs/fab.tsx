import { Container, FAB } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

const style = {
  margin: 10,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', undefined, undefined, '600px', '700px'],
} as const;
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
      name: 'FAB',
      id: 'fab',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} containerStyle={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />

<FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} />

<FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} />

<FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'Small FAB',
      id: 'small-fab',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='small' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='secondary' size='small' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='tertiary' size='small' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='surface' size='small' icon={{ name: 'phone' }} containerStyle={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='small' icon={{ name: 'phone' }} />

<FAB FABColor='secondary' size='small' icon={{ name: 'phone' }} />

<FAB FABColor='tertiary' size='small' icon={{ name: 'phone' }} />

<FAB FABColor='surface' size='small' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'Large FAB',
      id: 'large-fab',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='large' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='secondary' size='large' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='tertiary' size='large' icon={{ name: 'phone' }} containerStyle={style} />
          <FAB FABColor='surface' size='large' icon={{ name: 'phone' }} containerStyle={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='large' icon={{ name: 'phone' }} />

<FAB FABColor='secondary' size='large' icon={{ name: 'phone' }} />

<FAB FABColor='tertiary' size='large' icon={{ name: 'phone' }} />

<FAB FABColor='surface' size='large' icon={{ name: 'phone' }} />`,
    },
  ],
};

export const FABIndex: HeadingProps = {
  heading: 'FAB',
  links: [
    {
      title: 'FAB',
      link: '#fab',
    },
    {
      title: 'Small FAB',
      link: '#small-fab',
    },
    {
      title: 'Large FAB',
      link: '#large-fab',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
