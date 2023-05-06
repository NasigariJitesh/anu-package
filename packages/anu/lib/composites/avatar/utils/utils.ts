import { DripsyFinalTheme, Sx } from 'dripsy';
import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native';

import { AvatarGroupProps, ChildrenAvatarProps, ImageAvatarProps, LetterAvatarProps } from './../types/avatar';

const getImageAvatarTheme = (variant?: 'circle' | 'rounded') => {
  const imageTheme = {
    common: {
      height: 32,
      width: 32,
      borderRadius: variant === 'circle' ? 100 : 4,
    },
    medium: {},
    small: {
      height: 24,
      width: 24,
      borderRadius: variant === 'circle' ? 100 : 4,
    },
    large: {
      height: 40,
      width: 40,
      borderRadius: variant === 'circle' ? 100 : 4,
    },
  };
  return { imageTheme };
};

const getLetterAvatarTheme = (theme: DripsyFinalTheme, variant?: 'circle' | 'rounded') => {
  const containerTheme = {
    common: {
      height: 32,
      width: 32,
      borderRadius: variant === 'circle' ? 100 : 4,
      backgroundColor: theme.colors.$primary,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    medium: {},
    small: {
      height: 24,
      width: 24,
      borderRadius: variant === 'circle' ? 100 : 4,
    },
    large: {
      height: 40,
      width: 40,
      borderRadius: variant === 'circle' ? 100 : 4,
    },
  };

  const extendedContainerTheme = {
    common: {
      color: theme.colors.$onPrimary,
      overflow: 'hidden',
    },
    small: {},
    medium: {},
    large: {},
  };

  const typographyTheme = {
    common: {
      lineHeight: theme.lineHeights[8],
      fontSize: theme.fontSizes[7],
      fontFamily: theme.fonts?.root,
      fontWeight: '400' as const,
      color: 'inherit',
      textAlignVertical: 'center' as const,
      textAlign: 'center' as const,
    },
    medium: {},
    large: {
      lineHeight: theme.lineHeights[7],
      fontSize: theme.fontSizes[6],
    },
    small: {
      lineHeight: theme.lineHeights[9],
      fontSize: theme.fontSizes[9],
    },
  };
  return { containerTheme, extendedContainerTheme, typographyTheme };
};

export const getImageAvatarStyle = (props: ImageAvatarProps) => {
  const { variant, size } = props;

  const { imageTheme } = getImageAvatarTheme(variant);

  const imageStyle: ImageStyle = { ...imageTheme.common, ...imageTheme[size ?? 'medium'] };

  return { imageStyle };
};

export const getLetterAvatarStyle = (props: LetterAvatarProps | ChildrenAvatarProps, theme: DripsyFinalTheme) => {
  const { variant, size } = props;

  const { containerTheme, extendedContainerTheme, typographyTheme } = getLetterAvatarTheme(theme, variant);

  const containerStyle: StyleProp<ViewStyle> = { ...containerTheme.common, ...containerTheme[size ?? 'medium'] };
  const containerSx: Sx = { ...extendedContainerTheme.common, ...extendedContainerTheme[size ?? 'medium'] };

  const typographyStyle: StyleProp<TextStyle> = { ...typographyTheme.common, ...typographyTheme[size ?? 'medium'] };

  return { containerStyle, containerSx, typographyStyle };
};

export const getAvatarGroupStyle = (props: AvatarGroupProps, theme: DripsyFinalTheme) => {
  const baseZIndex = (props.children[0] as ReactElement).props.style?.zIndex ?? 0;
  const marginRight = props.spacing ? props.spacing - 8 : -8;

  const excessAvatarStyle: ViewStyle = {
    backgroundColor: theme.colors.$primaryContainer,
  };

  const excessAvatarSx = {
    color: theme.colors.$onPrimaryContainer,
  };

  const groupStyle: ViewStyle = {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  };

  return { excessAvatarStyle, excessAvatarSx, groupStyle, baseZIndex, marginRight };
};

export const getAvatarContainerStyle = (avatar: ReactElement, zIndex: number, marginRight: number, size: string) => {
  const { style } = avatar.props;

  let height = 36;
  let width = 36;

  if (style === undefined) {
    switch (size) {
      case 'large': {
        height = 44;
        width = 44;
        break;
      }
      case 'small': {
        height = 28;
        width = 28;
        break;
      }
      default: {
        height = 36;
        width = 36;
      }
    }
  } else {
    const { height: styleHeight, width: styleWidth } = style;
    if (styleHeight != undefined) height = styleHeight + 4;
    if (styleWidth != undefined) width = styleWidth + 4;
  }

  const dimension = height >= width ? height : width;

  const containerStyle = {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    padding: 2,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginRight,
    zIndex,
  };
  return containerStyle;
};
