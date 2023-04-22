import React from 'react';

import { MenuProvider } from '../../context';
import { MenuProps } from '../../types';
import { defaultProps } from './default';
import MenuContainer from './menu';

const Menu = (props: MenuProps) => {
  const finalProps = { ...defaultProps, ...props };
  return (
    <MenuProvider isMenuOpen={finalProps.isOpen} onMenuToggle={finalProps.onMenuToggle}>
      <MenuContainer {...finalProps} />
    </MenuProvider>
  );
};

export default Menu;
