import { ReactChildren } from 'common/types';
import { DripsyCustomTheme, DripsyProvider as Provider } from 'dripsy';

import { ColorMode } from './index';

interface DripsyAppProps {
  children: ReactChildren;
  theme: DripsyCustomTheme;
  mode?: ColorMode;
}

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyProvider(props: DripsyAppProps) {
  return <Provider theme={props.theme}>{props.children}</Provider>;
}

export default DripsyProvider;
