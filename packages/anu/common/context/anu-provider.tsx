import { DripsyAppProps } from 'anu/config/dripsy/provider';
import { DripsyProvider } from 'config/dripsy';
import { PortalProvider } from 'config/portals';

type AnuProviderProps = DripsyAppProps;

/**
 * Provider to wrap the app with.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children along with the custom theme
 */
function DripsyApp(props: AnuProviderProps) {
  const { children, ...rest } = props;

  return (
    <DripsyProvider {...rest}>
      <PortalProvider>{children}</PortalProvider>
    </DripsyProvider>
  );
}

export default DripsyApp;
