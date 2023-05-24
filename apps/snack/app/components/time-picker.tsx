/* eslint-disable react-native/no-inline-styles */
import { Button, Container, TimePickerModal } from 'anu/lib';
import React, { useState } from 'react';

const TimePickerScreen = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();

  return (
    <Container disableGutters style={{ flex: 1 }}>
      <Button.Outlined onPress={() => setVisible(true)} title='Select time' />
      <TimePickerModal
        visible={visible}
        hours={hours}
        minutes={minutes}
        onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
          setHours(hoursAndMinutes.hours);
          setMinutes(hoursAndMinutes.minutes);
          setVisible(false);
        }}
        onDismiss={() => {
          setVisible(false);
        }}
      />
    </Container>
  );
};

export default TimePickerScreen;
