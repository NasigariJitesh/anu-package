import { getTheme } from 'config/dripsy/theme';
import { Sx } from 'dripsy';

import { TextAlign, TypographyProps } from '../types';

/**
 * The return type of the getFontStyles function
 */
export interface GetFontStylesReturnType extends Sx {
  fontSize: number;
  lineHeight: number;
  fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
  // letterSpacing?: number;
  textAlign?: TextAlign;
  letterSpacing?: number;
}

/**
 * get the font styles based on the type of the component
 *
 * @param {TypographyProps} props - props of the display component
 */
export const getFontStyles = (
  props: TypographyProps,
): GetFontStylesReturnType & { margin: number; padding: number } => {
  let styles: GetFontStylesReturnType;

  switch (props.scale) {
    case 'display': {
      styles = getDisplayFontStyles(props.size);
      break;
    }

    case 'headline': {
      styles = getHeadlineFontStyles(props.size);
      break;
    }

    case 'title': {
      styles = getTitleFontStyles(props.size);
      break;
    }

    case 'label': {
      styles = getLabelFontStyles(props.size);
      break;
    }

    case 'body': {
      styles = getBodyFontStyles(props.size);
      break;
    }

    default: {
      styles = getBodyFontStyles(props.size);
      break;
    }
  }

  if (props.align) styles.textAlign = props.align;

  const customStyle = props.sx as Record<string, never>;

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  return { ...styles, ...resetStyles, ...customStyle };
};

const getDisplayFontStyles = (size: TypographyProps['size']): GetFontStylesReturnType => {
  const theme = getTheme();

  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[0],
        fontSize: theme.fontSizes[0],
        fontWeight: '400',
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[1],
        fontSize: theme.fontSizes[1],
        fontWeight: '400',
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[2],
        fontSize: theme.fontSizes[2],
        fontWeight: '400',
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[1],
        fontSize: theme.fontSizes[1],
        fontWeight: '400',
      };
    }
  }
};

const getHeadlineFontStyles = (size: TypographyProps['size']): GetFontStylesReturnType => {
  const theme = getTheme();

  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[3],
        fontSize: theme.fontSizes[3],
        fontWeight: '400',
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[4],
        fontSize: theme.fontSizes[4],
        fontWeight: '400',
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[5],
        fontSize: theme.fontSizes[5],
        fontWeight: '400',
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[4],
        fontSize: theme.fontSizes[4],
        fontWeight: '400',
      };
    }
  }
};

const getTitleFontStyles = (size: TypographyProps['size']): GetFontStylesReturnType => {
  const theme = getTheme();

  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[6],
        fontSize: theme.fontSizes[6],
        fontWeight: '400',
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '500',
        letterSpacing: 0.15,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '500',
        letterSpacing: 0.15,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '400',
        letterSpacing: 0.15,
      };
    }
  }
};

const getLabelFontStyles = (size: TypographyProps['size']): GetFontStylesReturnType => {
  const theme = getTheme();

  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '500',
        letterSpacing: 0.1,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '500',
        letterSpacing: 0.5,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[10],
        fontWeight: '500',
        letterSpacing: 0.5,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '500',
        letterSpacing: 0.5,
      };
    }
  }
};

const getBodyFontStyles = (size: TypographyProps['size']): GetFontStylesReturnType => {
  const theme = getTheme();

  switch (size) {
    case 'large': {
      return {
        lineHeight: theme.lineHeights[7],
        fontSize: theme.fontSizes[7],
        fontWeight: '400',
        letterSpacing: 0.5,
      };
    }
    case 'medium': {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '400',
        letterSpacing: 0.25,
      };
    }
    case 'small': {
      return {
        lineHeight: theme.lineHeights[9],
        fontSize: theme.fontSizes[9],
        fontWeight: '400',
        letterSpacing: 0.4,
      };
    }
    default: {
      return {
        lineHeight: theme.lineHeights[8],
        fontSize: theme.fontSizes[8],
        fontWeight: '400',
        letterSpacing: 0.25,
      };
    }
  }
};
