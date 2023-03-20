import { Container, ExtendedFAB } from 'anu/lib';
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
export const extendedFABDocumentation: ContentValues = {
  mainHeading: 'Button',
  mainDescription: 'Buttons help users navigate, interact, and engage with websites and apps.',
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
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'titleStyle',
      description: 'The styles for the label of the button.',
      type: 'StyleProp<TextStyle>',
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
      name: 'Default',
      id: 'default',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} containerStyle={style} />
          <ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} containerStyle={style} />
          <ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} containerStyle={style} />
          <ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} containerStyle={style} />
        </Container>
      ),
      code: `<ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} />
<ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} />
<ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} />
<ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'Extended FAB - Lowered',
      id: 'extended-fab-lowered',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} containerStyle={style} lowered />
        </Container>
      ),
      code: "<ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} lowered />",
    },
  ],
};

export const extendedFABIndex: HeadingProps = {
  heading: 'Extended FAB',
  links: [
    {
      title: 'Default',
      link: '#default',
    },
    {
      title: 'Extended FAB - Lowered',
      link: '#extended-fab-lowered',
    },
    {
      link: '#props',
      title: 'Props',
    },
  ],
};
