/* eslint-disable unicorn/prefer-module */
import 'setimmediate';

import { fireEvent, render, screen } from '@testing-library/react-native';
import DripsyApp from 'anu/common/context/anu-provider';
import { makeTheme } from 'anu/config';
import { AnuSnackbarProvider, Button, useSnackbar } from 'anu/lib';
import React from 'react';

describe('Testing for Snackbar', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('Render Component', () => {
    const { add } = useSnackbar();

    render(
      <DripsyApp theme={makeTheme({})}>
        <AnuSnackbarProvider defaultSnackbarConfiguration={{ numberOfLines: 2, duration: 3000, content: '' }}>
          <Button.Text
            title='Add Snackbar'
            onPress={() => {
              add({
                content: 'First Snackbar',
              });
            }}
          />
        </AnuSnackbarProvider>
      </DripsyApp>,
    );
  });
});

describe('Testing for snackbar open', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  it('should trigger snackbar open', () => {
    const { add } = useSnackbar();

    render(
      <DripsyApp theme={makeTheme({})}>
        <AnuSnackbarProvider defaultSnackbarConfiguration={{ numberOfLines: 2, duration: 3000, content: '' }}>
          <Button.Text
            testID='button-1'
            title='Add Snackbar'
            onPress={() => {
              add({
                content: 'First Snackbar',
              });
            }}
          />
        </AnuSnackbarProvider>
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('button-1'), 'onPress');
  });

  it('should trigger snackbar open and add to queue', () => {
    const { add } = useSnackbar();

    render(
      <DripsyApp theme={makeTheme({})}>
        <AnuSnackbarProvider defaultSnackbarConfiguration={{ numberOfLines: 2, duration: 3000, content: '' }}>
          <Button.Text
            testID='button-1'
            title='Add Snackbar'
            onPress={() => {
              add({
                content: 'First Snackbar',
              });
            }}
          />
          <Button.Text
            testID='button-2'
            title='Add Snackbar'
            onPress={() => {
              add({
                content: 'Second Snackbar',
                action: {
                  title: 'Close',
                },
              });
            }}
          />
        </AnuSnackbarProvider>
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('button-1'), 'onPress');
    fireEvent(screen.getByTestId('button-2'), 'onPress');
  });

  it('should trigger snackbar open and add to queue', () => {
    const { add, remove, close } = useSnackbar();

    render(
      <DripsyApp theme={makeTheme({})}>
        <AnuSnackbarProvider defaultSnackbarConfiguration={{ numberOfLines: 2, duration: 3000, content: '' }}>
          <Button.Text
            testID='button-1'
            title='Add Snackbar'
            onPress={() => {
              add({
                content: 'First Snackbar',
                action: {
                  title: 'Close',
                  testID: 'button-2',
                  onPress: close,
                },
              });
            }}
          />
          <Button.Text
            testID='button-3'
            title='Add another Snackbar'
            onPress={() => {
              add({
                content: 'Second Snackbar',
                action: {
                  title: 'Close',
                },
              });
            }}
          />
          <Button.Text
            testID='button-4'
            title='Add another Snackbar'
            onPress={() => {
              remove({
                content: 'Second Snackbar',
                action: {
                  title: 'Close',
                },
              });
            }}
          />
        </AnuSnackbarProvider>
      </DripsyApp>,
    );

    fireEvent(screen.getByTestId('button-1'), 'onPress');
    fireEvent(screen.getByTestId('button-2'), 'onPress');
    fireEvent(screen.getByTestId('button-3'), 'onPress');
    fireEvent(screen.getByTestId('button-4'), 'onPress');
  });
});
