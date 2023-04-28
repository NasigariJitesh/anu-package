/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import {
  Button,
  Container,
  Divider,
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
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const theme = useTheme();

  const { add, close } = useSnackbar();

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      <TouchableRipple onPress={() => console.log('Pressed')}>
        <Container>Press here</Container>
      </TouchableRipple>

      <TouchableRipple onPress={() => {}}>
        <Container style={{ paddingVertical: 10, paddingHorizontal: 5, width: '100%' }}>
          <Typography.Body>Helllooo</Typography.Body>
        </Container>
      </TouchableRipple>

      <Menu
        isOpen={open}
        onMenuToggle={(value) => {
          setOpen(value);
        }}
        component={
          <Button.Outlined
            title='Menu'
            onPress={() => {
              setOpen(true);
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
              <MenuItem style={{ width: '100%' }} onPress={() => setOpenChild(true)}>
                Item Child
              </MenuItem>
            }
            isOpen={openChild}
            onMenuToggle={(value) => {
              setOpenChild(value);
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
            align: 'right',
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

      <TouchableRipple onPress={() => {}}>
        <Container sx={{ height: 200, width: 200 }} align='center' justify='center'>
          <Typography.Body selectable={false}>Press</Typography.Body>
        </Container>
      </TouchableRipple>

      <Menu
        isOpen={open}
        onMenuToggle={(value) => {
          setOpen(value);
        }}
        component={
          <Button.Filled
            title='Show Menu'
            onPress={() => {
              setOpen(true);
            }}
          />
        }
      >
        <MenuList width={300}>
          <MenuItem leadingIcon={{ name: 'dashboard' }}>
            <Typography.Body>Dashboard</Typography.Body>
          </MenuItem>
          <MenuItem leadingIcon={{ name: 'inbox' }}>
            <Typography.Body>Inbox</Typography.Body>
          </MenuItem>
          <MenuItem leadingIcon={{ name: 'favorite' }}>
            <Typography.Body>Favorite</Typography.Body>
          </MenuItem>
          <MenuItem leadingIcon={{ name: 'calendar-today' }}>
            <Typography.Body>Calendar</Typography.Body>
          </MenuItem>
          <Divider variant='full-width' color={theme.colors?.$onSurfaceVariant as string} />
          <MenuItem leadingIcon={{ name: 'notifications' }}>
            <Typography.Body>Notifications</Typography.Body>
          </MenuItem>
          <Menu
            isOpen={openChild}
            onMenuToggle={(value) => {
              setOpenChild(value);
            }}
            component={
              <MenuItem
                leadingIcon={{ name: 'settings' }}
                trailingIcon={{ name: 'arrow-right' }}
                onPress={() => setOpenChild(true)}
              >
                <Typography.Body>Account Setting</Typography.Body>
              </MenuItem>
            }
          >
            <MenuList width={300} inner>
              <MenuItem>
                <Typography.Body>Profile</Typography.Body>
              </MenuItem>
              <MenuItem>
                <Typography.Body>Change password</Typography.Body>
              </MenuItem>
              <MenuItem>
                <Typography.Body>Logout</Typography.Body>
              </MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
    </Container>
  );
}
