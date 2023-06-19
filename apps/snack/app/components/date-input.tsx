/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, DatePickerInput, Typography } from 'anu/lib';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DatePickerScreen = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputDate1, setInputDate1] = useState<Date | undefined>();

  return (
    <Container style={{ flex: 1, paddingHorizontal: 15 }}>
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Date Input</Typography.Title>
      <Container disableGutters style={{ height: 100 }}>
        <SafeAreaProvider>
          <DatePickerInput label='Birth date' value={inputDate} onChange={(date) => setInputDate(date)} />
        </SafeAreaProvider>
      </Container>
      <Typography.Title style={{ marginTop: 10, marginBottom: 5 }}>Date Input Filled</Typography.Title>
      <Container disableGutters style={{ height: 100 }}>
        <SafeAreaProvider>
          <DatePickerInput
            label='Birth date'
            variant='filled'
            value={inputDate1}
            onChange={(date) => setInputDate1(date)}
          />
        </SafeAreaProvider>
      </Container>
    </Container>
  );
};

export default DatePickerScreen;
