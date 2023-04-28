import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { Calendar } from '../components';
it('renders Calendar', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <Calendar
          locale='en'
          mode={'single'}
          startDate={new Date('01/01/2022')}
          endDate={new Date('01/01/2022')}
          date={new Date('01/01/2022')}
          onChange={() => null}
          dates={[]}
          dateMode={'start'}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
