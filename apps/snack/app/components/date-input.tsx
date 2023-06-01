/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, DatePickerInput } from 'anu/lib';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DatePickerScreen = () => {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10, height: 100 }}>
        <SafeAreaProvider>
          <DatePickerInput label='Birth date' value={inputDate} onChange={(date) => setInputDate(date)} />
        </SafeAreaProvider>
      </Container>
    </Container>
  );
};

export default DatePickerScreen;
