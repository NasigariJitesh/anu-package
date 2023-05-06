/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from 'anu/config';
import { DripsyFinalTheme } from 'dripsy';
import { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { TextInputLabelProps } from '../../types';
import { getTextFieldStyles } from '../../utils';

const DURATION = 200; // in milliseconds
const DELAY = 100; // in milliseconds

const selectLabelColorBasedOnState = (props: TextInputLabelProps, theme: DripsyFinalTheme) => {
  if (props.disabled) return theme.colors.$onSurfaceVariant;

  // if it is focused
  if (props.isFocused) return theme.colors.$primary;

  // if the value is not empty
  if (props.value && props.value?.length > 0) return theme.colors.$primary;

  return theme.colors.$onSurfaceVariant;
};

/**
 * the label of text field input
 *
 * @param props - Text input label props
 */
const TextFieldLabel = (props: TextInputLabelProps) => {
  const theme = useTheme();
  const style = getTextFieldStyles(theme);

  const { colors, fontSizes, lineHeights } = theme;

  const transitionTopCoordinate = useSharedValue(19);
  const transitionLeftCoordinate = useSharedValue(0);

  const transitionFontSize = useSharedValue(style.fontSize);
  const transitionLineHeight = useSharedValue(style.fontSize);
  const transitionLetterSpacing = useSharedValue(style.letterSpacing);

  const textStyles = {
    paddingHorizontal: 2,
    color: props.placeholderTextColor || selectLabelColorBasedOnState(props, theme),
    backgroundColor: props.variant === 'outlined' ? props.backgroundColor ?? colors.$background : undefined,
  };

  const animatedStyle = {
    position: 'absolute' as const,
  };

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      top: transitionTopCoordinate.value,
      left: transitionLeftCoordinate.value,
      paddingHorizontal: 16,
    };
  }, [transitionTopCoordinate, transitionTopCoordinate]);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: transitionFontSize.value,
      lineHeight: transitionLineHeight.value,
      letterSpacing: transitionLetterSpacing.value,
    };
  }, [transitionFontSize, transitionLineHeight, transitionLetterSpacing]);

  useEffect(() => {
    if (props.isFocused) {
      transitionIn();
    } else {
      transitionOut();
    }
  }, [props]);

  /**
   * When the component is in focus, this transition is supposed to be triggered
   */
  const transitionIn = () => {
    setTimeout(() => {
      transitionTopCoordinate.value = withTiming(props.variant === 'outlined' ? -9 : 4, {
        duration: DURATION,
      });
      transitionLeftCoordinate.value = withTiming(
        props.leadingIcon && props.variant === 'outlined' ? -props.height * 0.5 : 0,
        { duration: DURATION },
      );

      transitionLineHeight.value = withTiming(lineHeights[9], { duration: DURATION });
      transitionFontSize.value = withTiming(fontSizes[9], { duration: DURATION });
      transitionLetterSpacing.value = withTiming(0.4, { duration: DURATION });
    }, DELAY);
  };

  /**
   * When the component get's out of focus, this transition is supposed to be triggered
   */
  const transitionOut = () => {
    if (props.value && props.value?.length > 0) return;

    setTimeout(() => {
      transitionTopCoordinate.value = withTiming(19, { duration: DURATION });
      transitionLeftCoordinate.value = withTiming(0, { duration: DURATION });

      transitionLineHeight.value = withTiming(16, { duration: DURATION });
      transitionFontSize.value = withTiming(style.fontSize, { duration: DURATION });
      transitionLetterSpacing.value = withTiming(style.letterSpacing, { duration: DURATION });
    }, DELAY);
  };

  return (
    <Animated.View style={[animatedStyle, animatedViewStyle]}>
      <Animated.Text numberOfLines={1} ellipsizeMode='tail' style={[textStyles, animatedTextStyle]}>
        {props.label}
      </Animated.Text>
    </Animated.View>
  );
};

export default TextFieldLabel;
