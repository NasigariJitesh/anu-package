import { hourTypes } from '../types';
import {
  defaultCircleSize,
  getHours,
  getHourType,
  getHourTypeFromOffset,
  getMinutes,
  getTimeInputTypeIcon,
  snap,
  toHourInputFormat,
  toHourOutputFormat,
} from '../utils';

const defaultInputTypeIcons = {
  keyboard: 'keyboard-outline',
  picker: 'clock-outline',
};

describe('timeUtils', () => {
  it('should return "am" hour type, for hour between 0 and 12', () => {
    for (let index = 0; index < 13; index++) {
      expect(getHourType(index)).toMatch(hourTypes.am);
    }
  });

  it('should return "pm" hour type, for hour between 12 and 24', () => {
    for (let index = 13; index < 25; index++) {
      expect(getHourType(index)).toMatch(hourTypes.pm);
    }
  });

  it('should return undefined hour type, for invalid hour', () => {
    expect(getHourType(26)).toBeUndefined();
  });

  it('should return keyboard icon for picker input', () => {
    expect(getTimeInputTypeIcon('picker', defaultInputTypeIcons)).toMatch('keyboard-outline');
  });

  it('should return clock icon for keyboard input', () => {
    expect(getTimeInputTypeIcon('keyboard', defaultInputTypeIcons)).toMatch('clock-outline');
  });

  it('should snap angle to given step', () => {
    expect(snap(22, 10)).toBe(20);
  });

  it('should return "am" hour type from offset', () => {
    expect(getHourTypeFromOffset(20, 75, defaultCircleSize)).toBe(hourTypes.am);
  });

  it('should return "pm" hour type from offset', () => {
    expect(getHourTypeFromOffset(135, 45, defaultCircleSize)).toBe(hourTypes.pm);
  });

  it('should return correct minutes from hand angle', () => {
    expect(getMinutes(3)).toBe(14);
  });

  it('should return correct hours from hand angle for "am" hour type', () => {
    expect(getHours(4.5, hourTypes.am)).toBe(6);
  });

  it('should return correct hours from hand angle for "pm" hour type', () => {
    expect(getHours(4.5, hourTypes.pm)).toBe(6);
  });

  it('should return correct hour input format when not is24Hour', () => {
    expect(toHourInputFormat(13, false)).toBe(1);
  });

  it('should return correct hour input format when is24Hour', () => {
    expect(toHourInputFormat(13, true)).toBe(13);
  });

  it('should return correct hour output format when not is24Hour', () => {
    expect(toHourOutputFormat(11, 13, false)).toBe(23);
  });

  it('should return correct hour output format when is24Hour', () => {
    expect(toHourOutputFormat(8, 6, true)).toBe(8);
  });
});
