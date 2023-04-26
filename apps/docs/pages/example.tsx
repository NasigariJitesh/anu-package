/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Container,
  Menu,
  MenuItem,
  MenuList,
  TimePickerModal,
  TouchableRipple,
  Typography,
  useSnackbar,
} from 'anu/lib';
import { useCallback, useState } from 'react';

/**
 *
 */
export default function Example() {
  const [text, setText] = useState(false);
  const [text1, setText1] = useState(false);

  const [visible, setVisible] = useState(false);
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

  const { add, close } = useSnackbar();

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
      <TouchableRipple onPress={() => console.log('Pressed')}>
        <Container>Press here</Container>
      </TouchableRipple>

      <TouchableRipple onPress={() => {}}>
        <Container style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
          <Typography.Body>Helllooo</Typography.Body>
        </Container>
      </TouchableRipple>

      <Menu
        isOpen={text}
        onMenuToggle={(value) => {
          setText(value);
        }}
        component={
          <Button.Outlined
            title='Menu'
            onPress={() => {
              setText(true);
            }}
          />
        }
      >
        <MenuList width={400}>
          <MenuItem leadingIcon={{ name: 'close' }} disabled>
            Item 1
          </MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem inset>Item 1</MenuItem>
          <Menu
            component={
              <MenuItem style={{ width: '100%' }} onPress={() => setText1(true)}>
                Item Child
              </MenuItem>
            }
            isOpen={text1}
            onMenuToggle={(value) => {
              setText1(value);
            }}
          >
            <MenuList inner={true}>
              <MenuItem leadingIcon={{ name: 'close' }} disabled>
                Item 2
              </MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem inset>Item 2</MenuItem>
            </MenuList>
          </Menu>

          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
        </MenuList>
      </Menu>

      <Button.Text
        title='add snack'
        onPress={() => {
          add({
            content: 'First Snack',
          });
        }}
      />
      <Button.Text
        title='add snack 2'
        onPress={() => {
          add({
            content:
              'This is very long snack, This is very long snack , This is very long snack, This is very long snack ,   This is very long snack, This is very long snack , This is very long snack, This is very long snack , This is very long snack, This is very long snack  ',
            action: { title: 'Close', onPress: close },
            icon: { icon: { name: 'close' }, type: 'standard', onPress: close },
            duration: 10_000,
            style: { height: 200 },
          });
        }}
      />
    </Container>
  );
}
