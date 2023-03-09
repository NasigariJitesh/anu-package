/* eslint-disable react/display-name */
import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { BottomSheetProps, BottomSheetReferenceProps } from '../../types';
import { getBottomSheetStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component to create a bottom sheet
 *
 * @param {BottomSheetProps} props - all the props related to the component
 * @example
 *  const bottomSheetReference = useRef<BottomSheetReferenceProps | null>(null);
 *
 *   const onPress = useCallback(() => {
 *     const isActive = bottomSheetReference?.current?.isActive();
 *
 *     if (isActive) bottomSheetReference?.current?.scrollTo(0);
 *    else bottomSheetReference?.current?.scrollTo(-200);
 *    }, []);
 *
 *    return (
 *      <View style={style.container}>
 *        <StatusBar style='light' />
 *          <TouchableOpacity onPress={onPress} style={style.button} />
 *          <BottomSheet ref={bottomSheetReference}>
 *            <Children/>
 *          </BottomSheet>
 *      </View>
 *    );
 */
const BottomSheet = forwardRef<BottomSheetReferenceProps, BottomSheetProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const { damping, hideDragHandle = false, children, startCoordinate } = finalProps;

  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const height = finalProps.height || SCREEN_HEIGHT;
  const maxTranslateY = -height + startCoordinate;

  const translateY = useSharedValue(0);
  const isBottomSheetActive = useSharedValue(false);
  const context = useSharedValue({ y: 0 });

  const styles = getBottomSheetStyles({ ...finalProps, height });

  const borderRadiusMax = styles.container.borderRadius as number;

  /**
   * this is a hook to create smooth scroll
   */
  const scrollTo = useCallback(
    (destination: number) => {
      'worklet';

      isBottomSheetActive.value = destination !== 0;

      translateY.value = withSpring(destination, { damping });
    },
    [isBottomSheetActive, translateY, damping],
  );

  /**
   * Check if the bottom sheet is open or not
   */
  const isActive = useCallback(() => {
    return isBottomSheetActive.value;
  }, [isBottomSheetActive]);

  /**
   * Create ref for the component so it can be used inside a useRef hook
   */
  useImperativeHandle(reference, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const newTranslationYValue = event.translationY + context.value.y;

      translateY.value = Math.max(newTranslationYValue, maxTranslateY);
    })
    .onEnd(() => {
      console.log(translateY.value - maxTranslateY);

      if (translateY.value > maxTranslateY / 1.5) scrollTo(0);
      else scrollTo(maxTranslateY);
    });

  // This will generate style with smooth animation based on the position
  const rnBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [maxTranslateY + 50, maxTranslateY],
      [borderRadiusMax, 5],
      Extrapolate.CLAMP,
    );

    return { borderRadius, transform: [{ translateY: translateY.value }] };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rnBottomSheetStyle]}>
        {hideDragHandle ? null : <View style={styles.dragHandle} />}
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
