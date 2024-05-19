import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnalogClock } from '../components';

it('renders AnalogClock', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <AnalogClock circleSize={200} hours={12} minutes={30} focused='hours' is24Hour={false} onChange={() => null} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
