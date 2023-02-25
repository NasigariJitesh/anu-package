import { ReactChildren } from 'common/types';
import { DripsyProvider } from 'dripsy';

import { defaultTheme } from './theme';

/**
 * TODO: Add a function to let user extend the default theme with their own
 */
const theme = defaultTheme;

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyApp(props: ReactChildren) {
  return <DripsyProvider theme={theme as never}>{props.children}</DripsyProvider>;
}

export default DripsyApp;
