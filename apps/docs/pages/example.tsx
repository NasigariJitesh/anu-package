/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import {
  Button,
  CalendarDate,
  Container,
  DatePickerInput,
  DatePickerModal,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 *
 */
export default function Example() {
  const [range, setRange] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputDateRangeStart, setInputDateRangeStart] = useState<Date | undefined>();
  const [inputDateRangeEnd, setInputDateRangeEnd] = useState<Date | undefined>();
  const [inputDates, setInputDates] = useState<Date[]>([]);

  return (
    <Container flexDirection='column' sx={{ flex: 1, height: '100vh', paddingTop: 10 }}>
      <Button.Filled title='Pick Date Range' onPress={() => setRange(true)} containerStyle={{ margin: 10 }} />
      <Button.Filled title='Pick Multiple Dates' onPress={() => setMultiple(true)} containerStyle={{ margin: 10 }} />
      <SafeAreaProvider>
        <DatePickerInput
          locale='en'
          label='Birthdate'
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode='start'
          autoComplete='birthdate-full'
          withModal={true}
        />
      </SafeAreaProvider>

      <SafeAreaProvider>
        <DatePickerInput
          locale='en'
          label='Birthdate'
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode='start'
          autoComplete='birthdate-full'
          withModal={false}
        />
      </SafeAreaProvider>

      <SafeAreaProvider>
        <DatePickerModal
          startDate={inputDateRangeStart}
          allowEditing
          endDate={inputDateRangeEnd}
          visible={range}
          onDismiss={() => {
            setRange(false);
          }}
          mode='range'
          locale='en'
          onConfirm={(params: { startDate: CalendarDate; endDate: CalendarDate }) => {
            setInputDateRangeStart(params.startDate);
            setInputDateRangeEnd(params.endDate);
          }}
        />

        <DatePickerModal
          dates={inputDates}
          allowEditing
          visible={multiple}
          onDismiss={() => {
            setMultiple(false);
          }}
          mode='multiple'
          locale='en'
          onConfirm={(params: { dates: Date[] }) => {
            setInputDates(params.dates);
          }}
        />
      </SafeAreaProvider>
    </Container>
  );
}
