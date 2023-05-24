/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Button, Container, DatePickerInput, DatePickerModal } from 'anu/lib';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DatePickerScreen = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  const [startDate, setStartDate] = useState<Date | undefined>();

  const [endDate, setEndDate] = useState<Date | undefined>();
  const [dates, setDates] = useState<Date[]>([]);

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10, height: 100 }}>
        <SafeAreaProvider>
          <DatePickerInput label='Birth date' value={inputDate} onChange={(date) => setInputDate(date)} />
        </SafeAreaProvider>
      </Container>
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
      <Button.Filled title='Pick Multiple Date' onPress={() => setVisible1(true)} />

      <SafeAreaProvider>
        <DatePickerModal
          dates={dates}
          allowEditing
          visible={visible1}
          onDismiss={() => {
            setVisible1(false);
          }}
          mode='multiple'
          onConfirm={(params) => {
            setDates(params.dates);
            setVisible1(false);
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
};

export default DatePickerScreen;
