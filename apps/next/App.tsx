import 'intl';
import 'intl/locale-data/jsonp/en';
import 'react-native-gesture-handler';

import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';
import { AnuSnackbarProvider } from 'anu/lib';
import { SafeAreaView } from 'dripsy';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/screens';

const theme = makeTheme({}, 'dark');

/**
 *
 */
const App = () => {
  return (
    <Provider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <AnuSnackbarProvider>
            <Home />
          </AnuSnackbarProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
