import { DripsyFinalTheme } from 'dripsy';

export const defaultProps = (theme: DripsyFinalTheme) => {
  return {
    align: 'flex-start' as const,
    justify: 'flex-start' as const,
    flexDirection: 'column' as const,
    fixed: false,
    disableGutters: false,
    style: {
      backgroundColor: theme.colors.$background,
      width: '100%',
    },
  };
};
