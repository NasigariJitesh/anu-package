/* eslint-disable no-secrets/no-secrets */
import { useTheme } from 'anu/config';
import { Button, Container, Divider, IconButton, Menu, MenuItem, MenuList, Typography } from 'anu/lib';
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
  const theme = useTheme();

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
          <Divider variant='full-width' color={theme.colors?.$onSurfaceVariant as string} />
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

const Example2 = () => {
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const theme = useTheme();

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
};

const Example3 = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Container disableGutters style={style}>
      <Menu
        isOpen={open}
        onMenuToggle={(value) => {
          setOpen(value);
        }}
        component={
          <IconButton
            type='filled'
            icon={{ name: 'settings' }}
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
          <MenuItem leadingIcon={{ name: 'settings' }}>
            <Typography.Body>Account Setting</Typography.Body>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};

export const menuDocumentation: ContentValues = {
  mainHeading: 'menuDocumentation:mainHeading',
  mainDescription: 'menuDocumentation:mainDescription',
  properties: [
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'menuDocumentation:property-isOpen-description',
    },
    {
      name: 'onMenuToggle',
      type: '(value: boolean) => void',
      description: 'menuDocumentation:property-onMenuToggle-description',
    },
    {
      name: 'component',
      type: 'ReactChildren',
      description: 'menuDocumentation:property-component-description',
    },
    {
      name: 'children',
      type: 'ReactElement<MenuListProps>',
      description: 'menuDocumentation:property-children-description',
    },
  ],

  examples: [
    {
      name: 'menuDocumentation:example1-name',
      description: 'menuDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Menu
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
  <MenuList>
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
    <Divider variant='full-width' color={theme.colors?.$onSurfaceVariant as string} />
    <MenuItem leadingIcon={{ name: 'notifications' }} >
      <Typography.Body>Notifications</Typography.Body>
    </MenuItem>
    <MenuItem leadingIcon={{ name: 'settings' }}>
      <Typography.Body>Account Setting</Typography.Body>
    </MenuItem>   
  </MenuList>
</Menu>`,
    },

    {
      name: 'menuDocumentation:example2-name',

      id: 'nested',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Menu
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
  <MenuList>
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
    <Divider variant='full-width' color={theme.colors?.$onSurfaceVariant as string} />
    <MenuItem leadingIcon={{ name: 'notifications' }} >
      <Typography.Body>Notifications</Typography.Body>
    </MenuItem>
    <Menu
    isOpen={openChild}
    onMenuToggle={(value) => {setOpenChild(value);}}
    component={<MenuItem leadingIcon={{ name: 'settings' }} trailingIcon={{ name: 'arrow-right' }} onPress={()=>setOpenChild(true)}>
      <Typography.Body>Account Setting</Typography.Body>
    </MenuItem>}

    >
      <MenuList inner>
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
</Menu>`,
    },

    {
      name: 'menuDocumentation:example3-name',
      description: 'menuDocumentation:example3-description',
      id: 'icon-button',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
      code: `<Menu
  isOpen={open}
  onMenuToggle={(value) => {
    setOpen(value);
  }}
  component={
    <IconButton
      type='filled'
      icon={{ name:'settings' }}
      onPress={() => {
        setOpen(true);
      }}
    />
  }
  >
  <MenuList>
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
    <Divider variant='full-width' color={theme.colors?.$onSurfaceVariant as string} />
    <MenuItem leadingIcon={{ name: 'notifications' }} >
      <Typography.Body>Notifications</Typography.Body>
    </MenuItem>
    <MenuItem leadingIcon={{ name: 'settings' }}>
      <Typography.Body>Account Setting</Typography.Body>
    </MenuItem>   
  </MenuList>
</Menu>`,
    },
  ],
  additionalInformation: {
    title: 'menuDocumentation:additionalInformation-title',
    isLocaleSpecific: true,
    items: [
      { info: 'menuDocumentation:additionalInformation-info1', isLocaleSpecific: true },
      { info: 'menuDocumentation:additionalInformation-info2', isLocaleSpecific: true },
    ],
    id: 'see-also',
  },
};

export const menuIndex: HeadingProps = {
  heading: 'menuDocumentation:mainHeading',
  links: [
    {
      title: 'menuDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'menuDocumentation:example2-name',
      link: '#nested',
    },
    {
      title: 'menuDocumentation:example3-name',
      link: '#icon-button',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
    {
      link: '#see-also',
      title: 'menuDocumentation:additionalInformation-title',
      components: [],
    },
  ],
};
