/* eslint-disable react-native/no-inline-styles */
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import Slider from '..';
describe('Testing for Continuous Slider', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Slider value={1} minimumValue={0} maximumValue={10} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Continuous Slider with track marks', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Slider value={1} minimumValue={0} maximumValue={10} trackMarks={[3, 6]} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Continuous Slider with styles', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Slider
        value={1}
        minimumValue={0}
        maximumValue={10}
        activeTrackMarksColor='red'
        inactiveTrackMarksColor='yellow'
        activeTrackTintColor='yellow'
        inactiveTrackTintColor='red'
        thumbTintColor='pink'
        containerStyle={{ height: 100 }}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Continuous Slider with range', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <Slider
        value={[2, 6]}
        minimumValue={0}
        maximumValue={6}
        thumbSize={30}
        thumbTouchSize={{ width: 40, height: 40 }}
        containerStyle={{ height: 100 }}
        activeTrackStyle={{ height: 10 }}
        inactiveTrackStyle={{ height: 10 }}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});
