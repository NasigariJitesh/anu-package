import { DripsyProvider } from 'config/dripsy';
import { SafeAreaView } from 'dripsy';
import { Container } from 'lib/primitives';

import { Home } from './src/screens';
import StorybookUI from './storybook';

const LOAD_STORYBOOK = 'true';

const Screen = () => {
  return LOAD_STORYBOOK === 'true' ? (
    <StorybookUI />
  ) : (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

/**
 *
 */
const App = () => {
  return (
    <DripsyProvider>
      <Screen />
    </DripsyProvider>
  );
};

export default App;
