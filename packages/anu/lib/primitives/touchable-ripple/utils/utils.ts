import { getColorInRGBA, getCombinedStylesForView } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { GestureResponderEvent, Platform, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';

const touchableEvents = ['onPress', 'onLongPress', 'onPressIn', 'onPressOut'] as const;

type TouchableEventObject = Partial<
  Record<typeof touchableEvents[number], ((event: GestureResponderEvent) => void) | null>
>;

/**
 *
 * @param touchableEventObject
 */
export const hasTouchHandler = (touchableEventObject: TouchableEventObject) => {
  return touchableEvents.some((event) => {
    return Boolean(touchableEventObject[event]);
  });
};

export const getTouchableRippleColors = (theme: DripsyFinalTheme, rippleColor?: string, underlayColor?: string) => {
  const calculatedRippleColor = rippleColor ?? getColorInRGBA(theme.colors.$primary, 12);
  return {
    calculatedRippleColor,
    calculatedUnderlayColor: underlayColor ?? calculatedRippleColor,
  };
};

export const getTouchableRippleStyles = () => {
  const borderlessStyle = {
    overflow: 'hidden',
  } as const;

  const touchableStyle = {
    position: 'relative',
    ...(Platform.OS === 'web' && { cursor: 'pointer' }),
  } as const;

  return { borderlessStyle, touchableStyle };
};

export const getStateStyle = (
  state: PressableStateCallbackType,
  defaultStyle: StyleProp<ViewStyle>,
  style: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>),
  setBackgroundColor: (color: string) => void,
  rippleColor?: string,
) => {
  let combinedStyle: StyleProp<ViewStyle>;
  if (typeof style === 'function') {
    const stateStyle = style(state);
    //@ts-expect-error
    if (rippleColor === undefined && stateStyle?.backgroundColor && stateStyle.backgroundColor !== 'transparent') {
      //@ts-expect-error
      setBackgroundColor(stateStyle?.backgroundColor);
    }
    combinedStyle = getCombinedStylesForView(defaultStyle, stateStyle);
  } else {
    //@ts-expect-error
    if (rippleColor === undefined && style?.backgroundColor && style.backgroundColor !== 'transparent')
      //@ts-expect-error
      setBackgroundColor(style?.backgroundColor);

    combinedStyle = getCombinedStylesForView(defaultStyle, style);
  }
  return combinedStyle;
};
