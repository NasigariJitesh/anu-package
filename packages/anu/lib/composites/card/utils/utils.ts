import { DripsyFinalTheme } from 'dripsy';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

import { CardMediaProps, CardProps } from './../types/card';

/**
 * To generate the card styling props
 *
 * @param {Partial<CardProps>}props - the properties of the card component
 * @param theme
 * @returns style properties for the card component
 */
export const getCardStyles = (props: Partial<CardProps>, theme: DripsyFinalTheme): { style: StyleProp<ViewStyle> } => {
  const { style } = getCommonCardStyles(props);
  const { colors } = theme;

  switch (props.variant) {
    case 'outlined': {
      {
        return {
          style: {
            ...style,

            backgroundColor: colors?.$surface as string,
            borderWidth: 1,
            borderColor: colors?.$outline as string,
          },
        };
      }
    }
    case 'filled': {
      {
        return {
          style: {
            ...style,
            backgroundColor: colors.$surfaceContainerHighest,
          },
        };
      }
    }

    default: {
      return {
        style: {
          ...style,
          backgroundColor: colors?.$surfaceContainerLow,
          shadowColor: colors?.$shadow as string,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
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
  const { flexDirection, align, justify, width, height, orientation } = props;

  let containerStyle: StyleProp<ViewStyle> = {
    flexDirection: flexDirection,
    alignItems: align,
    justifyContent: justify,
    borderRadius: 12,
    overflow: 'hidden',
  };

  if (width) containerStyle = { ...containerStyle, width };

  if (height) containerStyle = { ...containerStyle, height };

  if (orientation === 'horizontal') containerStyle = { ...containerStyle, flexDirection: 'row' };

  return { style: containerStyle };
};

export const getCardContentStyle = () => {
  const style = {
    padding: 16,
    width: '100%',
  };

  return { style };
};

export const getCardTitleStyle = (theme: DripsyFinalTheme) => {
  const style = {
    padding: 16,
    width: '100%',
  };

  const titleStyle = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    textAlignVertical: 'center' as const,
    color: theme.colors.$onSurface,
  };
  const subTitleStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    marginTop: 6,
    textAlignVertical: 'center' as const,
    color: theme.colors.$onSurface,
  };

  return { style, titleStyle, subTitleStyle };
};

export const getCardMediaStyle = (props: CardMediaProps) => {
  const style: ImageStyle = {
    height: props.cardOrientation === 'horizontal' ? props.height ?? '100%' : props.height,
    width: props.cardOrientation === 'vertical' ? props.width ?? '100%' : props.width,
  };

  return { style };
};

export const getCardActionsStyle = () => {
  const style = {
    padding: 16,
    width: '100%',
  };

  return { style };
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
    right: 16,
  };

  const headingStyle = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    textAlignVertical: 'center' as const,
    color: theme.colors.$onSurface,
  };
  const subHeadingStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    marginTop: 4,
    textAlignVertical: 'center' as const,
    color: theme.colors.$onSurface,
  };

  return {
    containerStyle,
    avatarContainerStyle,
    headingContainerStyle,
    actionContainerStyle,
    headingStyle,
    subHeadingStyle,
  };
};
