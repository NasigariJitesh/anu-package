import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AutoSizer } from '../components';

it('renders AutoSizer', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <AutoSizer>{() => <></>}</AutoSizer>
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
