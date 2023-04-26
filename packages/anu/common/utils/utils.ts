/* eslint-disable react-hooks/rules-of-hooks */
import { ExtendedHoverStyles } from 'common/types';
import { useSx as SxType } from 'dripsy';
import { ImageStyle, PressableStateCallbackType, StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * To convert the maxWidth into pixels
 *
 * @param {string | number} maxWidth - The maximum width passed as property value to the component
 * @returns maxWidth of the component in pixels
 */
export const getMaxWidthInPixels = (maxWidth: string | number) => {
  switch (maxWidth) {
    case 'xs':
    case 'sm': {
      return ['100%', '540px', '720px', '960px', '1140px'];
    }
    case 'md': {
      return ['100%', '100%', '720px', '960px', '1140px'];
    }
    case 'lg': {
      return ['100%', '100%', '100%', '960px', '1140px'];
    }
    case 'xl': {
      return ['100%', '100%', '100%', '100%', '1140px'];
    }
    default: {
      return maxWidth;
    }
  }
};

/**
 * Generate styles based on the states (hover, pressed, focused)
 *
 * @param {PressableStateCallbackType} states - States from the Pressable component
 * @param {ExtendedHoverStyles} styles - Component styles including hover, pressed, and focused styles
 * @param {typeof SxType} useSx - useSx hook from dripsy
 * @returns - Dripsy styles
 */
export const generateHoverStyles = (
  states: PressableStateCallbackType,
  styles: ExtendedHoverStyles,
  useSx: typeof SxType,
) => {
  const { hovered, pressed } = states;

  const sx = useSx();

  let style = styles;

  // Generate styles based on the state of the element
  if (hovered) style = { ...style, ...styles['@hover'] };
  if (pressed) style = { ...style, ...styles['@press'] };
  // if (focused) style = { ...style, ...styles['@focus'] };

  return sx(style);
};

/**
 * Converts Hex code with defined opacity into its RGB equivalent
 *
 * @param color - color string in hex code format
 * @param opacity - opacity that is needed on the hex code
 * @returns RGBA string
 */
export const getColorInRGBA = (color: string, opacity: number) => {
  const opacityValue = Math.floor((opacity * 255) / 100);
  return opacityValue >= 16 ? color + opacityValue.toString(16) : color + '0' + opacityValue.toString(16);
};

export const getHoverStates = (state: PressableStateCallbackType) => {
  const { hovered, pressed, focused } = state;
  if (hovered) return '@hover';
  if (pressed) return '@press';
  if (focused) return '@focus';
};

/**
 * Merge all the styles based on the type, if its an array of styles or object
 *
 * @param defaultStyle
 * @param customStyles
 * @returns Combined Styles
 */
export const getCombinedStylesForText = (defaultStyle: StyleProp<TextStyle>, customStyles: StyleProp<TextStyle>) => {
  return Array.isArray(customStyles) ? [defaultStyle, ...customStyles] : [defaultStyle, customStyles];
};

/**
 * Merge all the styles based on the type, if its an array of styles or object
 *
 * @param defaultStyle
 * @param customStyles
 * @returns Combined Styles
 */
export const getCombinedStylesForView = (defaultStyle: StyleProp<ViewStyle>, customStyles: StyleProp<ViewStyle>) => {
  return Array.isArray(customStyles) ? [defaultStyle, ...customStyles] : [defaultStyle, customStyles];
};

/**
 * Merge all the styles based on the type, if its an array of styles or object
 *
 * @param defaultStyle
 * @param customStyles
 * @returns Combined Styles
 */
export const getCombinedStylesForImage = (defaultStyle: StyleProp<ImageStyle>, customStyles: StyleProp<ImageStyle>) => {
  return Array.isArray(customStyles) ? [defaultStyle, ...customStyles] : [defaultStyle, customStyles];
};
