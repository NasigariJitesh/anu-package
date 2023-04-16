import { Container } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

export const containerDocumentation: ContentValues = {
  mainHeading: 'containerDocumentation:mainHeading',
  mainDescription: 'containerDocumentation:mainDescription',
  examples: [
    {
      name: 'containerDocumentation:example1-name',
      id: 'default',
      component: <Container width={800} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />,
      code: "<Container width={800} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />",
    },
  ],
  properties: [
    {
      name: 'flexDirection',
      optional: true,
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      description: 'containerDocumentation:property-flexDirection-description',
      defaultValue: "'column'",
    },
    {
      name: 'align',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'containerDocumentation:property-align-description',
      defaultValue: "'flex-start'",
    },
    {
      name: 'justify',
      description: 'containerDocumentation:property-justify-description',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      defaultValue: "'flex-start'",
    },
    {
      name: 'style',
      description: 'containerDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'disableGutters',
      description: 'containerDocumentation:property-disableGutters-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'fixed',
      description: 'containerDocumentation:property-fixed-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'width',
      description: 'containerDocumentation:property-width-description',
      type: 'number | string',
      optional: true,
    },
    {
      name: 'maxWidth',
      description: 'containerDocumentation:property-maxWidth-description',
      optional: true,
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string",
    },
    {
      name: 'sx',
      description: 'containerDocumentation:property-sx-description',
      type: 'Sx',
      optional: true,
    },
  ],
};

export const containerIndex: HeadingProps = {
  heading: 'containerDocumentation:mainHeading',
  links: [
    {
      title: 'containerDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
