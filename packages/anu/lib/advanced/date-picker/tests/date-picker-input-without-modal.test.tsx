import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DatePickerInputWithoutModal } from '../components';
it('renders DatePickerInput', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <DatePickerInputWithoutModal
          locale={'en'}
          value={new Date('12/26/2022')}
          onChange={() => null}
          inputMode='start'
          autoComplete={'birthdate-full'}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
