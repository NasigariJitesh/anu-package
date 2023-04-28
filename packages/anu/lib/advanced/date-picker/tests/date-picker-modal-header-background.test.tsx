import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';

import { DatePickerModalContentHeader, DatePickerModalHeader, DatePickerModalHeaderBackground } from '../components';

it('renders DatePickerModalHeaderBackground', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <SafeAreaProvider>
          <DatePickerModalHeaderBackground>
            <DatePickerModalHeader locale='en' onSave={() => null} onDismiss={() => null} />
            <DatePickerModalContentHeader
              state={{
                startDate: new Date('01/01/2022'),
                endDate: new Date('01/01/2022'),
                date: new Date('01/01/2022'),
                dates: [new Date('01/01/2022')],
              }}
              mode={'range'}
              collapsed
              onToggle={() => null}
              locale={'en'}
            />
          </DatePickerModalHeaderBackground>
        </SafeAreaProvider>
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
