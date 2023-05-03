import React, { memo } from 'react';

import { DisplayModeProvider } from '../../context';
import { TimePickerProps } from '../../types';
import TimePickerComponent from './time-picker';

const TimePicker = (props: TimePickerProps) => {
  return (
    <DisplayModeProvider>
      <TimePickerComponent {...props} />
    </DisplayModeProvider>
  );
};

export default memo(TimePicker);
