import { DripsyFinalTheme } from 'dripsy';

import { Options } from '../types';

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

  const defaultFlatListStyle = {
    width: '100%',
    maxHeight: 200,
  };

  return { defaultAutoCompleteContainerStyle, defaultResultsContainerStyle, defaultFlatListStyle };
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

export const getOverridingStyleForBaseVariant = () => {
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
