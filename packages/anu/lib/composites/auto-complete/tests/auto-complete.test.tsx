/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { defaultTheme } from 'anu/config';
import { Icon } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import AutoComplete from '../components';
import { AutoCompleteReferenceProps } from '../types';
import { data, ListRenderItem } from './utils';

describe('Testing for Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AutoComplete
        value='Hey'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
        caseSensitive={false}
        filterOnChange={() => []}
      />
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
      <AutoComplete
        value='Hey'
        variant='outlined'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Base Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={defaultTheme}>
      <AutoComplete
        value='Hey'
        variant='base'
        disabled
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
      />
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
      <AutoComplete
        value='Hey'
        variant='filled'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
        hideDropDownButton
      />
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
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          onFocus={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          caseSensitive
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          onBlur={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          filterOnChange={() => []}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onPress');
  });
});

describe('Testing for Outlined Auto Complete with ref', () => {
  const reference = React.createRef<AutoCompleteReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
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
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
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

describe('Testing for base Auto Complete Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          debounce
          direction='rtl'
          hideDropDownButton
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          hideDropDownButton
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          caseSensitive={false}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          direction='ltr'
          hideDropDownButton
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value=''
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onPress');

    fireEvent(screen.getByRole('button'), 'onPress');
    fireEvent(screen.getByRole('button'), 'onPress');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          testID='auto-complete-test'
          value=''
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onPress');

    fireEvent(screen.getByRole('button'), 'onPress');
    fireEvent(screen.getByRole('button'), 'onPress');
  });
});

describe('Testing for base Auto Complete with ref', () => {
  const reference = React.createRef<AutoCompleteReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          direction='rtl'
          hideDropDownButton={false}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          direction='ltr'
          hideDropDownButton={false}
          toggleShowResults={() => {}}
          debounce={false}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={defaultTheme}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='base'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          direction='ltr'
          debounce={false}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
