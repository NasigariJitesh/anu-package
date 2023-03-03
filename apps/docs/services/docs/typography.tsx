import { Container, Typography } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const typographyDocumentation: ContentValues = {
  mainHeading: 'Typography',
  heading: '',
  mainDescription: 'Typography helps you present your content clearly and efficiently as possible',
  examples: [
    {
      name: 'Basic',
      id: 'basic',
      description: 'Here is the basic example of how to use the different scales in typography.',
      component: (
        <Container
          disableGutters
          flexDirection='column'
          align='flex-start'
          justify='space-around'
          sx={{ width: '100%', maxWidth: 800, height: 200 }}
        >
          <Typography.Display>Display</Typography.Display>
          <Typography.Headline>Headline</Typography.Headline>
          <Typography.Title>Title</Typography.Title>
          <Typography.Label>Label</Typography.Label>
          <Typography.Body>Body</Typography.Body>
        </Container>
      ),
      code: `<Typography.Display> Display </Typography.Display>\n
<Typography.Headline> Headline </Typography.Headline>\n
<Typography.Title> Title </Typography.Title>\n
<Typography.Label> Label </Typography.Label>\n
<Typography.Body> Body </Typography.Body>`,
    },
    {
      name: 'Size',
      id: 'size',
      description: 'You can also adjust the size of each component by providing the size property',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-between'
          sx={{ width: '100%', maxWidth: 500 }}
        >
          <Typography.Body size='large'>Large</Typography.Body>
          <Typography.Body size='medium'>Medium</Typography.Body>
          <Typography.Body size='small'>Small</Typography.Body>
        </Container>
      ),
      code: `<Typography.Body size='large'> Large </Typography.Body>\n
<Typography.Body size='medium'> Medium </Typography.Body>\n
<Typography.Body size='small'> Small </Typography.Body>`,
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
      type: "'large' | 'medium' | 'small'",
      description: 'The size of the typography component (optional)',
      defaultValue: "'medium'",
    },
    {
      name: 'component',
      description: 'The type of HTML component that needs to be rendered',
      type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label'",
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
      name: 'htmlFor (only for label)',
      description: 'This can be used as "for" property in label component for web',
      type: 'string',
    },
  ],
};

export const typographyIndex: HeadingProps = {
  heading: 'Typography',
  links: [
    {
      components: [
        {
          title: 'Basic',
          link: '#basic',
        },
        {
          title: 'Size',
          link: '#size',
        },
      ],
      title: 'Examples',
      link: '#example',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};
