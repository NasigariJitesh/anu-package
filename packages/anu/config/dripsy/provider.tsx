import { DripsyBaseTheme, DripsyProvider as Provider } from 'dripsy';

import { ReactChildren } from '../../common/types';
import { ColorMode } from '..';
import { extendTheme } from './theme';

export interface DripsyAppProps {
  children: ReactChildren;
  theme: DripsyBaseTheme;
  mode?: ColorMode;
  ssr?: boolean;
}

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyProvider(props: DripsyAppProps) {
  const theme = extendTheme(props.theme, props.mode);

  return (
    <Provider theme={theme} ssr={props.ssr}>
      {props.children}
    </Provider>
  );
}

export default DripsyProvider;
