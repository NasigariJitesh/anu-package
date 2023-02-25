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
 * @param props - Props with Children and custom theme
 */
function DripsyProvider(props: DripsyAppProps) {
  const t = extendTheme(props.theme);

  return <Provider theme={t as never}>{props.children}</Provider>;
}

export default DripsyProvider;
