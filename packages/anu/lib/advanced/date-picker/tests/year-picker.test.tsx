import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { YearPicker } from '../components';
it('renders YearPicker', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <YearPicker selectedYear={2022} selectingYear onPressYear={() => null} startYear={1800} endYear={2200} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
