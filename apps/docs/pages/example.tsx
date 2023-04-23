/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import { CalendarDate, Container, DatePickerInput, DatePickerModal, TouchableRipple, Typography } from 'anu/lib';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [text, setText] = useState(false);
  const [inputDate3, setInputDate3] = useState<Date[]>([]);
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputDate1, setInputDate1] = useState<Date | undefined>();

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      <DatePickerInput
        locale='en'
        label='Birthdate'
        value={inputDate}
        onChange={(d) => setInputDate(d)}
        inputMode='start'
        autoComplete='birthdate-full'
        withModal={true}
      />

      <DatePickerModal
        dates={inputDate3}
        startDate={inputDate}
        allowEditing
        endDate={inputDate1}
        visible={text}
        onDismiss={() => {
          setText(false);
        }}
        mode='range'
        locale='en'
        onConfirm={(params: { startDate: CalendarDate; endDate: CalendarDate }) => {
          console.log(params);
        }}
      />

      <TouchableRipple
        onPress={() => {
          setText(true);
        }}
      >
        <Container align='center' justify='center' sx={{ height: 200, width: 200 }}>
          <Typography.Body>Press anywhere</Typography.Body>
        </Container>
      </TouchableRipple>
    </Container>
  );
}
