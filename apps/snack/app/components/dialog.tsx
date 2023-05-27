/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from 'anu/lib';
import React, { useState } from 'react';

const DialogScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={{ flex: 1 }}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)} style={{ maxHeight: 360 }}>
        <DialogTitle title='Headline' />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DialogScreen;
