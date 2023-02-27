import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { SafeAreaView } from 'dripsy';

/**
 *
 * @param props
 * @param props.children
 */
export default function RootLayout(props: { children: ReactChildren }) {
  const { children } = props;

  return (
    <SafeAreaView>
      <Provider theme={{}}>{children}</Provider>
    </SafeAreaView>
  );
}
