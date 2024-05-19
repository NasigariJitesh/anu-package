import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { TimePicker } from '../components';

it('renders TimePicker', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <TimePicker
          inputType='keyboard'
          focused='hours'
          hours={6}
          minutes={30}
          onChange={() => null}
          onFocusInput={() => null}
          clockSize={256}
        />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
