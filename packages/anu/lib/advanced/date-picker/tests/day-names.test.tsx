import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DayNames } from '../components';

it('renders DayNames', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <DayNames locale={'en'} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
