import { ContainerJustify } from 'anu/lib/primitives/layout/types';
import { DripsyFinalTheme } from 'dripsy';
import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { DividerProps } from '../types';
import { DividerAlign, DividerPattern } from './../types/divider';

/**
 * To generate the divider styling props
 *
 *  @param {Partial<DividerProps>} props - The properties of the divider component
 *  @param {DripsyFinalTheme} theme - dripsy theme
 *  @returns style properties for the divider component
 */
export const getDividerStyle = (props: Partial<DividerProps>, theme: DripsyFinalTheme) => {
  const { variant, orientation } = props;
  // eslint-disable-next-line prefer-const
  let { style, containerStyle } = getDividerCommonStyles(props, theme);
  switch (variant) {
    case 'full-width': {
      return {
        containerStyle: { ...containerStyle, padding: 0 },
        style,
      };
    }
    case 'full-height': {
      return {
        containerStyle: { ...containerStyle, padding: 0 },
        style,
      };
    }
    case 'middle': {
      if (orientation === 'vertical') containerStyle = { ...containerStyle, paddingVertical: 16 };
      else if (orientation === 'horizontal') containerStyle = { ...containerStyle, paddingHorizontal: 16 };

      return {
        containerStyle,
        style,
      };
    }
    case 'bottom-inset': {
      return {
        containerStyle: { ...containerStyle, paddingBottom: 16 },
        style,
      };
    }
    case 'top-inset': {
      return {
        containerStyle: { ...containerStyle, paddingTop: 16 },
        style,
      };
    }
    case 'left-inset': {
      return {
        containerStyle: { ...containerStyle, paddingLeft: 16 },
        style,
      };
    }
    case 'right-inset': {
      return {
        containerStyle: { ...containerStyle, paddingRight: 16 },
        style,
      };
    }
    default: {
      if (orientation === 'vertical') containerStyle = { ...containerStyle, paddingVertical: 16 };
      else if (orientation === 'horizontal') containerStyle = { ...containerStyle, paddingHorizontal: 16 };

      return {
        containerStyle,
        style,
      };
    }
  }
};

/**
 * To generate the common styling props of divider
 *
 *  @param {Partial<DividerProps>} props - The properties of the divider component
 *  @param {DripsyFinalTheme} theme - dripsy theme
 *  @returns common style properties for the divider component
 */
const getDividerCommonStyles = (props: Partial<DividerProps>, theme: DripsyFinalTheme) => {
  const { orientation, align, pattern, thickness, style: propStyle } = props;

  const { height, width } = StyleSheet.flatten(propStyle ?? {});

  const borderWidth = thickness ?? 1;

  const style: StyleProp<ViewStyle> = {
    flex: 1,
    overflow: 'visible',
    alignItems: 'center' as const,
    justifyContent: getAlignment(align),
  };

  const containerStyle: StyleProp<ViewStyle> = { overflow: 'visible', position: 'relative' };

  switch (orientation) {
    case 'vertical': {
      return {
        containerStyle: {
          ...containerStyle,

          flexDirection: 'column' as const,
          ...(height
            ? { height }
            : { ...(Platform.OS === 'web' ? { alignSelf: 'stretch' as const } : { height: '100%' }) }),
        },
        style: {
          ...style,
          width: 0,
          marginHorizontal: 8,
          flexDirection: 'column' as const,
          borderLeftWidth: borderWidth,
          borderLeftColor: getColor(props, theme),
          borderStyle: getBorderStyle(pattern),
        },
      };
    }
    case 'horizontal': {
      return {
        containerStyle: {
          ...containerStyle,
          flexDirection: 'row' as const,
          ...(width ? { width } : { width: '100%' }),
        },
        style: {
          ...style,
          height: 1,
          flexDirection: 'row' as const,
          marginVertical: 16,
          borderTopWidth: borderWidth,
          borderTopColor: getColor(props, theme),
          borderStyle: getBorderStyle(pattern),
        },
      };
    }
    default: {
      return {
        containerStyle: {
          ...containerStyle,
          flexDirection: 'row' as const,
          ...(width ? { width } : { width: '100%' }),
        },
        style: {
          ...style,
          height: 1,
          flexDirection: 'row' as const,
          marginVertical: 16,
          borderTopWidth: borderWidth,
          borderTopColor: getColor(props, theme),
          borderStyle: getBorderStyle(pattern),
        },
      };
    }
  }
};

/**
 * To generate the divider text alignment
 *
 *  @param {DividerAlign} align - The text align property of the divider component
 *  @returns text alignment for the divider
 */
const getAlignment = (align?: DividerAlign) => {
  switch (align) {
    case 'start': {
      return 'flex-start' as ContainerJustify;
    }
    case 'end': {
      return 'flex-end' as ContainerJustify;
    }
    default: {
      return 'center' as ContainerJustify;
    }
  }
};

/**
 * To generate the divider pattern
 *
 *  @param {DividerPattern} pattern - The divider pattern property of the divider component
 *  @returns pattern for the divider
 */
const getBorderStyle = (pattern?: DividerPattern) => {
  switch (pattern) {
    case 'line': {
      return 'solid' as const;
    }
    case 'dotted': {
      return 'dotted' as const;
    }
    case 'dashed': {
      return 'dashed' as const;
    }
    default: {
      return 'solid' as const;
    }
  }
};

/**
 * To generate the color of the divider
 *
 *  @param {Partial<DividerProps>} props - The properties of the divider component
 *  @param {DripsyFinalTheme} theme - dripsy theme
 *  @returns color of the divider
 */
const getColor = (props: Partial<DividerProps>, theme: DripsyFinalTheme) => {
  const { colors } = theme;

  const { color: propsColor } = props;
  const color = propsColor ?? (colors?.$outlineVariant as string);
  return color;
};

/**
 * Default text style
 *
 *  @param {DripsyFinalTheme} theme - dripsy theme
 */
export const defaultTextStyle = (theme: DripsyFinalTheme) =>
  ({
    backgroundColor: theme.colors?.$background as never,
    paddingHorizontal: 4,
    color: theme.colors?.$onBackground as never,
    textAlignVertical: 'center',
  } as const);

export const childrenContainerStyle = (theme: DripsyFinalTheme) => {
  return { paddingHorizontal: 4, backgroundColor: theme.colors.$background };
};

export const getInnerContainerStyle = () => {
  return { position: 'absolute' as const };
};
