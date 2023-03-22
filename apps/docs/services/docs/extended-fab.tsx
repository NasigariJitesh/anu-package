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
    },
    {
      name: 'FABColor',
      description: 'extendedFABDocumentation:property-FABColor-description',
      type: "'primary' | 'secondary' | 'surface' | 'tertiary'",
      defaultValue: "'primary'",
    },
    {
      name: 'lowered',
      description: 'extendedFABDocumentation:property-lowered-description',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'containerStyle',
      description: 'extendedFABDocumentation:property-containerStyle-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'titleStyle',
      description: 'extendedFABDocumentation:property-titleStyle-description',
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
          <ExtendedFAB FABColor='primary' title='Primary' icon={{ name: 'phone' }} containerStyle={style} />{' '}
          <ExtendedFAB FABColor='secondary' title='Secondary' icon={{ name: 'phone' }} containerStyle={style} />{' '}
          <ExtendedFAB FABColor='tertiary' title='Tertiary' icon={{ name: 'phone' }} containerStyle={style} />{' '}
          <ExtendedFAB FABColor='surface' title='Surface' icon={{ name: 'phone' }} containerStyle={style} />{' '}
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
          <ExtendedFAB
            FABColor='primary'
            title='Primary'
            icon={{ name: 'phone' }}
            containerStyle={style}
            lowered
          />{' '}
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
