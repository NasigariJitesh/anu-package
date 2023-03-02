import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';

/**
 *
 * @param props
 * @param props.children
 */
export default function RootLayout(props: { children: ReactChildren }) {
  const { children } = props;

  return <Provider theme={{}}>{children}</Provider>;
}
