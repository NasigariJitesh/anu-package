/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Grid, TouchableRipple, Typography } from 'anu/lib';
import React from 'react';

const data = [
  'Item1',
  'Item2',
  'Item3',
  'Item4',
  'Item5',
  'Item6',
  'Item7',
  'Item8',
  'Item9',
  'Item10',
  'Item11',
  'Item12',
  'Item13',
  'Item14',
  'Item15',
  'Item16',
  'Item17',
];

const AccordionScreen = () => {
  return (
    <Container style={{ width: '100%', padding: 10, flex: 1 }}>
      <Typography.Title style={{ marginBottom: 5 }}>Grid</Typography.Title>

      <Grid
        style={{ flex: 1 }}
        data={data}
        numberOfColumns={{
          xs: 2,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
        }}
        renderItem={(item, index) => (
          <TouchableRipple style={{ width: '100%' }}>
            <Container align='center' justify='center' width='100%' style={{ height: 100 }}>
              <Typography.Title>{item}</Typography.Title>
              <Typography.Body>
                {index.row},{index.column}
              </Typography.Body>
            </Container>
          </TouchableRipple>
        )}
      />
    </Container>
  );
};

export default AccordionScreen;
