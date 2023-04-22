import { useTheme } from 'anu/config';
import { Container, IconButton, TouchableRipple, Typography } from 'anu/lib';
import React, { memo, useMemo } from 'react';

import { useRangeChecker } from '../../hooks';
import { MonthProps } from '../../types';
import {
  getMonthHeight,
  getMonthStyles,
  monthGrid,
  monthHeaderSingleMarginBottom,
  monthHeaderSingleMarginTop,
} from '../../utils';
import {
  addMonths,
  areDatesOnSameDay,
  getDaysInMonth,
  getFirstDayOfMonth,
  getRealIndex,
  isDateBetween,
  showWeekDay,
} from '../../utils';
import Day, { EmptyDay } from '../day';

/**
 *
 * @param props
 */
const Month = (props: MonthProps) => {
  const {
    index,
    mode,
    date,
    dates,
    startDate,
    endDate,
    onPressYear,
    selectingYear,
    onPressDate,
    scrollMode,
    primaryColor,
    selectColor,
    roundness,
    disableWeekDays,
    locale,
    validRange,
  } = props;

  const theme = useTheme();
  const textColorOnPrimary = theme.colors.$onPrimary;

  const { isDisabled, isWithinValidRange } = useRangeChecker(validRange);

  const isHorizontal = scrollMode === 'horizontal';
  const realIndex = getRealIndex(index);

  const styles = getMonthStyles();
  const { monthName, month, year } = useMemo(() => {
    const md = addMonths(new Date(), realIndex);
    const y = md.getFullYear();
    const m = md.getMonth();
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
    });
    return { monthName: formatter.format(md), month: m, year: y };
  }, [realIndex, locale]);

  const grid = useMemo(() => {
    const today = new Date();

    const daysInMonth = getDaysInMonth({ year, month });
    const dayOfWeek = getFirstDayOfMonth({ year, month });
    const emptyDays = dayOfWeek;

    return monthGrid(index).map(({ days, weekGrid }) => {
      return {
        weekIndex: weekGrid,
        generatedDays: days.map((_, dayIndex) => {
          const isFirstWeek = weekGrid === 0;
          const realDayIndex = emptyDays - dayIndex;
          const beforeWeekDay = isFirstWeek && realDayIndex > 0;
          const dayOfMonth = weekGrid * 7 + dayIndex - emptyDays + 1;
          const afterWeekDay = dayOfMonth > daysInMonth;

          const day = new Date(year, month, dayOfMonth);
          const isToday = areDatesOnSameDay(day, today);

          let inRange = false;
          let disabled = isDisabled(day);
          let selected = false;

          let leftCrop = dayOfMonth === 1;
          let rightCrop = dayOfMonth === daysInMonth;

          const isFirstDayOfMonth = dayOfMonth === 1;
          const isLastDayOfMonth = dayOfMonth === daysInMonth;

          switch (mode) {
            case 'range': {
              const selectedStartDay = areDatesOnSameDay(day, startDate);
              const selectedEndDay = areDatesOnSameDay(day, endDate);
              selected = selectedStartDay || selectedEndDay;
              inRange = isDateBetween(day, {
                startDate,
                endDate,
              });
              if (selectedStartDay) {
                leftCrop = true;
              }
              if (selectedEndDay) {
                rightCrop = true;
              }
              if (dayIndex === 0 && !selectedStartDay) {
                leftCrop = false;
              }

              if (dayIndex === 6 && !selectedEndDay) {
                rightCrop = false;
              }

              if ((isFirstDayOfMonth && selectedEndDay) || (isLastDayOfMonth && selectedStartDay)) {
                inRange = false;
              }

              break;
            }
            case 'multiple': {
              const safeDates = dates || [];
              selected = safeDates.some((d) => areDatesOnSameDay(day, d));

              const yesterday = new Date(year, month, dayOfMonth - 1);
              const tomorrow = new Date(year, month, dayOfMonth + 1);

              const yesterdaySelected = safeDates.some((d) => areDatesOnSameDay(d, yesterday));
              const tomorrowSelected = safeDates.some((d) => areDatesOnSameDay(d, tomorrow));

              if (selected) {
                if (tomorrowSelected && yesterdaySelected) {
                  inRange = true;
                }
                if (tomorrowSelected && !yesterdaySelected) {
                  inRange = true;
                  leftCrop = true;
                }

                if (yesterdaySelected && !tomorrowSelected) {
                  inRange = true;
                  rightCrop = true;
                }

                if (isFirstDayOfMonth && !tomorrowSelected) {
                  inRange = false;
                }

                if (isLastDayOfMonth && !yesterdaySelected) {
                  inRange = false;
                }

                if (inRange && !leftCrop && !rightCrop) {
                  selected = false;
                }
              }

              break;
            }
            case 'single': {
              selected = areDatesOnSameDay(day, date);

              break;
            }
            // No default
          }

          const isWithinOptionalValidRange = isWithinValidRange(day);

          if (inRange && !disabled) {
            disabled = false;
          }

          if (!isWithinOptionalValidRange) {
            disabled = true;
          }

          return {
            beforeWeekDay,
            afterWeekDay,
            year,
            month,
            dayOfMonth,
            dayIndex,
            mode,
            selected,
            inRange,
            leftCrop,
            rightCrop,
            isToday,
            disabled,
          };
        }),
      };
    });
  }, [year, month, index, isDisabled, mode, isWithinValidRange, startDate, endDate, dates, date]);

  return (
    <Container disableGutters style={[styles.month, { height: getMonthHeight(scrollMode, index) }]}>
      <Container
        disableGutters
        style={[
          styles.monthHeader,
          isHorizontal
            ? {
                marginTop: monthHeaderSingleMarginTop,
                marginBottom: monthHeaderSingleMarginBottom,
              }
            : null,
        ]}
      >
        <TouchableRipple
          disabled={!isHorizontal}
          onPress={isHorizontal ? () => onPressYear(year) : undefined}
          accessibilityRole='button'
          accessibilityLabel={`${monthName} ${year}`}
          style={[
            styles.yearButton,
            {
              borderRadius: roundness,
            },
          ]}
        >
          <Container
            disableGutters
            style={[
              styles.yearButtonInner,
              {
                borderRadius: roundness,
              },
            ]}
          >
            <Typography.Body
              style={[
                styles.monthLabel,
                {
                  fontSize: theme.fontSizes[7],
                  color: theme.colors.$onSurface,
                },
              ]}
              selectable={false}
            >
              {monthName} {year}
            </Typography.Body>
            <Container disableGutters style={isHorizontal ? styles.opacity1 : styles.opacity0}>
              <IconButton
                type='standard'
                onPress={isHorizontal ? () => onPressYear(year) : undefined}
                icon={{ name: selectingYear ? 'arrow-drop-up' : 'arrow-drop-down' }}
              />
            </Container>
          </Container>
        </TouchableRipple>
      </Container>
      {grid.map(({ weekIndex, generatedDays }) => (
        <Container disableGutters style={styles.week} key={weekIndex}>
          {generatedDays
            .filter((gd) => showWeekDay(gd.dayIndex, disableWeekDays))
            .map((gd) =>
              gd.beforeWeekDay || gd.afterWeekDay ? (
                <EmptyDay key={gd.dayIndex} />
              ) : (
                <Day
                  key={gd.dayIndex}
                  day={gd.dayOfMonth}
                  month={gd.month}
                  year={gd.year}
                  selected={gd.selected}
                  inRange={gd.inRange}
                  leftCrop={gd.leftCrop}
                  rightCrop={gd.rightCrop}
                  onPressDate={onPressDate}
                  isToday={gd.isToday}
                  selectColor={selectColor}
                  primaryColor={primaryColor}
                  disabled={gd.disabled}
                  textColorOnPrimary={textColorOnPrimary}
                />
              ),
            )}
        </Container>
      ))}
    </Container>
  );
};

export default memo(Month);
