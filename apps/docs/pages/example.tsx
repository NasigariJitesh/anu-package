/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TimePickerModal,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import { useCallback, useState } from 'react';

/**
 *
 */
export default function Example() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const onDismiss = useCallback(() => {
    setVisible(false);
    setVisible1(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setVisible(false);
      setVisible1(false);
      console.log({ hours, minutes });
    },
    [setVisible],
  );

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      <Container flexDirection='row'>
        <Button.Text onPress={() => setVisible(true)} title='pick time' />
        <Button.Text onPress={() => setVisible1(true)} title='pick time 24hrs' />
      </Container>
      <TimePickerModal visible={visible} onDismiss={onDismiss} onConfirm={onConfirm} hours={12} minutes={14} />
      <TimePickerModal
        visible={visible1}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
        use24HourClock
      />
      <TouchableRipple onPress={() => setText(true)}>
        <Container sx={{ height: 100, width: 100 }}>Press here</Container>
      </TouchableRipple>

      <Dialog visible={text} onDismiss={() => setText(false)} style={{ position: 'absolute', top: 100, left: 100 }}>
        <DialogTitle title='Dialog Title' />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Outlined title='Action' containerStyle={{ marginHorizontal: 10 }} />
          <Button.Filled title='Action' />
        </DialogActions>
      </Dialog>
    </Container>
  );
}
