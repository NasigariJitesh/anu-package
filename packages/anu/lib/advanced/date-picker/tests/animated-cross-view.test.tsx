import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { AnimatedCrossView, Calendar, CalendarEdit } from '../components';

it('renders collapsed AnimatedCrossView', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <AnimatedCrossView
          collapsed
          calendar={
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
          }
          calendarEdit={
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
          }
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
