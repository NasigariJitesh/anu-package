/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Button, Container, DatePickerModal } from 'anu/lib';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DatePickerScreen = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();

  const [endDate, setEndDate] = useState<Date | undefined>();

  const [visible, setVisible] = useState(false);
  return (
    <Container style={{ flex: 1 }}>
      <Button.Filled title='Pick Date' onPress={() => setVisible(true)} />

      <SafeAreaProvider>
        <DatePickerModal
          startDate={startDate}
          endDate={endDate}
          allowEditing
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}
          mode='range'
          onConfirm={(params) => {
            setStartDate(params.startDate);
            setEndDate(params.endDate);
            setVisible(false);
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
};

export default DatePickerScreen;
