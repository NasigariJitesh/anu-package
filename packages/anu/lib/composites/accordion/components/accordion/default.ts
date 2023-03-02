import { AccordionProps } from '../../types';

export const defaultProps: Omit<AccordionProps, 'title' | 'children'> & { collapse: boolean } = {
  collapse: true,
};
