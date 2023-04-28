import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnalogClockHours } from '../components/analog-clock';

it('renders AnalogClockHours', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <AnalogClockHours is24Hour hours={12} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
