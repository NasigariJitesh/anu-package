import { getTheme } from 'config/dripsy/theme';

import { ContainerProps } from '../../types';

const theme = getTheme();

/**
 * Default Properties of the container component
 */
export const defaultProps: ContainerProps = {
  align: 'flex-start',
  justify: 'flex-start',
  flexDirection: 'column',
  fixed: false,
  disableGutters: false,
  style: {
    backgroundColor: theme.colors.$backgroundColor,
    width: '100%',
  },
};
