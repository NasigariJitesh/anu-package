import { Container } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';

/**
 *
 */
export default function Example() {
  return (
    <Container sx={{ backgroundColor: 'red', height: 250, width: 250, margin: 10, padding: 10 }}>
      <Avatar variant='circle' size='large'>
        NJ
      </Avatar>
    </Container>
  );
}
