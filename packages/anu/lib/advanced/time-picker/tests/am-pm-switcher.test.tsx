import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import { AmPmSwitcher } from '../components/time-input';
import { inputTypes } from '../types';

it('renders AmPmSwitcher', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <AmPmSwitcher hours={12} onChange={() => null} inputType={inputTypes.keyboard} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
