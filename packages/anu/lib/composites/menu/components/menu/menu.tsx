/* eslint-disable react-native/no-inline-styles */
import { PortalHost } from '@gorhom/portal';
import { PortalProvider } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React from 'react';

import { MenuProvider } from '../../context';
import { MenuProps } from '../../types';
import { defaultProps } from './default';

const Menu = (props: MenuProps) => {
  const finalProps = { ...defaultProps, ...props };
  return (
    <MenuProvider isMenuOpen={finalProps.isOpen} disabled={finalProps.disabled} onMenuToggle={finalProps.onMenuToggle}>
      <Container disableGutters>{finalProps.children}</Container>
    </MenuProvider>
  );
};

export default Menu;
