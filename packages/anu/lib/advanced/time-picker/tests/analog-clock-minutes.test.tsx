import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnalogClockMinutes } from '../components/analog-clock';

it('renders AnalogClockMinutes', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <AnalogClockMinutes circleSize={200} minutes={45} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
