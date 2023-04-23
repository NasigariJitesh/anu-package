import { DripsyFinalTheme, SxProp } from 'dripsy';
import { ContainerJustify } from 'lib/primitives/layout/types';
import { StyleProp, ViewStyle } from 'react-native';

import { DividerProps } from '../types';
import { getColorInRGBA } from './../../../../common/utils/utils';
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
  let { style, sx } = getDividerCommonStyles(props, theme);
  switch (variant) {
    case 'full-width': {
      return {
        style: { ...style, width: '100%' },
        sx: sx,
      };
    }
    case 'full-height': {
      return {
        style: { ...style, margin: 0 },
        sx: sx,
      };
    }
    case 'middle': {
      if (orientation === 'vertical') style = { ...style, marginVertical: '16px' };
      else if (orientation === 'horizontal') style = { ...style, width: 'calc(100% - 32px)', marginHorizontal: '16px' };

      return {
        style: style,
        sx: sx,
      };
    }
    case 'bottom-inset': {
      return {
        style: { ...style, marginBottom: '16px' },
        sx: sx,
      };
    }
    case 'top-inset': {
      return {
        style: { ...style, marginTop: '16px' },
        sx: sx,
      };
    }
    case 'left-inset': {
      return {
        style: { ...style, width: 'calc(100% - 16px)', marginLeft: '16px' },
        sx: sx,
      };
    }
    case 'right-inset': {
      return {
        style: { ...style, width: 'calc(100% - 32px)', marginRight: '16px' },
        sx: sx,
      };
    }
    default: {
      if (orientation === 'vertical') style = { ...style, marginVertical: '16px' };
      else if (orientation === 'horizontal') style = { ...style, width: 'calc(100% - 32px)', marginHorizontal: '16px' };

      return {
        style: style,
        sx: sx,
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
  const { colors } = theme;

  const { orientation, align, pattern, thickness } = props;
  let borderWidth = thickness;
  if (pattern === 'double-line' && thickness && thickness < 3) borderWidth = 3;
  const style: StyleProp<ViewStyle> = { overflow: 'visible' };
  const sx: SxProp = { color: props.style?.color ?? (colors?.$onBackground as string) };

  switch (orientation) {
    case 'vertical': {
      return {
        style: {
          ...style,
          width: '0px',
          flexDirection: 'column' as const,
          marginHorizontal: '8px',
          alignItems: 'center' as const,
          justifyContent: getAlignment(align),
          borderLeft: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },
        sx: { ...sx, alignSelf: 'stretch' },
      };
    }
    case 'horizontal': {
      return {
        style: {
          ...style,
          height: '1px',
          flexDirection: 'row' as const,
          marginVertical: '16px',
          alignItems: 'center' as const,
          justifyContent: getAlignment(align),
          borderTop: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },
        sx: sx,
      };
    }
    default: {
      return {
        style: {
          ...style,
          width: '1px',
          flexDirection: 'column' as const,
          alignItems: 'center' as const,
          marginVertical: '8px',
          justifyContent: getAlignment(align),
          borderLeft: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },

        sx: sx,
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
    case 'double-line': {
      return 'double';
    }
    case 'line': {
      return 'solid';
    }
    case 'dotted': {
      return 'dotted';
    }
    case 'dashed': {
      return 'dashed';
    }
    default: {
      return 'solid';
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

  const { light, color: propsColor } = props;
  const color = propsColor ?? (colors?.$primary as string);
  console.log(color);
  return light ? getColorInRGBA(color, 75) : color;
};

/**
 * To generate the width of the divider
 *
 *  @param {string | number} width - The width of the divider
 *  @returns width in pixels
 */
const getBorderWidthInPixels = (width?: string | number) => {
  return typeof width === 'string' ? width : width?.toString() + 'px';
};

/**
 * Default text style
 *
 *  @param {DripsyFinalTheme} theme - dripsy theme
 */
export const defaultTextStyle = (theme: DripsyFinalTheme) =>
  ({
    backgroundColor: theme.colors?.$background as never,
    paddingHorizontal: '4px',
    color: theme.colors?.$onBackground as never,
    textAlignVertical: 'center',
  } as const);

export const childrenContainerStyle = (theme: DripsyFinalTheme) => {
  return { paddingHorizontal: '4px', backgroundColor: theme.colors.$background };
};
