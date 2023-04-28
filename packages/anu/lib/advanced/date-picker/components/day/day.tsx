/* eslint-disable unicorn/no-nested-ternary */
import { useTheme } from 'anu/config';
import { Container, TouchableRipple, Typography } from 'anu/lib';
import React from 'react';
import { memo, useCallback } from 'react';

import { DayProps } from '../../types';
import { getDayStyles } from '../../utils';
import DayRange from './day-range';

/**
 *
 */
const EmptyDayPure = () => {
  const styles = getDayStyles();
  return <Container disableGutters style={styles.empty} />;
};

/**
 *
 * @param props
 */
const Day = (props: DayProps) => {
  const {
    day,
    month,
    year,
    selected,
    inRange,
    leftCrop,
    rightCrop,
    onPressDate,
    primaryColor,
    selectColor,
    isToday,
    disabled,
  } = props;

  const theme = useTheme();
  const styles = getDayStyles();

  const borderColor = inRange ? theme.colors.$onPrimaryContainer : theme.colors.$primary;

  const textColor = selected
    ? theme.colors.$onPrimary
    : inRange
    ? theme.colors.$onPrimaryContainer
    : isToday
    ? theme.colors.$primary
    : undefined;

  const onPress = useCallback(() => {
    onPressDate(new Date(year, month, day));
  }, [onPressDate, year, month, day]);

  return (
    <Container disableGutters style={[styles.root, disabled && styles.disabled]}>
      <DayRange inRange={inRange} leftCrop={leftCrop} rightCrop={rightCrop} selectColor={selectColor} />
      <TouchableRipple
        testID={`anu-dates-day-${year}-${month}-${day}`}
        disabled={disabled}
        borderless={true}
        onPress={disabled ? undefined : onPress}
        style={[styles.button, { backgroundColor: inRange ? selectColor : undefined }]}
        accessibilityRole='button'
      >
        <Container
          disableGutters
          style={[
            styles.day,
            isToday ? { borderColor: borderColor } : null,
            selected ? { backgroundColor: primaryColor } : null,
          ]}
        >
          <Typography.Body
            style={
              textColor
                ? {
                    color: isToday && selected ? textColor : isToday ? theme.colors.$primary : textColor,
                  }
                : undefined
            }
            selectable={false}
          >
            {day}
          </Typography.Body>
        </Container>
      </TouchableRipple>
    </Container>
  );
};

export const EmptyDay = memo(EmptyDayPure);
export default memo(Day);
