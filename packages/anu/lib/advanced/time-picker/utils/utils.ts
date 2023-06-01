import { useRef } from 'react';

import {
  hourTypes,
  InputIconMap,
  inputTypeIcons,
  PossibleHourTypes,
  PossibleInputTypes,
  reverseInputTypes,
} from '../types';

export const defaultCircleSize = 256;
const outerHeight = 36;
const DEGREE_30 = Math.PI / 6;
const DEGREE_6 = Math.PI / 30;
const DEGREE_360 = Math.PI * 2;
const DEGREE_90 = Math.PI / 2;

export const getTimeInputTypeIcon = (inputType: PossibleInputTypes, inputIconMap?: InputIconMap) => {
  return inputIconMap?.[reverseInputTypes[inputType]] || inputTypeIcons?.[reverseInputTypes[inputType]];
};

/**
 *
 * @param hours
 */
export const getHourType = (hours: number): PossibleHourTypes | undefined => {
  if (hours >= 0 && hours <= 12) {
    return hourTypes.am;
  }
  if (hours > 12 && hours <= 24) {
    return hourTypes.pm;
  }
  return undefined;
};

/**
 * Snap an angle to a given step. E.g. if angle = 22° and step = 10°, round down to 20°
 *
 * @param angle
 * @param step
 */
export const snap = (angle: number, step: number) => {
  let a = angle;
  while (a < 0) a += DEGREE_360;
  const diff = a % step;

  if (diff <= step / 2) {
    return angle - diff;
  }

  return angle - diff + step;
};

// detect am / pm based on offset
/**
 *
 * @param left
 * @param top
 * @param size
 */
export const getHourTypeFromOffset = (left: number, top: number, size: number): PossibleHourTypes => {
  const w = size / 2;
  const x = w - left;
  const y = size / 2 - top;

  const distance = Math.sqrt(x * x + y * y);
  const maxPm = w - outerHeight;

  return distance > maxPm ? hourTypes.am : hourTypes.pm;
};

// Calculate the minute from the hand angle
/**
 *
 * @param handAngle
 */
export const getMinutes = (handAngle: number) => {
  handAngle = snap(handAngle, DEGREE_6);

  let minute = Number.parseInt((((handAngle - DEGREE_90) % DEGREE_360) / DEGREE_6).toFixed(0), 10);
  while (minute < 0) minute += 60;
  while (minute >= 60) minute -= 60;

  return minute;
};

// Calculate the hour from the hand angle
/**
 *
 * @param handAngle
 * @param hourType
 */
export const getHours = (handAngle: number, hourType: PossibleHourTypes | undefined) => {
  handAngle = snap(handAngle, DEGREE_30);

  let hour = Number.parseInt((((handAngle - DEGREE_90) % DEGREE_360) / DEGREE_30).toFixed(0), 10);
  if (hour < 0) hour += 12;
  if (hour >= 12) hour -= 12;

  if (hourType === hourTypes.am) {
    if (hour <= 0) {
      hour += 12;
    } else if (hour >= 12) {
      hour -= 12;
    }
  }
  if (hourType === hourTypes.pm) {
    if (hour <= 0) {
      hour += 12;
    } else if (hour > 12) {
      hour -= 12;
    }
  }

  return hour;
};

/**
 * Get the angle of the left/top co-ordinate from the center of the width.height box
 *
 * @param left
 * @param top
 * @param size
 */
export const getAngle = (left: number, top: number, size: number) => {
  const x = size / 2 - left;
  const y = size / 2 - top;

  // tan O = y / x
  let angle: number;

  if (x) angle = Math.atan(y / x);
  else if (y < 0) angle = -DEGREE_90;
  else angle = DEGREE_90;

  if (x < 0) {
    // reflect along vertical axis
    angle = -angle + 2 * (DEGREE_90 + angle);
  }

  return angle;
};

/**
 *
 * @param hours
 * @param is24Hour
 */
export const toHourInputFormat = (hours: number, is24Hour: boolean): number => {
  if (is24Hour) {
    if (hours === 24) {
      return 0;
    }
    return hours;
  }
  if (hours > 12) {
    return hours - 12;
  }
  if (hours === 0) {
    return hours + 12;
  }
  return hours;
};

/**
 *
 * @param newHours
 * @param previousHours
 * @param is24Hour
 */
export const toHourOutputFormat = (newHours: number, previousHours: number, is24Hour: boolean): number => {
  if (is24Hour) {
    return newHours;
  }
  if (previousHours === 0 && newHours !== 0) {
    return newHours - 12 < 0 ? newHours : newHours - 12;
  }
  if (previousHours >= 12 && newHours < 12) {
    return newHours + 12;
  }
  return newHours;
};

/**
 *
 * @param value
 */
export function useLatest<T>(value: T) {
  const reference = useRef(value);
  reference.current = value;
  return reference;
}
