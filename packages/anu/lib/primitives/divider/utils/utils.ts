import { ContainerJustify } from 'anu/lib/primitives/layout/types';
import { DripsyFinalTheme, SxProp } from 'dripsy';
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
  let { style, sx, containerStyle } = getDividerCommonStyles(props, theme);
  switch (variant) {
    case 'full-width': {
      return {
        containerStyle: { ...containerStyle, padding: 0 },
        style,
        sx,
      };
    }
    case 'full-height': {
      return {
        containerStyle: { ...containerStyle, padding: 0 },
        style,
        sx,
      };
    }
    case 'middle': {
      if (orientation === 'vertical') containerStyle = { ...containerStyle, paddingVertical: '12pt' };
      else if (orientation === 'horizontal') containerStyle = { ...containerStyle, paddingHorizontal: '12pt' };

      return {
        containerStyle,
        style,
        sx,
      };
    }
    case 'bottom-inset': {
      return {
        containerStyle: { ...containerStyle, paddingBottom: '12pt' },
        style,
        sx,
      };
    }
    case 'top-inset': {
      return {
        containerStyle: { ...containerStyle, paddingTop: '12pt' },
        style,
        sx,
      };
    }
    case 'left-inset': {
      return {
        containerStyle: { ...containerStyle, paddingLeft: '12pt' },
        style,
        sx,
      };
    }
    case 'right-inset': {
      return {
        containerStyle: { ...containerStyle, paddingRight: '12pt' },
        style,
        sx,
      };
    }
    default: {
      if (orientation === 'vertical') containerStyle = { ...containerStyle, paddingVertical: '12pt' };
      else if (orientation === 'horizontal') containerStyle = { ...containerStyle, paddingHorizontal: '12pt' };

      return {
        containerStyle,
        style,
        sx,
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

  let borderWidth = thickness ?? 1;

  if (pattern === 'double-line' && thickness && thickness < 2) borderWidth = 2;

  const style: StyleProp<ViewStyle> = {
    flex: 1,
    overflow: 'visible',
    alignItems: 'center' as const,
    justifyContent: getAlignment(align),
  };
  const sx: SxProp = { color: props.style?.color ?? (colors?.$onBackground as string) };

  const containerStyle: StyleProp<ViewStyle> = {};

  switch (orientation) {
    case 'vertical': {
      return {
        containerStyle: {
          ...containerStyle,
          flexDirection: 'column' as const,
          alignSelf: 'stretch' as const,
        },
        style: {
          ...style,
          width: '0pt',
          marginHorizontal: '6pt',
          flexDirection: 'column' as const,
          borderLeft: `${borderWidth * 0.75}pt ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },
        sx: { ...sx, alignSelf: 'stretch' },
      };
    }
    case 'horizontal': {
      return {
        containerStyle: {
          ...containerStyle,
          flexDirection: 'row' as const,
          width: '100%',
        },
        style: {
          ...style,
          height: '0.75pt',
          flexDirection: 'row' as const,
          marginVertical: '12pt',

          borderTop: `${borderWidth}pt ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },
        sx,
      };
    }
    default: {
      return {
        containerStyle: {
          ...containerStyle,
          flexDirection: 'column' as const,
          height: '100%',
        },
        style: {
          ...style,
          width: '0pt',
          flexDirection: 'column' as const,
          marginVertical: '6pt',

          borderLeft: `${borderWidth}pt ${getBorderStyle(pattern)} ${getColor(props, theme)}`,
        },

        sx,
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
  return light ? getColorInRGBA(color, 75) : color;
};

/**
 * Default text style
 *
 *  @param {DripsyFinalTheme} theme - dripsy theme
 */
export const defaultTextStyle = (theme: DripsyFinalTheme) =>
  ({
    backgroundColor: theme.colors?.$background as never,
    paddingHorizontal: '3pt',
    color: theme.colors?.$onBackground as never,
    textAlignVertical: 'center',
  } as const);

export const childrenContainerStyle = (theme: DripsyFinalTheme) => {
  return { paddingHorizontal: '3pt', backgroundColor: theme.colors.$background };
};
