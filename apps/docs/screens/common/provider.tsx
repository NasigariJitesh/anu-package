import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { SafeAreaView } from 'dripsy';
import { ScrollView } from 'react-native';

/**
 *
 * @param props
 * @param props.children
 */
export default function RootLayout(props: { children: ReactChildren }) {
  const { children } = props;

  return (
    <Provider theme={{}}>
      <ScrollView>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>
    </Provider>
  );
}
