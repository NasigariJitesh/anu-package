/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Typography, useSnackbar } from 'anu/lib';
import React from 'react';

const SnackbarScreen = () => {
  const { add, close } = useSnackbar();

  return (
    <Container style={{ padding: 10, flex: 1 }}>
      <Typography.Title style={{ marginBottom: 5 }}>Snackbar</Typography.Title>
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
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Snackbar - Double Line</Typography.Title>
      <Button.Filled
        title='Double-line snackbar with action'
        onPress={() => {
          add({
            content:
              'This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action.',
            numberOfLines: 2,
            action: { title: 'Action' },
          });
        }}
      />

      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>
        Snackbar - Double line with longer Action
      </Typography.Title>
      <Button.Filled
        title='Double-line snackbar with longer action'
        onPress={() => {
          add({
            content:
              'This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action.',
            numberOfLines: 2,
            action: { title: 'Longer action' },
            longerAction: true,
          });
        }}
      />
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Snackbar with 8s Duration</Typography.Title>
      <Button.Filled
        title='Snackbar with 8s Duration'
        onPress={() => {
          add({
            content: 'This snackbar has a duration of 8 seconds',
            duration: 8000,
          });
        }}
      />
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Snackbar - Left Aligned</Typography.Title>
      <Button.Filled
        title='Left Snackbar'
        onPress={() => {
          add({
            content: 'Left Aligned snackbar',
            align: 'left',
          });
        }}
      />

      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Snackbar - Top Positioned</Typography.Title>
      <Button.Filled
        title='Top Snackbar'
        onPress={() => {
          add({
            content: 'Top positioned snackbar',
            position: { top: 10 },
          });
        }}
      />
    </Container>
  );
};

export default SnackbarScreen;
