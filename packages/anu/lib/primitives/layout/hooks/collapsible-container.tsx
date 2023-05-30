import React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';

import type { Config, State } from '../types';

/**
 *
 * @param config
 */
export function useCollapsible(config?: Config) {
  const [height, setHeight] = React.useState(0);
  const [state, setState] = React.useState<State>(config?.defaultState ?? 'collapsed');

  const animatedHeight = useSharedValue(0);

  React.useEffect(() => {
    animatedHeight.value = state === 'collapsed' ? withTiming(0, config) : withTiming(height, config);
  }, [state, height, animatedHeight, config]);

  const onPress = React.useCallback((collapse?: boolean) => {
    if (collapse === undefined) {
      setState((previous) => (previous === 'collapsed' ? 'expanded' : 'collapsed'));
    } else {
      setState(collapse ? 'collapsed' : 'expanded');
    }
  }, []);

  const onLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      const measuredHeight = event.nativeEvent.layout.height;

      if (height !== measuredHeight) {
        setHeight(measuredHeight);
      }
    },
    [height],
  );

  return {
    onLayout,
    onPress,
    animatedHeight,
    height,
    state,
  };
}
