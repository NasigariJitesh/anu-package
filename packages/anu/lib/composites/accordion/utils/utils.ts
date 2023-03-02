import { getTheme } from 'config/dripsy';

import { AccordionChildrenProps, AccordionHeaderProps } from '../types';

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
 * @param props - Accordion header props
 * @returns - default styles for icon
 */
export const getIconStyles = (props: AccordionHeaderProps) => {
  const theme = getAccordionTheme();

  return theme.iconTheme;
};

/**
 * Get default styles container in the header
 *
 * @param props - Accordion header props
 * @returns - default styles for icon
 */
export const getHeaderContainerStyles = (props: AccordionHeaderProps) => {
  return {
    backgroundColor: 'transparent',
  };
};

/**
 * Get default styles for accordion children container
 *
 * @param props - Accordion children props
 * @returns - default styles for icon
 */
export const getChildrenStyles = (props: AccordionChildrenProps) => {
  return {
    backgroundColor: 'transparent',
  };
};

/**
 * Get default accordion header styles
 *
 * @param props - Accordion header props
 * @returns - default styles
 */
export const getAccordionHeaderStyles = (props: AccordionHeaderProps) => {
  return {
    icon: getIconStyles(props),
    container: getHeaderContainerStyles(props),
  };
};
