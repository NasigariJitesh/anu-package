import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React, { memo, useCallback, useRef } from 'react';
import { GestureResponderEvent, PanResponder, StyleSheet, View } from 'react-native';

import { useDisplayModeContext } from '../../context';
import { AnalogClockProps, clockTypes, hourTypes } from '../../types';
import {
  getAnalogClockStyles,
  getAngle,
  getHours,
  getHourType,
  getHourTypeFromOffset,
  getMinutes,
  returnTrue,
  useLatest,
} from '../../utils';
import AnalogClockHours from './analog-clock-hours';
import AnalogClockMinutes from './analog-clock-minutes';
import AnimatedClockSwitcher from './animated-clock-switcher';

/**
 * @param props
 */
const AnalogClock = (props: AnalogClockProps) => {
  const { hours, minutes, focused, is24Hour, onChange, circleSize } = props;

  const { mode } = useDisplayModeContext();
  // used to make pointer shorter if hours are selected and above 12
  const shortPointer = hours >= 12 && is24Hour;
  const clockReference = useRef<View | null>(null);

  const hoursReference = useLatest(hours);
  const onChangeReference = useLatest(onChange);
  const minutesReference = useLatest(minutes);
  const focusedReference = useLatest(focused);
  const is24HourReference = useLatest(is24Hour);
  const modeReference = useLatest(mode);
  const theme = useTheme();
  const styles = getAnalogClockStyles(theme, circleSize);

  const onPointerMove = useCallback(
    (event: GestureResponderEvent, final: boolean) => {
      const x = event.nativeEvent.locationX;
      const y = event.nativeEvent.locationY;
      const angle = getAngle(x, y, circleSize);

      if (focusedReference.current === clockTypes.hours) {
        const hours24 = is24HourReference.current;
        const previousHourType = getHourType(hoursReference.current);
        let pickedHours = getHours(angle, previousHourType);

        const hours12AndPm = !hours24 && modeReference.current === 'PM';

        const hourTypeFromOffset = getHourTypeFromOffset(x, y, circleSize);
        const hours24AndPM = hours24 && hourTypeFromOffset === hourTypes.pm;

        // Avoiding the "24h"
        // Should be 12h for 12 hours and PM mode

        if (hours12AndPm || hours24AndPM) {
          pickedHours += 12;
        }
        if ((modeReference.current === 'AM' || hours24) && pickedHours === 12) {
          pickedHours = 0;
        }

        if (!hours24 && modeReference.current === 'AM' && pickedHours === 12) {
          pickedHours = 0;
        }

        if (pickedHours === 24) {
          pickedHours = 12;
        }

        if (hoursReference.current !== pickedHours || final) {
          onChangeReference.current({
            hours: pickedHours,
            minutes: minutesReference.current,
            focused: final ? clockTypes.minutes : undefined,
          });
        }
      } else if (focusedReference.current === clockTypes.minutes) {
        const pickedMinutes = getMinutes(angle);
        if (minutesReference.current !== pickedMinutes) {
          onChangeReference.current({
            hours: hoursReference.current,
            minutes: pickedMinutes,
          });
        }
      }
    },
    [focusedReference, is24HourReference, hoursReference, onChangeReference, minutesReference, modeReference],
  );

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderGrant: (event) => onPointerMove(event, false),
      onPanResponderMove: (event) => onPointerMove(event, false),
      onPanResponderRelease: (event) => onPointerMove(event, true),
      onStartShouldSetPanResponder: returnTrue,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: returnTrue,
      onMoveShouldSetPanResponderCapture: returnTrue,
      onPanResponderTerminationRequest: returnTrue,
      onShouldBlockNativeResponder: returnTrue,
    }),
  ).current;

  const dynamicSize = focused === clockTypes.hours && shortPointer ? circleSize / 8 : 0;

  const pointerNumber = focused === clockTypes.hours ? hours : minutes;

  const degreesPerNumber = focused === clockTypes.hours ? 30 : 6;

  return (
    <Container
      disableGutters
      ref={clockReference}
      {...panResponder.panHandlers}
      style={styles.clock}
      // @ts-ignore -> https://github.com/necolas/react-native-web/issues/506
      cursor={'pointer'}
    >
      <Container
        disableGutters
        style={[
          styles.line,
          {
            transform: [
              { rotate: -90 + pointerNumber * degreesPerNumber + 'deg' },
              {
                translateX:
                  circleSize / 4 -
                  (focused === clockTypes.hours && pointerNumber >= 0 && pointerNumber < 13 ? 0 : 4) +
                  (focused === clockTypes.minutes ? 4 : 0) -
                  dynamicSize / 2,
              },
            ],
            width: circleSize / 2 - 4 - dynamicSize,
          },
        ]}
        pointerEvents='none'
      >
        <Container disableGutters style={styles.endPoint} />
      </Container>
      <Container disableGutters style={[StyleSheet.absoluteFill, styles.center]} pointerEvents='none'>
        <Container disableGutters style={styles.middlePoint} />
      </Container>
      <AnimatedClockSwitcher
        focused={focused}
        hours={<AnalogClockHours circleSize={circleSize} is24Hour={is24Hour} hours={hours} />}
        minutes={<AnalogClockMinutes circleSize={circleSize} minutes={minutes} />}
      />
    </Container>
  );
};

export default memo(AnalogClock);
