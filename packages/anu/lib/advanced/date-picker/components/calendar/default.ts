import { CalendarEditProps } from '../../types';

export const defaultCalendarEditProps: Omit<CalendarEditProps, 'state' | 'onChange' | 'collapsed'> = {
  startLabel: 'Start',
  endLabel: 'End',
  mode: 'single',
};
