import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnalogClockHours } from '../components/analog-clock';

it('renders AnalogClockHours', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <AnalogClockHours circleSize={200} is24Hour hours={12} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
