import { Container, Icon, IconButton } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
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
      name: 'Filled icon button',
      id: 'filled-icon-button',
      component: (
        <Container flexDirection='row' justify='space-between' sx={{ width: '100%', maxWidth: 700 }}>
          <IconButton type='filled' icon={{ name: 'favorite' }} />
          <IconButton type='filled' icon={<Icon name='favorite' />} />
          <IconButton type='filled' icon={{ name: 'favorite' }} toggle />
          <IconButton type='filled' icon={{ name: 'favorite' }} disabled />
        </Container>
      ),
      code: `<IconButton type='filled' icon={{ name: 'favorite' }} />

<IconButton type='filled' icon={<Icon name='favorite' />} />

<IconButton type='filled' icon={{ name: 'favorite' }} toggle />

<IconButton type='filled' icon={{ name: 'favorite' }} disabled />`,
    },

    {
      name: 'Filled tonal icon button',
      id: 'filled-tonal-icon-button',
      component: (
        <Container flexDirection='row' justify='space-between' sx={{ width: '100%', maxWidth: 700 }}>
          <IconButton type='tonal' icon={{ name: 'favorite' }} />
          <IconButton type='tonal' icon={<Icon name='favorite' />} />
          <IconButton type='tonal' icon={{ name: 'favorite' }} toggle />
          <IconButton type='tonal' icon={{ name: 'favorite' }} disabled />
        </Container>
      ),
      code: `<IconButton type='tonal' icon={{ name: 'favorite' }} />

<IconButton type='tonal' icon={<Icon name='favorite' />} />

<IconButton type='tonal' icon={{ name: 'favorite' }} toggle />

<IconButton type='tonal' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'Outlined icon button',
      id: 'outlined-icon-button',
      component: (
        <Container flexDirection='row' justify='space-between' sx={{ width: '100%', maxWidth: 700 }}>
          <IconButton type='outlined' icon={{ name: 'favorite' }} />
          <IconButton type='outlined' icon={<Icon name='favorite' />} />
          <IconButton type='outlined' icon={{ name: 'favorite' }} toggle />
          <IconButton type='outlined' icon={{ name: 'favorite' }} disabled />
        </Container>
      ),
      code: `<IconButton type='outlined' icon={{ name: 'favorite' }} />

<IconButton type='outlined' icon={<Icon name='favorite' />} />

<IconButton type='outlined' icon={{ name: 'favorite' }} toggle />

<IconButton type='outlined' icon={{ name: 'favorite' }} disabled />`,
    },
    {
      name: 'Standard icon button',
      id: 'standard-icon-button',
      component: (
        <Container flexDirection='row' justify='space-between' sx={{ width: '100%', maxWidth: 700 }}>
          <IconButton type='standard' icon={{ name: 'favorite' }} />
          <IconButton type='standard' icon={<Icon name='favorite' />} />
          <IconButton type='standard' icon={{ name: 'favorite' }} toggle />
          <IconButton type='standard' icon={{ name: 'favorite' }} disabled />
        </Container>
      ),
      code: `<IconButton type='standard' icon={{ name: 'favorite' }} />

<IconButton type='standard' icon={<Icon name='favorite' />} />

<IconButton type='standard' icon={{ name: 'favorite' }} toggle />

<IconButton type='standard' icon={{ name: 'favorite' }} disabled />`,
    },
  ],
};

export const iconButtonIndex: HeadingProps = {
  heading: 'Icon Button',
  links: [
    {
      title: 'Filled icon button',
      link: '#filled-icon-button',
    },
    {
      title: 'Filled tonal icon button',
      link: '#filled-tonal-icon-button',
    },
    {
      title: 'Outlined icon button',
      link: '#outlined-icon-button',
    },
    {
      title: 'Standard icon button',
      link: '#standard-icon-button',
    },

    {
      link: '#props',
      title: 'Props',
    },
  ],
};
