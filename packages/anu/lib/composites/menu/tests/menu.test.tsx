/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { Button, Menu, MenuItem, MenuList } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Testing for Menu', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Menu isOpen={true} onMenuToggle={() => {}} component={<Button.Outlined title='Menu' onPress={() => {}} />}>
        <MenuList width={400}>
          <MenuItem leadingIcon={{ name: 'close' }} disabled>
            Item 1
          </MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem inset>Item 1</MenuItem>
          <Menu
            component={
              <MenuItem style={{ width: '100%' }} onPress={() => {}}>
                Item Child
              </MenuItem>
            }
            isOpen={false}
            onMenuToggle={() => {}}
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
          <MenuItem trailingIcon={{ name: 'close' }} trailingText='Close'>
            Item 1
          </MenuItem>
        </MenuList>
      </Menu>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Menu with position', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Menu isOpen={true} onMenuToggle={() => {}} component={<Button.Outlined title='Menu' onPress={() => {}} />}>
        <MenuList width={400} positionCoordinates={{ top: 10, left: 50 }}>
          <MenuItem leadingIcon={{ name: 'close' }} disabled>
            Item 1
          </MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem inset>Item 1</MenuItem>
          <Menu
            component={
              <MenuItem style={{ width: '100%' }} onPress={() => {}}>
                Item Child
              </MenuItem>
            }
            isOpen={false}
            onMenuToggle={() => {}}
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
          <MenuItem trailingIcon={{ name: 'close' }} trailingText='Close'>
            Item 1
          </MenuItem>
        </MenuList>
      </Menu>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Menu Closed position inner open', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Menu isOpen={true} onMenuToggle={() => {}} component={<Button.Outlined title='Menu' onPress={() => {}} />}>
        <MenuList width={400} positionCoordinates={{ top: 10, left: 50 }}>
          <MenuItem leadingIcon={{ name: 'close' }} disabled>
            Item 1
          </MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem inset>Item 1</MenuItem>
          <Menu
            component={
              <MenuItem style={{ width: '100%' }} onPress={() => {}}>
                Item Child
              </MenuItem>
            }
            isOpen={true}
            onMenuToggle={() => {}}
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
          <MenuItem trailingIcon={{ name: 'close' }} trailingText='Close'>
            Item 1
          </MenuItem>
        </MenuList>
      </Menu>
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
