import { createParam as createParamSolito } from 'solito';

import { NavigationProps } from '../types';

/**
 * Creates a type-safe createParam hook
 *
 * @template T - The name of the screen to create the params for
 * @returns - The solito createParam hook with type-safe params
 */
export function createParam<T extends keyof NavigationProps>() {
  type Params = Pick<NavigationProps, T>[T] & object;

  return createParamSolito<Params>();
}
