/* eslint-disable react-native/no-inline-styles */
import { DatePickerModal, TouchableRipple } from 'anu/lib';
import Container from 'anu/lib/primitives/layout/components/container';
import Typography from 'anu/lib/primitives/typography/components';
import { useState } from 'react';

const HomeScreen = () => {
  const [text1, setText1] = useState(false);
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputDate1, setInputDate1] = useState<Date | undefined>();

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, paddingTop: 10 }}>
      <DatePickerModal
        startDate={inputDate}
        allowEditing={true}
        endDate={inputDate1}
        visible={text1}
        onDismiss={() => {
          setText1(false);
        }}
        mode='range'
        locale='en'
        onConfirm={(params: { startDate?: Date; endDate?: Date }) => {
          setInputDate(params.startDate);
          setInputDate1(params.endDate);
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
