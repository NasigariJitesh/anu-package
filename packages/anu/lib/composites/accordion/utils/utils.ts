import { DripsyFinalTheme } from 'dripsy';

import { getColorInRGBA } from '../../../../common/utils';

const getAccordionTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const accordionTheme = {
    backgroundColor: themeColors?.$surface,
  };

  const iconTheme = {
    marginHorizontal: 4,
  };

  return { accordionTheme, iconTheme };
};

/**
 * Get default styles for collapse and open icon in accordion header
 *
 * @param dripsyTheme
 * @returns - default styles for icon
 */
export const getIconStyles = (dripsyTheme: DripsyFinalTheme) => {
  const theme = getAccordionTheme(dripsyTheme);

  return theme.iconTheme;
};

/**
 * Get default styles container in the header
 *
 * @returns - default styles for icon
 */
export const getHeaderContainerStyles = () => {
  return {
    backgroundColor: 'transparent',
    width: '100%',
  };
};

/**
 * Get default styles for accordion header title
 *
 * @returns - default styles for title
 */
export const getTitleStyles = () => {
  return {
    fontWeight: '400',
  } as const;
};

/**
 * Get default styles for accordion header supporting text
 *
 * @returns - default styles for supporting text
 * @param theme - theme of the app
 */
export const getSupportingTextStyles = (theme: DripsyFinalTheme) => {
  return {
    flex: 1,
    color: getColorInRGBA(theme.colors.$onSurface, 50),
    textAlign: 'center',
  } as const;
};

/**
 * Get default accordion header styles
 *
 * @param theme
 * @returns - default styles
 */
export const getAccordionHeaderStyles = (theme: DripsyFinalTheme) => {
  return {
    icon: getIconStyles(theme),
    container: getHeaderContainerStyles(),
    title: { flex: 1 },
    commonTitleStyles: getTitleStyles(),
    supportingText: getSupportingTextStyles(theme),
  };
};

export const getAccordionStyles = (theme: DripsyFinalTheme) => {
  const container = {
    width: '100%',
    backgroundColor: theme.colors.$surface,
    padding: 16,
    borderRadius: 4,
  };
  const pressable = { transition: 'all 2s linear', flexDirection: 'row', width: '100%' } as const;

  const titleContainer = {
    flex: 1,
  };

  return { container, pressable, titleContainer };
};
