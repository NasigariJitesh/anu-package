/* eslint-disable no-secrets/no-secrets */
import { Button, Container, OTPInput, TextField, TextFieldReferenceProps } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';
import { useRef } from 'react';

/**
 *
 */
export default function Example() {
  const inputReference = useRef<TextFieldReferenceProps | null>(null);

  return (
    <Container sx={{ height: 250, width: 250, margin: 10, padding: 10 }}>
      <Avatar
        variant='circle'
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/EF4_damage_in_Rolling_Fork%2C_Mississippi_along_Mulberry_Street.jpg',
        }}
      />
      <TextField ref={inputReference} textContentType='oneTimeCode' />
      <Button.Text onPress={() => inputReference.current?.focus()} title='focus' />
      <Button.Text onPress={() => inputReference.current?.blur()} title='blur' />

      <OTPInput numberOfDigits={4} value='' />
    </Container>
  );
}
