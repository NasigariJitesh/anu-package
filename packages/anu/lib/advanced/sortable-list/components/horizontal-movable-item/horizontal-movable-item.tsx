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

import { HorizontalMovableItemProps, ScrollDirectionHorizontal } from '../../types';
import { getMovableItemComponentStyle, setAutoScrollHorizontal, setPositionHorizontal } from '../../utils';

/* eslint-disable jsdoc/require-jsdoc */
export default function HorizontalMovableItem<T>(props: HorizontalMovableItemProps<T>) {
  const {
    id,
    item,
    positions,
    containerWidth,
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
  } = props;

  const [moving, setMoving] = useState(false);
  const [initialPosition, setInitialPosition] = useState(positions.value[id]);
  const positionX = useSharedValue(positions.value[id] * itemWidth);
  const left = useSharedValue(positions.value[id] * itemWidth);
  const upperBound = useDerivedValue(() => lowerBound.value + containerWidth);
  const targetLowerBound = useSharedValue(lowerBound.value);

  const { style, animatedViewStyle } = getMovableItemComponentStyle(itemWidth);

  const theme = useTheme();

  const onSortStartHandler = (from: number) => {
    setInitialPosition(from);
    if (onSortStart) onSortStart(from);
  };

  useAnimatedReaction(
    () => positionX.value,
    (positionXValue, previousValue) => {
      if (positionXValue !== null && previousValue !== null && positionXValue !== previousValue && moving) {
        left.value = positionXValue;
        setPositionHorizontal(positionXValue, itemsCount, positions, id, itemWidth);
        setAutoScrollHorizontal(positionXValue, lowerBound.value, upperBound.value, itemWidth, autoScrollDirection);
      }
    },
  );

  // If another item is moving and changes this ones position, move to new position.
  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== null && previousPosition !== null && currentPosition !== previousPosition && !moving) {
        left.value = withSpring(currentPosition * itemWidth);
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
        positionX.value -= diff;
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
          case ScrollDirectionHorizontal.Left: {
            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(0, { duration: 1500 });
            break;
          }
          case ScrollDirectionHorizontal.Right: {
            const contentWidth = itemsCount * itemWidth;
            const maxScroll = contentWidth - containerWidth;

            targetLowerBound.value = lowerBound.value;
            targetLowerBound.value = withTiming(maxScroll, { duration: 1500 });
            break;
          }
          case ScrollDirectionHorizontal.None: {
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
      positionX.value = positions.value[id] * itemWidth;
      runOnJS(onSortStartHandler)(positions.value[id]);
      runOnJS(setMoving)(true);
      if (Platform.OS === 'ios') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
      }
    },
    onActive(event) {
      positionX.value = event.absoluteX + lowerBound.value - itemWidth;
    },
    onFinish() {
      const finishPosition = positions.value[id] * itemWidth;
      left.value = withTiming(finishPosition);
      if (onSortEnd) runOnJS(onSortEnd)(finishPosition);
      if (onSort) runOnJS(onSort)(initialPosition, finishPosition);
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: left.value,
      zIndex: moving ? 1 : 0,
      shadowColor: theme.colors.$shadow,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  return (
    <Container sx={{ height: itemHeight }}>
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
