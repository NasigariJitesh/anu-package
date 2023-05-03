import { PortalProvider as Provider } from '../../config';
import { ReactChildren } from '../types';

interface PortalProps {
  children: ReactChildren;
}

/**
 * Provider to wrap the app with.
 *
 * @param {ReactChildren} props - Props for the provider including children
 */
function PortalProvider(props: PortalProps) {
  const { children } = props;

  return <Provider>{children}</Provider>;
}

export default PortalProvider;
