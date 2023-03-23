import { Container } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';
import Image from 'public/img/logo_light_theme.svg';

/**
 *
 */
export default function Example() {
  return (
    <Container sx={{ backgroundColor: 'red', height: 250, width: 250, margin: 10, padding: 10 }}>
      <Avatar source={{ uri: Image.src }} size='large' />
    </Container>
  );
}
