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
          <MenuItem leadingIcon={{ name: 'settings' }} trailingIcon={{ name: 'arrow-right' }} trailingText='Expand'>
            <Typography.Body>Settings</Typography.Body>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};

export const menuItemDocumentation: ContentValues = {
  mainHeading: 'menuItemDocumentation:mainHeading',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'menuItemDocumentation:property-children-description',
    },
    {
      name: 'inset',
      type: 'boolean',
      description: 'menuItemDocumentation:property-inset-description',
      optional: true,
    },
    {
      name: 'leadingIcon',
      type: 'IconType | ReactElement',
      description: 'menuItemDocumentation:property-leadingIcon-description',
      optional: true,
    },
    {
      name: 'trailingIcon',
      type: 'IconType | ReactElement',
      description: 'menuItemDocumentation:property-trailingIcon-description',
      optional: true,
    },
    {
      name: 'trailingText',
      type: 'string',
      description: 'menuItemDocumentation:property-trailingText-description',
      optional: true,
    },
  ],

  externalProperties: {
    link: 'https://reactnative.dev/docs/pressable',
    title: 'menuItemDocumentation:external-properties-title',
  },

  examples: [
    {
      name: 'menuItemDocumentation:example1-name',
      description: 'menuItemDocumentation:example1-description',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: ` <MenuItem leadingIcon={{ name: 'settings' }} trailingIcon={{ name: 'arrow-right' }} trailingText='Expand'>
  <Typography.Body>Settings</Typography.Body>
</MenuItem>`,
    },
  ],
};

export const menuItemIndex: HeadingProps = {
  heading: 'menuItemDocumentation:mainHeading',
  links: [
    {
      title: 'menuItemDocumentation:example1-name',
      link: '#default',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};
