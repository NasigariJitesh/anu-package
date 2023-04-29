/* eslint-disable react-native/no-inline-styles */
import { Container } from 'anu/lib/primitives';
import React, { memo, useState } from 'react';
import { useCallback } from 'react';

import { useLatest } from '../../hooks';
import { CalendarDate, CalendarDates, CalendarProps, MultiChange, RangeChange, SingleChange } from '../../types';
import { areDatesOnSameDay, dateToUnix, getEndOfDay, getInitialIndex } from '../../utils';
import Month from '../month';
import Swiper from '../swiper';
import CalendarHeader from './calendar-header';
import YearPicker from './year-picker';

/**
 *
 * @param props
 */
const Calendar = (props: CalendarProps) => {
  const {
    locale,
    mode,
    onChange,
    startDate,
    endDate,
    date,
    disableWeekDays,
    startYear,
    endYear,
    dates,
    validRange,
    dateMode,
  } = props;

  const scrollMode = mode === 'range' || mode === 'multiple' ? 'vertical' : 'horizontal';

  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [selectingYear, setSelectingYear] = useState<boolean>(false);

  const onPressYear = useCallback(
    (year: number) => {
      setSelectedYear(year);
      setSelectingYear((previous) => !previous);
    },
    [setSelectingYear],
  );

  // prevent re-rendering all months when something changed we only need the
  // latest version of the props and we don't want the useCallback to change
  const startDateReference = useLatest<CalendarDate>(startDate);
  const endDateReference = useLatest<CalendarDate>(endDate);
  const onChangeReference = useLatest<RangeChange | SingleChange | MultiChange>(onChange);
  const datesReference = useLatest<CalendarDates>(dates);

  const onPressDate = useCallback(
    (pressedDate: Date) => {
      switch (mode) {
        case 'single': {
          (onChangeReference.current as SingleChange)({
            date: dateMode === 'start' ? pressedDate : getEndOfDay(pressedDate),
          });

          break;
        }
        case 'range': {
          const currentStartDate = startDateReference.current;
          const currentEndDat = endDateReference.current;
          let isStart = true;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (currentStartDate && !currentEndDat && dateToUnix(pressedDate) >= dateToUnix(currentStartDate!)) {
            isStart = false;
          }
          (onChangeReference.current as RangeChange)({
            startDate: isStart ? pressedDate : currentStartDate,
            endDate: isStart ? undefined : getEndOfDay(pressedDate),
          });

          break;
        }
        case 'multiple': {
          datesReference.current = datesReference.current || [];
          const exists = datesReference.current.some((currentEndDat) => areDatesOnSameDay(currentEndDat, pressedDate));

          const newDates = exists
            ? datesReference.current.filter((currentEndDat) => !areDatesOnSameDay(currentEndDat, pressedDate))
            : [...datesReference.current, pressedDate];

          newDates.sort((a, b) => a.getTime() - b.getTime());
          (onChangeReference.current as MultiChange)({
            dates: newDates,
            datePressed: pressedDate,
            change: exists ? 'removed' : 'added',
          });

          break;
        }
      }
    },
    [mode, dateMode, onChangeReference, startDateReference, endDateReference, datesReference],
  );

  const firstDate = startDate || date || dates?.[0];

  return (
    <Container disableGutters style={{ flex: 1 }}>
      <Swiper
        initialIndex={getInitialIndex(firstDate)}
        selectedYear={selectedYear}
        scrollMode={scrollMode}
        renderItem={({ index }) => (
          <Month
            locale={locale}
            mode={mode}
            key={index}
            validRange={validRange}
            index={index}
            startDate={startDate}
            endDate={endDate}
            date={date}
            dates={dates}
            onPressYear={onPressYear}
            selectingYear={selectingYear}
            onPressDate={onPressDate}
            scrollMode={scrollMode}
            disableWeekDays={disableWeekDays}
          />
        )}
        renderHeader={({ onPrev, onNext }) => (
          <CalendarHeader
            locale={locale}
            onPrev={onPrev}
            onNext={onNext}
            scrollMode={scrollMode}
            disableWeekDays={disableWeekDays}
          />
        )}
      />
      {scrollMode === 'horizontal' ? (
        <YearPicker
          selectedYear={selectedYear}
          selectingYear={selectingYear}
          onPressYear={onPressYear}
          startYear={startYear || 1900}
          endYear={endYear || 2200}
        />
      ) : null}
    </Container>
  );
};

export default memo(Calendar);
