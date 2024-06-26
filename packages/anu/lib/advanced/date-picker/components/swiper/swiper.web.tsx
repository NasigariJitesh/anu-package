/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from 'anu/lib/primitives';
import React, { memo, UIEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useLatest } from '../../hooks';
import { SwiperProps, VerticalScrollProps } from '../../types';
import {
  beginOffset,
  estimatedMonthHeight,
  getIndexFromVerticalOffset,
  getMonthHeight,
  getSwiperStylesWeb,
  getVerticalMonthsOffset,
  montHeaderHeight,
  totalMonths,
  useYearChange,
} from '../../utils';
import AutoSizer from './auto-sizer';

/**
 *
 * @param props
 */
const Swiper = (props: SwiperProps) => {
  const { scrollMode, renderItem, renderHeader, renderFooter, selectedYear, initialIndex } = props;
  const [index, setIndex] = useState(initialIndex);

  const indexReference = useLatest(index);

  useYearChange(
    (newIndex) => {
      if (newIndex) {
        setIndex(newIndex);
      }
    },
    {
      selectedYear,
      currentIndexRef: indexReference,
    },
  );

  const onPrevious = useCallback(() => {
    setIndex((previous) => previous - 1);
  }, [setIndex]);

  const onNext = useCallback(() => {
    setIndex((previous) => previous + 1);
  }, [setIndex]);

  const renderProps = {
    index,
    onPrev: onPrevious,
    onNext,
  };

  const isHorizontal = scrollMode === 'horizontal';

  const styles = getSwiperStylesWeb();

  return (
    <>
      {renderHeader && renderHeader(renderProps)}
      {isHorizontal ? (
        <Container disableGutters style={styles.flex1}>
          {renderItem({ index, onPrev: onPrevious, onNext })}
        </Container>
      ) : (
        <AutoSizer>
          {({ width, height }) => (
            <VerticalScroll
              width={width}
              height={height}
              initialIndex={initialIndex}
              estimatedHeight={estimatedMonthHeight}
              renderItem={renderItem}
            />
          )}
        </AutoSizer>
      )}
      {renderFooter && renderFooter(renderProps)}
    </>
  );
};

const visibleArray = (index: number) => [index - 2, index - 1, index, index + 1, index + 2];

/**
 *
 * @param props
 */
const VerticalScroll = (props: VerticalScrollProps) => {
  const { width, height, initialIndex, estimatedHeight, renderItem } = props;
  const indexReference = useRef<number>(initialIndex);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>(visibleArray(initialIndex));
  const parentReference = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const element = parentReference.current;
    if (!element) {
      return;
    }
    const top = getVerticalMonthsOffset(indexReference.current) - montHeaderHeight;

    element.scrollTo({
      top,
    });
  }, [parentReference, indexReference]);

  const setVisibleIndexesThrottled = setVisibleIndexes;

  const onScroll = useCallback(
    (event: UIEvent) => {
      const top = event.currentTarget.scrollTop;
      if (top === 0) {
        return;
      }

      const offset = top - beginOffset;
      const index = getIndexFromVerticalOffset(offset);
      if (indexReference.current !== index) {
        indexReference.current = index;
        setVisibleIndexesThrottled(visibleArray(index));
      }
    },
    [setVisibleIndexesThrottled],
  );

  return (
    <div
      ref={parentReference}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height,
        width,
        overflow: 'auto',
      }}
      onScroll={onScroll}
    >
      <div
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: estimatedHeight * totalMonths,
          position: 'relative',
        }}
      >
        {[0, 1, 2, 3, 4].map((vi) => (
          <div
            key={vi}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              willChange: 'transform',
              transform: `translateY(${getVerticalMonthsOffset(visibleIndexes[vi]!)}px)`,
              left: 0,
              right: 0,
              position: 'absolute',
              height: getMonthHeight('vertical', visibleIndexes[vi]!),
            }}
          >
            {renderItem({
              index: visibleIndexes[vi]!,
              onPrev: empty,
              onNext: empty,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const empty = () => null;

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default memo(Swiper);
