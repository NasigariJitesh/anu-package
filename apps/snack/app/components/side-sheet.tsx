/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Button, Container, SideSheet, SideSheetReferenceProps } from 'anu/lib';
import React, { useRef } from 'react';

const ContainerScreen = () => {
  const reference = useRef<SideSheetReferenceProps | null>(null);

  const toggleSidebar = () => {
    if (reference.current?.isActive()) {
      reference.current?.scrollTo(0);
    } else reference.current?.scrollTo(-150);
  };

  return (
    <Container style={{ flex: 1 }}>
      <Button.Filled title='Open Sidebar' onPress={toggleSidebar} />
      <SideSheet ref={reference} width={150} headline='Title' startCoordinate={0} align='right' />
    </Container>
  );
};

export default ContainerScreen;
