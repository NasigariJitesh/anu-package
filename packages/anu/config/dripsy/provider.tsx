import { ReactChildren } from 'common/types';
import { DripsyCustomTheme, DripsyProvider as Provider } from 'dripsy';

import { ColorMode } from './index';

export interface DripsyAppProps {
  children: ReactChildren;
  theme: DripsyCustomTheme;
  mode?: ColorMode;
  ssr?: boolean;
}

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyProvider(props: DripsyAppProps) {
  return (
    <Provider theme={props.theme} ssr={props.ssr}>
      {props.children}
    </Provider>
  );
}

export default DripsyProvider;
