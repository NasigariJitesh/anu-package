import { Container, IconButton } from 'anu/lib';
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
export const iconButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
  mainDescription: 'Buttons help users navigate, interact, and engage with websites and apps.',
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
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'selected',
      description: 'Whether the toggle-able icon button is selected or not.',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'containerStyle',
      description: 'The styles for the icon button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'The properties of the pressable component of react native (except sx)',
      type: 'pressableProps',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'Filled icon button',
      id: 'filled-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='filled' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='filled' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='filled' icon={{ name: 'favorite' }} />
<IconButton type='filled' icon={{ name: 'favorite' }} disabled />`,
    },

    {
      name: 'Filled icon button - Toggle',
      id: 'filled-icon-button-toggle',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
          <IconButton
            type='filled'
            icon={{ name: 'favorite' }}
            toggle
            selected={true}
            disabled
            containerStyle={style}
          />
          <IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
          <IconButton
            type='filled'
            icon={{ name: 'favorite' }}
            toggle
            selected={false}
            disabled
            containerStyle={style}
          />
        </Container>
      ),
      code: `<IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
<IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} disabled />
<IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
<IconButton type='filled' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} disabled />`,
    },

    {
      name: 'Filled tonal icon button',
      id: 'filled-tonal-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='tonal' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='tonal' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='tonal' icon={{ name: 'favorite' }} />
<IconButton type='tonal' icon={{ name: 'favorite' }} disabled />`,
    },

    {
      name: 'Filled tonal icon button - Toggle',
      id: 'filled-tonal-icon-button-toggle',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
          <IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={true} disabled containerStyle={style} />
          <IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
          <IconButton
            type='tonal'
            icon={{ name: 'favorite' }}
            toggle
            selected={false}
            disabled
            containerStyle={style}
          />
        </Container>
      ),
      code: `<IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
<IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} disabled />
<IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
<IconButton type='tonal' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} disabled />`,
    },

    {
      name: 'Outlined icon button',
      id: 'outlined-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='outlined' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='outlined' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='outlined' icon={{ name: 'favorite' }} />
<IconButton type='outlined' icon={{ name: 'favorite' }} disabled />`,
    },

    {
      name: 'Outlined icon button - Toggle',
      id: 'outlined-icon-button-toggle',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
          <IconButton
            type='outlined'
            icon={{ name: 'favorite' }}
            toggle
            selected={true}
            disabled
            containerStyle={style}
          />
          <IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
          <IconButton
            type='outlined'
            icon={{ name: 'favorite' }}
            toggle
            selected={false}
            disabled
            containerStyle={style}
          />
        </Container>
      ),
      code: `<IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
<IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} disabled />
<IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
<IconButton type='outlined' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} disabled />`,
    },

    {
      name: 'Standard icon button',
      id: 'standard-icon-button',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='standard' icon={{ name: 'favorite' }} containerStyle={style} />
          <IconButton type='standard' icon={{ name: 'favorite' }} disabled containerStyle={style} />
        </Container>
      ),
      code: `<IconButton type='standard' icon={{ name: 'favorite' }} />
<IconButton type='standard' icon={{ name: 'favorite' }} disabled />`,
    },

    {
      name: 'Standard icon button - Toggle',
      id: 'standard-icon-button-toggle',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
          <IconButton
            type='standard'
            icon={{ name: 'favorite' }}
            toggle
            selected={true}
            disabled
            containerStyle={style}
          />
          <IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
          <IconButton
            type='standard'
            icon={{ name: 'favorite' }}
            toggle
            selected={false}
            disabled
            containerStyle={style}
          />
        </Container>
      ),
      code: `<IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} />
<IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={true} containerStyle={style} disabled />
<IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} />
<IconButton type='standard' icon={{ name: 'favorite' }} toggle selected={false} containerStyle={style} disabled />`,
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
      title: 'Filled icon button - Toggle',
      link: '#filled-icon-button-toggle',
    },
    {
      title: 'Filled tonal icon button',
      link: '#filled-tonal-icon-button',
    },
    {
      title: 'Filled tonal icon button - Toggle',
      link: '#filled-tonal-icon-button-toggle',
    },
    {
      title: 'Outlined icon button',
      link: '#outlined-icon-button',
    },
    {
      title: 'Outlined icon button - Toggle',
      link: '#outlined-icon-button-toggle',
    },
    {
      title: 'Standard icon button',
      link: '#standard-icon-button',
    },
    {
      title: 'Standard icon button - Toggle',
      link: '#standard-icon-button-toggle',
    },

    {
      link: '#props',
      title: 'Props',
    },
  ],
};
