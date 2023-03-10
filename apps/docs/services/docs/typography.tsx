import { Container, Typography } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

const style = {
  margin: 15,
};

export const typographyDocumentation: ContentValues = {
  mainHeading: 'Typography',
  mainDescription:
    'Typography is used to arrange the typefaces to create a visually appealing and effective communication design.',
  examples: [
    {
      name: 'Display',
      id: 'display',
      description: 'Displays are often used for large, attention-grabbing headlines or titles.',
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
      name: 'Headline',
      id: 'headline',
      description: 'Headlines in graphic design are typically used for the main title or headline.',
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
      name: 'Title',
      id: 'title',
      description: '',
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
      name: 'Body',
      id: 'body',
      description: '',
      component: (
        <Container disableGutters flexDirection='column' align='flex-start' justify='space-between' sx={{ height: 90 }}>
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
      name: 'Label',
      id: 'label',
      description: '',
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
      description: 'Content that needs to be displayed',
    },
    {
      name: 'size',
      type: "'large' | 'medium' | 'small' (optional)",
      description: 'The size of the typography component',
      defaultValue: "'medium'",
    },
    {
      name: 'component',
      description: 'The type of HTML component that needs to be rendered',
      type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' (optional)",
    },
    {
      name: 'align',
      description: 'How to align the text of a typography component',
      type: "'center' | 'auto' | 'justify' | 'left' | 'right' (optional)",
    },
    {
      name: 'style',
      description: 'The styles for the typography component',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'htmlFor',
      description: 'Only for Label. This can be used as "for" property in label component for web',
      type: 'string',
    },
  ],
};

export const typographyIndex: HeadingProps = {
  heading: 'Typography',
  links: [
    {
      title: 'Display',
      link: '#display',
    },
    {
      title: 'Headline',
      link: '#headline',
    },
    {
      title: 'Title',
      link: '#title',
    },
    {
      title: 'Body',
      link: '#body',
    },
    {
      title: 'Label',
      link: '#label',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
