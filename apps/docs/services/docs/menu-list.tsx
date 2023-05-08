/* eslint-disable no-secrets/no-secrets */
import { Button, Container, Menu, MenuItem, MenuList, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const Example1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container disableGutters style={style}>
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
          <MenuItem leadingIcon={{ name: 'settings' }}>
            <Typography.Body>Account Setting</Typography.Body>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};

export const menuListDocumentation: ContentValues = {
  mainHeading: 'menuListDocumentation:mainHeading',
  properties: [
    {
      name: 'inner',
      type: 'boolean',
      description: 'menuListDocumentation:property-inner-description',
      optional: true,
      defaultValue: 'false',
    },
    {
      name: 'positionCoordinates',
      type: " Position coordinates | 'auto'",
      description: 'menuListDocumentation:property-positionCoordinates-description',
      optional: true,
      defaultValue: 'auto',
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'menuListDocumentation:external-properties-title',
  },
  examples: [
    {
      name: 'menuListDocumentation:example1-name',

      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<MenuList>
  <MenuItem leadingIcon={{ name: 'dashboard' }} >
    <Typography.Body>Dashboard</Typography.Body>
  </MenuItem>
  <MenuItem leadingIcon={{ name: 'inbox' }} >
    <Typography.Body>Inbox</Typography.Body>
  </MenuItem>
  <MenuItem leadingIcon={{ name: 'favorite' }} >
    <Typography.Body>Favorite</Typography.Body>
  </MenuItem>
  <MenuItem leadingIcon={{ name: 'calendar-today' }} >
    <Typography.Body>Calendar</Typography.Body>
  </MenuItem>
  <MenuItem leadingIcon={{ name: 'settings' }}>
    <Typography.Body>Account Setting</Typography.Body>
  </MenuItem>   
</MenuList>`,
    },
  ],
};

export const menuListIndex: HeadingProps = {
  heading: 'menuListDocumentation:mainHeading',
  links: [
    {
      title: 'menuListDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
