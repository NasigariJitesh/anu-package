/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Accordion, Container, Typography } from 'anu/lib';
import React from 'react';

const AccordionScreen = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Accordion.Container title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}>
        <Accordion.Children>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
        </Accordion.Children>
      </Accordion.Container>
      <Accordion.Container title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}>
        <Accordion.Children>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
        </Accordion.Children>
      </Accordion.Container>
      <Accordion.Container title={<Accordion.Header supportingText='Supporting Text'>Title</Accordion.Header>}>
        <Accordion.Children>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Typography.Body>
        </Accordion.Children>
      </Accordion.Container>
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
  );
};

export default AccordionScreen;
