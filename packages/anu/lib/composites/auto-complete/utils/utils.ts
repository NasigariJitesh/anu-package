import { DripsyFinalTheme } from 'dripsy';

import { getColorInRGBA } from '../../../../common/utils';
import { TextFieldContainerStyle } from '../../../primitives';
import { AutoCompleteProps, Options } from '../types';

/**
 * to generate styles for the autocomplete
 *
 * @param theme - the theme of the application
 * @param dimensions
 * @param dimensions.width
 * @param dimensions.height
 * @param style
 * @returns styles for the autocomplete component
 */
export const getAutoCompleteStyles = (
  theme: DripsyFinalTheme,
  dimensions: { width: number; height: number },
  style?: TextFieldContainerStyle,
) => {
  const defaultTextFieldContainerStyle = {
    width: '100%',
    position: 'relative',
  } as const;

  const defaultFlatListContainerStyle = {
    position: 'absolute' as const,
    top: (style?.height ?? 56) as never,
  };
  const defaultFlatListStyle = {
    maxHeight: 300,
    backgroundColor: theme.colors.$surface,
    shadowColor: theme.colors?.$shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    flexGrow: 0,
    width: dimensions.width,
  };

  const containerStyle = { width: '100%', flex: 1, height: '100%' };
  return {
    defaultFlatListStyle,
    defaultTextFieldContainerStyle,
    defaultFlatListContainerStyle,
    containerStyle,
  };
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

export const getDropDownButtonStyle = (theme: DripsyFinalTheme, props: AutoCompleteProps) => {
  if (props.error) return { color: theme.colors.$error };
  if (props.disabled) return { color: getColorInRGBA(theme.colors.$onSurface, 38) };
  return { color: theme.colors.$onSurfaceVariant };
};
