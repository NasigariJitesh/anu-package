import { AnuProvider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { makeTheme } from 'anu/config';

import { NavigationProvider } from './navigation';

/**
 *
 * @param root0
 * @param root0.children
 */
export function Provider({ children }: { children: ReactChildren }) {
  return (
    <NavigationProvider>
      <AnuProvider theme={makeTheme({})}>{children}</AnuProvider>
    </NavigationProvider>
  );
}
