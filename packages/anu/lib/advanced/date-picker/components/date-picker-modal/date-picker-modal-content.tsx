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
import DatePickerModalButtons from './date-picker-modal-buttons';
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
    onToggle,
    collapsed,
    disableSafeTop,
    disableWeekDays,
    locale = 'en',
    validRange,
    dateMode,
    startYear,
    endYear,
    okLabel,
    okLabelDisabled,
    cancelLabel,
    cancelLabelDisabled,
    uppercase,
    saveLabel,
    saveLabelDisabled,
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

  const finalProps = props;

  // use local state to add only onConfirm state changes
  const [state, setState] = useState<LocalState>({
    date: finalProps.date,
    startDate: finalProps.startDate,
    endDate: finalProps.endDate,
    dates: finalProps.dates,
  });

  // update local state if changed from outside or if modal is opened
  useEffect(() => {
    setState({
      date: finalProps.date,
      startDate: finalProps.startDate,
      endDate: finalProps.endDate,
      dates: finalProps.dates,
    });
  }, [finalProps.date, finalProps.startDate, finalProps.endDate, finalProps.dates]);

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

  return (
    <>
      <DatePickerModalHeaderBackground>
        {mode === 'single' ? null : (
          <DatePickerModalHeader
            locale={locale}
            onSave={onInnerConfirm}
            onDismiss={onDismiss}
            saveLabel={saveLabel}
            saveLabelDisabled={saveLabelDisabled ?? false}
            uppercase={uppercase ?? false}
            disableSafeTop={disableSafeTop}
            closeIcon={closeIcon}
          />
        )}

        <DatePickerModalContentHeader
          state={state}
          mode={mode}
          collapsed={collapsed}
          onToggle={onToggle}
          headerSeparator={headerSeparator}
          emptyLabel={emptyLabel}
          label={label}
          moreLabel={moreLabel}
          startLabel={startLabel}
          endLabel={endLabel}
          uppercase={uppercase ?? false}
          locale={locale}
          editIcon={editIcon}
          calendarIcon={calendarIcon}
          allowEditing={allowEditing ?? true}
        />
      </DatePickerModalHeaderBackground>

      <AnimatedCrossView
        collapsed={collapsed ?? true}
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
            collapsed={collapsed ?? true}
            //@ts-expect-error the onChange param type will be as expected for each of date picker types
            onChange={onInnerChange}
            validRange={validRange}
            locale={locale}
            inputEnabled={inputEnabled}
          />
        }
      />

      <DatePickerModalButtons
        locale={locale}
        onSave={onInnerConfirm}
        onDismiss={onDismiss}
        cancelLabel={cancelLabel}
        cancelLabelDisabled={cancelLabelDisabled ?? false}
        okLabel={okLabel}
        okLabelDisabled={okLabelDisabled ?? false}
        uppercase={uppercase ?? false}
      />
    </>
  );
};

export default memo(DatePickerModalContent);
