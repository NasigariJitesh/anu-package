/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Divider, Menu, MenuItem, MenuList, Typography } from 'anu/lib';
import React, { useState } from 'react';

const MenuScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Menu</Typography.Title>

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
    </Container>
  );
};

export default MenuScreen;
