import { Flex } from 'common/types';
import { getTheme } from 'config/dripsy/theme';
import { SxProp } from 'dripsy';
import { ContainerJustify } from 'lib/primitives/layout/types';
import { FlexAlignType, StyleProp, ViewStyle } from 'react-native';

import { DividerProps } from '../types';
import { DividerPattern, DividerTextAlign } from './../types/divider';

const { colors } = getTheme();

/**
 * To generate the divider styling props
 *
 *  @param {Partial<DividerProps>} props - The properties of the divider component
 *  @returns style properties for the divider component
 */
export const getDividerStyle = (props: Partial<DividerProps>) => {
  const { variant, orientation } = props;
  // eslint-disable-next-line prefer-const
  let { style, sx } = getDividerCommonStyles(props);
  switch (variant) {
    case 'full-width': {
      return {
        style: { ...style, width: '100%' },
        sx: sx,
      };
    }
    case 'full-height': {
      return {
        style: { ...style, height: '100%' },
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
 *  @returns common style properties for the divider component
 */
const getDividerCommonStyles = (props: Partial<DividerProps>) => {
  const { orientation, textAlign, pattern, borderWidth } = props;
  const style: StyleProp<ViewStyle> = { overflow: 'visible' };
  const sx: SxProp = { color: props.style?.color ?? colors.$text };
  switch (orientation) {
    case 'vertical': {
      return {
        style: {
          ...style,
          width: '0px',
          flexDirection: 'column' as Flex,
          marginHorizontal: '24px',
          alignItems: 'flex-end' as FlexAlignType,
          justifyContent: getAlignment(textAlign),
          borderLeft: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props)}`,
        },
        sx: { ...sx, alignSelf: 'stretch' },
      };
    }
    case 'horizontal': {
      return {
        style: {
          ...style,
          height: '1px',
          flexDirection: 'row' as Flex,
          marginVertical: '24px',
          alignItems: 'center' as FlexAlignType,
          justifyContent: getAlignment(textAlign),
          borderTop: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props)}`,
        },
        sx: sx,
      };
    }
    default: {
      return {
        style: {
          ...style,
          width: '1px',
          flexDirection: 'column' as Flex,
          alignItems: 'center' as FlexAlignType,
          marginVertical: '24px',
          justifyContent: getAlignment(textAlign),
          borderLeft: `${getBorderWidthInPixels(borderWidth)} ${getBorderStyle(pattern)} ${getColor(props)}`,
        },

        sx: sx,
      };
    }
  }
};

/**
 * To generate the divider text alignment
 *
 *  @param {DividerTextAlign} align - The text align property of the divider component
 *  @returns text alignment for the divider
 */
const getAlignment = (align?: DividerTextAlign) => {
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
 *  @returns color of the divider
 */
const getColor = (props: Partial<DividerProps>) => {
  const { light, style } = props;
  const color = style?.color ? String(style?.color) : colors.$primary;
  return light ? color + '90' : color;
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
