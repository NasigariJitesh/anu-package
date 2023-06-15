/* eslint-disable react-native/no-inline-styles */
import { Accordion, Container, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  padding: 15,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 600,
  width: '100%',
} as const;

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
} as const;

const Example1 = () => {
  return (
    <Container disableGutters sx={flexStyle as never}>
      <Container disableGutters flexDirection='row' style={style}>
        <Accordion.Container title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}>
          <Accordion.Children>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography.Body>
          </Accordion.Children>
        </Accordion.Container>
      </Container>
    </Container>
  );
};

export const accordionHeaderDocumentation: ContentValues = {
  mainHeading: 'accordionHeaderDocumentation:mainHeading',
  examples: [
    {
      name: 'accordionHeaderDocumentation:example1-name',
      id: 'default',
      component: <Example1 />,
      code: `<Accordion.Container title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}>
      <Accordion.Children>
        <Typography.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography.Body>
      </Accordion.Children>
    </Accordion.Container>`,
    },
  ],
  externalProperties: {
    link: '/components/typography',
    title: 'accordionHeaderDocumentation:external-properties-title',
  },
  properties: [
    {
      name: 'children',
      type: 'string',
      description: 'accordionHeaderDocumentation:property-children-description',
    },
    {
      name: 'supportingText',
      type: 'string',
      description: 'accordionHeaderDocumentation:property-supportingText-description',
    },
    {
      name: 'iconProps',
      optional: true,
      type: 'IconProps',
      description: 'accordionHeaderDocumentation:property-iconProps-description',
    },
    {
      name: 'icon',
      optional: true,
      type: '(props: MaterialIconProps) => JSX.Element',
      description: 'accordionHeaderDocumentation:property-icon-description',
    },
  ],
};

export const accordionHeaderIndex: HeadingProps = {
  heading: 'accordionHeaderDocumentation:mainHeading',
  links: [
    {
      title: 'accordionHeaderDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
