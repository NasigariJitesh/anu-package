/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { MenuContextData } from '../types';

const MenuContext = createContext<MenuContextData>({
  isOpen: false,
  displayMenu: () => null,
  hideMenu: () => null,
  isDisabled: false,
  position: {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  updatePosition: () => null,
});

/**
 *
 */
export function useMenuContext() {
  return useContext(MenuContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.isMenuOpen
 * @param root0.onMenuToggle
 * @param root0.disabled
 */
function MenuProvider({
  children,
  isMenuOpen,
  onMenuToggle,
  disabled,
}: {
  children: React.ReactNode;
  isMenuOpen?: boolean;
  onMenuToggle?: (value: boolean) => void;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isMenuOpen ?? false);
  const [position, setPosition] = useState({ height: 0, width: 0, x: 0, y: 0 });

  const displayMenu = () => {
    if (onMenuToggle) onMenuToggle(true);
    setIsOpen(true);
    console.log('display');
  };
  const hideMenu = () => {
    if (onMenuToggle) onMenuToggle(false);
    setIsOpen(false);
    console.log('hideMenu');
  };

  useEffect(() => {
    console.log('useEffect');
    if (isMenuOpen === true) {
      console.log('openMenu');
      displayMenu();
    } else hideMenu();
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        displayMenu,
        hideMenu,
        isDisabled: disabled ?? false,
        position,
        updatePosition: setPosition,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
