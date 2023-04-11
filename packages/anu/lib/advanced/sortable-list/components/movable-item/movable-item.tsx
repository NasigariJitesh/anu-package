import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Platform } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { MovableItemProps, ScrollDirection } from '../../types';
import { getMovableItemComponentStyle, setAutoScroll, setPosition } from '../../utils';

/* eslint-disable jsdoc/require-jsdoc */
export default function MovableItem<T>(props: MovableItemProps<T>) {
  const {
    id,
    item,
    positions,
    containerHeight,
    lowerBound,
    autoScrollDirection,
    itemsCount,
    itemHeight = 80,
    renderItem,
    index,
    onSort,
    onSortEnd,
    onSortStart,
    itemWidth = 200,
    containerWidth,
  } = props;

  const [moving, setMoving] = useState(false);
  const [initialPosition, setInitialPosition] = useState(positions.value[id]);

  const positionY = useSharedValue(positions.value[id] * itemHeight);

  const top = useSharedValue(positions.value[id] * itemHeight);
  const upperBound = useDerivedValue(() => lowerBound.value + containerHeight);
  const targetLowerBound = useSharedValue(lowerBound.value);

  const { style, animatedViewStyle } = getMovableItemComponentStyle(itemHeight, itemWidth);

  const theme = useTheme();

  const onSortStartHandler = (from: number) => {
    setInitialPosition(from);
    if (onSortStart) onSortStart(from);
  };

  useAnimatedReaction(
    () => positionY.value,
    (positionYValue, previousValue) => {
      if (positionYValue !== null && previousValue !== null && positionYValue !== previousValue && moving) {
        top.value = positionYValue;
        setPosition(positionYValue, itemsCount, positions, id, itemHeight);
        setAutoScroll(positionYValue, lowerBound.value, upperBound.value, itemHeight, autoScrollDirection);
      }
    },
  );

  // If another item is moving and changes this ones position, move to new position.
  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== null && previousPosition !== null && currentPosition !== previousPosition && !moving) {
        top.value = withSpring(currentPosition * itemHeight);
      }
    },
    [moving],
  );

  // If moving and scrolling, update position y.
  useAnimatedReaction(
    () => lowerBound.value,
    (currentLowerBound, previousLowerBound) => {
      if (
        currentLowerBound !== null &&
        previousLowerBound !== null &&
        currentLowerBound !== previousLowerBound &&
        moving
      ) {
        const diff = previousLowerBound - currentLowerBound;
        positionY.value -= diff;
      }
    },
    [moving],
  );

  // When the autoScrollDirection changes, set the target lower bound with timing.
  useAnimatedReaction(
    () => autoScrollDirection.value,
    (scrollDirection, previousValue) => {
      if (scrollDirection !== null && previousValue !== null && scrollDirection !== previousValue) {
        switch (scrollDirection) {
          case ScrollDirection.Up: {
            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(0, { duration: 1500 });
            break;
          }
          case ScrollDirection.Down: {
            const contentHeight = itemsCount * itemHeight;
            const maxScroll = contentHeight - containerHeight;

            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(maxScroll, { duration: 1500 });
            break;
          }
          case ScrollDirection.None: {
            targetLowerBound.value = lowerBound.value;
            break;
          }
        }
      }
    },
  );

  // When the target lower bound changes, update the lower bound value.
  useAnimatedReaction(
    () => targetLowerBound.value,
    (targetLowerBoundValue, previousValue) => {
      if (
        targetLowerBoundValue !== null &&
        previousValue !== null &&
        targetLowerBoundValue !== previousValue &&
        moving
      ) {
        lowerBound.value = targetLowerBoundValue;
      }
    },
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      positionY.value = positions.value[id] * itemHeight;
      runOnJS(onSortStartHandler)(positions.value[id]);
      runOnJS(setMoving)(true);
      if (Platform.OS === 'ios') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
      }
    },
    onActive(event) {
      positionY.value = event.absoluteY + lowerBound.value - itemHeight;
    },
    onFinish() {
      const finishPosition = positions.value[id] * itemHeight;
      top.value = withTiming(finishPosition);
      if (onSortEnd) runOnJS(onSortEnd)(positions.value[id]);
      if (onSort) runOnJS(onSort)(initialPosition, positions.value[id]);
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: theme.colors.$shadow,

      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  return (
    <Container width={containerWidth} sx={{ paddingRight: 10 }}>
      <Animated.View style={animatedStyle}>
        <BlurView intensity={moving ? 100 : 0} tint='light'>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={animatedViewStyle}>
              <Container disableGutters style={style}>
                {renderItem(item, index)}
              </Container>
            </Animated.View>
          </PanGestureHandler>
        </BlurView>
      </Animated.View>
    </Container>
  );
}
