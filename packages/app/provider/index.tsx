import { Dripsy } from './dripsy';
import { NavigationProvider } from './navigation';

/**
 *
 * @param root0
 * @param root0.children
 */
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  );
}
