import { useCallback, useMemo, useRef, useState } from 'react';

import type { UseDateInputProps, ValidRangeType } from '../types';
import { areDatesOnSameDay, dateToUnix, getEndOfDay, getStartOfDay, isDateWithinOptionalRange } from '../utils';

/**
 *
 * @param value
 */
export function useLatest<T>(value: T) {
  const reference = useRef(value);
  reference.current = value;
  return reference;
}

/**
 *
 * @param validRange
 */
export function useRangeChecker(validRange: ValidRangeType | undefined) {
  const validStart = validRange?.startDate;
  const validEnd = validRange?.endDate;
  const startUnix = validStart instanceof Date ? dateToUnix(getStartOfDay(validStart)) : undefined;

  const endUnix = validEnd instanceof Date ? dateToUnix(getEndOfDay(validEnd)) : undefined;

  const validDisabledDatesReference = useLatest(validRange?.disabledDates);

  const isWithinValidRange = useCallback(
    (day: Date) => {
      return isDateWithinOptionalRange(day, {
        startUnix: startUnix,
        endUnix: endUnix,
      });
    },
    [startUnix, endUnix],
  );

  const isDisabled = useCallback(
    (day: Date) => {
      return validDisabledDatesReference.current
        ? validDisabledDatesReference.current.some((disabledDate) => areDatesOnSameDay(disabledDate, day))
        : false;
    },
    [validDisabledDatesReference],
  );

  return { isDisabled, isWithinValidRange, validStart, validEnd };
}

/**
 *
 * @param root0
 * @param root0.locale
 */
export function useInputFormatter({ locale }: { locale: string | undefined }) {
  return useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }, [locale]);
}

/**
 *
 * @param root0
 * @param root0.formatter
 * @param root0.locale
 */
export function useInputFormat({ formatter, locale }: { formatter: Intl.DateTimeFormat; locale: string | undefined }) {
  return useMemo(() => {
    // TODO: something cleaner and more universal?
    const inputDate = formatter.format(new Date(2020, 10 - 1, 1));
    return inputDate
      .replace('2020', locale === 'pt' ? 'AAAA' : 'YYYY')
      .replace('10', 'MM')
      .replace('01', 'DD');
  }, [formatter, locale]);
}

/**
 *
 * @param props
 */
export function useDateInput(props: UseDateInputProps) {
  const { locale, value, validRange, inputMode, onChange, onValidationError } = props;
  const { isDisabled, isWithinValidRange, validStart, validEnd } = useRangeChecker(validRange);
  const [error, setError] = useState<null | string>(null);
  const formatter = useInputFormatter({ locale });
  const inputFormat = useInputFormat({ formatter, locale });
  const formattedValue = value ? formatter.format(value) : '';
  const onChangeText = (date: string) => {
    const dayIndex = inputFormat.indexOf('DD');
    const monthIndex = inputFormat.indexOf('MM');
    const yearIndex = locale === 'pt' ? inputFormat.indexOf('AAAA') : inputFormat.indexOf('YYYY');

    const day = Number(date.slice(dayIndex, dayIndex + 2));
    const year = Number(date.slice(yearIndex, yearIndex + 4));
    const month = Number(date.slice(monthIndex, monthIndex + 2));

    if (Number.isNaN(day) || Number.isNaN(year) || Number.isNaN(month)) {
      const inputError = 'notAccordingToDateFormat';
      setError(inputError);
      if (onValidationError) onValidationError(inputError);
      return;
    }

    const finalDate = inputMode === 'end' ? new Date(year, month - 1, day, 23, 59, 59) : new Date(year, month - 1, day);

    if (isDisabled(finalDate)) {
      const inputError = 'dateIsDisabled';
      setError(inputError);
      if (onValidationError) onValidationError(inputError);
      return;
    }
    if (!isWithinValidRange(finalDate)) {
      const errors =
        validStart && validEnd
          ? [`mustBeBetween ${(formatter.format(validStart), formatter.format(validEnd))}`]
          : [
              validStart ? `mustBeHigherThan ${(formatter.format(validStart), formatter.format(validEnd))}` : '',
              validEnd ? `mustBeLowerThan ${(formatter.format(validStart), formatter.format(validEnd))}` : '',
            ];
      const inputError = errors.filter(Boolean).join(' ');
      setError(errors.filter(Boolean).join(' '));
      if (onValidationError) onValidationError(inputError);
      return;
    }

    setError(null);
    if (onValidationError) onValidationError(null);
    if (inputMode === 'end') {
      onChange(finalDate);
    } else {
      onChange(finalDate);
    }
  };
  return {
    onChange,
    error,
    formattedValue,
    onChangeText,
    inputFormat,
  };
}
