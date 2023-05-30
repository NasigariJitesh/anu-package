import { DripsyFinalTheme } from 'dripsy';

import { ModeType } from '../types';

export const getDatePickerModalHeaderStyles = () => {
  const animated = {
    elevation: 4,
    flexDirection: 'row',
    width: '100%',
  } as const;
  const header = {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    elevation: 0,
    flex: 1,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 12,
    justifyContent: 'space-between',
  } as const;

  return { animated, header };
};

export const getDatePickerModalButtonsStyles = (theme: DripsyFinalTheme) => {
  const animated = {
    elevation: 4,
    flexDirection: 'row',
    width: '100%',
  } as const;

  const container = {
    backgroundColor: theme.colors.$surfaceContainerHigh,
    flexDirection: 'row',
    elevation: 0,
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'flex-end',
  } as const;

  return { animated, container };
};

export const getDatePickerModalHeaderBackgroundStyles = (theme: DripsyFinalTheme) => {
  const animated = {
    elevation: 4,
    width: '100%',
    backgroundColor: theme.colors.$surfaceContainerHigh,
  };

  return { animated };
};

/**
 * To get label of the date picker modal
 *
 * @param mode
 * @param configuredLabel
 */
export const getModalLabel = (mode: ModeType, configuredLabel?: string) => {
  if (configuredLabel) {
    return configuredLabel;
  }

  switch (mode) {
    case 'range': {
      return 'Select Range';
    }
    case 'multiple': {
      return 'Select Multiple';
    }
    case 'single': {
      return 'Select Single';
    }
    default: {
      return '...?';
    }
  }
};

export const getDatePickerModalContentHeaderStyles = (theme: DripsyFinalTheme) => {
  const fill = {
    flex: 1,
  };
  const header = {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 4,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: theme.colors.$outline,
  } as const;

  const headerContentContainer = {
    flexDirection: 'row',
    marginTop: 8,
  } as const;

  const headerContentContainerSingle = {
    flexDirection: 'row',
    marginTop: 36,
  } as const;

  const headerSeparator = {
    fontSize: theme.fontSizes[3],
    lineHeight: theme.lineHeights[3],
    color: theme.colors.$onSurfaceVariant,
  };

  const label = {
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
    color: theme.colors.$onSurfaceVariant,
  };

  const headerText = {
    fontSize: theme.fontSizes[3],
    lineHeight: theme.lineHeights[3],
    color: theme.colors.$onSurfaceVariant,
  };

  const icon = { height: 48, width: 48 };

  return {
    fill,
    header,
    headerContentContainer,
    headerText,
    headerSeparator,
    label,
    icon,
    headerContentContainerSingle,
  };
};

export const getAnimatedCrossViewStyles = (theme: DripsyFinalTheme, collapsed: boolean) => {
  const calendar = {
    flex: 1,
    width: '100%',
  };
  const calendarEdit = {
    left: 0,
    position: 'absolute',
    right: 0,
  } as const;
  const root = {
    width: '100%',
    backgroundColor: theme.colors.$surfaceContainerHigh,
    minHeight: 100,
    flex: collapsed ? 1 : 0,
  };

  return { root, calendar, calendarEdit };
};

export const getDatePickerModalStyles = (
  theme: DripsyFinalTheme,
  mode: 'range' | 'single' | 'multiple',
  collapsed: boolean,
) => {
  const modalBackground = collapsed
    ? {
        flex: 1,
      }
    : {};
  const modalContent = {
    ...(collapsed ? { flex: 1 } : {}),
    maxHeight: mode === 'single' ? 600 : undefined,
    width: '100%',
    borderRadius: 16,
    shadowColor: theme.colors?.$shadow as string,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  } as const;

  const modalContentFullScreen = {
    width: '100%',
    height: '100%',
  } as const;

  const modalContentBig = {
    maxHeight: mode === 'single' ? 600 : 650,
    maxWidth: 360,
    overflow: 'hidden',
    width: '100%',
  } as const;

  const modalRoot = {
    alignItems: 'center',
    ...(collapsed ? { flex: 1 } : {}),
    justifyContent: 'center',
  } as const;

  return { modalBackground, modalContent, modalContentBig, modalRoot, modalContentFullScreen };
};
