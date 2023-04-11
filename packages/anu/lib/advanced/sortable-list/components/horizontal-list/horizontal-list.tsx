/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { ListProps, ScrollDirectionHorizontal } from '../../types';
import { listToObject } from '../../utils';
import HorizontalMovableItem from '../horizontal-movable-item';

/**
 *
 * @param props
 */
export default function HorizontalList<T>(props: ListProps<T>) {
  const {
    data,
    itemHeight = 60,
    itemWidth = 200,
    renderItem,
    onSort,
    onSortEnd,
    onSortStart,
    containerWidth,
    containerHeight,
  } = props;
  const positions = useSharedValue(listToObject(data));

  const [positionsState, setPositionsState] = useState(listToObject(data));

  const scrollX = useSharedValue(0);
  const autoScroll = useSharedValue(ScrollDirectionHorizontal.None);
  const scrollViewReference = useAnimatedRef<Animated.ScrollView>();

  useEffect(() => {
    positions.value = positionsState;
  }, [positionsState]);

  useEffect(() => {
    setPositionsState(listToObject(data));
  }, [data]);

  useAnimatedReaction(
    () => scrollX.value,
    (scrolling) => {
      scrollTo(scrollViewReference, scrolling, 0, false);
    },
  );

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const contentWidth = data.length * itemWidth;

  const animatedScrollViewStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  } as const;

  return (
    <Animated.ScrollView
      horizontal
      ref={scrollViewReference}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={animatedScrollViewStyle}
      contentContainerStyle={{
        width: contentWidth,
      }}
    >
      {data.map((item, index) => {
        return positions.value[item.id] === undefined ? null : (
          <HorizontalMovableItem
            index={index}
            key={item.id}
            id={item.id}
            positions={positions}
            lowerBound={scrollX}
            autoScrollDirection={autoScroll}
            itemsCount={data.length}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
            item={item.value}
            itemHeight={itemHeight}
            itemWidth={itemWidth}
            renderItem={renderItem}
            onSort={onSort}
            onSortStart={onSortStart}
            onSortEnd={onSortEnd}
          />
        );
      })}
    </Animated.ScrollView>
  );
}
