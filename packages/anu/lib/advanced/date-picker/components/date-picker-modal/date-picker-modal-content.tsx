import React, { memo, useCallback, useEffect, useState } from 'react';

import {
  CalendarDate,
  CalendarDates,
  DatePickerModalContentMultiProps,
  DatePickerModalContentProps,
  DatePickerModalContentRangeProps,
  DatePickerModalContentSingleProps,
  LocalState,
} from '../../types';
import Calendar, { CalendarEdit } from '../calendar';
import AnimatedCrossView from './animated-cross-view';
import DatePickerModalContentHeader from './date-picker-modal-content-header';
import DatePickerModalHeader from './date-picker-modal-header';
import DatePickerModalHeaderBackground from './date-picker-modal-header-background';

/**
 *
 * @param props
 */
export const DatePickerModalContent = (props: DatePickerModalContentProps) => {
  const {
    mode,
    onChange,
    onConfirm,
    onDismiss,
    disableSafeTop,
    disableWeekDays,
    locale,
    validRange,
    dateMode,
    startYear,
    endYear,
    saveLabel,
    saveLabelDisabled,
    uppercase,
    closeIcon,
    headerSeparator,
    emptyLabel,
    label,
    moreLabel,
    startLabel,
    endLabel,
    editIcon,
    calendarIcon,
    allowEditing,
    inputEnabled,
  } = props;
  const anyProps = props;

  // use local state to add only onConfirm state changes
  const [state, setState] = useState<LocalState>({
    date: anyProps.date,
    startDate: anyProps.startDate,
    endDate: anyProps.endDate,
    dates: anyProps.dates,
  });

  // update local state if changed from outside or if modal is opened
  useEffect(() => {
    setState({
      date: anyProps.date,
      startDate: anyProps.startDate,
      endDate: anyProps.endDate,
      dates: anyProps.dates,
    });
  }, [anyProps.date, anyProps.startDate, anyProps.endDate, anyProps.dates]);

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onInnerChange = useCallback(
    (
      params: { startDate: CalendarDate; endDate: CalendarDate } & { date: CalendarDate } & {
        dates: CalendarDates;
        datePressed: Date;
        change: 'added' | 'removed';
      },
    ) => {
      if (onChange) onChange(params);
      setState((previous) => ({ ...previous, ...params }));
    },
    [onChange, setState],
  );

  const onInnerConfirm = useCallback(() => {
    switch (mode) {
      case 'single': {
        (onConfirm as DatePickerModalContentSingleProps['onConfirm'])({
          date: state.date,
        });

        break;
      }
      case 'range': {
        (onConfirm as DatePickerModalContentRangeProps['onConfirm'])({
          startDate: state.startDate,
          endDate: state.endDate,
        });

        break;
      }
      case 'multiple': {
        (onConfirm as DatePickerModalContentMultiProps['onConfirm'])({
          dates: state.dates || [],
        });

        break;
      }
      // No default
    }
  }, [state, mode, onConfirm]);

  const onToggleCollapse = useCallback(() => {
    setCollapsed((previous) => !previous);
  }, [setCollapsed]);

  return (
    <>
      <DatePickerModalHeaderBackground>
        <DatePickerModalHeader
          locale={locale}
          onSave={onInnerConfirm}
          onDismiss={onDismiss}
          saveLabel={saveLabel}
          saveLabelDisabled={saveLabelDisabled ?? false}
          uppercase={uppercase ?? true}
          disableSafeTop={disableSafeTop}
          closeIcon={closeIcon}
        />
        <DatePickerModalContentHeader
          state={state}
          mode={mode}
          collapsed={collapsed}
          onToggle={onToggleCollapse}
          headerSeparator={headerSeparator}
          emptyLabel={emptyLabel}
          label={label}
          moreLabel={moreLabel}
          startLabel={startLabel}
          endLabel={endLabel}
          uppercase={uppercase ?? true}
          locale={locale}
          editIcon={editIcon}
          calendarIcon={calendarIcon}
          allowEditing={allowEditing ?? true}
        />
      </DatePickerModalHeaderBackground>
      <AnimatedCrossView
        collapsed={collapsed}
        calendar={
          <Calendar
            locale={locale}
            mode={mode}
            startDate={state.startDate}
            endDate={state.endDate}
            date={state.date}
            //@ts-expect-error the onChange param type will be as expected for each of date picker types
            onChange={onInnerChange}
            disableWeekDays={disableWeekDays}
            dates={state.dates}
            validRange={validRange}
            dateMode={dateMode}
            startYear={startYear}
            endYear={endYear}
          />
        }
        calendarEdit={
          <CalendarEdit
            mode={mode}
            state={state}
            label={label}
            startLabel={startLabel}
            endLabel={endLabel}
            collapsed={collapsed}
            //@ts-expect-error the onChange param type will be as expected for each of date picker types
            onChange={onInnerChange}
            validRange={validRange}
            locale={locale}
            inputEnabled={inputEnabled}
          />
        }
      />
    </>
  );
};

export default memo(DatePickerModalContent);
