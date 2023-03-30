/* eslint-disable no-secrets/no-secrets */
import { Container, Switch } from 'anu/lib';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [value, setValue] = useState(false);

  return (
    <Container sx={{ backgroundColor: 'pink', height: 250, width: 250, margin: 10, padding: 10 }}>
      <Switch value={value} onValueChange={() => setValue((previousState) => !previousState)} />
    </Container>
  );
}
