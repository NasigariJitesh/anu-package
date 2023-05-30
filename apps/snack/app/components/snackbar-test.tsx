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
        style={{ margin: 10 }}
      />
      <Button.Filled
        title='Open 2-line Snackbar '
        onPress={() =>
          add({
            numberOfLines: 2,
            content:
              'This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action.',
            action: { title: 'Longer Action' },
            longerAction: true,
            position: { top: 10 },
          })
        }
        style={{ margin: 10 }}
      />
    </Container>
  );
};

export default SnackbarScreen;
