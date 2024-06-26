/* eslint-disable react/display-name */
import { useTheme } from 'anu/config';
import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { SafeAreaView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { AnimationCallback, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { SideSheetProps, SideSheetReferenceProps } from '../../types';
import { getSideSheetStyles } from '../../utils';
import { defaultProps } from './default';
import Header from './header';

/**
 * Component to create a side sheet
 *
 * @param {SideSheetProps} props - all the props related to the component
 *
 * This requires
 * @example TODO:
 *  const sideSheetReference = useRef<SideSheetReferenceProps | null>(null);
 *
 *  const onPress = useCallback(() => {
 *
 * const isActive = sideSheetReference?.current?.isActive();
 *    if (isActive) sideSheetReference?.current?.scrollTo(0);
 *    else sideSheetReference?.current?.scrollTo(); // open drawer
 *  }, []);
 *
 * return (
 *  <>
 *    <View style={style.container}>
 *      <StatusBar style='light' />
 *      <TouchableOpacity onPress={onPress} style={style.button} />
 *      <SideSheet ref={sideSheetReference} />
 *    </View>
 *  </>
 * );
 */
const SideSheet = forwardRef<SideSheetReferenceProps, SideSheetProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const { damping, children, align } = finalProps;

  const width = finalProps.width;
  const startCoordinate =
    align === 'right' ? finalProps.width + finalProps.startCoordinate : finalProps.startCoordinate - finalProps.width;
  const maxTranslateX = finalProps.width + align === 'right' ? -startCoordinate : -startCoordinate;

  const translateX = useSharedValue(0);
  const isSideSheetActive = useSharedValue(false);
  const context = useSharedValue({ x: startCoordinate }); // same as start coordinate

  const theme = useTheme();

  const styles = getSideSheetStyles({ ...finalProps, width, startCoordinate }, theme);

  /**
   * this is a hook to create smooth scroll
   */
  const scrollTo = useCallback(
    (destination: number, callback?: AnimationCallback | undefined) => {
      'worklet';

      isSideSheetActive.value =
        align === 'right' ? destination < startCoordinate - width : destination > startCoordinate + width;

      const scrollValue = destination;

      translateX.value = withSpring(scrollValue, { damping }, callback);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSideSheetActive, align, startCoordinate, width, damping],
  );

  /**
   * Check if the side sheet is open or not
   */
  const isActive = useCallback(() => {
    return isSideSheetActive.value;
  }, [isSideSheetActive]);

  /**
   * Create ref for the component so it can be used inside a useRef hook
   */
  useImperativeHandle(reference, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value };
    })
    .onUpdate((event) => {
      const newTranslationXValue = event.translationX + context.value.x;

      const scrollValue =
        align === 'right'
          ? Math.max(newTranslationXValue, -startCoordinate)
          : Math.min(newTranslationXValue, -startCoordinate);

      if (scrollValue >= 0 && align === 'right') {
        translateX.value = Math.min(scrollValue, 0);
        return;
      }

      // if(scrollValue)
      translateX.value = scrollValue;
    })
    .onEnd(() => {
      if (align === 'right') {
        if (translateX.value * -1 > maxTranslateX / 3) scrollTo(0);
        else scrollTo(maxTranslateX);
      } else {
        if (translateX.value > maxTranslateX / 3) scrollTo(maxTranslateX);
        else scrollTo(0);
      }
    });

  // This will generate style with smooth animation based on the position
  const rnSideSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: translateX.value }] };
  }, [translateX]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rnSideSheetStyle]}>
        <SafeAreaView>
          <Header {...finalProps} scrollTo={scrollTo} />
          {children}
        </SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
});

export default SideSheet;
