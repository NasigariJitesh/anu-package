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

export const accordionDocumentation: ContentValues = {
  mainHeading: 'accordionDocumentation:mainHeading',
  mainDescription: 'accordionDocumentation:mainDescription',
  examples: [
    {
      name: 'accordionDocumentation:example1-name',
      id: 'default',
      component: <Example1 />,
      code: `<Accordion.Container title={<Accordion.Header>Accordion 1</Accordion.Header>}>
  <Accordion.Children>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Typography.Body>
  </Accordion.Children>
</Accordion.Container>

<Accordion.Container title={<Accordion.Header>Accordion 2</Accordion.Header>}>
  <Accordion.Children>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Typography.Body>
  </Accordion.Children>
</Accordion.Container>

<Accordion.Container title={<Accordion.Header>Accordion 3</Accordion.Header>}>
  <Accordion.Children>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Typography.Body>
  </Accordion.Children>
</Accordion.Container>`,
    },
    {
      name: 'accordionDocumentation:example2-name',
      id: 'support-text',
      component: <Example2 />,
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
    link: '/components/container',
    title: 'accordionDocumentation:external-properties-title',
  },
  additionalInformation: {
    title: 'accordionDocumentation:additionalInformation-title',
    isLocaleSpecific: true,
    items: [
      { info: 'accordionDocumentation:additionalInformation-info1', isLocaleSpecific: true },
      { info: 'accordionDocumentation:additionalInformation-info2', isLocaleSpecific: true },
    ],
    id: 'see-also',
  },
  properties: [
    {
      name: 'title',
      type: 'ReactElement',
      description: 'accordionDocumentation:property-title-description',
    },
    {
      name: 'children',
      type: 'ReactElement',
      description: 'accordionDocumentation:property-children-description',
    },
    {
      name: 'collapse',
      optional: true,
      type: 'boolean',
      description: 'accordionDocumentation:property-collapse-description',
    },
    {
      name: 'onPress',
      description: 'accordionDocumentation:property-onPress-description',
      optional: true,
      type: '() => void',
    },
    {
      name: 'spacing',
      description: 'accordionDocumentation:property-spacing-description',
      optional: true,
      type: 'number',
      defaultValue: '16',
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
      title: 'accordionDocumentation:example2-name',
      link: '#support-text',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
    {
      link: '#see-also',
      title: 'accordionDocumentation:additionalInformation-title',
      components: [],
    },
  ],
};
