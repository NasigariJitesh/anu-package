import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnalogClockMinutes } from '../components/analog-clock';

it('renders AnalogClockMinutes', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <AnalogClockMinutes minutes={45} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
