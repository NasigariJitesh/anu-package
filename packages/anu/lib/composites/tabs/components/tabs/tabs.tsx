import * as React from 'react';
import { Platform } from 'react-native';

import { TabsProps } from '../../types';
import { createCache, getDefaultIndex } from '../../utils';
import Swiper from '../swiper';

// used to persist position on web

/**
 *
 * @param props
 */
const Tabs = (props: TabsProps) => {
  const {
    onChangeIndex,
    children,
    persistKey,
    style,
    defaultIndex,
    mode = 'fixed',
    disableSwipe = false,
    type = 'primary',
  } = props;

  const cache = createCache();

  const onInnerChangeIndex = React.useCallback(
    (newIndex: number) => {
      if (persistKey && Platform.OS === 'web') {
        cache.set(persistKey, newIndex);
      }
      onChangeIndex?.(newIndex);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [persistKey, onChangeIndex],
  );

  return (
    <Swiper
      style={style}
      defaultIndex={getDefaultIndex(defaultIndex, persistKey)}
      onChangeIndex={onInnerChangeIndex}
      mode={mode}
      disableSwipe={disableSwipe}
      type={type}
    >
      {children}
    </Swiper>
  );
};

export default Tabs;
