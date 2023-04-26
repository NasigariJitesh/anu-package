import { DripsyFinalTheme } from 'dripsy';

import { inputTypes, PossibleInputTypes } from '../types';

export const getTimeInputStyles = (
  theme: DripsyFinalTheme,
  color: string,
  backgroundColor: string,
  highlighted: boolean,
  inputType: PossibleInputTypes,
) => {
  const buttonOverlay = { borderRadius: 6, overflow: 'hidden' } as const;

  const input = {
    backgroundColor,
    borderColor: highlighted ? theme.colors.$primary : undefined,
    borderRadius: 6,
    borderWidth: highlighted ? 2 : 0,
    color: color,
    fontSize: inputType === inputTypes.keyboard ? theme.fontSizes[1] : theme.fontSizes[0],
    lineHeight: inputType === inputTypes.keyboard ? theme.lineHeights[1] : theme.lineHeights[0],
    height: inputType === inputTypes.keyboard ? 72 : 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 96,
  } as const;

  const root = { height: 80, position: 'relative', width: 96 } as const;

  return { buttonOverlay, input, root };
};

export const getTimeInputsStyles = (theme: DripsyFinalTheme, inputType: PossibleInputTypes) => {
  const column = {
    flexDirection: 'column',
  } as const;

  const spaceBetweenInputsAndSwitcher = { width: 12, height: 16 };

  const inputRootContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  const inputRootContainerLandscape = {
    flex: 1,
    height: '100%',
    paddingTop: 32,
    flexDirection: 'column',
  } as const;

  const inputContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  const hoursAndMinutesSeparator = {
    fontSize: 65,
    width: 24,
    alignItems: 'center',
    marginBottom: inputType === 'keyboard' ? 24 : 0,
  } as const;
  const spaceDot = {
    flex: 1,
  };
  const dot = {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: theme.colors.$onSurface,
  };
  const betweenDot = {
    height: 12,
  };

  return {
    column,
    spaceBetweenInputsAndSwitcher,
    inputContainer,
    hoursAndMinutesSeparator,
    spaceDot,
    dot,
    betweenDot,
    inputRootContainer,
    inputRootContainerLandscape,
  };
};

export const getSwitcherStyles = (
  theme: DripsyFinalTheme,
  inputType: PossibleInputTypes,
  color?: string,
  backgroundColor?: string,
  horizontal?: boolean,
) => {
  const root = {
    borderWidth: 1,
    overflow: 'hidden',
    width: horizontal ? '100%' : 52,
    borderColor: theme.colors.$outline,
    borderRadius: 6,
    // eslint-disable-next-line unicorn/no-nested-ternary
    height: horizontal ? 38 : inputType === inputTypes.keyboard ? 72 : 80,
    marginBottom: inputType === 'keyboard' ? 24 : 0,
    flexDirection: horizontal ? 'row' : 'column',
  } as const;

  const switchButton = {
    flex: 1,
    width: '100%',
    height: '100%',
  };

  const switchButtonInner = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor ?? theme.colors.$surfaceContainerHigh,
  } as const;

  const switchSeparator = {
    backgroundColor: theme.colors.$outline,
    height: horizontal ? 38 : 1,
    width: horizontal ? 1 : 52,
  };

  const switchText = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    color: color ?? theme.colors.$onSurface,
    textAlign: 'center',
    textAlignVertical: 'center',
  } as const;

  return { root, switchButton, switchSeparator, switchButtonInner, switchText };
};
