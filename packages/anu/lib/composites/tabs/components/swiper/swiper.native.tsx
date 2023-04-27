import * as React from 'react';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, StyleSheet, View } from 'react-native';
import ViewPager, { PageScrollStateChangedNativeEvent } from 'react-native-pager-view';

import { TabsContext } from '../../context';
import { SwiperProps, TabScreenProps } from '../../types';
import { TabHeader } from '../tabs';

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

/**
 *
 * @param props
 */
const SwiperNative = (props: SwiperProps) => {
  const { style, defaultIndex, mode, type, onChangeIndex, disableSwipe } = props;

  const indexReference = useRef<number>(defaultIndex || 0);
  const [index, setIndex] = useState<number>(defaultIndex || 0);

  const children: ReactElement<TabScreenProps>[] = props.children;

  const offset = useRef<Animated.Value>(new Animated.Value(0));
  const position = useRef<Animated.Value>(new Animated.Value(defaultIndex || 0));
  const isScrolling = useRef<boolean>(false);
  const viewPager = useRef<ViewPager | null>(null);

  useEffect(() => {
    if (index !== indexReference.current) {
      isScrolling.current = true;
      requestAnimationFrame(() => viewPager.current && viewPager.current.setPage(index));
    }

    indexReference.current = index;
    return;
  }, [isScrolling, viewPager, index]);

  const onPageScrollStateChanged = useCallback(
    (event: PageScrollStateChangedNativeEvent) => {
      Keyboard.dismiss();
      isScrolling.current = event.nativeEvent.pageScrollState !== 'idle';
    },
    [isScrolling],
  );

  const onPageSelected = useCallback(
    (event: { nativeEvent: { position: number } }) => {
      isScrolling.current = false;
      const pageSelectedIndex = event.nativeEvent.position;

      setIndex(pageSelectedIndex);
      onChangeIndex(pageSelectedIndex);
    },
    [isScrolling, setIndex, onChangeIndex],
  );

  const goTo = React.useCallback(
    (ind: number) => {
      if (!isScrolling.current) {
        setIndex(ind);
      }
    },
    [setIndex, isScrolling],
  );

  const renderProps = {
    index,
    goTo,
    children,

    style,
    position: position.current,
    offset: offset.current,

    mode,
    type,
  };
  return (
    <>
      <TabHeader {...renderProps} />
      <TabsContext.Provider value={{ goTo, index }}>
        <ViewPager
          style={styles.viewPager}
          initialPage={index}
          scrollEnabled={!disableSwipe}
          onPageSelected={onPageSelected}
          ref={viewPager}
          onPageScrollStateChanged={onPageScrollStateChanged}
          onPageScroll={Animated.event(
            [
              {
                nativeEvent: {
                  position: position.current,
                  offset: offset.current,
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
        >
          {children.map((tab, tabIndex) => (
            <View style={styles.viewPager} key={tab.props.label || tabIndex}>
              {tab}
            </View>
          ))}
        </ViewPager>
      </TabsContext.Provider>
    </>
  );
};

export default SwiperNative;
