import { useTheme } from 'anu/config';
import { Container, IconButton } from 'anu/lib';
import React, { memo } from 'react';

import { CalendarHeaderProps } from '../../types';
import { getCalendarHeaderStyles } from '../../utils';
import { DayNames } from '../day';

/**
 *
 * @param props
 */
const CalendarHeader = (props: CalendarHeaderProps) => {
  const { scrollMode, onPrev, onNext, disableWeekDays, locale } = props;

  const isHorizontal = scrollMode === 'horizontal';

  const theme = useTheme();
  const styles = getCalendarHeaderStyles();

  return (
    <Container disableGutters style={styles.datePickerHeader} pointerEvents={'box-none'}>
      {isHorizontal ? (
        <Container disableGutters style={styles.buttonContainer} pointerEvents={'box-none'}>
          <Container disableGutters style={styles.spacer} pointerEvents={'box-none'} />

          <Container disableGutters>
            <IconButton
              type='standard'
              icon={{ name: 'chevron-left', props: { color: theme.colors.$scrim } }}
              onPress={onPrev}
            />
          </Container>

          <Container disableGutters>
            <IconButton
              type='standard'
              icon={{ name: 'chevron-right', props: { color: theme.colors.$scrim } }}
              onPress={onNext}
            />
          </Container>
        </Container>
      ) : null}

      <DayNames disableWeekDays={disableWeekDays} locale={locale} />
    </Container>
  );
};

export default memo(CalendarHeader);
