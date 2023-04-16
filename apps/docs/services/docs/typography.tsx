import { Container, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};

export const typographyDocumentation: ContentValues = {
  mainHeading: 'typographyDocumentation:mainHeading',
  mainDescription: 'typographyDocumentation:mainDescription',
  examples: [
    {
      name: 'typographyDocumentation:example1-name',
      id: 'display',
      description: 'typographyDocumentation:example1-description',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
          <Typography.Display style={style} size='large'>
            d1. Display
          </Typography.Display>
          <Typography.Display style={style} size='medium'>
            d2. Display
          </Typography.Display>
          <Typography.Display style={style} size='small'>
            d3. Display
          </Typography.Display>
        </Container>
      ),
      code: `<Typography.Display size='large'>d1. Display</Typography.Display>
<Typography.Display size='medium'>d2. Display</Typography.Display>
<Typography.Display size='small'>d3. Display</Typography.Display>`,
    },
    {
      name: 'typographyDocumentation:example2-name',
      id: 'headline',
      description: 'typographyDocumentation:example2-description',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
          <Typography.Headline style={style} size='large'>
            h1. Headline
          </Typography.Headline>
          <Typography.Headline style={style} size='medium'>
            h2. Headline
          </Typography.Headline>
          <Typography.Headline style={style} size='small'>
            h3. Headline
          </Typography.Headline>
        </Container>
      ),
      code: `<Typography.Headline size='large'>d1. Headline</Typography.Headline>
<Typography.Headline size='medium'>d2. Headline</Typography.Headline>
<Typography.Headline size='small'>d3. Headline</Typography.Headline>`,
    },
    {
      name: 'typographyDocumentation:example3-name',
      id: 'title',
      description: 'typographyDocumentation:example3-description',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
          <Typography.Title style={style} size='large'>
            t1. Title
          </Typography.Title>
          <Typography.Title style={style} size='medium'>
            t2. Title
          </Typography.Title>
          <Typography.Title style={style} size='small'>
            t3. Title
          </Typography.Title>
        </Container>
      ),
      code: `<Typography.Title size='large'>t1. Title</Typography.Title>
<Typography.Title size='medium'>t2. Title</Typography.Title>
<Typography.Title size='small'>t3. Title</Typography.Title>`,
    },
    {
      name: 'typographyDocumentation:example4-name',
      id: 'body',
      description: 'typographyDocumentation:example4-description',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
          <Typography.Body style={style} size='large'>
            b1. Body
          </Typography.Body>
          <Typography.Body style={style} size='medium'>
            b2. Body
          </Typography.Body>
          <Typography.Body style={style} size='small'>
            b3. Body
          </Typography.Body>
        </Container>
      ),
      code: `<Typography.Body size='large'>b1. Body</Typography.Body>
<Typography.Body size='medium'>b2. Body</Typography.Body>
<Typography.Body size='small'>b3. Body</Typography.Body>`,
    },
    {
      name: 'typographyDocumentation:example5-name',
      id: 'label',
      description: 'typographyDocumentation:example5-description',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
          <Typography.Label style={style} size='large'>
            l1. Label
          </Typography.Label>
          <Typography.Label style={style} size='medium'>
            l2. Label
          </Typography.Label>
          <Typography.Label style={style} size='small'>
            l3. Label
          </Typography.Label>
        </Container>
      ),
      code: `<Typography.Label size='large'>l1. Label</Typography.Label>
<Typography.Label size='medium'>l2. Label</Typography.Label>
<Typography.Label size='small'>l3. Label</Typography.Label>`,
    },
  ],
  properties: [
    {
      name: 'children',
      type: 'JSX.Element',
      description: 'typographyDocumentation:property-children-description',
    },
    {
      name: 'size',
      type: "'large' | 'medium' | 'small'",
      optional: true,
      description: 'typographyDocumentation:property-size-description',
      defaultValue: "'medium'",
    },
    {
      name: 'component',
      description: 'typographyDocumentation:property-component-description',
      type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label'",
      optional: true,
    },
    {
      name: 'align',
      description: 'typographyDocumentation:property-align-description',
      type: "'center' | 'auto' | 'justify' | 'left' | 'right'",
      optional: true,
    },
    {
      name: 'style',
      description: 'typographyDocumentation:property-style-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'htmlFor',
      description: 'typographyDocumentation:property-htmlFor-description',
      type: 'string',
    },
  ],
};

export const typographyIndex: HeadingProps = {
  heading: 'typographyDocumentation:mainHeading',
  links: [
    {
      title: 'typographyDocumentation:example1-name',
      link: '#display',
    },
    {
      title: 'typographyDocumentation:example2-name',
      link: '#headline',
    },
    {
      title: 'typographyDocumentation:example3-name',
      link: '#title',
    },
    {
      title: 'typographyDocumentation:example4-name',
      link: '#body',
    },
    {
      title: 'typographyDocumentation:example5-name',
      link: '#label',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
