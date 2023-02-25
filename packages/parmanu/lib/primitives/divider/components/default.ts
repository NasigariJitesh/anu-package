import { getTheme } from 'config/dripsy/theme';

import { DividerProps } from './../types/divider';

const { colors } = getTheme();

// Default props for the divider component
export const defaultProps: Partial<DividerProps> = {
  variant: 'middle',
  pattern: 'line',
  orientation: 'horizontal',
  light: false,
  borderWidth: 1,
};

// Default style for the text in divider component
export const defaultTextStyle = {
  backgroundColor: colors.$background,
  paddingHorizontal: '4px',
  color: colors.$text,
};
