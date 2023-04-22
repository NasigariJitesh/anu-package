import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';
import { AnuSnackbarProvider } from 'anu/lib';

import { Home } from './src/screens';

const theme = makeTheme({}, 'dark');

/**
 *
 */
const App = () => {
  return (
    <Provider theme={theme}>
      {/* <AnuLocalizationProvider default='en'> */}
      <AnuSnackbarProvider>
        <Home />
      </AnuSnackbarProvider>
      {/* </AnuLocalizationProvider> */}
    </Provider>
  );
};

export default App;
