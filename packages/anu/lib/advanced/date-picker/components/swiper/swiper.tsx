import { Container } from 'anu/lib/primitives';
import React, { memo, useCallback, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

import { SwiperProps } from '../../types';
import { beginOffset, estimatedMonthHeight, getSwiperStyles, totalMonths, useYearChange } from '../../utils';
import {
  getHorizontalMonthOffset,
  getIndexFromVerticalOffset,
  getMonthHeight,
  getVerticalMonthsOffset,
  montHeaderHeight,
} from '../../utils';
import AutoSizer from './auto-sizer';

/**
 *
 * @param index
 * @param isHorizontal
 * @param height
 */
const getVisibleArray = (index: number, isHorizontal: boolean, height: number) => {
  if (isHorizontal || height < 700) {
    return [index - 1, index, index + 1];
  }
  return [index - 2, index - 1, index, index + 1, index + 2];
};

/**
 *
 * @param props
 */
const Swiper = (props: SwiperProps) => {
  return <AutoSizer>{({ width, height }) => <SwiperInner {...props} width={width} height={height} />}</AutoSizer>;
};

/**
 *
 * @param props
 */
const SwiperInner = (props: SwiperProps & { width: number; height: number }) => {
  const { scrollMode, renderItem, renderHeader, renderFooter, selectedYear, initialIndex, width, height } = props;

  const isHorizontal = scrollMode === 'horizontal';

  const indexReference = useRef<number>(initialIndex);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>(getVisibleArray(initialIndex, isHorizontal, height));

  const parentReference = useRef<ScrollView | null>(null);

  const styles = getSwiperStyles();

  const scrollTo = useCallback(
    (index: number, animated: boolean) => {
      indexReference.current = index;
      setVisibleIndexes(getVisibleArray(index, isHorizontal, height));

      if (!parentReference.current) {
        return;
      }
      const offset = isHorizontal
        ? getHorizontalMonthOffset(index, width)
        : getVerticalMonthsOffset(index) - montHeaderHeight;

      if (isHorizontal) {
        parentReference.current.scrollTo({
          y: 0,
          x: offset,
          animated,
        });
      } else {
        parentReference.current.scrollTo({
          y: offset,
          x: 0,
          animated,
        });
      }
    },
    [parentReference, isHorizontal, width, height],
  );

  const onPrevious = useCallback(() => {
    scrollTo(indexReference.current - 1, true);
  }, [scrollTo, indexReference]);

  const onNext = useCallback(() => {
    scrollTo(indexReference.current + 1, true);
  }, [scrollTo, indexReference]);

  const scrollToInitial = useCallback(() => {
    scrollTo(indexReference.current, false);
  }, [scrollTo]);

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffset = event.nativeEvent.contentOffset;
      const viewSize = event.nativeEvent.layoutMeasurement;
      const newIndex = isHorizontal
        ? Math.floor(contentOffset.x / viewSize.width)
        : getIndexFromVerticalOffset(contentOffset.y - beginOffset);

      if (newIndex === 0) {
        return;
      }

      if (indexReference.current !== newIndex) {
        indexReference.current = newIndex;
        setVisibleIndexes(getVisibleArray(newIndex, isHorizontal, height));
      }
    },
    [indexReference, height, isHorizontal],
  );

  const renderProps = {
    index: 0,
    onPrev: onPrevious,
    onNext,
  };

  useYearChange(
    (newIndex) => {
      if (newIndex) {
        scrollTo(newIndex, false);
      }
    },
    {
      selectedYear,
      currentIndexRef: indexReference,
    },
  );

  return (
    <>
      <ScrollView
        scrollsToTop={false}
        ref={parentReference}
        horizontal={isHorizontal}
        pagingEnabled={isHorizontal}
        style={styles.viewPager}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onMomentumScrollEnd}
        onLayout={scrollToInitial}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate='fast'
        scrollEventThrottle={10}
      >
        <Container
          disableGutters
          style={[
            styles.inner,
            {
              height: isHorizontal ? height : estimatedMonthHeight * totalMonths,
              width: isHorizontal ? width * totalMonths : width,
            },
          ]}
        >
          {visibleIndexes
            ? Array.from({ length: visibleIndexes.length })
                .fill(null)
                .map((_, vi) => (
                  <Container
                    disableGutters
                    key={vi}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      top: isHorizontal ? 0 : getVerticalMonthsOffset(visibleIndexes[vi]),
                      left: isHorizontal ? getHorizontalMonthOffset(visibleIndexes[vi], width) : 0,
                      right: isHorizontal ? undefined : 0,
                      bottom: isHorizontal ? 0 : undefined,
                      position: 'absolute',
                      width: isHorizontal ? width : undefined,
                      height: isHorizontal ? undefined : getMonthHeight(scrollMode, visibleIndexes[vi]),
                    }}
                  >
                    {renderItem({
                      index: visibleIndexes[vi],
                      onPrev: onPrevious,
                      onNext: onNext,
                    })}
                  </Container>
                ))
            : null}
        </Container>
      </ScrollView>
      {renderHeader && renderHeader(renderProps)}
      {renderFooter && renderFooter(renderProps)}
    </>
  );
};

export default memo(Swiper);
