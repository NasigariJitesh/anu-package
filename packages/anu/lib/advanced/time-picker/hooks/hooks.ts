import { useTheme } from 'anu/config';
import { useMemo } from 'react';

/**
 *
 * @param highlighted
 */
export function useInputColors(highlighted: boolean) {
  const theme = useTheme();
  const backgroundColor = useMemo<string>(() => {
    if (highlighted) {
      return theme.colors.$primaryContainer;
    }

    return theme.colors.$surfaceContainerHighest;
  }, [highlighted, theme]);

  const color = useMemo<string>(() => {
    if (highlighted) {
      return theme.colors.$onPrimaryContainer;
    }

    return theme.colors.$onSurface;
  }, [highlighted, theme]);

  return { backgroundColor, color };
}

/**
 *
 * @param highlighted
 */
export const useSwitchColors = (highlighted: boolean) => {
  const theme = useTheme();

  const backgroundColor = useMemo<string>(() => {
    if (highlighted) {
      return theme.colors.$tertiaryContainer;
    }
    return theme.colors.$surfaceContainerHigh;
  }, [highlighted, theme]);

  const color = useMemo<string>(() => {
    if (highlighted) {
      return theme.colors.$onTertiaryContainer;
    }
    return theme.colors.$onSurface;
  }, [highlighted, theme]);

  return { backgroundColor, color };
};
