import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { GestureResponderEvent, Platform } from 'react-native';

const touchableEvents = ['onPress', 'onLongPress', 'onPressIn', 'onPressOut'] as const;

type TouchableEventObject = Partial<Record<(typeof touchableEvents)[number], (event: GestureResponderEvent) => void>>;

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
