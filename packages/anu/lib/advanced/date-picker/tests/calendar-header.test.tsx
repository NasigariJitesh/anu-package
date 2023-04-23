import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { CalendarHeader } from '../components';
it('renders CalendarHeader', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <CalendarHeader locale={'en'} onPrev={() => null} onNext={() => null} scrollMode={'vertical'} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
