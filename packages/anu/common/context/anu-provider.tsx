import { ReactChildren } from 'common/types';
import { DripsyProvider } from 'config/dripsy';
import { PortalProvider } from 'config/portals';
import { DripsyCustomTheme } from 'dripsy';

interface AnuProviderProps {
  children: ReactChildren;
  theme: DripsyCustomTheme;
}

/**
 * Provider to wrap the app with.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children along with the custom theme
 */
function DripsyApp(props: AnuProviderProps) {
  return (
    <DripsyProvider theme={props.theme}>
      <PortalProvider>{props.children}</PortalProvider>
    </DripsyProvider>
  );
}

export default DripsyApp;
