import { DialogActionsProps } from '../../types';

/**
 * Default Properties of the card component
 */
export const defaultProps: Omit<DialogActionsProps, 'children'> = {
  align: 'center',
  justify: 'flex-end',
};
