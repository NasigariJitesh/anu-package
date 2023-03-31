/* eslint-disable no-secrets/no-secrets */
import { Container, OTPInput } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';

/**
 *
 */
export default function Example() {
  return (
    <Container sx={{ height: 250, width: 250, margin: 10, padding: 10 }}>
      <Avatar
        variant='circle'
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/EF4_damage_in_Rolling_Fork%2C_Mississippi_along_Mulberry_Street.jpg',
        }}
      />
      <OTPInput
        numberOfDigits={10}
        value=''
        type='alphabetic'
        onValueChange={(text) => console.log(text)}
        error
        errorMessage={['Please enter correct code']}
      />
    </Container>
  );
}
