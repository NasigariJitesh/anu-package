import { DripsyFinalTheme, Sx, SxProp } from 'dripsy';
import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { BadgeProps, NumberBadgeProps } from '../types';

/**
 * To check whether the badge is Numeric badge or string badge
 *
 * @param {BadgeProps} props - the badge properties
 * @returns {boolean} - true if the badge is numeric badge, false otherwise
 */
export const isNumberBadge = (props: BadgeProps): props is NumberBadgeProps => {
  return typeof props.value === 'number';
};

/**
 * To generate styles for the outer wrapper/ container of  the badge
 *
 * @param {BadgeProps} props - the  properties of the badge component
 * @returns {StyleProp<ViewStyle>} styles for the outer wrapper/ container of  the badge
 */
export const getContainerStyle = (props: BadgeProps) => {
  const { overlap } = props;

  let style: StyleProp<ViewStyle> = { position: 'relative', padding: 10 };

  switch (overlap) {
    case 'rectangular': {
      style = { ...style, borderRadius: 5 };
      break;
    }
    case 'circular': {
      style = { ...style, borderRadius: 100 };
      break;
    }
    default: {
      style = { ...style, borderRadius: 5 };
    }
  }

  return style;
};

/**
 * To check if the badge is to be shown
 *
 * @param {BadgeProps}props - the  properties of the badge component
 * @returns {boolean} true when badge has to be shown and otherwise
 */
export const showBadge = (props: BadgeProps): boolean => {
  return isNumberBadge(props) ? props.value > 0 || (props.showZero ?? false) : true;
};

/**
 * To generate string to be shown inside the badge
 *
 * @param {BadgeProps}props - the  properties of the badge component
 * @returns {string} the value to display in the badge
 */
export const getBadgeValue = (props: BadgeProps): string => {
  if (isNumberBadge(props))
    return props.maxValue && props.maxValue < props.value ? props.maxValue.toString() + '+' : props.value.toString();
  else return props.value;
};

/**
 * To generate styles for  the badge
 *
 * @param {BadgeProps} props - the  properties of the badge component
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns {{style: StyleProp<ViewStyle>, sx: SxProp}} styles for the badge
 */
export const getBadgeStyle = (props: BadgeProps, theme: DripsyFinalTheme) => {
  const { position, overlap } = props;

  const { colors } = theme;

  let style: StyleProp<ViewStyle> = {
    minWidth: 6,
    minHeight: 6,
    borderRadius: 100,
    marginVertical: 0,
    position: 'absolute',
    backgroundColor: colors.$secondary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  };

  if (getBadgeValue(props) !== '') style = { ...style, minHeight: 16, minWidth: 16 };

  const sx: SxProp = { color: colors.$background, fontSize: 11, lineHeight: 14 };

  let offset;

  if (Platform.OS === 'web') offset = overlap === 'rectangular' ? 'calc(100% - 10px)' : '70%';
  else offset = '10%';

  switch (position) {
    case 'topLeft': {
      return {
        style: { ...style, top: 2, right: offset },
        sx: sx,
      };
    }
    case 'topRight': {
      return {
        style: { ...style, top: 2, left: offset },
        sx: sx,
      };
    }
    case 'bottomRight': {
      return {
        style: { ...style, bottom: 2, left: offset },
        sx: sx,
      };
    }
    case 'bottomLeft': {
      return {
        style: { ...style, bottom: 2, right: offset },
        sx: sx,
      };
    }
    default: {
      return {
        style: { ...style, top: 2, left: offset },
        sx: sx,
      };
    }
  }
};

/**
 * To generate styles for  the badge content
 *
 * @param {BadgeProps}props - the  properties of the badge component
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns {{style: StyleProp<ViewStyle>, sx: SxProp}} styles for the badge content
 */
export const getContentStyle = (props: BadgeProps, theme: DripsyFinalTheme) => {
  const propSx = props.sx as Sx;

  const { colors } = theme;

  const style: StyleProp<TextStyle> = {
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    marginVertical: 0,
    paddingVertical: props.value === '' ? 0 : 2,
    paddingHorizontal: props.value === '' ? 0 : 6,
    color: propSx?.color ? (propSx?.color as string) : colors.$background,
    zIndex: propSx?.zIndex ? (propSx?.zIndex as number) : 101,
    //@ts-expect-error Reason the cursor property is accommodated by the web
    cursor: 'default',
  };

  return style;
};
