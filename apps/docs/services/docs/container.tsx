import { Container } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

export const containerDocumentation: ContentValues = {
  mainHeading: 'Container',
  mainDescription: 'Container helps you arrange your components clearly on the screen',
  examples: [
    {
      name: 'Basic',
      id: 'basic',
      component: <Container width={300} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />,
      code: `<Container
  width={300}
  sx={{ backgroundColor: '#c1c1c1', height: 200 }} />`,
    },
    {
      name: 'Fixed',
      id: 'fixed',
      component: <Container width={300} fixed sx={{ backgroundColor: '#c1c1c1', height: 200 }} />,
      code: `<Container
  width={300}
  fixed
  sx={{ backgroundColor: '#c1c1c1', height: 200 }} />`,
    },
  ],
  properties: [
    {
      name: 'flexDirection',
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      description: 'The direction in which the children components are positioned',
      defaultValue: "'column'",
    },
    {
      name: 'align',
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'The alignment of all items on the cross axis',
      defaultValue: "'flex-start'",
    },
    {
      name: 'justify',
      description: 'The alignment of all items on the main axis',
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      defaultValue: "'flex-start'",
    },

    {
      name: 'style',
      description: 'The styles for the container component.',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'disableGutters',
      description: 'If true, the left and right padding is removed.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'fixed',
      description: 'If true, sets the max-width to match the min-width of the current breakpoint.',
      type: 'boolean (optional)',
      defaultValue: 'false',
    },
    {
      name: 'width',
      description: 'The width of the container in pixels or percentage.',
      type: 'number | string (optional)',
    },
    {
      name: 'maxWidth',
      description: 'The maximum width of the container in breakpoints, pixels or percentage.',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string (optional)",
    },
    {
      name: 'sx',
      description: 'The system prop that allows defining system overrides as well as additional CSS styles.',
      type: 'Sx (optional)',
    },
  ],
};

export const containerIndex: HeadingProps = {
  heading: 'Container',
  links: [
    {
      components: [
        {
          title: 'Basic',
          link: '#basic',
        },
        {
          title: 'Fixed',
          link: '#fixed',
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
