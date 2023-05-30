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
import { HorizontalMovableItemProps, ListProps, ScrollDirectionHorizontal } from '../../types';
import { listToObject } from '../../utils';
import HorizontalMovableItem from '../horizontal-movable-item';

/**
 *
 * @param props - props for the horizontal item
 */
function HorizontalItem<T>(
  props: HorizontalMovableItemProps<T> & {
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
    <HorizontalMovableItem
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
    <Container disableGutters align='center' justify='center' sx={{ height: itemHeight, width: itemWidth }}>
      <Typography.Body>
        {' '}
        <ActivityIndicator color={theme.colors.$onSurface} /> Loading Image
      </Typography.Body>
    </Container>
  );
}

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

  const contentWidth = data.length * itemWidth + 100;

  const animatedScrollViewStyle = {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  } as const;

  const contentContainerStyle = {
    width: contentWidth,
    padding: 10,
    paddingBottom: 20,
  };

  return (
    <Animated.ScrollView
      horizontal
      ref={scrollViewReference}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={animatedScrollViewStyle}
      contentContainerStyle={contentContainerStyle}
      showsHorizontalScrollIndicator
    >
      {data.map((item, index) => {
        return (
          <HorizontalItem
            positionsState={positionsState}
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
