import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { TimePicker } from '../components';

it('renders TimePicker', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={makeTheme({})}>
        <TimePicker
          locale='en'
          inputType='keyboard'
          focused='hours'
          hours={6}
          minutes={30}
          onChange={() => null}
          onFocusInput={() => null}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
