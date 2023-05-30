/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
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
        <Accordion.Container title={<Accordion.Header>Accordion 1</Accordion.Header>}>
          <Accordion.Children>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography.Body>
          </Accordion.Children>
        </Accordion.Container>
      </Container>
      <Container disableGutters flexDirection='row' style={style}>
        <Accordion.Container title={<Accordion.Header>Accordion 2</Accordion.Header>}>
          <Accordion.Children>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography.Body>
          </Accordion.Children>
        </Accordion.Container>
      </Container>
      <Container disableGutters flexDirection='row' style={style}>
        <Accordion.Container title={<Accordion.Header>Accordion 3</Accordion.Header>}>
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

const Example2 = () => {
  const theme = useTheme();
  const accordionStyle = {
    maxWidth: 420,
    flex: 1,
    backgroundColor: theme.colors.$surface,
    padding: 16,
    borderRadius: 4,
  };
  return (
    <Container disableGutters sx={flexStyle as never}>
      <Container disableGutters flexDirection='row' style={style}>
        <Accordion.Container
          title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}
          style={accordionStyle}
        >
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

export const accordionDocumentation: ContentValues = {
  mainHeading: 'accordionDocumentation:mainHeading',
  mainDescription: 'accordionDocumentation:mainDescription',
  examples: [
    {
      name: 'accordionDocumentation:example1-name',
      id: 'default',
      component: <Example1 />,
      code: "<Container width={600} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />",
    },
    {
      name: 'accordionDocumentation:example1-name',
      id: 'default',
      component: <Example2 />,
      code: "<Container width={600} maxWidth={'sm'} sx={{ backgroundColor: '#c1c1c1', height: 200 }} />",
    },
  ],
  properties: [
    {
      name: 'flexDirection',
      optional: true,
      type: "'row' | 'row-reverse' | 'column' | 'column-reverse'",
      description: 'accordionDocumentation:property-flexDirection-description',
      defaultValue: "'column'",
    },
    {
      name: 'align',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'accordionDocumentation:property-align-description',
      defaultValue: "'flex-start'",
    },
    {
      name: 'justify',
      description: 'accordionDocumentation:property-justify-description',
      optional: true,
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      defaultValue: "'flex-start'",
    },
    {
      name: 'style',
      description: 'accordionDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'disableGutters',
      description: 'accordionDocumentation:property-disableGutters-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'fixed',
      description: 'accordionDocumentation:property-fixed-description',
      type: 'boolean',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'width',
      description: 'accordionDocumentation:property-width-description',
      type: 'number | string',
      optional: true,
    },
    {
      name: 'maxWidth',
      description: 'accordionDocumentation:property-maxWidth-description',
      optional: true,
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string",
    },
    {
      name: 'sx',
      description: 'accordionDocumentation:property-sx-description',
      type: 'Sx',
      optional: true,
    },
  ],
};

export const accordionIndex: HeadingProps = {
  heading: 'accordionDocumentation:mainHeading',
  links: [
    {
      title: 'accordionDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
