import { Container, FAB } from 'anu/lib';
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
export const FABDocumentation: ContentValues = {
  mainHeading: 'FABDocumentation:mainHeading',
  mainDescription: 'FABDocumentation:mainDescription',
  heading: 'FABDocumentation:heading',
  subTitle: 'FABDocumentation:subTitle',
  properties: [
    {
      name: 'size',
      type: "'small' | 'medium' | 'large'",
      description: 'FABDocumentation:property-size-description',
      defaultValue: "'medium'",
    },
    {
      name: 'icon',
      description: 'FABDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
    },
    {
      name: 'FABColor',
      description: 'FABDocumentation:property-FABColor-description',
      type: "'primary' | 'secondary' | 'surface' | 'tertiary'",
      defaultValue: "'primary'",
    },
    {
      name: 'lowered',
      description: 'FABDocumentation:property-lowered-description',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'style',
      description: 'FABDocumentation:property-style-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'FABDocumentation:property-pressableProps-description',
      type: 'pressableProps',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'FABDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} style={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='medium' icon={{ name: 'phone' }} />
<FAB FABColor='secondary' size='medium' icon={{ name: 'phone' }} />
<FAB FABColor='tertiary' size='medium' icon={{ name: 'phone' }} />
<FAB FABColor='surface' size='medium' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'FABDocumentation:example2-name',
      id: 'small-fab',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='small' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='secondary' size='small' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='tertiary' size='small' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='surface' size='small' icon={{ name: 'phone' }} style={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='small' icon={{ name: 'phone' }} />
<FAB FABColor='secondary' size='small' icon={{ name: 'phone' }} />
<FAB FABColor='tertiary' size='small' icon={{ name: 'phone' }} />
<FAB FABColor='surface' size='small' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'FABDocumentation:example3-name',
      id: 'large-fab',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='large' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='secondary' size='large' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='tertiary' size='large' icon={{ name: 'phone' }} style={style} />
          <FAB FABColor='surface' size='large' icon={{ name: 'phone' }} style={style} />
        </Container>
      ),
      code: `<FAB FABColor='primary' size='large' icon={{ name: 'phone' }} />
<FAB FABColor='secondary' size='large' icon={{ name: 'phone' }} />
<FAB FABColor='tertiary' size='large' icon={{ name: 'phone' }} />
<FAB FABColor='surface' size='large' icon={{ name: 'phone' }} />`,
    },
    {
      name: 'FABDocumentation:example4-name',
      id: 'large-fab-lowered',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <FAB FABColor='primary' size='large' icon={{ name: 'phone' }} style={style} lowered />
        </Container>
      ),
      code: "<FAB FABColor='primary' size='large' icon={{ name: 'phone' }} lowered/>",
    },
  ],
};

export const FABIndex: HeadingProps = {
  heading: 'FABDocumentation:heading',
  links: [
    {
      title: 'FABDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'FABDocumentation:example2-name',
      link: '#small-fab',
    },
    {
      title: 'FABDocumentation:example3-name',
      link: '#large-fab',
    },
    {
      title: 'FABDocumentation:example4-name',
      link: '#fab-lowered',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
