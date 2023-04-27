import { Icon, TouchableRipple } from 'anu/lib';
import React from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';

import { useAnimatedText } from '../../hooks';
import { TabHeaderItemProps } from '../../types';

/**
 *
 * @param props
 */
const TabHeaderItem = (props: TabHeaderItemProps) => {
  const { tab, tabIndex, active, goTo, onTabLayout, activeColor, textColor, position, offset, childrenCount, mode } =
    props;

  const { color, opacity } = useAnimatedText({
    active,
    position,
    offset,
    activeColor,
    textColor,
    tabIndex,
    childrenCount,
  });

  return (
    <View
      key={tab.props.label}
      style={[styles.tabRoot, mode === 'fixed' && styles.tabRootFixed]}
      onLayout={(event) => onTabLayout(tabIndex, event)}
    >
      <TouchableRipple
        disabled={tab.props.disabled}
        onPress={(event) => {
          goTo(tabIndex);
          tab.props.onPress?.(event);
        }}
        onPressIn={tab.props.onPressIn}
        style={[
          styles.touchableRipple,
          styles.touchableRippleTop,
          tab.props.disabled && styles.touchableRippleDisabled,
        ]}
        accessibilityRole='button'
        accessibilityLabel={tab.props.label}
        accessibilityState={{ selected: active }}
        testID={`tab_${tabIndex}`}
      >
        <View style={[styles.touchableRippleInner, styles.touchableRippleInnerTop]}>
          {tab.props.icon ? (
            <View style={styles.iconContainer}>
              {'name' in tab.props.icon ? (
                <Icon
                  selectable={false}
                  accessibilityElementsHidden={true}
                  importantForAccessibility='no'
                  name={tab.props.icon.name || ''}
                  style={{ color: color, opacity }}
                  size={24}
                />
              ) : (
                tab.props.icon
              )}
            </View>
          ) : null}

          <Animated.Text selectable={false} style={[styles.text, styles.textTop]}>
            {tab.props.label}
          </Animated.Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default TabHeaderItem;

const styles = StyleSheet.create({
  iconContainer: {
    height: 24,
    width: 24,
  },
  tabRoot: { position: 'relative' },
  tabRootFixed: { flex: 1 },
  text: {
    letterSpacing: 1,
    textAlign: 'center',
    ...Platform.select({
      web: {
        transitionDuration: '150ms',
        transitionProperty: 'all',
      },
      default: {},
    }),
  },
  textTop: { marginTop: 6 },
  touchableRipple: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
  },
  touchableRippleDisabled: {
    opacity: 0.4,
  },
  touchableRippleInner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 360,
    minWidth: 90,
    paddingLeft: 16,
    paddingRight: 16,
  },
  touchableRippleInnerTop: {
    flexDirection: 'column',
  },
  touchableRippleTop: {
    height: 72,
  },
});
