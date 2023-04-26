import { Container } from 'anu/lib/primitives';
import React from 'react';
import { LayoutChangeEvent } from 'react-native';

import { useMenuContext } from '../../context';
import { MenuProps } from '../../types';
import { getContainerStyle } from '../../utils';

const MenuContainer = (props: MenuProps) => {
  const { updatePosition, isOpen, updateRootPosition } = useMenuContext();

  const style = getContainerStyle();

  return (
    <Container
      disableGutters
      onLayout={(event: LayoutChangeEvent) => {
        updateRootPosition({ top: 0, left: 0, ...event.nativeEvent.layout });
      }}
      style={style}
    >
      <Container
        disableGutters
        {...props}
        onLayout={(event: LayoutChangeEvent) => {
          updatePosition({ top: 0, left: 0, ...event.nativeEvent.layout });
        }}
        style={style}
      >
        {props.component}
      </Container>
      {isOpen ? <>{props.children}</> : <Container disableGutters sx={{ height: 1 }} />}
    </Container>
  );
};

export default MenuContainer;
