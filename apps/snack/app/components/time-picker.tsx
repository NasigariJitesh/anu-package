/* eslint-disable react-native/no-inline-styles */
import { Button, Container, TimePickerModal, Typography } from 'anu/lib';
import React, { useState } from 'react';

const TimePickerScreen = () => {
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();

  const [visible1, setVisible1] = useState(false);
  const [minutes1, setMinutes1] = useState<number>();
  const [hours1, setHours1] = useState<number>();

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Time Picker </Typography.Title>

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
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Time Picker - 24 Hr</Typography.Title>

        <Button.Outlined onPress={() => setVisible1(true)} title='Select time' />
        <TimePickerModal
          visible={visible1}
          hours={hours1}
          minutes={minutes1}
          onConfirm={(hoursAndMinutes: { hours: number; minutes: number }) => {
            setHours1(hoursAndMinutes.hours);
            setMinutes1(hoursAndMinutes.minutes);
            setVisible1(false);
          }}
          onDismiss={() => {
            setVisible1(false);
          }}
          use24HourClock
        />
      </Container>
    </Container>
  );
};

export default TimePickerScreen;
