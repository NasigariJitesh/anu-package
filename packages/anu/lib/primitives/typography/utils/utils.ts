import { DripsyFinalTheme } from 'dripsy';

import { getResetMarginStyles, getResetPaddingStyles } from '../../../../common/utils';
import { TypographyProps } from '../types';

/**
 * get the font styles based on the type of the component
 *
 * @param {TypographyProps} props - props of the display component
 * @param theme
 */
export const getFontStyles = (props: TypographyProps, theme: DripsyFinalTheme) => {
  let styles;

  switch (props.scale) {
    case 'display': {
      styles = getDisplayFontStyles(props.size, theme);
      break;
    }

    case 'headline': {
      styles = getHeadlineFontStyles(props.size, theme);
      break;
    }

    case 'title': {
      styles = getTitleFontStyles(props.size, theme);
      break;
    }

    case 'label': {
      styles = getLabelFontStyles(props.size, theme);
      break;
    }

    case 'body': {
      styles = getBodyFontStyles(props.size, theme);
      break;
    }

    default: {
      styles = getBodyFontStyles(props.size, theme);
      break;
    }
  }

  const resetStyles = {
    ...getResetMarginStyles(),
    ...getResetPaddingStyles(),
    color: theme.colors.$onSurface,
  };

  return { ...styles, ...resetStyles };
};

const getDisplayFontStyles = (size: TypographyProps['size'], theme: DripsyFinalTheme) => {
  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[0],
        fontSize: theme.fontSizes[0],
        fontWeight: '400' as const,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[1],
        fontSize: theme.fontSizes[1],
        fontWeight: '400' as const,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[2],
        fontSize: theme.fontSizes[2],
        fontWeight: '400' as const,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[1],
        fontSize: theme.fontSizes[1],
        fontWeight: '400' as const,
      };
    }
  }
};

const getHeadlineFontStyles = (size: TypographyProps['size'], theme: DripsyFinalTheme) => {
  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[3],
        fontSize: theme.fontSizes[3],
        fontWeight: '400' as const,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[4],
        fontSize: theme.fontSizes[4],
        fontWeight: '400' as const,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[5],
        fontSize: theme.fontSizes[5],
        fontWeight: '400' as const,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[4],
        fontSize: theme.fontSizes[4],
        fontWeight: '400' as const,
      };
    }
  }
};

const getTitleFontStyles = (size: TypographyProps['size'], theme: DripsyFinalTheme) => {
  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[6],
        fontSize: theme.fontSizes[6],
        fontWeight: '400' as const,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '500' as const,
        letterSpacing: 0.15,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '500' as const,
        letterSpacing: 0.15,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '400' as const,
        letterSpacing: 0.15,
      };
    }
  }
};

const getLabelFontStyles = (size: TypographyProps['size'], theme: DripsyFinalTheme) => {
  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '500' as const,
        letterSpacing: 0.1,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '500' as const,
        letterSpacing: 0.5,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[10],
        fontWeight: '500' as const,
        letterSpacing: 0.5,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '500' as const,
        letterSpacing: 0.5,
      };
    }
  }
};

const getBodyFontStyles = (size: TypographyProps['size'], theme: DripsyFinalTheme) => {
  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '400' as const,
        letterSpacing: 0.5,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '400' as const,
        letterSpacing: 0.25,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '400' as const,
        letterSpacing: 0.4,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '400' as const,
        letterSpacing: 0.25,
      };
    }
  }
};
