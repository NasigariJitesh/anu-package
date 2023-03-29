/* eslint-disable no-secrets/no-secrets */
import { Container, Switch } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [state, setState] = useState(true);
  console.log(state);
  return (
    <Container sx={{ backgroundColor: 'red', height: 250, width: 250, margin: 10, padding: 10 }}>
      <Switch value={state} onChange={() => setState((previous) => !previous)} />
    </Container>
  );
}
