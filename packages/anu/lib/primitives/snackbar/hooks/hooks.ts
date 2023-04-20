import { useContext } from 'react';

import { SnackbarContext } from '../context';

/**
 *
 */
export default function useSnackbar() {
  const { add, close, remove } = useContext(SnackbarContext);

  return { add, close, remove };
}
