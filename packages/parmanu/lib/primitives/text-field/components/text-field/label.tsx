/* eslint-disable react-hooks/exhaustive-deps */
import { getTheme } from 'config/dripsy';
import { useEffect, useRef, useState } from 'react';
import { Animated, TextStyle, ViewStyle } from 'react-native';

import { TextInputLabelProps } from '../../types';
import { getTextFieldStyles } from '../../utils';

const DURATION = 400; // in milliseconds
const DELAY = 100; // in milliseconds

/**
 * the label of text field input
 *
 * @param props - Text input label props
 */
const TextFieldLabel = (props: TextInputLabelProps) => {
  const style = getTextFieldStyles();
  const { colors } = getTheme();

  const transitionTopCoordinate = useRef(new Animated.Value(0)).current;
  const transitionFontSize = useRef(new Animated.Value(style.fontSize)).current;
  const transitionLineHeight = useRef(new Animated.Value(style.fontSize)).current;

  const [value, setValue] = useState(0);

  const animatedViewStyle: Animated.WithAnimatedObject<ViewStyle> = {
    top: transitionTopCoordinate,
    maxWidth: 'calc(100% - 16px)',
    position: 'absolute',
  };

  const animatedTextStyle: Animated.WithAnimatedObject<TextStyle> = {
    fontSize: transitionFontSize,
    lineHeight: transitionLineHeight,
    marginHorizontal: 14,
    padding: 2,
    paddingRight: 4,
    color: props.placeholderTextColor || (value ? colors.$primary : colors.$onSurfaceVariant),
    backgroundColor: props.variant === 'outlined' ? colors.$background : undefined,
  };

  useEffect(() => {
    transitionTopCoordinate.addListener((arguments_) => setValue(arguments_.value));
  }, []);

  useEffect(() => {
    if (props.states?.focused || props.states?.pressed) {
      transitionIn();
    } else if (!(props.states?.focused && props.states?.pressed)) {
      transitionOut();
    }
  }, [props.states]);

  /**
   * When the component is in focus, this transition is supposed to be triggered
   */
  const transitionIn = () => {
    if (props.value) return;

    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(transitionTopCoordinate, {
      toValue:
        (props.height / 2) * -1 +
        (props.variant === 'outlined'
          ? Math.floor((style.fontSize * 0.75) / -4)
          : Math.floor((style.fontSize * 0.75) / 1.5)),
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionLineHeight, {
      toValue: style.lineHeight,
      duration: 500,
      useNativeDriver: true,
      delay: DELAY,
    }).start();

    Animated.timing(transitionFontSize, {
      toValue: style.fontSize * 0.75,
      duration: 500,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  /**
   * When the component get's out of focus, this transition is supposed to be triggered
   */
  const transitionOut = () => {
    if (props.value) return;

    Animated.timing(transitionTopCoordinate, {
      toValue: 0,
      duration: DURATION,
      delay: DELAY,
      useNativeDriver: true,
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
  };

  const onLabelPressedHandler = () => {
    props.textInputRef.current?.focus();
  };

  return (
    <Animated.View style={animatedViewStyle}>
      <Animated.Text onPress={onLabelPressedHandler} numberOfLines={1} ellipsizeMode='tail' style={animatedTextStyle}>
        {props.placeholder}
      </Animated.Text>
    </Animated.View>
  );
};

export default TextFieldLabel;
