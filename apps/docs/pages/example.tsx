/* eslint-disable no-secrets/no-secrets */
import { Container, OTPInput } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';

/**
 *
 */
export default function Example() {
  return (
    <Container sx={{ height: 250, width: 250, margin: 10, padding: 10 }}>
      <OTPInput numberOfDigits={6} value='123456788' variant='filled' onSubmit={(a) => console.log(a)} />
    </Container>
  );
}
