import { DripsyFinalTheme } from 'dripsy';

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
  };
};

/**
 * Get default styles for accordion children container
 *
 * @returns - default styles for icon
 */
export const getChildrenStyles = () => {
  return {
    backgroundColor: 'transparent',
  };
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
  };
};
