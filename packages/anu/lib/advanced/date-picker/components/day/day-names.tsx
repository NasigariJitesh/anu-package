import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import * as React from 'react';
import { memo, useMemo } from 'react';

import { DayNamesProps } from '../../types';
import { getDayNamesStyles, showWeekDay } from '../../utils';
import DayName from './day-name';

const weekdays = [
  new Date(2023, 3, 2),
  new Date(2023, 3, 3),
  new Date(2023, 3, 4),
  new Date(2023, 3, 5),
  new Date(2023, 3, 6),
  new Date(2023, 3, 7),
  new Date(2023, 3, 8),
];

/**
 *
 * @param props
 */
const DayNames = (props: DayNamesProps) => {
  const { disableWeekDays, locale } = props;

  const theme = useTheme();
  const styles = getDayNamesStyles(theme);

  const shortDayNames = useMemo<string[]>(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: 'narrow',
    });
    return weekdays.map((date) => formatter.format(date));
  }, [locale]);

  return (
    <Container disableGutters style={styles.dayNames} pointerEvents={'none'}>
      {shortDayNames
        .filter((_, dayIndex) => showWeekDay(dayIndex, disableWeekDays))
        .map((dayName, index) => (
          <DayName key={`${dayName}_${index}`} label={dayName} />
        ))}
    </Container>
  );
};

export default memo(DayNames);
