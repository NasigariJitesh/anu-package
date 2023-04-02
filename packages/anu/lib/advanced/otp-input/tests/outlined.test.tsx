import 'setimmediate';

import { act, fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { TextFieldReferenceProps } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import OtpInput from '..';

describe('Testing for OTP Field', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <OtpInput numberOfDigits={4} value='' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for OTP Field Outlined', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <OtpInput numberOfDigits={4} value='' variant='outlined' />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Otp field Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );

    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onFocus'));
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );

    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onBlur'));
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() => {
      fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', '');
      fireEvent(screen.getByTestId('text-field-test-field-2'), 'onChangeText', '');
    });
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', '&'));
  });

  it('should trigger change text handler - numeric', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput
          numberOfDigits={4}
          value=''
          variant='outlined'
          testID='text-field-test'
          type='numeric'
          onValueChange={(value) => console.log(value)}
        />
      </DripsyApp>,
    );
    act(() => {
      fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', '9');
      fireEvent(screen.getByTestId('text-field-test-field-4'), 'onChangeText', '9');
    });
  });

  it('should trigger change text handler - numeric - multidigit', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' type='numeric' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', '99'));
  });

  it('should trigger change text handler - alphabetic', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' type='alphabetic' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', 'a'));
  });

  it('should trigger change text handler - alphabetic - multidigit', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' type='alphabetic' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', 'Ac'));
  });

  it('should trigger change text handler - alphanumeric', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' type='alphanumeric' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', '0'));
  });

  it('should trigger change text handler - alphanumeric - multidigit', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' type='alphanumeric' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onChangeText', 'A9'));
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() => fireEvent(screen.getByTestId('text-field-test-field-1'), 'onPress'));
  });

  it('should trigger keypress handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() => {
      fireEvent(screen.getByTestId('text-field-test-field-3'), 'onKeyPress', { nativeEvent: { key: 'Backspace' } });
    });
  });

  it('should trigger keypress handler for first input', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() => {
      fireEvent(screen.getByTestId('text-field-test-field-1'), 'onKeyPress', { nativeEvent: { key: 'Backspace' } });
    });
  });

  it('should trigger keypress handler and onSubmit', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput
          numberOfDigits={4}
          value='1234'
          variant='outlined'
          testID='text-field-test'
          onSubmit={(value) => console.log(value)}
        />
      </DripsyApp>,
    );
    act(() =>
      fireEvent(screen.getByTestId('text-field-test-field-3'), 'onKeyPress', { nativeEvent: { key: 'Enter' } }),
    );
  });

  it('should trigger keypress handler without onSubmit', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='1234' variant='outlined' testID='text-field-test' />
      </DripsyApp>,
    );
    act(() =>
      fireEvent(screen.getByTestId('text-field-test-field-3'), 'onKeyPress', { nativeEvent: { key: 'Enter' } }),
    );
  });
});

describe('Testing for Outlined Otp field Events with ref', () => {
  const reference = React.createRef<TextFieldReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput numberOfDigits={4} value='' variant='outlined' testID='text-field-test' ref={reference} />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <OtpInput
          numberOfDigits={4}
          value=''
          variant='outlined'
          testID='text-field-test'
          error
          errorMessage={['error']}
          ref={reference}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
