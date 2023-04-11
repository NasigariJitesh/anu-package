/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { ListProps, ScrollDirection } from '../../types';
import { listToObject } from '../../utils';
import MovableItem from '../movable-item';

/**
 *
 * @param props
 */
export default function List<T>(props: ListProps<T>) {
  const {
    data,
    itemHeight = 60,
    itemWidth = 200,
    renderItem,
    onSort,
    onSortEnd,
    onSortStart,
    containerHeight,
    containerWidth,
  } = props;

  const positions = useSharedValue(listToObject(data));
  const [positionsState, setPositionsState] = useState(listToObject(data));
  const scrollY = useSharedValue(0);
  const autoScroll = useSharedValue(ScrollDirection.None);
  const scrollViewReference = useAnimatedRef<Animated.ScrollView>();

  useEffect(() => {
    positions.value = positionsState;
  }, [positionsState]);

  useEffect(() => {
    setPositionsState(listToObject(data));
  }, [data]);

  useAnimatedReaction(
    () => scrollY.value,
    (scrolling) => {
      scrollTo(scrollViewReference, 0, scrolling, false);
    },
  );

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const contentHeight = data.length * itemHeight;

  const animatedScrollViewStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
  } as const;

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewReference}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={animatedScrollViewStyle}
        contentContainerStyle={{
          height: contentHeight,
        }}
      >
        {data.map((item, index) => {
          return positions.value[item.id] === undefined ? null : (
            <MovableItem
              index={index}
              key={item.id}
              id={item.id}
              positions={positions}
              lowerBound={scrollY}
              autoScrollDirection={autoScroll}
              itemsCount={data.length}
              containerHeight={containerHeight}
              containerWidth={containerWidth}
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
    </>
  );
}
