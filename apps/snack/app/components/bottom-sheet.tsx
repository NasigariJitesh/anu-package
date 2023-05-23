/* eslint-disable react-native/no-inline-styles */
import { BottomSheet, BottomSheetReferenceProps, Button, Checkbox, Container, Typography } from 'anu/lib';
import React, { useRef } from 'react';

const BottomSheetScreen = () => {
  const bottomSheetReference = useRef<BottomSheetReferenceProps | null>(null);

  return (
    <Container disableGutters style={{ width: '100%' }}>
      <Button.Filled
        title={'Open Bottom Sheet'}
        onPress={() => {
          if (bottomSheetReference?.current?.isActive()) bottomSheetReference?.current?.scrollTo(0);
          else bottomSheetReference?.current?.scrollTo(-400);
        }}
      />
      <BottomSheet
        ref={bottomSheetReference}
        containerStyles={{ paddingHorizontal: 10, width: ' 100%', alignItems: 'flex-start' }}
        startCoordinate={-250}
      >
        <Typography.Body>Industry</Typography.Body>
        <Checkbox id='Software' label='Software' />
        <Checkbox id='Marketing' label='Marketing' />
        <Checkbox id='Designing' label='Designing' />
        <Checkbox id='Hardware' label='Hardware' />
      </BottomSheet>
    </Container>
  );
};

export default BottomSheetScreen;
