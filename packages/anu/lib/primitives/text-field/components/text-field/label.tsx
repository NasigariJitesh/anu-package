/* eslint-disable react-hooks/exhaustive-deps */
import { getColorInRGBA } from 'anu/common/utils';
import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { DripsyFinalTheme } from 'dripsy';
import { useEffect } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Container } from '../../../layout';
import { LabelStyle, TextInputLabelProps } from '../../types';
import { getError, getTextStyles } from '../../utils';

const DURATION = 200; // in milliseconds
const DELAY = 100; // in milliseconds

const selectLabelColorBasedOnState = (props: TextInputLabelProps, theme: DripsyFinalTheme) => {
  if (props.disabled) return props.color ?? getColorInRGBA(theme.colors.$onSurface, 38);

  if (getError(props.error)) return theme.colors.$error;

  // if it is focused
  if (props.states?.focused || props.states?.pressed) return theme.colors.$primary;

  return theme.colors.$onSurfaceVariant;
};

const selectLabelBackgroundColor = (props: TextInputLabelProps, theme: DripsyFinalTheme) => {
  if (!props.isFocused && !props.value) return;

  if (props.backgroundColor) return props.backgroundColor as string;

  if (props.variant === 'outlined') return theme.colors.$surface;

  return theme.colors.$surfaceVariant;
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

  const customTextStyle = StyleSheet.flatten(props.textStyle);
  const customLabelStyle = StyleSheet.flatten(props.labelStyle);

  const textStyles = {
    paddingHorizontal: 4,
    maxWidth: '100%',
    color: props.placeholderTextColor || (selectLabelColorBasedOnState(props, theme) as string),
    overflow: 'visible' as const,
    //reason- it is getting overridden when active even after passing along with custom styles,
    fontFamily: customLabelStyle?.fontFamily,
    height: 16,
  };

  const animatedStyle = {
    position: 'absolute' as const,
    zIndex: 10,
    flex: 1,
    width: '100%',
    overflow: 'visible' as const,
    paddingHorizontal: props.isFocused || props.value ? 16 : customTextStyle?.paddingHorizontal ?? 16,
    ...(props.variant === 'outlined' && (props.isFocused || props.value) ? { height: 1 } : {}),
  };

  const containerStyle = {
    backgroundColor: selectLabelBackgroundColor(props, theme),
    ...(props.variant === 'filled' ? { flex: 1 } : {}),
    ...(props.variant === 'outlined' && (props.isFocused || props.value)
      ? ({ height: 1, justifyContent: 'center', overflow: 'visible' } as const)
      : {}),
  };

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      top: transitionTopCoordinate.value,
      left: transitionLeftCoordinate.value,
      flexDirection: 'row',
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

    if (props.leadingIconWidth > 0 && props.variant === 'outlined') {
      transitionLeftCoordinate.value = 0 - props.leadingIconWidth;
    }
  }, [props]);

  /**
   * When the component is in focus, this transition is supposed to be triggered
   */
  const transitionIn = () => {
    setTimeout(() => {
      transitionTopCoordinate.value = withTiming(props.variant === 'outlined' ? -1 : 4, {
        duration: DURATION,
      });
      transitionLeftCoordinate.value = withTiming(props.variant === 'outlined' ? 0 - props.leadingIconWidth : 0, {
        duration: DURATION,
      });

      transitionLineHeight.value = withTiming(lineHeights[9] ?? 16, {
        duration: DURATION,
      });
      transitionFontSize.value = withTiming(fontSizes[9] ?? 12, {
        duration: DURATION,
      });
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
      transitionFontSize.value = withTiming(style.fontSize as number, {
        duration: DURATION,
      });
      transitionLetterSpacing.value = withTiming(style.letterSpacing as number, { duration: DURATION });
    }, DELAY);
  };

  return (
    <Animated.View style={[animatedStyle, animatedViewStyle]}>
      <Container disableGutters style={containerStyle}>
        <Animated.Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={getExtendedLabelStyles(props.isFocused, textStyles, animatedTextStyle, props.value, props.labelStyle)}
        >
          {props.label}
        </Animated.Text>
      </Container>
    </Animated.View>
  );
};

export default TextFieldLabel;
