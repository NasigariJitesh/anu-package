import 'setImmediate';

import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import * as React from 'react';
import renderer from 'react-test-renderer';

import TimePickerModal from '../components';

it('renders TimePicker Modal', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <TimePickerModal hours={6} minutes={30} onConfirm={() => null} onDismiss={() => null} visible={true} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders TimePicker Modal', () => {
  const tree = renderer
    .create(
      <DripsyApp theme={defaultTheme}>
        <TimePickerModal hours={6} minutes={30} onConfirm={() => null} onDismiss={() => null} visible={false} />
      </DripsyApp>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
