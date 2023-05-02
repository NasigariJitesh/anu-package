/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { DatePickerModal, TextField, TouchableRipple } from 'anu/lib';
import Container from 'anu/lib/primitives/layout/components/container';
import Typography from 'anu/lib/primitives/typography/components';
import { useState } from 'react';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState(false);
  const [inputDate3] = useState<Date[]>([]);
  const [inputDate] = useState<Date | undefined>();
  const [inputDate1] = useState<Date | undefined>();

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, paddingTop: 10 }}>
      {/* <DatePickerInput
        locale='en'
        label='Birthdate'
        value={inputDate}
        onChange={(d) => setInputDate(d)}
        inputMode='start'
        autoComplete='birthdate-full'
        withModal={true}
      /> */}

      <TextField value={text} onChangeText={setText} containerStyle={{ width: 250 }} />

      <DatePickerModal
        dates={inputDate3}
        startDate={inputDate}
        allowEditing={true}
        endDate={inputDate1}
        visible={text1}
        onDismiss={() => {
          setText1(false);
        }}
        mode='single'
        locale='en'
        onConfirm={() => {
          console.log();
        }}
      />

      <TouchableRipple
        onPress={() => {
          setText1(true);
        }}
      >
        <Container align='center' justify='center' sx={{ height: 200, width: 200 }}>
          <Typography.Body>Press anywhere</Typography.Body>
        </Container>
      </TouchableRipple>
    </Container>
  );
};

export default HomeScreen;
