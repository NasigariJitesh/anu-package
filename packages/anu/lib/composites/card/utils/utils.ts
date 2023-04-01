import { getMaxWidthInPixels } from 'common/utils';
import { DripsyFinalTheme, SxProp } from 'dripsy';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

import { CardMediaProps, CardProps } from './../types/card';

/**
 * To generate the card styling props
 *
 * @param {Partial<CardProps>}props - the properties of the card component
 * @param theme
 * @returns style properties for the card component
 */
export const getCardStyles = (
  props: Partial<CardProps>,
  theme: DripsyFinalTheme,
): { style: StyleProp<ViewStyle>; sx: SxProp } => {
  const { style, sx } = getCommonCardStyles(props);
  const { colors } = theme;

  switch (props.variant) {
    case 'outlined': {
      {
        return {
          style: {
            ...style,

            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 1,

            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors?.$outline as string,
          },
          sx: {
            ...sx,
            color: colors?.$onSurface as string,
          },
        };
      }
    }
    case 'filled': {
      {
        return {
          style: {
            ...style,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 1,
            backgroundColor: colors?.$primaryContainer as string,
          },
          sx: {
            ...sx,
            color: colors?.$onPrimaryContainer as string,
          },
        };
      }
    }

    default: {
      return {
        style: {
          ...style,
          backgroundColor: colors?.$surface as string,
          shadowColor: colors?.$shadow as string,
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
          color: colors?.$onSurface as string,
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
    overflow: 'hidden',
  };

  if (maxWidth) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels(maxWidth) };

  if (width) containerStyle = { ...containerStyle, width };

  return { style: containerStyle, sx: sxStyle };
};

export const getCardContentStyle = () => {
  const style = {
    margin: 16,
    width: 'calc(100% - 32px)',
  };
  const sx = {
    color: 'inherit',
  };

  return { style, sx };
};

export const getCardTitleStyle = (theme: DripsyFinalTheme) => {
  const style = {
    margin: 16,
    width: 'calc(100% - 32px)',
  };
  const sx = {
    color: 'inherit',
  };
  const titleStyle = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    textAlignVertical: 'center' as const,
  };
  const subTitleStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    marginTop: '6px',
    textAlignVertical: 'center' as const,
  };

  return { style, sx, titleStyle, subTitleStyle };
};

export const getCardMediaStyle = (props: CardMediaProps) => {
  const style: ImageStyle = {
    height: props.height,
    width: '100%',
  };

  return { style };
};

export const getCardActionsStyle = () => {
  const style = {
    margin: 16,
    width: 'calc(100% - 32px)',
  };
  const sx = {
    color: 'inherit',
  };

  return { style, sx };
};

export const getCardHeaderStyle = (theme: DripsyFinalTheme) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  } as const;
  const avatarContainerStyle = {
    marginVertical: 16,
    marginLeft: 16,
  };
  const headingContainerStyle = {
    marginVertical: 16,
    marginLeft: 16,
  };
  const actionContainerStyle = {
    position: 'absolute' as const,
    right: '16px',
  };
  const imageContainerStyle = {
    position: 'absolute',
    right: 0,
    borderRightRadius: 12,
    overflow: 'hidden',
  } as const;

  const headingStyle = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    textAlignVertical: 'center' as const,
  };
  const subHeadingStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    marginTop: '4px',
    textAlignVertical: 'center' as const,
  };

  const sx = {
    color: 'inherit',
  };

  return {
    containerStyle,
    avatarContainerStyle,
    headingContainerStyle,
    actionContainerStyle,
    imageContainerStyle,
    headingStyle,
    subHeadingStyle,
    sx,
  };
};
