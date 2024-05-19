/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../components';
import { TextFieldReferenceProps } from '../types';

describe('Testing for Default text field', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' label='' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled text field', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='filled' label='' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled text field - with error', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='filled' error={true} label='' />
    </DripsyApp>,
  );
  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled text field - with error message', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='filled' error={true} errorMessage={['Error 1', 'Error 2']} label='' />
    </DripsyApp>,
  );
  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled text field - disabled', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <TextField value='Hey' variant='filled' error={true} errorMessage={'Error 1'} label='' disabled />
    </DripsyApp>,
  );
  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled Text field Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='filled' label='TextField' testID='text-field-test' error />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='filled' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='filled' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='' variant='filled' label='TextField' testID='text-field-test' />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('text-field-test'), 'onPress');
  });
});

describe('Testing for Filled Text field with ref', () => {
  const reference = React.createRef<TextFieldReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='Hey' variant='filled' label='Hey' ref={reference} />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <TextField value='Hey' variant='filled' label='Hey' ref={reference} testID='text-field-test' />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
