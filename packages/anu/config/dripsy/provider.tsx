import { ReactChildren } from 'common/types';
import { DripsyCustomTheme, DripsyProvider as Provider } from 'dripsy';

import { extendTheme } from './theme';

interface DripsyAppProps {
  children: ReactChildren;
  theme: DripsyCustomTheme;
}

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyProvider(props: DripsyAppProps) {
  const theme = extendTheme(props.theme);

  return <Provider theme={theme as never}>{props.children}</Provider>;
}

export default DripsyProvider;
