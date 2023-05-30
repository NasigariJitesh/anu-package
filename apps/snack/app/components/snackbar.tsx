/* eslint-disable react-native/no-inline-styles */
import { Button, Container, useSnackbar } from 'anu/lib';
import React from 'react';

const SnackbarScreen = () => {
  const { add, close } = useSnackbar();

  return (
    <Container style={{ padding: 10 }}>
      <Button.Filled
        title='Open Snackbar'
        onPress={() =>
          add({
            numberOfLines: 1,
            content: 'Single-line snackbar with action',
            action: { title: 'Action' },
            icon: { icon: { name: 'close', props: { onPress: close } } },
          })
        }
      />
    </Container>
  );
};

export default SnackbarScreen;
