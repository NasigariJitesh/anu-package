/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from 'config/dripsy';
import { useEffect, useRef, useState } from 'react';
import { Animated, TextStyle, ViewStyle } from 'react-native';

import { TextInputLabelProps } from '../../types';
import { getTextFieldStyles } from '../../utils';

const DURATION = 200; // in milliseconds
const DELAY = 100; // in milliseconds

/**
 * the label of text field input
 *
 * @param props - Text input label props
 */
const TextFieldLabel = (props: TextInputLabelProps) => {
  const theme = useTheme();
  const style = getTextFieldStyles(theme);

  const { colors, fontSizes, lineHeights } = theme;

  const transitionTopCoordinate = useRef(new Animated.Value(0)).current;
  const transitionLeftCoordinate = useRef(new Animated.Value(0)).current;

  const transitionFontSize = useRef(new Animated.Value(style.fontSize)).current;
  const transitionLineHeight = useRef(new Animated.Value(style.fontSize)).current;
  const transitionLetterSpacing = useRef(new Animated.Value(style.letterSpacing)).current;

  const [, setValue] = useState(0);

  const animatedViewStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ translateY: transitionTopCoordinate }],
    left: transitionLeftCoordinate,
    position: props.isFocused || props.value ? 'absolute' : 'relative',
    paddingHorizontal: 16,
  };

  const animatedTextStyle: Animated.WithAnimatedObject<TextStyle> = {
    fontSize: transitionFontSize,
    lineHeight: transitionLineHeight,
    letterSpacing: transitionLetterSpacing,
    paddingHorizontal: 2,
    color:
      props.placeholderTextColor ||
      (props.isFocused || props.value || props.disabled ? 'inherit' : colors.$onSurfaceVariant),
    backgroundColor: props.variant === 'outlined' ? props.backgroundColor ?? colors.$background : undefined,
  };

  useEffect(() => {
    transitionTopCoordinate.addListener((arguments_) => setValue(arguments_.value));
    if (props.value?.length && props.value?.length > 0) transitionIn();

    return () => {
      transitionTopCoordinate.removeAllListeners();
    };
  }, []);

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
    Animated.timing(transitionTopCoordinate, {
      toValue: props.variant === 'outlined' ? -props.height / 2 : -props.height / 4,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionLeftCoordinate, {
      toValue: props.leadingIcon && props.variant === 'outlined' ? -props.height * 0.5 : 0,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionLineHeight, {
      toValue: lineHeights[9],
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionFontSize, {
      toValue: fontSizes[9],
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionLetterSpacing, {
      toValue: 0.4,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  /**
   * When the component get's out of focus, this transition is supposed to be triggered
   */
  const transitionOut = () => {
    if (props.value && props.value?.length > 0) return;

    Animated.timing(transitionTopCoordinate, {
      toValue: 0,
      duration: DURATION,
      delay: DELAY,
      useNativeDriver: true,
    }).start();

    Animated.timing(transitionLeftCoordinate, {
      toValue: 0,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionLineHeight, {
      toValue: 16,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionFontSize, {
      toValue: style.fontSize,
      duration: DURATION,
      delay: DELAY,
      useNativeDriver: true,
    }).start();

    Animated.timing(transitionLetterSpacing, {
      toValue: style.letterSpacing,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  return (
    <Animated.View style={animatedViewStyle}>
      <Animated.Text numberOfLines={1} ellipsizeMode='tail' style={animatedTextStyle}>
        {props.label}
      </Animated.Text>
    </Animated.View>
  );
};

export default TextFieldLabel;
