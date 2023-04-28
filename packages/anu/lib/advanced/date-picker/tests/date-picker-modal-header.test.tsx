import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';

import { DatePickerModalHeader } from '../components';
it('renders DatePickerModalHeader', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <SafeAreaProvider>
          <DatePickerModalHeader locale={'en'} onSave={() => null} onDismiss={() => null} />
        </SafeAreaProvider>
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
