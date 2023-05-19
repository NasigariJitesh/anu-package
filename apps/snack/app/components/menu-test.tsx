/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Divider, Menu, MenuItem, MenuList, Typography } from 'anu/lib';
import React, { useState } from 'react';

const MenuScreen = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  return (
    <Container>
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
            style={{ margin: 10 }}
          />
        }
      >
        <MenuList width={180} positionCoordinates={{ top: 90, right: 0 }}>
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
          <Divider variant='full-width' />
          <MenuItem leadingIcon={{ name: 'notifications' }}>
            <Typography.Body>Notifications</Typography.Body>
          </MenuItem>
          <MenuItem leadingIcon={{ name: 'settings' }}>
            <Typography.Body>Account Setting</Typography.Body>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        isOpen={open1}
        onMenuToggle={(value) => {
          setOpen(value);
        }}
        component={
          <Button.Filled
            title='Show Menu'
            onPress={() => {
              setOpen1(true);
            }}
            style={{ margin: 10 }}
          />
        }
      >
        <MenuList width={300} positionCoordinates={{ top: 70, right: 0 }}>
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
          <Divider variant='full-width' />
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
            <MenuList width={300} inner positionCoordinates='auto'>
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
};

export default MenuScreen;
