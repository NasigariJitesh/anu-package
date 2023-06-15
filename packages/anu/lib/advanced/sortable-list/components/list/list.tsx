/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Typography } from 'anu/lib/primitives';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { useTheme } from '../../../../../config';
import { ListProps, MovableItemProps, ScrollDirection } from '../../types';
import { listToObject } from '../../utils';
import MovableItem from '../movable-item';

/**
 *
 * @param props - props for the horizontal item
 */
function Item<T>(
  props: MovableItemProps<T> & {
    positionsState: {
      [id: string]: number;
    };
  },
) {
  const {
    autoScrollDirection,
    containerHeight,
    containerWidth,
    index,
    item,
    itemsCount,
    itemHeight,
    id,
    positions,
    lowerBound,
    renderItem,
    itemWidth,
    onSort,
    onSortEnd,
    onSortStart,
    positionsState,
  } = props;
  const [itemAvailable, setItemAvailable] = useState(positionsState[id] !== undefined);
  const theme = useTheme();

  useEffect(() => {
    if (positionsState[id] === undefined || positions.value[id] === undefined) {
      setItemAvailable(false);
    } else {
      setItemAvailable(true);
    }
  }, [positionsState, positions.value]);

  return itemAvailable ? (
    <MovableItem
      index={index}
      key={id}
      id={id}
      positions={positions}
      lowerBound={lowerBound}
      autoScrollDirection={autoScrollDirection}
      itemsCount={itemsCount}
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      item={item}
      itemHeight={itemHeight}
      itemWidth={itemWidth}
      renderItem={renderItem}
      onSort={onSort}
      onSortStart={onSortStart}
      onSortEnd={onSortEnd}
    />
  ) : (
    <Container disableGutters align='center' sx={{ height: itemHeight ?? 40, width: itemWidth ?? '100%' }}>
      <Typography.Body>
        <ActivityIndicator color={theme.colors.$onSurface} /> Loading Image
      </Typography.Body>
    </Container>
  );
}

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
    paddingRight: 20,
  } as const;

  const contentContainerStyle = {
    height: contentHeight,
  };

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewReference}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={animatedScrollViewStyle}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator
      >
        {data.map((item, index) => {
          return (
            <Item
              positionsState={positionsState}
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
