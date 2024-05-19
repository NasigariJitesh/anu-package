import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import Slider from '..';
describe('Testing for Discrete Slider', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Slider value={1} minimumValue={0} maximumValue={10} step={2} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Discrete Slider with track marks', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Slider value={1} minimumValue={0} maximumValue={10} step={2} trackMarks={[4, 8]} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Discrete Slider Disabled', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <Slider value={1} minimumValue={0} maximumValue={10} step={2} disabled />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
