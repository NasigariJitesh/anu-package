/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { MenuContextData } from '../types';

const MenuContext = createContext<MenuContextData>({
  isOpen: false,
  displayMenu: () => null,
  hideMenu: () => null,
  position: {
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  },
  updatePosition: () => null,
  listDimension: {
    height: 0,
    width: 0,
  },
  updateListDimension: () => null,
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
 */
function MenuProvider({
  children,
  isMenuOpen,
  onMenuToggle,
}: {
  children: React.ReactNode;
  isMenuOpen: boolean;
  onMenuToggle: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const [position, setPosition] = useState({ height: 0, width: 0, top: 0, left: 0 });
  const [listDimension, setListDimension] = useState({ height: 0, width: 0 });

  const displayMenu = () => {
    if (onMenuToggle) onMenuToggle(true);
    setIsOpen(true);
  };
  const hideMenu = () => {
    if (onMenuToggle) onMenuToggle(false);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen === true) {
      displayMenu();
    } else hideMenu();
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        displayMenu,
        hideMenu,
        position,
        listDimension,
        updatePosition: setPosition,
        updateListDimension: setListDimension,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
