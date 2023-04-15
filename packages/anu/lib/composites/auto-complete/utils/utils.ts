import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';

import { Options } from '../types';

/**
 * To generate style for the standard variant of the auto complete
 *
 * @param theme
 * @param theme.colors - the colors according to theme
 * @param disabled - whether field is disabled
 * @returns style of the dripsy text field
 */
export const getStandardAutoCompleteStyles = ({ colors }: DripsyFinalTheme, disabled?: boolean) => {
  const defaultAutoCompleteStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: disabled ? getColorInRGBA(colors.$onSurface, 38) : colors.$onSurface,
    height: 56,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    cursor: 'text',
    position: 'relative',
  } as const;

  const defaultInputAreaStyle = {
    fontSize: 16,
    lineHeight: 24,
    height: 56,
    fontWeight: '400' as const,
    outline: 'none',
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 18,
    color: disabled ? getColorInRGBA(colors.$onSurface, 38) : colors.$onSurface,
    letterSpacing: 0.5,
    caretColor: 'inherit',
    backgroundColor: 'transparent',
  } as const;

  const leadingComponentContainerStyle = {
    paddingLeft: 8,
    color: 'inherit',
    backgroundColor: disabled ? 'inherit' : 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
  } as const;

  const trailingComponentContainerStyle = {
    paddingRight: 8,
    color: 'inherit',
    backgroundColor: disabled ? 'inherit' : 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
  } as const;

  return {
    defaultAutoCompleteStyle,
    defaultInputAreaStyle,
    leadingComponentContainerStyle,
    trailingComponentContainerStyle,
  };
};

/**
 * to generate styles for the autocomplete
 *
 * @param theme - the theme of the application
 * @returns styles for the autocomplete component
 */
export const getAutoCompleteStyles = (theme: DripsyFinalTheme) => {
  const defaultAutoCompleteContainerStyle = {
    alignItems: 'center',
    width: 264,
  } as const;

  const defaultResultsContainerStyle = {
    backgroundColor: theme.colors.$surface,
    shadowColor: theme.colors?.$shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    flex: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: '100%',
    position: 'absolute',
    top: 56,
  } as const;

  return { defaultAutoCompleteContainerStyle, defaultResultsContainerStyle };
};

/**
 *
 * @param data
 */
export function convertToOptionsFormat<T>(data: T[], keyExtractor: { (item: T, index: number): string }) {
  const options: Options[] = [];
  for (const [index, value] of data.entries()) {
    const option: Options = {
      id: keyExtractor(value, index),
      value,
    };
    options.push(option);
  }
  return options;
}

export const getOverridingStyleForStandardVariant = () => {
  const style = {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'solid',
    borderRadius: 0,

    '@hover': {
      borderColor: 'transparent',
    },
    '@focus': {
      borderColor: 'transparent',
    },
    '@press': {
      borderColor: 'transparent',
    },
  };

  return style;
};

export const getDropDownButtonStyle = () => {
  const style = {
    height: 30,
    width: 30,
    '@hover': { height: 30, width: 30 },
    '@focus': { height: 30, width: 30 },
    '@press': { height: 30, width: 30 },
  };
  return style;
};
