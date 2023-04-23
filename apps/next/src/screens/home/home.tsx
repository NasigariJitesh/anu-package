/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config/dripsy/theme';
import { Button, CalendarDate, DatePickerInput, DatePickerModal, Icon, Image, TouchableRipple } from 'anu/lib';
import { BottomSheetReferenceProps } from 'anu/lib/primitives/bottom-sheet/types';
import Checkbox from 'anu/lib/primitives/checkbox/components/checkbox';
import Container from 'anu/lib/primitives/layout/components/container';
import Typography from 'anu/lib/primitives/typography/components';
import { Text, View } from 'dripsy';
import { useCallback, useRef, useState } from 'react';

const HomeScreen = () => {
  const [text, setText] = useState(false);
  const [inputDate3, setInputDate3] = useState<Date[]>([]);
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputDate1, setInputDate1] = useState<Date | undefined>();

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
};

export default HomeScreen;
