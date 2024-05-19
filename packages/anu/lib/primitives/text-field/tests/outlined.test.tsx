/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import { Icon } from '../..';
import TextField from '../components';
import { TextFieldReferenceProps } from '../types';

describe('Testing for Outlined Text field', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='outlined' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Text field with label', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='outlined' label='Hey' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Text field with icons', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField
        value='Hey'
        variant='outlined'
        label='Hey'
        leadingIcon={<Icon name='check' />}
        trailingIcon={<Icon name='profile' />}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Text field Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='outlined' label='TextField' testID='text-field-test' error />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='outlined' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='outlined' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='outlined' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onPress');
  });
});

describe('Testing for Outlined Text field with ref', () => {
  const reference = React.createRef<TextFieldReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='Hey' variant='outlined' label='Hey' ref={reference} />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='Hey' variant='outlined' label='Hey' ref={reference} testID='text-field-test' />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
