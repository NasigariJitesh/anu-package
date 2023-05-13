/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Button, Chip, Container, Tab, Tabs, TimePickerModal, Typography } from 'anu/lib';
import { PasswordInput } from 'anu/lib';
import React, { useCallback } from 'react';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [visible1, setVisible1] = useState(false);

  const onDismiss = useCallback(() => {
    setVisible(false);
    setVisible1(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setVisible(false);
      setVisible1(false);
      console.log({ hours, minutes });
    },
    [setVisible],
  );

  return (
    <Container flexDirection='column' justify='space-between' sx={{ flex: 1, height: '100vh', paddingTop: 1 }}>
      <PasswordInput error value={text} onChangeText={setText} />

      <Chip
        value='Action'
        type='input'
        style={{
          width: 300,
          borderRadius: 10,
          marginTop: 10,
          paddingVertical: 50,
          borderColor: 'pink',
          borderWidth: 5,
        }}
      />
      <Tabs type='primary' maxWidth={500}>
        <Tab name='One' icon={{ name: 'favorite' }}>
          <Typography.Body>
            This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
            is very long snack, This is very long snack , This is very long snack, This is very long snack , This is
            very long snack, This is very long snack
          </Typography.Body>
        </Tab>
        <Tab name='Two'>
          <Container sx={{ backgroundColor: 'yellow' }}>
            <Typography.Body>
              This is Two very long snack, This is very long snack , This is very long snack, This is very long snack ,
              This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
              is very long snack, This is very long snack
            </Typography.Body>
          </Container>
        </Tab>
        <Tab name='One' icon={{ name: 'favorite' }}>
          <Typography.Body>
            This is very long snack, This is very long snack , This is very long snack, This is very long snack , This
            is very long snack, This is very long snack , This is very long snack, This is very long snack , This is
            very long snack, This is very long snack
          </Typography.Body>
        </Tab>
      </Tabs>
      <Container flexDirection='row'>
        <Button.Text onPress={() => setVisible(true)} title='pick time' />
        <Button.Text onPress={() => setVisible1(true)} title='pick time 24hrs' />
      </Container>
      <TimePickerModal visible={visible} onDismiss={onDismiss} onConfirm={onConfirm} hours={12} minutes={14} />
      <TimePickerModal
        visible={visible1}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
        use24HourClock
      />
    </Container>
  );
}
