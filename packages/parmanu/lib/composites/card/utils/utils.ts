import { getMaxWidthInPixels } from 'common/utils';
import { getTheme } from 'config/dripsy/theme';
import { SxProp } from 'dripsy';
import { StyleProp, ViewStyle } from 'react-native';

import { CardProps } from './../types/card';

/**
 * To generate the card styling props
 *
 * @param {Partial<CardProps>}props - the properties of the card component
 * @returns style properties for the card component
 */
export const getCardStyles = (props: Partial<CardProps>): { style: StyleProp<ViewStyle>; sx: SxProp } => {
  const { style, sx } = getCommonCardStyles(props);
  const { colors } = getTheme();
  switch (props.variant) {
    case 'outlined': {
      {
        return {
          style: {
            ...style,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.$shadow,
          },
          sx: {
            ...sx,
            color: colors.$primary,
          },
        };
      }
    }
    case 'filled': {
      {
        return {
          style: {
            ...style,
            backgroundColor: colors.$primary,
          },
          sx: {
            ...sx,
            color: colors.$primary,
          },
        };
      }
    }

    case 'elevated': {
      return {
        style: {
          ...style,
          backgroundColor: colors.$background,
          shadowColor: colors.$primary + 90,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
        },
        sx: {
          ...sx,
          color: colors.$primary,
        },
      };
    }
    default: {
      return {
        style: {
          ...style,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.$shadow,
        },
        sx: {
          ...sx,
          color: colors.$primary,
        },
      };
    }
  }
};

/**
 * To generate the card styling props
 *
 * @param {Partial<CardProps>}props - the properties of the card component
 * @returns common style properties for the card component
 */
export const getCommonCardStyles = (props: Partial<CardProps>) => {
  const { flexDirection, maxWidth, align, justify, width, sx } = props;

  let sxStyle: SxProp = { ...sx };
  let containerStyle: StyleProp<ViewStyle> = {
    flexDirection: flexDirection,
    alignItems: align,
    justifyContent: justify,
    padding: 0.6,
    borderRadius: 12,
  };

  if (maxWidth) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels(maxWidth) };

  if (width) containerStyle = { ...containerStyle, width };

  return { style: containerStyle, sx: sxStyle };
};
