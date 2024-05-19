import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { DatePickerModal } from '../components';
it('renders DatePickerModal', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <DatePickerModal
          locale='en'
          mode='single'
          visible
          onDismiss={() => null}
          date={new Date('01/01/2022')}
          onConfirm={() => null}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
