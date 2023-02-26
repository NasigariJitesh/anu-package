import { makeTheme, Provider } from 'anu';
import { SafeAreaView } from 'dripsy';

import { Home } from './src/screens';

const theme = makeTheme({});

/**
 *
 */
const App = () => {
  return (
    <Provider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
