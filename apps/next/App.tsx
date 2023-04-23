import 'intl';
import 'intl/locale-data/jsonp/en';

import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';

import { Home } from './src/screens';

const theme = makeTheme({}, 'dark');

/**
 *
 */
const App = () => {
  return (
    <Provider theme={theme}>
      {/* <AnuLocalizationProvider default='en'> */}
      <Home />
      {/* </AnuLocalizationProvider> */}
    </Provider>
  );
};

export default App;
