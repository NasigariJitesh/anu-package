/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  MenuList,
  TouchableRipple,
  Typography,
  useSnackbar,
} from 'anu/lib';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [text, setText] = useState(false);
  const [text1, setText1] = useState(false);

  const { add, close } = useSnackbar();

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      <TouchableRipple onPress={() => setText(true)}>
        <Container sx={{ height: 100, width: 100 }}>Press here</Container>
      </TouchableRipple>

      {/* <TouchableRipple onPress={() => {}}>
        <Container style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
          <Typography.Body>Helllooo</Typography.Body>
        </Container>
      </TouchableRipple> */}

      <Dialog visible={text} onDismiss={() => setText(false)} type='full-screen'>
        <DialogTitle type='full-screen' title='Dialog Title' onDismiss={() => setText(false)} />
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

      {/* <Menu
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
      </Menu> */}

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
