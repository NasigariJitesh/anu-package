import { Container, Icon, IconButton } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const iconButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
  heading: 'Icon Buttons',
  subTitle:
    'Icon buttons help people take supplementary actions with a single tap. There are four types of icon buttons: filled, filled tonal, outlined, and standard.',
  properties: [
    {
      name: 'type',
      type: " 'filled' | 'tonal' | 'outlined' | 'standard'",
      description: 'The type of the icon button',
    },
    {
      name: 'icon',
      description: 'The icon component or the icon props for material icons.',
      type: 'IconType | ReactElement',
    },
    {
      name: 'toggle',
      description: 'Whether the icon button is toggle-able.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'containerStyle',
      description: 'The styles for the icon button component.',
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
      name: 'Basic',
      component: (
        <Container sx={{ width: '100%', maxWidth: 500 }}>
          <Container
            flexDirection='row'
            align='center'
            justify='space-around'
            sx={{ width: '100%', maxWidth: 500, marginBottom: 10 }}
          >
            <IconButton type='filled' icon={{ name: 'favorite' }} />
            <IconButton type='tonal' icon={{ name: 'flag' }} />
            <IconButton type='outlined' icon={{ name: 'label' }} />
            <IconButton type='standard' icon={{ name: 'person' }} />
          </Container>
          <Container
            disableGutters
            flexDirection='row'
            align='center'
            justify='space-around'
            sx={{ width: '100%', maxWidth: 500 }}
          >
            <IconButton type='filled' icon={<Icon name='favorite' />} />
            <IconButton type='tonal' icon={<Icon name='flag' />} />
            <IconButton type='outlined' icon={<Icon name='label' />} />
            <IconButton type='standard' icon={<Icon name='person' />} />
          </Container>
        </Container>
      ),
      code: `<Container>
      <Container flexDirection='row'  align='center'  justify='space-around' >
        <IconButton type='filled' icon={{ name: 'favorite' }} />
        <IconButton type='tonal' icon={{ name: 'flag' }} />
        <IconButton type='outlined' icon={{ name: 'label' }} />
        <IconButton type='standard' icon={{ name: 'person' }} />
      </Container>
      <Container flexDirection='row'  align='center'  justify='space-around' >
        <IconButton type='filled' icon={<Icon name='favorite' />} />
        <IconButton type='tonal' icon={<Icon name='flag' />} />
        <IconButton type='outlined' icon={<Icon name='label' />} />
        <IconButton type='standard' icon={<Icon name='person' />} />
      </Container>
    </Container>`,
    },
    {
      name: 'Disabled',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <IconButton type='filled' icon={{ name: 'favorite' }} disabled />
          <IconButton type='tonal' icon={{ name: 'flag' }} disabled />
          <IconButton type='outlined' icon={{ name: 'label' }} disabled />
          <IconButton type='standard' icon={{ name: 'person' }} disabled />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
      <IconButton type='filled' icon={{ name: 'favorite' }} disabled />
      <IconButton type='tonal' icon={{ name: 'flag' }} disabled />
      <IconButton type='outlined' icon={{ name: 'label' }} disabled />
      <IconButton type='standard' icon={{ name: 'person' }} disabled />
    </Container>`,
    },
    {
      name: 'Toggle',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <IconButton type='filled' icon={{ name: 'favorite' }} toggle />
          <IconButton type='tonal' icon={{ name: 'flag' }} toggle />
          <IconButton type='outlined' icon={{ name: 'label' }} toggle />
          <IconButton type='standard' icon={{ name: 'person' }} toggle />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center' justify='space-around' >
      <IconButton type='filled' icon={{ name: 'favorite' }} disabled />
      <IconButton type='tonal' icon={{ name: 'flag' }} disabled />
      <IconButton type='outlined' icon={{ name: 'label' }} disabled />
      <IconButton type='standard' icon={{ name: 'person' }} disabled />
    </Container>`,
    },
  ],
};
