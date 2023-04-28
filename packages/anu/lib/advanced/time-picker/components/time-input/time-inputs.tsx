import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import React, { useCallback, useRef } from 'react';
import { TextInput as TextInputNative } from 'react-native';

import { clockTypes, TimeInputsProps } from '../../types';
import { getTimeInputsStyles, toHourInputFormat, toHourOutputFormat, useLatest } from '../../utils';
import AmPmSwitcher from './am-pm-switcher';
import TimeInput from './time-input';

/**
 *
 * @param props
 */
const TimeInputs = (props: TimeInputsProps) => {
  const { hours, minutes, onFocusInput, focused, inputType, onChange, is24Hour, inputStyle, horizontal } = props;

  const startInput = useRef<TextInputNative | null>(null);
  const endInput = useRef<TextInputNative | null>(null);

  const theme = useTheme();
  const styles = getTimeInputsStyles(theme, inputType);

  const onSubmitStartInput = useCallback(() => {
    if (endInput.current) {
      endInput.current.focus();
    }
  }, [endInput]);

  const onSubmitEndInput = useCallback(() => {
    // TODO: close modal and persist time
  }, []);

  const minutesReference = useLatest(minutes);
  const onChangeHours = useCallback(
    (newHours: number) => {
      onChange({
        hours: newHours,
        minutes: minutesReference.current,
        focused: clockTypes.hours,
      });
    },
    [onChange, minutesReference],
  );

  return (
    <Container
      disableGutters
      style={[
        styles.inputRootContainer,
        horizontal && inputType === 'picker' ? styles.inputRootContainerLandscape : {},
      ]}
    >
      <Container disableGutters style={styles.inputContainer}>
        <Container disableGutters style={styles.column}>
          <TimeInput
            ref={startInput}
            inputStyle={inputStyle}
            placeholder={'00'}
            value={toHourInputFormat(hours, is24Hour)}
            clockType={clockTypes.hours}
            pressed={focused === clockTypes.hours}
            onPress={onFocusInput}
            inputType={inputType}
            selectionColor={theme.colors.$primary}
            returnKeyType={'next'}
            onSubmitEditing={onSubmitStartInput}
            blurOnSubmit={false}
            onChanged={(newHoursFromInput) => {
              let newHours = toHourOutputFormat(newHoursFromInput, hours, is24Hour);
              if (newHoursFromInput > 24) {
                newHours = 24;
              }
              onChange({
                hours: newHours,
                minutes,
              });
            }}
          />
          {inputType === 'keyboard' ? <Typography.Body size='small'>Hour</Typography.Body> : null}
        </Container>
        <Container disableGutters style={styles.hoursAndMinutesSeparator}>
          <Container disableGutters style={styles.spaceDot} />
          <Container disableGutters style={styles.dot} />
          <Container disableGutters style={styles.betweenDot} />
          <Container disableGutters style={styles.dot} />
          <Container disableGutters style={styles.spaceDot} />
        </Container>

        <Container disableGutters style={styles.column}>
          <TimeInput
            ref={endInput}
            inputStyle={inputStyle}
            placeholder={'00'}
            value={minutes}
            clockType={clockTypes.minutes}
            pressed={focused === clockTypes.minutes}
            onPress={onFocusInput}
            inputType={inputType}
            selectionColor={theme.colors.$primary}
            onSubmitEditing={onSubmitEndInput}
            onChanged={(newMinutesFromInput) => {
              let newMinutes = newMinutesFromInput;
              if (newMinutesFromInput > 59) {
                newMinutes = 59;
              }
              onChange({
                hours,
                minutes: newMinutes,
              });
            }}
          />
          {inputType === 'keyboard' ? <Typography.Body size='small'>Minute</Typography.Body> : null}
        </Container>
      </Container>
      {!is24Hour && (
        <>
          <Container disableGutters style={styles.spaceBetweenInputsAndSwitcher} />

          <AmPmSwitcher hours={hours} onChange={onChangeHours} inputType={inputType} horizontal={horizontal} />
        </>
      )}
    </Container>
  );
};

export default React.memo(TimeInputs);
