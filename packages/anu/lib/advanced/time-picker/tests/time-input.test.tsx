import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { TimeInput } from '../components/time-input';
import { clockTypes } from '../types';

it('renders TimeInput', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <TimeInput value={12} clockType={clockTypes.hours} pressed inputType={'picker'} onChanged={() => null} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
