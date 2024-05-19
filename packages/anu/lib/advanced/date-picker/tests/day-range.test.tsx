import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DayRange } from '../components';
it('renders DayRange', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <DayRange inRange leftCrop rightCrop />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
