/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

import type {
  AnimatedColorArguments,
  AnimatedTextStyle,
  AnimatedViewStyle,
  IndicatorArguments,
  IndicatorReturns,
  OffsetScrollArguments,
} from '../types';

/**
 *
 * @param root0
 * @param root0.childrenCount
 * @param root0.tabIndex
 * @param root0.position
 * @param root0.offset
 * @param root0.textColor
 * @param root0.activeColor
 */
export function useAnimatedText({
  childrenCount,
  tabIndex,
  position,
  offset,
  textColor,
  activeColor,
}: AnimatedColorArguments): AnimatedTextStyle {
  const childrenA = Array.from({ length: childrenCount }).fill(null);
  const positionWithOffset = Animated.add(position!, offset!);
  const inputRange = childrenA.map((_, index) => index);

  return {
    color: positionWithOffset.interpolate({
      inputRange: inputRange,
      outputRange: childrenA.map((_, index) => (index === tabIndex ? activeColor : textColor)),
    }),
    opacity: positionWithOffset.interpolate({
      inputRange: inputRange,
      outputRange: childrenA.map((_, index) => (index === tabIndex ? 1 : 0.6)),
    }),
  };
}

/**
 *
 * @param root0
 * @param root0.childrenCount
 * @param root0.position
 * @param root0.offset
 * @param root0.layouts
 * @param root0.tabsLayout
 */
export function useIndicator({
  childrenCount,
  position,
  offset,
  layouts,
  tabsLayout,
}: IndicatorArguments): IndicatorReturns {
  const [renderIndex, setRenderIndex] = React.useState(0);

  const style = React.useMemo<AnimatedViewStyle | null>(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars  */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _ = renderIndex;
    const childrenA = Array.from({ length: childrenCount }).fill(null);
    const inputRange = childrenA.map((__, index) => index);
    const positionWithOffset = Animated.add(position!, offset!);
    return position && tabsLayout && layouts.current
      ? {
          transform: [
            {
              scaleX: positionWithOffset.interpolate({
                inputRange,
                outputRange: childrenA.map((__, index) => layouts.current?.[index]?.width || 0),
              }),
            },
            {
              translateX: positionWithOffset.interpolate({
                inputRange,
                outputRange: childrenA.map((__, index) => {
                  const cl = layouts.current?.[index];
                  if (!cl) {
                    return 0;
                  }
                  return (cl.x + cl.width / 2) / cl.width;
                }),
              }),
            },
          ],
        }
      : null;
  }, [position, offset, tabsLayout, layouts, renderIndex, childrenCount]);

  const onUpdateTabLayout = useCallback(() => {
    setRenderIndex((previous) => previous + 1);
  }, [setRenderIndex]);

  return [undefined, onUpdateTabLayout, style];
}

/**
 *
 * @param root0
 * @param root0.index
 * @param root0.offset
 * @param root0.updateScroll
 * @param root0.mode
 */
export function useOffsetScroller({ index, offset, updateScroll, mode }: OffsetScrollArguments) {
  // we want native to scroll before the index changes
  const direction = React.useRef<undefined | 'next' | 'prev'>();
  React.useEffect(() => {
    // android does not work unfortunately
    if (offset && Platform.OS !== 'android' && mode === 'scrollable') {
      const id = offset.addListener((nOffset) => {
        const newOffset = nOffset.value;
        const oldDirection = direction.current;

        if (newOffset > 0.1) {
          direction.current = 'next';
        } else if (newOffset < -0.1) {
          direction.current = 'prev';
        }

        if (direction.current && oldDirection !== direction.current) {
          updateScroll(direction.current);
        }
      });
      return () => {
        offset.removeListener(id);
      };
    }
    return;
  }, [offset, updateScroll, direction, mode]);

  React.useEffect(() => {
    direction.current = undefined;
  }, [index]);
}
