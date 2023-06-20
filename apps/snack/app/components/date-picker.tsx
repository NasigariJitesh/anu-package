/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Button, Container, DatePickerModal, Typography } from 'anu/lib';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DatePickerScreen = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [dates, setDates] = useState<Date[]>([]);

  const [startDate, setStartDate] = useState<Date | undefined>();

  const [endDate, setEndDate] = useState<Date | undefined>();

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10, height: 75 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Date Picker - Single</Typography.Title>
        <Button.Filled title='Pick Date' onPress={() => setVisible(true)} />

        <SafeAreaProvider>
          <DatePickerModal
            date={date}
            allowEditing
            visible={visible}
            onDismiss={() => {
              setVisible(false);
            }}
            mode='single'
            onConfirm={(params) => {
              setDate(params.date);
              setVisible(false);
            }}
          />
        </SafeAreaProvider>
      </Container>
      <Container style={{ padding: 10, height: 75 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Date Picker - Multiple</Typography.Title>
        <Button.Filled title='Pick Dates' onPress={() => setVisible1(true)} />

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
      <Container style={{ padding: 10, height: 75 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Date Picker - Range</Typography.Title>
        <Button.Filled title='Pick Date Range' onPress={() => setVisible2(true)} />

        <SafeAreaProvider>
          <DatePickerModal
            startDate={startDate}
            endDate={endDate}
            allowEditing
            visible={visible2}
            onDismiss={() => {
              setVisible2(false);
            }}
            mode='range'
            onConfirm={(params) => {
              setStartDate(params.startDate);
              setEndDate(params.endDate);
              setVisible2(false);
            }}
          />
        </SafeAreaProvider>
      </Container>
    </Container>
  );
};

export default DatePickerScreen;
