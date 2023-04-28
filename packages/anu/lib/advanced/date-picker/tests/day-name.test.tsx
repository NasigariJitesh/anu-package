import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DayName } from '../components';
it('renders DayName', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <DayName label={'Monday'} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
