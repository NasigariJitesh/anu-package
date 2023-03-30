/* eslint-disable no-secrets/no-secrets */
import { Container, Switch } from 'anu/lib';

/**
 *
 */
export default function Example() {
  return (
    <Container sx={{ backgroundColor: 'pink', height: 250, width: 250, margin: 10, padding: 10 }}>
      <Switch value />
    </Container>
  );
}
