import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import { TimeInput } from '../components';

it('renders TimeInputs', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <TimeInput
          inputType='keyboard'
          hours={12}
          minutes={45}
          is24Hour
          onChange={() => null}
          onFocusInput={() => null}
          focused='hours'
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
