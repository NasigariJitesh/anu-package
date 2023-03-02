import { getTheme } from 'config/dripsy';

const getAccordionTheme = () => {
  const themeColors = getTheme().colors;

  const accordionTheme = {
    backgroundColor: themeColors.$surface,
  };

  const iconTheme = {
    marginHorizontal: 4,
  };

  return { accordionTheme, iconTheme };
};

/**
 * Get default styles for collapse and open icon in accordion header
 *
 * @returns - default styles for icon
 */
export const getIconStyles = () => {
  const theme = getAccordionTheme();

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
 * @returns - default styles
 */
export const getAccordionHeaderStyles = () => {
  return {
    icon: getIconStyles(),
    container: getHeaderContainerStyles(),
  };
};
