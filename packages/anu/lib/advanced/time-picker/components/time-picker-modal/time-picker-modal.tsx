import { useTheme } from 'anu/config';
import { Button, Container, IconButton, Typography } from 'anu/lib';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Animated, KeyboardAvoidingView, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import {
  clockTypes,
  inputTypes,
  PossibleClockTypes,
  PossibleInputTypes,
  reverseInputTypes,
  TimePickerModalProps,
} from '../../types';
import { getHoursNumber, getMinutesNumber, getTimeInputTypeIcon, getTimePickerModalStyles } from '../../utils';
import TimePicker from '../time-picker';
import { defaultProps } from './default';

const supportedOrientations: (
  | 'portrait'
  | 'portrait-upside-down'
  | 'landscape'
  | 'landscape-left'
  | 'landscape-right'
)[] = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];

/**
 *
 * @param props
 */
export const TimePickerModal = (props: TimePickerModalProps) => {
  const finalProps = { ...defaultProps, ...props };
  const {
    visible,
    onDismiss,
    onConfirm,
    hours,
    minutes,
    label,
    cancelLabel,
    confirmLabel,
    animationType,
    locale,
    keyboardIcon,
    clockIcon,
    use24HourClock,
    inputStyle,
    horizontal,
  } = finalProps;

  let labelText = label;

  const [inputType, setInputType] = useState<PossibleInputTypes>(inputTypes.picker);
  const [focused, setFocused] = useState<PossibleClockTypes>(clockTypes.hours);
  const [localHours, setLocalHours] = useState<number>(getHoursNumber(hours));
  const [localMinutes, setLocalMinutes] = useState<number>(getMinutesNumber(minutes));

  const theme = useTheme();
  const styles = getTimePickerModalStyles(theme);

  if (inputType === inputTypes.keyboard && !label) {
    labelText = 'Enter time';
  }

  useEffect(() => {
    setLocalHours(getHoursNumber(hours));
  }, [setLocalHours, hours]);

  useEffect(() => {
    setLocalMinutes(getMinutesNumber(minutes));
  }, [setLocalMinutes, minutes]);

  const onFocusInput = useCallback((type: PossibleClockTypes) => setFocused(type), []);
  const onChange = useCallback(
    (params: { focused?: PossibleClockTypes | undefined; hours: number; minutes: number }) => {
      if (params.focused) {
        setFocused(params.focused);
      }

      setLocalHours(params.hours);
      setLocalMinutes(params.minutes);
    },
    [setFocused, setLocalHours, setLocalMinutes],
  );

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
      presentationStyle='overFullScreen'
      supportedOrientations={supportedOrientations}
      statusBarTranslucent={true}
    >
      <>
        <TouchableWithoutFeedback onPress={onDismiss}>
          <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalBackground]} />
        </TouchableWithoutFeedback>
        <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalRoot]} pointerEvents='box-none'>
          <KeyboardAvoidingView style={styles.keyboardView} behavior={'padding'}>
            <Animated.View style={styles.modalContent}>
              <Container disableGutters style={styles.labelContainer}>
                <Typography.Body style={styles.label}>{labelText}</Typography.Body>
              </Container>
              <Container disableGutters style={styles.timePickerContainer}>
                <TimePicker
                  locale={locale}
                  inputType={inputType}
                  use24HourClock={use24HourClock}
                  inputStyle={inputStyle}
                  focused={focused}
                  hours={localHours}
                  minutes={localMinutes}
                  onChange={onChange}
                  onFocusInput={onFocusInput}
                  horizontal={horizontal}
                />
              </Container>
              <Container disableGutters style={styles.bottom}>
                <IconButton
                  icon={{
                    name: getTimeInputTypeIcon(inputType, {
                      keyboard: keyboardIcon ?? '',
                      picker: clockIcon ?? '',
                    }),
                    props: { size: 24 },
                  }}
                  onPress={() => setInputType(reverseInputTypes[inputType])}
                  containerStyle={styles.inputTypeToggle}
                  type='standard'
                  accessibilityLabel='toggle keyboard'
                />
                <Container disableGutters style={styles.fill} />
                <Button.Text onPress={onDismiss} title={cancelLabel ?? ''} />
                <Button.Text
                  onPress={() => onConfirm({ hours: localHours, minutes: localMinutes })}
                  title={confirmLabel ?? ''}
                />
              </Container>
            </Animated.View>
          </KeyboardAvoidingView>
        </Container>
      </>
    </Modal>
  );
};

export default memo(TimePickerModal);
