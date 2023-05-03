/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { Options, Typography } from 'anu/lib';
import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../components';
import { SearchBarReferenceProps } from '../types';
import { data } from './utils';

const ListRenderItem = ({ item }: { item: Options }) => {
  return <Typography.Body>{item.value as string} </Typography.Body>;
};

describe('Testing for Search Bar', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <SearchBar
        value='Hey'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
        caseSensitive={true}
        filterOnChange={() => []}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Standard Search Bar', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <SearchBar
        value='Hey'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
        caseSensitive={false}
        type='docked'
        filterOnChange={() => []}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Filled Search Bar', () => {
  const tree = renderer.create(
    <DripsyApp theme={makeTheme({})}>
      <SearchBar
        value='Hey'
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        onChangeText={() => {}}
        caseSensitive={false}
        type='full-screen'
        filterOnChange={() => []}
      />
    </DripsyApp>,
  );

  const result = tree.toJSON();

  it('Render Component', () => {
    expect(result).toMatchSnapshot();
  });
});

describe('Testing for Outlined Search Bar Events without ref', () => {
  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='full-screen'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onFocus');
    const buttons = screen.getAllByRole('button');
    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'abc');
    fireEvent(buttons[1]!, 'onPress');
    fireEvent(buttons[0]!, 'onPress');
  });

  it('should trigger focus handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
          onFocus={() => {}}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onFocus');
    const buttons = screen.getAllByRole('button');
    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'abc');
    fireEvent(buttons[0]!, 'onPress');
  });

  it('should trigger blur handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onBlur');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', 'Hello');
  });

  it('should trigger change text handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onChangeText', '');
  });

  it('should trigger press handler', () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('auto-complete-test'), 'onPress');
  });
});

describe('Testing for Outlined Search Bar with ref', () => {
  const reference = React.createRef<SearchBarReferenceProps>();

  it('Focus using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          testID='auto-complete-test'
          ref={reference}
          type='full-screen'
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
  });

  it('Blur using ref', async () => {
    render(
      <DripsyApp theme={makeTheme({})}>
        <SearchBar
          ref={reference}
          value='Hey'
          data={data}
          flatListProps={{ renderItem: ListRenderItem }}
          onChangeText={() => {}}
          caseSensitive={false}
          type='docked'
          filterOnChange={() => []}
        />
      </DripsyApp>,
    );

    reference.current?.focus();
    reference.current?.blur();
  });
});
