import { Container, ExtendedFAB } from 'anu/lib';
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
export const extendedFABDocumentation: ContentValues = {
  mainHeading: 'extendedFABDocumentation:mainHeading',
  mainDescription: 'extendedFABDocumentation:mainDescription',
  heading: 'extendedFABDocumentation:heading',
  subTitle: 'extendedFABDocumentation:subTitle',
  properties: [
    {
      name: 'title',
      type: 'string',
      description: 'extendedFABDocumentation:property-title-description',
    },
    {
      name: 'icon',
      description: 'extendedFABDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
      optional: true,
    },
    {
      name: 'FABColor',
      description: 'extendedFABDocumentation:property-FABColor-description',
      type: "'primary' | 'secondary' | 'surface' | 'tertiary'",
      defaultValue: "'primary'",
      optional: true,
    },
    {
      name: 'lowered',
      description: 'extendedFABDocumentation:property-lowered-description',
      type: 'boolean',
      defaultValue: 'false',
      optional: true,
    },
    {
      name: 'style',
      description: 'extendedFABDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'labelStyle',
      description: 'extendedFABDocumentation:property-labelStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'extendedFABDocumentation:property-pressableProps-description',
      type: 'pressableProps',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'extendedFABDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          {' '}
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} style={style} />{' '}
          <ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} style={style} />{' '}
          <ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} style={style} />{' '}
          <ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} style={style} />{' '}
        </Container>
      ),
      code: `<ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} /> 
<ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} /> 
<ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} /> 
<ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'extendedFABDocumentation:example2-name',
      id: 'extended-fab-lowered',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          {' '}
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} style={style} lowered />{' '}
        </Container>
      ),
      code: "<ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} lowered />",
    },
  ],
};

export const extendedFABIndex: HeadingProps = {
  heading: 'extendedFABDocumentation:heading',
  links: [
    {
      title: 'extendedFABDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'extendedFABDocumentation:example2-name',
      link: '#extended-fab-lowered',
    },
    {
      link: '#props',
      title: 'content:props',
    },
  ],
};
