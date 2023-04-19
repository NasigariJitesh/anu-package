/* eslint-disable react-native/no-inline-styles */
import { Portal } from '@gorhom/portal';
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

import { useMenuContext } from '../../context';
import { MenuListProps } from '../../types';
import { getMenuListStyle } from '../../utils';
import { defaultProps } from './default';

const MenuList = (props: MenuListProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { positionCoordinates, style, ...otherViewProps } = finalProps;

  const { position, listDimension, hideMenu, updateListDimension } = useMenuContext();

  const { height, width } = useWindowDimensions();

  const theme = useTheme();

  const { containerStyle, defaultStyle } = getMenuListStyle(
    theme,
    position,
    listDimension,
    { height, width },
    positionCoordinates,
    finalProps.inner,
  );

  return (
    <Portal>
      <TouchableWithoutFeedback
        onPress={() => {
          hideMenu();
        }}
        style={{ ...StyleSheet.absoluteFillObject }}
      >
        <Container
          disableGutters
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <Container
            disableGutters
            style={containerStyle}
            onLayout={(event) => {
              updateListDimension({ height: event.nativeEvent.layout.height, width: event.nativeEvent.layout.width });
            }}
          >
            <Container disableGutters {...otherViewProps} style={getCombinedStylesForView(defaultStyle, style)}>
              {finalProps.children}
            </Container>
          </Container>
        </Container>
      </TouchableWithoutFeedback>
    </Portal>
  );
};

export default MenuList;
