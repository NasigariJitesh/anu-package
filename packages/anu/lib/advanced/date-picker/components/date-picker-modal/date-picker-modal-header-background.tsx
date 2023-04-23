/* eslint-disable jsdoc/check-param-names */
import { ReactChildren } from 'anu/common/types';
import { useTheme } from 'anu/config';
import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getDatePickerModalHeaderBackgroundStyles } from '../../utils';

/**
 *
 * @param root0.children
 * @param root0.children.children
 */
const DatePickerModalHeaderBackground = ({ children }: { children: ReactChildren }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getDatePickerModalHeaderBackgroundStyles(theme);

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default DatePickerModalHeaderBackground;
