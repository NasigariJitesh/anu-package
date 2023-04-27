import * as React from 'react';
import type { TextStyle, View, ViewStyle } from 'react-native';

import type { AnimatedColorArguments, IndicatorArguments, IndicatorReturns, OffsetScrollArguments } from '../types';

/**
 *
 * @param root0
 * @param root0.left
 * @param root0.width
 */
function getIndicatorStyle({ left, width }: { left: number; width: number }): ViewStyle {
  return {
    transform: [{ scaleX: width }, { translateX: roundToTwo(left / width) || 0 }],
  };
}

/**
 *
 * @param number_
 */
function roundToTwo(number_: number) {
  return Math.round(number_ * 100 + Number.EPSILON) / 100;
}

/**
 *
 * @param root0
 * @param root0.index
 * @param root0.layouts
 */
export function useIndicator({ index, layouts }: IndicatorArguments): IndicatorReturns {
  const indicatorReference = React.useRef<View>(null);
  const updateIndicator = React.useCallback(() => {
    if (!indicatorReference.current || !layouts.current) {
      return;
    }
    const cl = layouts.current[index];
    if (cl) {
      indicatorReference.current.setNativeProps({
        style: getIndicatorStyle({ left: cl.x, width: cl.width }),
      });
    }
  }, [index, indicatorReference, layouts]);

  // update indicator when index changes (updateIndicator function changes to new reference when index changes)
  React.useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  return [indicatorReference, updateIndicator, null];
}

/**
 *
 * @param _
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useOffsetScroller(_: OffsetScrollArguments) {}
/**
 *
 * @param root0
 * @param root0.activeColor
 * @param root0.active
 * @param root0.textColor
 */
export function useAnimatedText({ activeColor, active, textColor }: AnimatedColorArguments): TextStyle {
  return React.useMemo(
    () => ({
      color: active ? activeColor : textColor,
      opacity: active ? 1 : 0.6,
    }),
    [active, activeColor, textColor],
  );
}
