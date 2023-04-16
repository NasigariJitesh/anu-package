/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { Icon } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import AutoComplete from '../components';
import { AutoCompleteReferenceProps } from '../types';
import { data, ListRenderItem } from './utils';

describe('Testing for Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <AutoComplete
        value='Hey'
        data={data}
        flatListProps={{ data: data, renderItem: ListRenderItem }}
        onChangeText={(text: string) => {}}
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
    <DripsyApp theme={makeTheme({})}>
      <AutoComplete
        value='Hey'
        variant='outlined'
        data={data}
        flatListProps={{ data: data, renderItem: ListRenderItem }}
        onChangeText={(text: string) => {}}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Standard Auto Complete', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <AutoComplete
        value='Hey'
        variant='standard'
        disabled
        data={data}
        flatListProps={{ data: data, renderItem: ListRenderItem }}
        onChangeText={(text: string) => {}}
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
    <DripsyApp theme={makeTheme({})}>
      <AutoComplete
        value='Hey'
        variant='filled'
        data={data}
        flatListProps={{ data: data, renderItem: ListRenderItem }}
        onChangeText={(text: string) => {}}
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
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          onFocus={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onFocus');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          caseSensitive
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          onBlur={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          filterOnChange={() => []}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
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
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          leadingIcon={<Icon name='close' />}
          trailingIcon={<Icon name='close' />}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='outlined'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          leadingIcon={<Icon name='close' />}
          trailingIcon={<Icon name='close' />}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});

describe('Testing for standard Auto Complete Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
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
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          hideDropDownButton
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          caseSensitive={false}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          direction='ltr'
          hideDropDownButton
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'Hello');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onPress');
    fireEvent(screen.getByRole('button'), 'onPress');
    fireEvent(screen.getByRole('button'), 'onPress');
  });
});

describe('Testing for standard Auto Complete with ref', () => {
  const reference = React.createRef<AutoCompleteReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          direction='rtl'
          hideDropDownButton={false}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <AutoComplete
          ref={reference}
          testID='auto-complete-test'
          value='Hey'
          variant='standard'
          data={data}
          flatListProps={{ data: data, renderItem: ListRenderItem }}
          onChangeText={(text: string) => {}}
          direction='ltr'
          hideDropDownButton={false}
          debounce={false}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
