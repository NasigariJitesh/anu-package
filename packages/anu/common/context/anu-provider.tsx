import { DripsyAppProps } from 'anu/config/dripsy/provider';

import { DripsyProvider, PortalProvider } from '../../config';

type AnuProviderProps<T> = DripsyAppProps<T>;

/**
 * Provider to wrap the app with.
 *
 * @param {AnuProviderProps} props - Props for the provider including children
 */
function DripsyApp<T>(props: AnuProviderProps<T>) {
  const { children, ...rest } = props;

  return (
    <DripsyProvider {...rest}>
      <PortalProvider>{children}</PortalProvider>
    </DripsyProvider>
  );
}

export default DripsyApp;
