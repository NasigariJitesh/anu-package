import { DripsyCustomTheme, DripsyProvider as Provider } from 'dripsy';

import { ReactChildren } from '../../common/types';
import { ColorMode } from '..';

export type AnuTheme<T> = T & DripsyCustomTheme;

export interface DripsyAppProps<T> {
  children: ReactChildren;
  theme: AnuTheme<T>;
  mode?: ColorMode;
  ssr?: boolean;
}

/**
 * Provider to wrap the app with. This is where the theme is set.
 *
 * @param {ReactChildren} props - The JSX to be rendered inside as children
 */
function DripsyProvider<T>(props: DripsyAppProps<T>) {
  return (
    <Provider theme={props.theme} ssr={props.ssr}>
      {props.children}
    </Provider>
  );
}

export default DripsyProvider;
