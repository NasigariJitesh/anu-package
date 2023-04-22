import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import * as React from 'react';
import { memo, useMemo } from 'react';

import { DayNamesProps } from '../../types';
import { getDayNamesStyles, showWeekDay } from '../../utils';
import DayName from './day-name';

const weekdays = [
  new Date(2023, 5, 1),
  new Date(2023, 5, 2),
  new Date(2023, 5, 3),
  new Date(2023, 5, 4),
  new Date(2023, 5, 5),
  new Date(2023, 5, 6),
  new Date(2023, 5, 7),
];

/**
 *
 * @param props
 */
const DayNames = (props: DayNamesProps) => {
  const { disableWeekDays, locale } = props;

  const theme = useTheme();
  const styles = getDayNamesStyles();

  const shortDayNames = useMemo<string[]>(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'narrow',
    });
    return weekdays.map((date) => formatter.format(date));
  }, [locale]);

  return (
    <Container
      disableGutters
      style={[styles.dayNames, { backgroundColor: theme.colors.$surface }]}
      pointerEvents={'none'}
    >
      {shortDayNames
        .filter((_, dayIndex) => showWeekDay(dayIndex, disableWeekDays))
        .map((dayName, index) => (
          <DayName key={`${dayName}_${index}`} label={dayName} />
        ))}
    </Container>
  );
};

export default memo(DayNames);
