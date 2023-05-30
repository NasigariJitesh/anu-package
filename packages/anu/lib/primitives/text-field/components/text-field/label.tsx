/* eslint-disable react-hooks/exhaustive-deps */
import { getColorInRGBA } from 'anu/common/utils';
import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { DripsyFinalTheme } from 'dripsy';
import { useEffect } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { LabelStyle, TextInputLabelProps } from '../../types';
import { getError, getTextStyles } from '../../utils';

const DURATION = 200; // in milliseconds
const DELAY = 100; // in milliseconds

const selectLabelColorBasedOnState = (props: TextInputLabelProps, theme: DripsyFinalTheme) => {
  if (props.disabled) return getColorInRGBA(theme.colors.$onSurface, 38);

  if (getError(props.error)) return theme.colors.$error;

  // if it is focused
  if (props.states?.focused || props.states?.pressed) return theme.colors.$primary;

  return theme.colors.$onSurfaceVariant;
};

const selectLabelBackgroundColor = (props: TextInputLabelProps, theme: DripsyFinalTheme) => {
  if (!props.isFocused && !props.value) return;

  if (props.backgroundColor) return props.backgroundColor;

  if (props.variant === 'outlined') return theme.colors.$surface;

  if (!props.disabled) return theme.colors.$surfaceVariant;
};

const getExtendedLabelStyles = (
  isFocused: boolean,
  defaultStyle: StyleProp<TextStyle>,
  animatedStyle: StyleProp<TextStyle>,
  value?: string,
  labelStyle?: LabelStyle,
) => {
  const { '@active': activeStyles, ...commonStyles } = labelStyle ?? {};

  return isFocused || value
    ? [getCombinedStylesForText(defaultStyle, activeStyles), animatedStyle]
    : [getCombinedStylesForText(defaultStyle, commonStyles), animatedStyle];
};

/**
 * the label of text field input
 *
 * @param props - Text input label props
 */
const TextFieldLabel = (props: TextInputLabelProps) => {
  const theme = useTheme();
  const style = getTextStyles(theme);

  const { fontSizes, lineHeights } = theme;

  const transitionTopCoordinate = useSharedValue(19);
  const transitionLeftCoordinate = useSharedValue(0);

  const transitionFontSize = useSharedValue(style.fontSize as number);
  const transitionLineHeight = useSharedValue(style.fontSize as number);
  const transitionLetterSpacing = useSharedValue(style.letterSpacing as number);

  const textStyles = {
    paddingHorizontal: 2,
    flex: 1,
    color: props.placeholderTextColor || selectLabelColorBasedOnState(props, theme),
  };

  const animatedStyle = {
    position: 'absolute' as const,
    zIndex: 10,
    backgroundColor: selectLabelBackgroundColor(props, theme),
    width: props.variant === 'outlined' ? undefined : '90%',
    maxWidth: '100%',
  };

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      top: transitionTopCoordinate.value,
      left: transitionLeftCoordinate.value,
      marginHorizontal: 16,
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
    if (props.isFocused) transitionIn();
    else transitionOut();

    if (props.value) transitionIn();
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
      <Animated.Text
        numberOfLines={1}
        ellipsizeMode='tail'
        style={getExtendedLabelStyles(props.isFocused, textStyles, animatedTextStyle, props.value, props.labelStyle)}
      >
        {props.label}
      </Animated.Text>
    </Animated.View>
  );
};

export default TextFieldLabel;
