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
    justifyContent: 'space-between',
  } as const;

  return { animated, header };
};

export const getDatePickerModalHeaderBackgroundStyles = () => {
  const animated = {
    elevation: 4,
    width: '100%',
  };

  return { animated };
};

/**
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

export const getDatePickerModalContentHeaderStyles = () => {
  const fill = {
    flex: 1,
  };
  const header = {
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    paddingLeft: 24,
    paddingRight: 12,
    width: '100%',
  } as const;
  const headerContentContainer = { flexDirection: 'row', marginTop: 5 } as const;
  const headerSeparator = {
    fontSize: 25,
    paddingLeft: 6,
    paddingRight: 6,
  };
  const label = { fontSize: 13, letterSpacing: 1 };
  const rangeHeaderText = { fontSize: 25 };

  const singleHeaderText = { fontSize: 25 };

  return { fill, header, headerContentContainer, rangeHeaderText, singleHeaderText, headerSeparator, label };
};

export const getAbsoluteCrossViewStyles = () => {
  const calendar = {
    flex: 1,
  };
  const calendarEdit = {
    left: 0,

    position: 'absolute',
    right: 0,
  } as const;
  const root = { flex: 1 };

  return { root, calendar, calendarEdit };
};

export const getDatePickerModalStyles = () => {
  const modalBackground = {
    flex: 1,
  };
  const modalContent = {
    flex: 1,
    width: '100%',
  } as const;
  const modalContentBig = {
    borderRadius: 10,
    maxHeight: 800,
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  } as const;
  const modalRoot = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } as const;

  return { modalBackground, modalContent, modalContentBig, modalRoot };
};
