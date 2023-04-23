import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { CalendarEdit } from '../components';

it('renders CalendarEdit', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <CalendarEdit
          mode={'single'}
          state={{
            startDate: new Date('01/01/2022'),
            endDate: new Date('01/01/2022'),
            date: new Date('01/01/2022'),
            dates: [new Date('01/01/2022')],
          }}
          collapsed={false}
          onChange={() => null}
          validRange={undefined}
          locale={'en'}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders CalendarEdit - range', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <CalendarEdit
          mode={'range'}
          state={{
            startDate: new Date('01/01/2022'),
            endDate: new Date('01/01/2022'),
            date: new Date('01/01/2022'),
            dates: [new Date('01/01/2022')],
          }}
          collapsed={true}
          onChange={() => null}
          validRange={undefined}
          locale={'en'}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
