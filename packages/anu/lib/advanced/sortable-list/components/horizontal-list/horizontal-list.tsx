import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { HorizontalListProps, ScrollDirectionHorizontal } from '../../types';
import { listToObject } from '../../utils';
import HorizontalMovableItem from '../horizontal-movable-item';

/**
 *
 * @param props
 */
export default function HorizontalList<T>(props: HorizontalListProps<T>) {
  const { data, itemHeight = 60, itemWidth = 200, renderItem, onSort, onSortEnd, onSortStart, containerWidth } = props;
  const positions = useSharedValue(listToObject(data));
  const scrollX = useSharedValue(0);
  const autoScroll = useSharedValue(ScrollDirectionHorizontal.None);
  const scrollViewReference = useAnimatedRef<Animated.ScrollView>();

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
    backgroundColor: 'white',
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
        return (
          <HorizontalMovableItem
            index={index}
            key={item.id}
            id={item.id}
            positions={positions}
            lowerBound={scrollX}
            autoScrollDirection={autoScroll}
            itemsCount={data.length}
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
  );
}
