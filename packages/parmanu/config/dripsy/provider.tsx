import { ReactChildren } from 'common/types';
import { DripsyProvider } from 'dripsy';

import { defaultTheme } from './theme';

interface DripsyAppProps {
  children: ReactChildren;
}

const theme = defaultTheme;

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 * @param props.children
 */
function DripsyApp(props: DripsyAppProps) {
  return <DripsyProvider theme={theme as never}>{props.children}</DripsyProvider>;
}

export default DripsyApp;
