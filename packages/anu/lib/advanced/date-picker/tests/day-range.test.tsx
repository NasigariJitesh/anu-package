import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DayRange } from '../components';
it('renders DayRange', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <DayRange inRange leftCrop rightCrop selectColor={'blue'} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
