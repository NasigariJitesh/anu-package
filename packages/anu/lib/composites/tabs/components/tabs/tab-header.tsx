import { Container } from 'anu/lib/primitives';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useIndicator, useOffsetScroller } from '../../hooks';
import { SwiperRenderProps } from '../../types';
import TabsHeaderItem from './tab-header-item';

/**
 *
 * @param props
 */
const TabsHeader = (props: SwiperRenderProps) => {
  const {
    index,
    goTo,
    children,
    position,
    offset,

    style,
    type,
    mode,
  } = props;
  const { backgroundColor: customBackground, elevation = 4, ...restStyle }: ViewStyle = StyleSheet.flatten(style) || {};

  const activeColor = '';
  const textColor = '';

  const innerScrollSize = useRef<number | null>(null);
  const scrollX = useRef<number>(0);
  const scrollReference = useRef<ScrollView>(null);
  const layouts = useRef<Record<string, LayoutRectangle> | null>(null);
  const [tabsLayout, setTabsLayout] = useState<LayoutRectangle | null>(null);
  const [indicatorReference, onUpdateTabLayout, indicatorStyle] = useIndicator({
    tabsLayout,
    layouts,
    index,
    offset,
    position,
    childrenCount: children.length,
  });

  const onTabsLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setTabsLayout(event.nativeEvent.layout);
    },
    [setTabsLayout],
  );

  const onTabLayout = useCallback(
    (tabIndex: number, event: LayoutChangeEvent) => {
      layouts.current = {
        ...layouts.current,
        [tabIndex]: event.nativeEvent.layout,
      };
      onUpdateTabLayout();
    },
    [layouts, onUpdateTabLayout],
  );

  const updateScroll = useCallback(
    (scrollType?: 'next' | 'prev') => {
      if (!layouts.current || mode !== 'scrollable') {
        return;
      }
      let cl = layouts.current[index];

      if (!cl || !scrollReference.current || !tabsLayout) {
        return;
      }

      const tabsWidth = tabsLayout.width;
      const scrolledX = scrollX.current;
      // console.log({ scrolledX, scrollType });
      if (scrollType === 'next') {
        const next = layouts.current?.[index + 1];
        if (next) {
          cl = next;
        }
      } else if (scrollType === 'prev') {
        const previous = layouts.current?.[index - 1];
        if (previous) {
          cl = previous;
        }
      }
      const relativeX = cl.x - scrolledX;
      const overflowLeft = relativeX;
      const overflowRight = -tabsWidth + relativeX + cl.width;

      if (overflowRight > -50) {
        scrollReference.current.scrollTo({
          x: scrolledX + overflowRight + 50,
          y: 0,
          animated: true,
        });
      } else if (overflowLeft < 50) {
        scrollReference.current.scrollTo({
          x: scrolledX + overflowLeft - 50,
          y: 0,
          animated: true,
        });
      }
    },
    [mode, layouts, index, scrollReference, scrollX, tabsLayout],
  );

  // subscribes to offset on native devices to scroll tab bar faster when scrolling (iOS only since Android bugs)
  useOffsetScroller({ updateScroll, index, offset, mode });

  // updates scroll when index changes (updateScroll function changes to new reference when index changes)
  useEffect(() => {
    updateScroll();
  }, [updateScroll]);

  return (
    <Container disableGutters style={styles.relative}>
      <Container disableGutters style={[restStyle, styles.tabs, styles.tabsTopIcon]} onLayout={onTabsLayout}>
        <ScrollView
          ref={scrollReference}
          contentContainerStyle={mode === 'fixed' ? styles.fixedContentContainerStyle : undefined}
          onContentSizeChange={(event) => {
            innerScrollSize.current = event;
          }}
          onScroll={(event) => {
            scrollX.current = event.nativeEvent.contentOffset.x;
          }}
          scrollEventThrottle={25}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={mode === 'scrollable'}
          scrollEnabled={mode === 'scrollable'}
        >
          {mode === 'scrollable' ? <Container disableGutters style={styles.scrollablePadding} /> : null}

          {React.Children.map(children, (tab, tabIndex) => (
            <TabsHeaderItem
              tabIndex={tabIndex}
              tab={tab}
              active={index === tabIndex}
              onTabLayout={onTabLayout}
              goTo={goTo}
              activeColor={activeColor}
              textColor={textColor}
              position={position}
              offset={offset}
              childrenCount={children.length}
              mode={mode}
              type={type}
            />
          ))}
          <Animated.View
            ref={indicatorReference}
            pointerEvents='none'
            style={[
              styles.indicator,
              // eslint-disable-next-line react-native/no-color-literals, react-native/no-inline-styles
              {
                backgroundColor: 'red',
                ...indicatorStyle,
              },
            ]}
          />
        </ScrollView>
        <Animated.View
          style={[
            styles.removeTopShadow,
            {
              height: elevation,
              top: -elevation,
            },
          ]}
        />
      </Container>
    </Container>
  );
};

export default TabsHeader;

const styles = StyleSheet.create({
  fixedContentContainerStyle: {
    flex: 1,
  },
  // eslint-disable-next-line react-native/no-color-literals
  indicator: {
    backgroundColor: 'red',
    bottom: 0,
    flex: 1,
    height: 3,
    left: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
    width: 1,
    ...Platform.select({
      web: {
        transitionDuration: '150ms',
        transitionProperty: 'all',
        transformOrigin: 'left',
        willChange: 'transform',
      },
      default: {},
    }),
  },
  relative: { position: 'relative' },
  removeTopShadow: {
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  scrollablePadding: {
    width: 52,
  },
  tabs: {
    height: 48,
  },
  tabsTopIcon: {
    height: 72,
  },
});
