import { DripsyFinalTheme } from 'dripsy';

import { PasswordInputProps } from '../types';

export const getIconStyles = (props: PasswordInputProps, theme: DripsyFinalTheme) => {
  const iconStyle = {
    color: props.error ? theme.colors.$error : theme.colors.$onSurfaceVariant,
  };

  return iconStyle;
};
