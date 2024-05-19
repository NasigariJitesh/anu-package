/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import { Icon } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import PhoneInput from '../components';
import { PhoneInputReferenceProps } from '../types';

describe('Testing for Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <PhoneInput value='+919988' onChangeText={() => {}} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <PhoneInput defaultCountryCode='+91' value='' variant='outlined' onChangeText={() => {}} />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <PhoneInput defaultCountryCode='+1829' value='' variant='filled' onChangeText={() => {}} error />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Auto Complete Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          testID='phone-input-test'
          defaultCountryCode='+91'
          value=''
          variant='filled'
          onChangeText={() => {}}
          onFocus={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onFocus');
  });

  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='' variant='filled' onChangeText={() => {}} onFocus={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='' variant='filled' onChangeText={() => {}} onBlur={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          testID='phone-input-test'
          value='+919988'
          variant='filled'
          onChangeText={() => {}}
          error
          errorMessage={'Error Message 1'}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+1415963258');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          testID='phone-input-test'
          value='+919988'
          variant='filled'
          onChangeText={() => {}}
          error
          errorMessage={['Error Message 1', 'Error Message 2']}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+1');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          testID='phone-input-test'
          value='+919988'
          variant='filled'
          onChangeText={() => {}}
          error
          errorMessage={['Error Message 1', 'Error Message 2']}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+1 829-893-4233');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='+919988' variant='filled' onChangeText={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+9191212121');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='+919988' variant='filled' onChangeText={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+919121212111111111');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='+919988' variant='filled' onChangeText={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '+919121');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          testID='phone-input-test'
          value='+1 211222222222222222222222'
          variant='filled'
          onChangeText={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onChangeText', '');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='+919988' variant='filled' onChangeText={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('phone-input-test'), 'onPress');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput testID='phone-input-test' value='' variant='filled' onChangeText={() => {}} />
      </DripsyApp>,
    );

    fireEvent(screen.getByRole('button'), 'onPress');
    fireEvent(screen.getByTestId('Afghanistan+93'), 'onPress');
  });
});

describe('Testing for Outlined Auto Complete with ref', () => {
  const reference = React.createRef<PhoneInputReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          ref={reference}
          testID='phone-input-test'
          value='+919988'
          variant='filled'
          onChangeText={() => {}}
          leadingIcon={<Icon name='close' />}
          trailingIcon={<Icon name='close' />}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <PhoneInput
          ref={reference}
          testID='phone-input-test'
          value='+919988'
          variant='filled'
          onChangeText={() => {}}
          leadingIcon={<Icon name='close' />}
          trailingIcon={<Icon name='close' />}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
