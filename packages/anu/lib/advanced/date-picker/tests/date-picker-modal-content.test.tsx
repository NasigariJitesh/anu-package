import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';

import { DatePickerModalContent } from '../components';

it('renders DatePickerModalContent', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <SafeAreaProvider>
          <DatePickerModalContent
            locale={'en'}
            mode='range'
            onDismiss={() => null}
            startDate={new Date('01/01/2022')}
            endDate={new Date('01/02/2022')}
            onConfirm={() => null}
          />
        </SafeAreaProvider>
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
