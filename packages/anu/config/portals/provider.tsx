import { PortalProvider } from '@gorhom/portal';
import { ReactChildren } from 'common/types';

interface PortalAppProps {
  children: ReactChildren;
}

/**
 * Provider to wrap the app with. This is required to enable the app to create Portals in web and mobile
 *
 * Check out the following links for reference and examples
 * - {@link https://github.com/gorhom/react-native-portal React Native Portal - Github}
 * - {@link https://www.npmjs.com/package/@gorhom/portal React Native Portal - npm}
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 * @param props.children
 */
function PortalApp(props: PortalAppProps) {
  return <PortalProvider>{props.children}</PortalProvider>;
}

export default PortalApp;
