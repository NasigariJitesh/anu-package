import { DripsyProvider } from 'config/dripsy';
import { SafeAreaView } from 'dripsy';

import { Home } from './src/screens';

/**
 *
 */
const App = () => {
  return (
    <DripsyProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </DripsyProvider>
  );
};

export default App;
