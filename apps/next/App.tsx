import 'react-native-gesture-handler';

import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';
import { SafeAreaView } from 'dripsy';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/screens';

const theme = makeTheme({});

/**
 *
 */
const App = () => {
  return (
    <Provider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
