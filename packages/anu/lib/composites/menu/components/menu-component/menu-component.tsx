import { PortalHost } from '@gorhom/portal';
import { Container } from 'anu/lib/primitives';
import React from 'react';
import { LayoutChangeEvent, Pressable, TouchableWithoutFeedback } from 'react-native';

import { useMenuContext } from '../../context';
import { MenuComponentProps } from '../../types';

const MenuComponent = (props: MenuComponentProps) => {
  const { updatePosition, displayMenu, hideMenu } = useMenuContext();

  return (
    <Container
      disableGutters
      {...props}
      onLayout={(event: LayoutChangeEvent) => {
        updatePosition(event.nativeEvent.layout);
      }}
    >
      {props.children}
      <PortalHost name='CustomPortalHost' />
    </Container>
  );
};

export default MenuComponent;
