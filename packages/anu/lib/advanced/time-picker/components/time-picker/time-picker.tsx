import { Container } from 'anu/lib';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { useDisplayModeContext } from '../../context';
import { inputTypes, OnChangeFunction, TimePickerProps } from '../../types';
import { circleSize, getTimePickerStyles, toHourInputFormat, toHourOutputFormat } from '../../utils';
import AnalogClock from '../analog-clock';
import TimeInputs from '../time-input';

/**
 *
 * @param props
 */
const TimePicker = (props: TimePickerProps) => {
  const { hours, minutes, onFocusInput, focused, inputType, onChange, locale, use24HourClock, inputStyle, horizontal } =
    props;

  const { setMode } = useDisplayModeContext();

  const dimensions = useWindowDimensions();
  const isLandscape = horizontal ?? dimensions.width > dimensions.height;

  const styles = getTimePickerStyles();

  // method to check whether we have 24 hours in clock or 12
  const is24Hour = useMemo(() => {
    if (use24HourClock !== undefined) {
      return use24HourClock;
    }

    const formatter = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    const formatted = formatter.format(new Date(Date.UTC(2020, 1, 1, 23)));

    return formatted.includes('23');
  }, [locale, use24HourClock]);

  // Initialize display Mode according the hours value
  useEffect(() => {
    if (hours >= 12) {
      setMode('PM');
    } else {
      setMode('AM');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInnerChange = useCallback<OnChangeFunction>(
    (params) => {
      params.hours = toHourOutputFormat(params.hours, hours, is24Hour);
      onChange(params);
    },
    [onChange, hours, is24Hour],
  );

  return (
    <Container
      disableGutters
      style={
        isLandscape
          ? [
              styles.rootLandscape,
              {
                width: 24 * 3 + 96 * 2 + (inputType === inputTypes.keyboard ? (is24Hour ? 0 : 64) : circleSize + 52),
              },
            ]
          : styles.rootPortrait
      }
    >
      <TimeInputs
        inputType={inputType}
        hours={hours}
        minutes={minutes}
        is24Hour={is24Hour}
        onChange={onChange}
        onFocusInput={onFocusInput}
        focused={focused}
        inputStyle={inputStyle}
        horizontal={isLandscape}
      />
      {inputType === inputTypes.picker ? (
        <>
          {isLandscape ? <Container disableGutters style={styles.separator} /> : null}
          <Container disableGutters style={styles.clockContainer}>
            <AnalogClock
              hours={toHourInputFormat(hours, is24Hour)}
              minutes={minutes}
              focused={focused}
              is24Hour={is24Hour}
              onChange={onInnerChange}
            />
          </Container>
        </>
      ) : null}
    </Container>
  );
};

export default memo(TimePicker);
